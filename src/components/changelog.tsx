import type { Log } from "../types/hsr";

const v4_5: Log = {
    version: "4.5",
    title: "To Roll the Stars in Astropolis",
    changes: [
        `Added all character up to v4.5`,
        `Added all lightcones up to v4.5`
    ]
}

const v4_5_2: Log = {
    version: "4.5 / 2",
    title: "To Roll the Stars in Astropolis / 2",
    changes: [
        `Added Pearl Beta Character`,
        `Added Colors for Tomorrow Beta Light Cone`
    ]
}

const v4_6: Log = {
    version: "4.6",
    title: "Dance With the Beast Before Moonrise",
    changes: [
        `Added Pearl Character`,
        `Added Colors for Tomorrow Light Cone`,
        `Added Aeon ★ Aha | [Nihilux] Beta Character`,
        `Added Upon the First Echo of "Aha" Beta Light Cone`
    ]
}

export const changes: Log[] = [v4_6, v4_5_2, v4_5];