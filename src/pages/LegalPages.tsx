import { useEffect } from "react";
import type { ReactNode } from "react";
import { LegalLinks } from "../components/LegalLinks";
import { LEGAL } from "../config/legal";
import { navigate } from "../utils/navigation";

// Mientras haya valores de ejemplo (empiezan por "["), se avisa en pantalla.
const incomplete = Object.values(LEGAL).some(
  (value) => typeof value === "string" && value.startsWith("[")
);

function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} - ${LEGAL.siteName}`;
  }, [title]);

  return (
    <div className="account-page legal-page">
      <article className="legal-card">
        <button
          type="button"
          className="legal-back-button"
          onClick={() => navigate("/")}
        >
          ← Back to the wiki
        </button>

        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {LEGAL.lastUpdated}</p>

        {incomplete && (
          <div className="account-error" role="alert">
            Before publishing this page, fill in your details in{" "}
            <code>src/config/legal.ts</code>.
          </div>
        )}

        {children}

        <LegalLinks className="legal-links--footer" />
      </article>
    </div>
  );
}

function Owner() {
  return (
    <>
      <strong>{LEGAL.ownerName}</strong>
      {LEGAL.ownerAddress ? `, ${LEGAL.ownerAddress}` : ""} (contact:{" "}
      <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>)
    </>
  );
}

// ---------------------------------------------------------------------------
// Privacy Policy
// ---------------------------------------------------------------------------

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This policy explains what personal data {LEGAL.siteName} (
        {LEGAL.siteUrl}) collects, why, and what your rights are. It follows
        the EU General Data Protection Regulation (GDPR) and, in Spain, the
        LOPDGDD.
      </p>

      <h2>1. Who is responsible</h2>
      <p>
        The data controller is <Owner />.
      </p>

      <h2>2. What data we collect</h2>
      <ul>
        <li>
          <strong>Account data</strong>: username, email address, role and
          creation date. Your password is never stored: only a salted hash of
          it.
        </li>
        <li>
          <strong>Profile picture</strong>, only if you upload one.
        </li>
        <li>
          <strong>Session cookie</strong> that keeps you logged in, and two
          preference cookies that remember your last selected character and
          light cone (see the <a href="/cookies">Cookies page</a>).
        </li>
        <li>
          <strong>Technical data</strong>: your IP address and request
          information are processed by Cloudflare to deliver and protect the
          site. To limit repeated failed logins, we also keep for a short time
          a record that links your IP address to the username or email that
          was used.
        </li>
      </ul>
      <p>
        We do not ask for payment data, we do not use advertising and we do not
        use analytics or tracking cookies.
      </p>

      <h2>3. Why we use it and on what legal basis</h2>
      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Legal basis (GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create and manage your account, let you log in and set a profile picture</td>
              <td>Performance of the service you request (art. 6.1.b)</td>
            </tr>
            <tr>
              <td>Keep the site secure: limit failed logins, prevent abuse</td>
              <td>Legitimate interest (art. 6.1.f)</td>
            </tr>
            <tr>
              <td>Remember your last selection on the wiki</td>
              <td>Your own choice when you use the feature (functional cookies)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. How long we keep it</h2>
      <ul>
        <li>
          Account data and profile picture: until you delete your account
          (Profile → Delete account) or ask us to.
        </li>
        <li>Login sessions: up to 30 days, or until you log out.</li>
        <li>
          Failed-login records: kept only briefly and removed during routine
          cleanup.
        </li>
        <li>
          Server logs kept by Cloudflare follow Cloudflare&apos;s own
          retention policy.
        </li>
      </ul>

      <h2>5. Who we share data with</h2>
      <p>
        We do not sell your data. The site runs on Cloudflare (hosting, database,
        file storage, CDN and security), which acts as our processor. Cloudflare
        may process data outside the European Economic Area under the safeguards
        it provides (such as standard contractual clauses or the EU–US Data
        Privacy Framework). We may disclose data if the law requires it.
      </p>

      <h2>6. Your rights</h2>
      <p>
        You can ask us for access, rectification, erasure, restriction,
        portability, or object to the processing, by writing to{" "}
        <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>. You
        can also delete your account yourself at any time from your profile.
        If you think we are not handling your data properly, you can complain
        to the Spanish Data Protection Agency (AEPD,{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          aepd.es
        </a>
        ) or to the data protection authority of your country.
      </p>

      <h2>7. Minimum age</h2>
      <p>
        You must be at least {LEGAL.minimumAge} years old to create an account.
        If you believe someone younger has registered, contact us and we will
        delete the account.
      </p>

      <h2>8. Security</h2>
      <p>
        Passwords are stored hashed, connections use HTTPS and the session
        cookie is not readable by scripts. No system is perfectly secure; if a
        breach affects your data, we will notify you and the authorities as
        required by law.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy. The date at the top shows the latest
        version.
      </p>
    </LegalLayout>
  );
}

// ---------------------------------------------------------------------------
// Cookies
// ---------------------------------------------------------------------------

export function CookiesPage() {
  return (
    <LegalLayout title="Cookies">
      <p>
        {LEGAL.siteName} only uses its own cookies, needed for the site to work
        or to remember a choice you make. We do not use advertising, analytics
        or third-party cookies.
      </p>

      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>session_id</code>
              </td>
              <td>Keeps you logged in. Not readable by scripts (HttpOnly).</td>
              <td>Up to 30 days, or until you log out</td>
              <td>Strictly necessary</td>
            </tr>
            <tr>
              <td>
                <code>selectedChar</code>
              </td>
              <td>Remembers the last character you selected.</td>
              <td>30 days</td>
              <td>Preference</td>
            </tr>
            <tr>
              <td>
                <code>selectedCone</code>
              </td>
              <td>Remembers the last light cone you selected.</td>
              <td>30 days</td>
              <td>Preference</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Because these cookies are necessary or only store a choice you made
        yourself, they do not require a consent banner. If we add analytics or
        advertising in the future, we will ask for your consent first and update
        this page.
      </p>

      <h2>How to remove them</h2>
      <p>
        You can delete cookies at any time from your browser settings. If you
        delete <code>session_id</code> you will be logged out.
      </p>
    </LegalLayout>
  );
}

// ---------------------------------------------------------------------------
// Terms of Use
// ---------------------------------------------------------------------------

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <p>
        By using {LEGAL.siteName} and creating an account you accept these
        terms.
      </p>

      <h2>1. What this site is</h2>
      <p>
        {LEGAL.siteName} is an unofficial, fan-made, non-commercial wiki about
        Honkai: Star Rail. It is not affiliated with, endorsed by or sponsored
        by HoYoverse. Honkai: Star Rail and its names, characters, images and
        other related material belong to their respective owners (HoYoverse /
        Cognosphere Pte. Ltd.). If you are a rights holder and want something
        removed, write to{" "}
        <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You must be at least {LEGAL.minimumAge} years old.</li>
        <li>Give a real email address and keep your password secret.</li>
        <li>
          You are responsible for what happens under your account. Tell us if
          you think it has been compromised.
        </li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>
        Do not try to break, overload or gain unauthorised access to the site or
        to other accounts. Profile pictures must not contain illegal, sexual,
        hateful or violent content, or content that infringes other people&apos;s
        rights or impersonates someone else. You keep the rights to what you
        upload, and you give us permission to store and display it on the site
        while your account exists.
      </p>

      <h2>4. Moderation</h2>
      <p>
        We may remove content, and suspend or delete accounts, that break these
        terms. You can delete your account yourself at any time from your
        profile.
      </p>

      <h2>5. No guarantees</h2>
      <p>
        The information on the wiki is provided as is. It is made by fans and
        can contain mistakes or be out of date, and the site may be unavailable
        or change at any time. To the extent the law allows, we are not liable
        for losses caused by using the site.
      </p>

      <h2>6. Changes and law</h2>
      <p>
        We may update these terms; the date at the top shows the latest version.
        They are governed by the law of {LEGAL.country}, without affecting any
        mandatory rights you have as a consumer.
      </p>

      <h2>7. Contact</h2>
      <p>
        <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
      </p>
    </LegalLayout>
  );
}

// ---------------------------------------------------------------------------
// Legal Notice (Aviso legal - LSSI-CE art. 10)
// ---------------------------------------------------------------------------

export function LegalNoticePage() {
  return (
    <LegalLayout title="Legal Notice">
      <h2>Site owner</h2>
      <p>
        This website ({LEGAL.siteUrl}) is operated by <Owner />.
      </p>

      <h2>Purpose</h2>
      <p>
        {LEGAL.siteName} is a non-commercial, fan-made information site about
        Honkai: Star Rail, with optional user accounts.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Honkai: Star Rail and its names, characters, images and related material
        are the property of their respective owners (HoYoverse / Cognosphere Pte.
        Ltd.) and are used here for informational, non-commercial purposes. This
        site is not official and is not affiliated with them. The original code
        and layout of this site belong to its owner, except where a license
        says otherwise.
      </p>

      <h2>Liability</h2>
      <p>
        We try to keep the information accurate, but we do not guarantee it. We
        are not responsible for the content of external websites we may link to.
      </p>

      <h2>Applicable law</h2>
      <p>
        This site is governed by the law of {LEGAL.country}. Related documents:{" "}
        <a href="/privacy">Privacy Policy</a>, <a href="/cookies">Cookies</a> and{" "}
        <a href="/terms">Terms of Use</a>.
      </p>
    </LegalLayout>
  );
}
