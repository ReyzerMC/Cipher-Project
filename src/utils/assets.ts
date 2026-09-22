// Central access to the images under public/assets.
//
// Every character folder follows the same layout:
//   assets/characters/<Character>/splash.webp        -> charSplash("Cipher")
//   assets/characters/<Character>/pfp.webp           -> charPfp("Cipher")
//   assets/characters/<Character>/<Icon>.webp        -> charIcon("Cipher", "BasicATK")
//   assets/characters/<Character>/eidolons/E<n>.webp -> charEidolon("Cipher", 1)
// Shared images:
//   assets/stats/<Stat>.webp       -> statIcon("SPD")
//   assets/lightcones/<Name>.webp  -> lightConeImg("InTheNight")
//   assets/paths/<Path>.webp       -> pathIcon(Paths.Nihility)

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const charSplash = (character: string) =>
    asset(`characters/${character}/splash.webp`);

export const charSplashTrailblazer = (element: string) =>
    asset(`characters/NICKNAME/splash${element}.webp`);

export const charPfpTrailblazer = (element: string) =>
    asset(`characters/NICKNAME/pfp${element}.webp`);

export const charPfp = (character: string) =>
    asset(`characters/${character}/pfp.webp`);

export const charIcon = (character: string, icon: string) =>
    asset(`characters/${character}/${icon}.webp`);

export const charEidolon = (character: string, n: number) =>
    asset(`characters/${character}/eidolons/e${n}.webp`);

export const statIcon = (stat: string) =>
    asset(`stats/${stat}.webp`);

export const lightConeImg = (name: string) =>
    asset(`lightcones/${name}.webp`);

export const pathIcon = (path: string) =>
    asset(`paths/${path}.webp`);
