import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import "./AvatarEditor.css";

interface AvatarEditorProps {
  onClose: () => void;
  onSaved: (avatarUrl: string) => void;
}

interface Area {
  width: number;
  height: number;
  x: number;
  y: number;
}

export function AvatarEditor({
  onClose,
  onSaved,
}: AvatarEditorProps) {
  const [image, setImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<Area | null>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedPixels: Area) => {
      setCroppedAreaPixels(croppedPixels);
    },
    []
  );

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image.");
      return;
    }

    // Maximum possible limit.
    // The server will apply the actual limit based on the user's role.
    if (file.size > 35 * 1024 * 1024) {
      setError("The image cannot be larger than 35 MB.");
      return;
    }

    setError("");
    setOriginalFile(file);

    const url = URL.createObjectURL(file);

    setImage(url);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
  };

  const createCroppedImage = async (): Promise<Blob> => {
    if (!image || !croppedAreaPixels) {
      throw new Error("No crop selected.");
    }

    const img = new Image();

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();

      img.onerror = () =>
        reject(
          new Error("Unable to load image.")
        );

      img.src = image;
    });

    const canvas = document.createElement("canvas");

    canvas.width = 512;
    canvas.height = 512;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error(
        "Unable to create canvas."
      );
    }

    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      512,
      512
    );

    return await new Promise<Blob>(
      (resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(
                new Error(
                  "Unable to create WebP image."
                )
              );
            }
          },
          "image/webp",
          0.8
        );
      }
    );
  };

  const handleSave = async () => {
    if (!image || !originalFile) {
      setError("Select an image first.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      let body: Blob;
      let contentType: string;

      /*
       * GIF:
       * Keep the original GIF so animation is preserved.
       */
      if (originalFile.type === "image/gif") {
        body = originalFile;
        contentType = "image/gif";
      }

      /*
       * Everything else:
       * Crop + resize to 512x512 + WebP 80%.
       */
      else {
        if (!croppedAreaPixels) {
          throw new Error(
            "No crop selected."
          );
        }

        body = await createCroppedImage();
        contentType = "image/webp";
      }

      const response = await fetch(
        "/api/profile/avatar",
        {
          method: "POST",

          headers: {
            "Content-Type": contentType,
          },

          credentials: "include",

          body,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Unable to upload avatar."
        );
      }

      onSaved(data.avatar_url);
      onClose();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to upload avatar."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="avatar-editor-overlay">
      <div className="avatar-editor-modal">

        <div className="avatar-editor-header">
          <h2>Change profile picture</h2>

          <button
            className="avatar-editor-close"
            onClick={onClose}
            disabled={saving}
          >
            ×
          </button>
        </div>

        {!image ? (
          <div className="avatar-editor-upload">

            <div className="avatar-upload-icon">
              🖼️
            </div>

            <h3>Choose an image</h3>

            <p>
              Select an image to use as
              your profile picture.
            </p>

            <label className="avatar-upload-button">
              Choose image

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(event) => {
                  const file =
                    event.target.files?.[0];

                  if (file) {
                    handleFile(file);
                  }
                }}
              />
            </label>

          </div>
        ) : (
          <>
            <div className="avatar-crop-container">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="avatar-zoom">
              <span>Zoom</span>

              <input
                type="range"
                min={1}
                max={3}
                step={0.01}
                value={zoom}
                onChange={(event) =>
                  setZoom(
                    Number(
                      event.target.value
                    )
                  )
                }
              />
            </div>

            <div className="avatar-editor-actions">

              <label className="avatar-secondary-button">
                Choose another

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(event) => {
                    const file =
                      event.target.files?.[0];

                    if (file) {
                      handleFile(file);
                    }
                  }}
                />
              </label>

              <button
                className="avatar-save-button"
                onClick={handleSave}
                disabled={saving}
              >
                {saving
                  ? "Uploading..."
                  : "Save"}
              </button>

            </div>
          </>
        )}

        {error && (
          <div className="avatar-editor-error">
            {error}
          </div>
        )}

      </div>
    </div>
  );
}