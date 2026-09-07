import type { Character } from '../../types/hsr';
import { Paths, Elements, Worlds } from "../item/ResourcesLists";
import { charSplash, charPfp, charIcon, statIcon } from '../../utils/assets';
import * as S from './scalingData';
import * as Eidolons from './eidolons/Eidolons';

export const scaleValue = (
    values: number[],
    index: number,
    suffix = "%"
) => {
    return `<b><u>${values[index]}${suffix}</u></b>`;
};

export const Characters: Character[] = [];

const March7th: Character = {
  name: "March 7th",
  path: Paths.Preservation,
  element: Elements.Ice,
  world: Worlds.AstralExpress, // TODO: March 7th
  image: charSplash("March"),
  pfp: charPfp("March"),
  eidolons: Eidolons.March7thEidolons,

  baseATK: 511,
  baseDEF: 573,
  baseHP: 1058,
  baseSPD: 101,
  aggro: 150,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Frigid Cold Arrow",
            type: "basic",
            level: "1/7",
            icon: charIcon("March", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.March7thScaling.attack, i)} of March 7th's ATK to one enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: The Power of Cuteness",
            type: "skill",
            level: "1/12",
            icon: charIcon("March", "Skill"),
            description: (i) => `
        Provides a single ally with a Shield that can absorb DMG equal to ${scaleValue(S.March7thScaling.skill.main, i)} of March 7th's DEF plus ${scaleValue(S.March7thScaling.skill.adjacent, i, "")} for ${scaleValue(S.March7thScaling.skill.adjacent2, i, "")} turn(s).\\nIf the ally's current HP percentage is ${scaleValue(S.March7thScaling.skill.adjacent3, i)} or higher, greatly increases the chance of enemies attacking that ally.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Glacial Cascade",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("March", "Ultimate"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.March7thScaling.ultimate.main, i)} of March 7th's ATK to all enemies. Hit enemies have a ${scaleValue(S.March7thScaling.ultimate.adjacent, i)} <u>base chance</u> to be Frozen for ${scaleValue(S.March7thScaling.ultimate.adjacent2, i, "")} turn(s).\\nWhile Frozen, enemies cannot take action and will receive Ice <u>Additional DMG</u> equal to ${scaleValue(S.March7thScaling.ultimate.adjacent3, i)} of March 7th's ATK at the beginning of each turn.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Girl Power",
            type: "talent",
            level: "1/12",
            icon: charIcon("March", "Talent"),
            description: (i) => `
        After a Shielded ally is attacked by an enemy, March 7th immediately <u>Counters</u>, dealing Ice DMG equal to ${scaleValue(S.March7thScaling.talent.main, i)} of her ATK. This effect can be triggered ${scaleValue(S.March7thScaling.talent.adjacent, i, "")} time(s) each turn.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Freezing Beauty",
            type: "technique",
            level: "1/1",
            icon: charIcon("March", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, there is a ${scaleValue(S.March7thScaling.technique.main, i)} <u>base chance</u> to Freeze a random enemy for ${scaleValue(S.March7thScaling.technique.adjacent, i, "")} turn(s).\\nWhile Frozen, the enemy cannot take action and will take Ice <u>Additional DMG</u> equal to ${scaleValue(S.March7thScaling.technique.adjacent2, i)} of March 7th's ATK at the beginning of each turn.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Ice Spell",
            type: "bonus",
            level: "1/1",
            icon: charIcon("March", "IceSpell"),
            description: (i) => `
        When using Ultimate, increases the <u>base chance</u> to Freeze enemies by ${scaleValue(S.March7thScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Purify",
            type: "bonus",
            level: "1/1",
            icon: charIcon("March", "Purify"),
            description: "When using Skill, dispels 1 <u>debuff</u> from one designated ally.",
        },
        b3: {
            id: "b3",
            name: "Reinforce",
            type: "bonus",
            level: "1/1",
            icon: charIcon("March", "Reinforce"),
            description: (i) => `
        The duration of the Shield generated from Skill is extended for ${scaleValue(S.March7thScaling.b3, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(March7th);

const DanHeng: Character = {
  name: "Dan Heng",
  path: Paths.Hunt,
  element: Elements.Wind,
  world: Worlds.AstralExpress, // TODO: Dan Heng
  image: charSplash("DanHeng"),
  pfp: charPfp("DanHeng"),
  eidolons: Eidolons.DanHengEidolons,

  baseATK: 546,
  baseDEF: 396,
  baseHP: 882,
  baseSPD: 110,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Cloudlancer Art: North Wind",
            type: "basic",
            level: "1/7",
            icon: charIcon("DanHeng", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.DanHengScaling.attack, i)} of Dan Heng's ATK to one enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Cloudlancer Art: Torrent",
            type: "skill",
            level: "1/12",
            icon: charIcon("DanHeng", "Skill"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.DanHengScaling.skill.main, i)} of Dan Heng's ATK to one designated enemy.\\nWhen DMG dealt by Skill triggers CRIT Hit, there is a ${scaleValue(S.DanHengScaling.skill.adjacent, i)} <u>base chance</u> to reduce the target's SPD by ${scaleValue(S.DanHengScaling.skill.adjacent2, i)}, lasting for ${scaleValue(S.DanHengScaling.skill.adjacent3, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Ethereal Dream",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("DanHeng", "Ultimate"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.DanHengScaling.ultimate.main, i)} of Dan Heng's ATK to one designated enemy target. If the attacked enemy is Slowed, the multiplier for the DMG dealt by Ultimate increases by ${scaleValue(S.DanHengScaling.ultimate.adjacent, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Superiority of Reach",
            type: "talent",
            level: "1/12",
            icon: charIcon("DanHeng", "Talent"),
            description: (i) => `
        When Dan Heng becomes the target of an ally's ability, his next attack's Wind <u>RES PEN</u> increases by ${scaleValue(S.DanHengScaling.talent.main, i)}. This effect can be triggered again after ${scaleValue(S.DanHengScaling.talent.adjacent, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Splitting Spearhead",
            type: "technique",
            level: "1/1",
            icon: charIcon("DanHeng", "Technique"),
            description: (i) => `
        After Dan Heng uses his Technique, his ATK increases by ${scaleValue(S.DanHengScaling.technique.main, i)} at the start of the next battle for ${scaleValue(S.DanHengScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "High Gale",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHeng", "HighGale"),
            description: (i) => `
        Basic ATK deals ${scaleValue(S.DanHengScaling.b1, i)} more DMG to Slowed enemies.
      `,
        },
        b2: {
            id: "b2",
            name: "Hidden Dragon",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHeng", "HiddenDragon"),
            description: (i) => `
        When current HP percentage is ${scaleValue(S.DanHengScaling.b2, i)} or lower, reduces the chance of being attacked by enemies.
      `,
        },
        b3: {
            id: "b3",
            name: "Faster Than Light",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHeng", "FasterThanLight"),
            description: (i) => `
        After launching an attack, there is a ${scaleValue(S.DanHengScaling.b3.main, i)} <u>fixed chance</u> to increase this unit's SPD by ${scaleValue(S.DanHengScaling.b3.adjacent, i)} for ${scaleValue(S.DanHengScaling.b3.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(DanHeng);

const Himeko: Character = {
  name: "Himeko",
  path: Paths.Erudition,
  element: Elements.Fire,
  world: Worlds.AstralExpress, // TODO: Himeko
  image: charSplash("Himeko"),
  pfp: charPfp("Himeko"),
  eidolons: Eidolons.HimekoEidolons,

  baseATK: 756,
  baseDEF: 436,
  baseHP: 1047,
  baseSPD: 96,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Sawblade Tuning",
            type: "basic",
            level: "1/7",
            icon: charIcon("Himeko", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HimekoScaling.attack, i)} of Himeko's ATK to one enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Molten Detonation",
            type: "skill",
            level: "1/12",
            icon: charIcon("Himeko", "Skill"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HimekoScaling.skill.main, i)} of Himeko's ATK to one designated enemy and Fire DMG equal to ${scaleValue(S.HimekoScaling.skill.adjacent, i)} of Himeko's ATK to enemies adjacent to it.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Heavenly Flare",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Himeko", "Ultimate"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HimekoScaling.ultimate.main, i)} of Himeko's ATK to all enemies. Himeko regenerates ${scaleValue(S.HimekoScaling.ultimate.adjacent, i, "")} extra Energy for each enemy defeated.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Victory Rush",
            type: "talent",
            level: "1/12",
            icon: charIcon("Himeko", "Talent"),
            description: (i) => `
        When an enemy target is inflicted with Weakness Break, Himeko gains 1 point of Charge (max ${scaleValue(S.HimekoScaling.talent.main, i, "")} points).\\nIf Himeko is fully Charged when an ally target performs an attack, Himeko immediately performs 1 <u>Follow-Up ATK</u> and deals Fire DMG equal to ${scaleValue(S.HimekoScaling.talent.adjacent, i)} of her ATK to all enemies, consuming all Charge points.\\nAt the start of the battle, Himeko gains 1 point of Charge.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Incomplete Combustion",
            type: "technique",
            level: "1/1",
            icon: charIcon("Himeko", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that lasts for ${scaleValue(S.HimekoScaling.technique.main, i, "")} second(s). After entering battle with enemies in the Special Dimension, there is a ${scaleValue(S.HimekoScaling.technique.adjacent, i)} <u>base chance</u> to increase Fire DMG taken by enemies by ${scaleValue(S.HimekoScaling.technique.adjacent2, i)} for ${scaleValue(S.HimekoScaling.technique.adjacent3, i, "")} turn(s). Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Benchmark",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Himeko", "Benchmark"),
            description: (i) => `
        When current HP percentage is ${scaleValue(S.HimekoScaling.b1.main, i)} or higher, CRIT Rate increases by ${scaleValue(S.HimekoScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Starfire",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Himeko", "Starfire"),
            description: (i) => `
        After using an attack, there is a ${scaleValue(S.HimekoScaling.b2.main, i)} <u>base chance</u> to inflict Burn on enemies, lasting for ${scaleValue(S.HimekoScaling.b2.adjacent, i, "")} turn(s).\\nWhen afflicted with Burn, enemies take Fire DoT equal to ${scaleValue(S.HimekoScaling.b2.adjacent2, i)} of Himeko's ATK at the start of each turn.
      `,
        },
        b3: {
            id: "b3",
            name: "Magma",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Himeko", "Magma"),
            description: (i) => `
        Skill deals ${scaleValue(S.HimekoScaling.b3, i)} more DMG to enemies currently afflicted with Burn.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>6.4%</u></b>",
            },
  },
};

Characters.push(Himeko);

const Welt: Character = {
  name: "Welt",
  path: Paths.Nihility,
  element: Elements.Imaginary,
  world: Worlds.AstralExpress, // TODO: Welt
  image: charSplash("Welt"),
  pfp: charPfp("Welt"),
  eidolons: Eidolons.WeltEidolons,

  baseATK: 620,
  baseDEF: 509,
  baseHP: 1125,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Gravity Suppression",
            type: "basic",
            level: "1/7",
            icon: charIcon("Welt", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.WeltScaling.attack, i)} of Welt's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Edge of the Void",
            type: "skill",
            level: "1/12",
            icon: charIcon("Welt", "Skill"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.WeltScaling.skill.main, i)} of Welt's ATK to one designated enemy and additionally deals 2 instances of DMG, with each time dealing Imaginary DMG equal to ${scaleValue(S.WeltScaling.skill.main, i)} of Welt's ATK to a random enemy. On hit, there is a ${scaleValue(S.WeltScaling.skill.adjacent, i)} <u>base chance</u> to reduce the enemy's SPD by ${scaleValue(S.WeltScaling.skill.adjacent2, i)} for ${scaleValue(S.WeltScaling.skill.adjacent3, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Synthetic Black Hole",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Welt", "Ultimate"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.WeltScaling.ultimate.main, i)} of Welt's ATK to all enemies, with a ${scaleValue(S.WeltScaling.ultimate.adjacent, i)} <u>base chance</u> for enemies hit by this ability to be Imprisoned for 1 turn.\\nImprisoned enemies have their <u>actions delayed</u> by ${scaleValue(S.WeltScaling.ultimate.adjacent2, i)} and SPD reduced by ${scaleValue(S.WeltScaling.ultimate.adjacent3, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Time Distortion",
            type: "talent",
            level: "1/12",
            icon: charIcon("Welt", "Talent"),
            description: (i) => `
        When hitting an enemy that is already Slowed, Welt deals Imaginary <u>Additional DMG</u> equal to ${scaleValue(S.WeltScaling.talent, i)} of his ATK to the enemy.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Gravitational Imprisonment",
            type: "technique",
            level: "1/1",
            icon: charIcon("Welt", "Technique"),
            description: (i) => `
        After using Welt's Technique, create a Special Dimension that lasts for ${scaleValue(S.WeltScaling.technique.main, i, "")} second(s). Enemies in this Special Dimension have their movement speed reduced by ${scaleValue(S.WeltScaling.technique.adjacent, i)}. After entering battle with enemies in the Special Dimension, there is a ${scaleValue(S.WeltScaling.technique.adjacent2, i)} <u>base chance</u> to Imprison the enemies for 1 turn.\\nImprisoned enemies have their <u>actions delayed</u> by ${scaleValue(S.WeltScaling.technique.adjacent3, i)} and SPD reduced by ${scaleValue(S.WeltScaling.technique.adjacent4, i)}. Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Punishment",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Welt", "Punishment"),
            description: (i) => `
        Deals ${scaleValue(S.WeltScaling.b1, i)} more DMG to enemies inflicted with Weakness Break.
      `,
        },
        b2: {
            id: "b2",
            name: "Retribution",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Welt", "Retribution"),
            description: (i) => `
        When using Ultimate, there is a ${scaleValue(S.WeltScaling.b2.main, i)} <u>base chance</u> to increase the DMG taken by the targets by ${scaleValue(S.WeltScaling.b2.adjacent, i)} for ${scaleValue(S.WeltScaling.b2.adjacent2, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Judgment",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Welt", "Judgment"),
            description: (i) => `
        Using Ultimate additionally regenerates ${scaleValue(S.WeltScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Welt);

const Kafka: Character = {
  name: "Kafka",
  path: Paths.Nihility,
  element: Elements.Lightning,
  world: Worlds.StellaronHunters, // TODO: Kafka
  image: charSplash("Kafka"),
  pfp: charPfp("Kafka"),
  eidolons: Eidolons.KafkaEidolons,

  baseATK: 679,
  baseDEF: 485,
  baseHP: 1086,
  baseSPD: 100,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Midnight Tumult",
            type: "basic",
            level: "1/7",
            icon: charIcon("Kafka", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.KafkaScaling.attack, i)} of Kafka's ATK to a one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Caressing Moonlight",
            type: "skill",
            level: "1/12",
            icon: charIcon("Kafka", "Skill"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.KafkaScaling.skill.main, i)} of Kafka's ATK to a target enemy and Lightning DMG equal to ${scaleValue(S.KafkaScaling.skill.adjacent, i)} of Kafka's ATK to enemies adjacent to it.\\nIf the target enemy is currently receiving DoT, all DoTs currently placed on that enemy immediately produce DMG equal to ${scaleValue(S.KafkaScaling.skill.adjacent2, i)} of their original DMG.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Twilight Trill",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Kafka", "Ultimate"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.KafkaScaling.ultimate.main, i)} of Kafka's ATK to all enemies, with a ${scaleValue(S.KafkaScaling.ultimate.adjacent, i)} <u>base chance</u> for enemies hit to become Shocked and immediately take DMG from their current Shock state, equal to ${scaleValue(S.KafkaScaling.ultimate.adjacent2, i)} of its original DMG. Shock lasts for ${scaleValue(S.KafkaScaling.ultimate.adjacent3, i, "")} turn(s).\\nWhile Shocked, enemies receive Lightning DoT equal to ${scaleValue(S.KafkaScaling.ultimate.adjacent4, i)} of Kafka's ATK at the beginning of each turn.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Gentle but Cruel",
            type: "talent",
            level: "1/12",
            icon: charIcon("Kafka", "Talent"),
            description: (i) => `
        After Kafka's teammate uses Basic ATK on an enemy target, Kafka immediately launches <u>Follow-Up ATK</u> and deals Lightning DMG equal to ${scaleValue(S.KafkaScaling.talent.main, i)} of her ATK to that target, with a ${scaleValue(S.KafkaScaling.talent.adjacent, i)} <u>base chance</u> to inflict Shock equivalent to that applied by her Ultimate to the attacked enemy target, lasting for ${scaleValue(S.KafkaScaling.talent.adjacent2, i, "")} turns. This effect can only be triggered 1 time per turn.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Mercy Is Not Forgiveness",
            type: "technique",
            level: "1/1",
            icon: charIcon("Kafka", "Technique"),
            description: (i) => `
        Immediately attacks all enemies within a set range. After entering battle, deals Lightning DMG equal to ${scaleValue(S.KafkaScaling.technique.main, i)} of Kafka's ATK to all enemies, with a ${scaleValue(S.KafkaScaling.technique.adjacent, i)} <u>base chance</u> to inflict Shock equivalent to that applied by her Ultimate on every enemy target for ${scaleValue(S.KafkaScaling.technique.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Thorns",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Kafka", "Thorns"),
            description: (i) => `
        The <u>base chance</u> for target enemies to be Shocked by the Ultimate, the Technique, and the Talent-triggered <u>Follow-Up ATK</u> increases by ${scaleValue(S.KafkaScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Torture",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Kafka", "Torture"),
            description: "When the Ultimate is used, enemy targets will now receive DMG immediately from all currently applied DoT sources instead of just receiving DMG immediately from the currently applied Shock state.",
        },
        b3: {
            id: "b3",
            name: "Plunder",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Kafka", "Plunder"),
            description: (i) => `
        If an enemy is defeated while Shocked, Kafka additionally regenerates ${scaleValue(S.KafkaScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Kafka);

const SilverWolf: Character = {
  name: "Silver Wolf",
  path: Paths.Nihility,
  element: Elements.Quantum,
  world: Worlds.StellaronHunters, // TODO: Silver Wolf
  image: charSplash("SilverWolf"),
  pfp: charPfp("SilverWolf"),
  eidolons: Eidolons.SilverWolfEidolons,

  baseATK: 640,
  baseDEF: 460,
  baseHP: 1047,
  baseSPD: 107,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: System Warning",
            type: "basic",
            level: "1/7",
            icon: charIcon("SilverWolf", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.SilverWolfScaling.attack, i)} of Silver Wolf's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Allow Changes?",
            type: "skill",
            level: "1/12",
            icon: charIcon("SilverWolf", "Skill"),
            description: (i) => `
        There is a ${scaleValue(S.SilverWolfScaling.skill.main, i)} <u>base chance</u> to add 1 Weakness of an on-field character's Type to the target enemy. This also reduces the enemy's DMG RES to that Weakness Type by ${scaleValue(S.SilverWolfScaling.skill.adjacent, i)} for ${scaleValue(S.SilverWolfScaling.skill.adjacent2, i, "")} turn(s). If the enemy already has that Type Weakness, the effect of DMG RES reduction to that Weakness Type will not be triggered.\\nEach enemy can only have 1 Weakness implanted by Silver Wolf. When Silver Wolf implants another Weakness to the target, only the most recent implanted Weakness will be kept.\\nIn addition, there is a ${scaleValue(S.SilverWolfScaling.skill.adjacent3, i)} <u>base chance</u> to further reduce the All-Type RES of the enemy by ${scaleValue(S.SilverWolfScaling.skill.adjacent4, i)} for ${scaleValue(S.SilverWolfScaling.skill.adjacent5, i, "")} turn(s).\\nDeals Quantum DMG equal to ${scaleValue(S.SilverWolfScaling.skill.adjacent6, i)} of Silver Wolf's ATK to this enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: User Banned",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("SilverWolf", "Ultimate"),
            description: (i) => `
        There's a ${scaleValue(S.SilverWolfScaling.ultimate.main, i)} <u>base chance</u> to decrease the target enemy's DEF by ${scaleValue(S.SilverWolfScaling.ultimate.adjacent, i)} for ${scaleValue(S.SilverWolfScaling.ultimate.adjacent2, i, "")} turn(s). And at the same time, deals Quantum DMG equal to ${scaleValue(S.SilverWolfScaling.ultimate.adjacent3, i)} of Silver Wolf's ATK to the target enemy.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Awaiting System Response...",
            type: "talent",
            level: "1/12",
            icon: charIcon("SilverWolf", "Talent"),
            description: (i) => `
        Silver Wolf can create three types of Bugs: Reduce ATK by ${scaleValue(S.SilverWolfScaling.talent.main, i)}, reduce DEF by ${scaleValue(S.SilverWolfScaling.talent.adjacent, i)}, and reduce SPD by ${scaleValue(S.SilverWolfScaling.talent.adjacent2, i)}.\\nEvery time Silver Wolf attacks, she has a ${scaleValue(S.SilverWolfScaling.talent.adjacent3, i)} <u>base chance</u> to implant a random Bug that lasts for ${scaleValue(S.SilverWolfScaling.talent.adjacent4, i, "")} turn(s) in an enemy target.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Force Quit Program",
            type: "technique",
            level: "1/1",
            icon: charIcon("SilverWolf", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, deals Quantum DMG equal to ${scaleValue(S.SilverWolfScaling.technique, i)} of Silver Wolf's ATK to all enemies, and ignores Weakness Types and reduces Toughness from all enemies. Enemies with their Weakness Broken in this way will trigger the Quantum Weakness Break effect.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Side Note",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolf", "SideNote"),
            description: (i) => `
        If there are ${scaleValue(S.SilverWolfScaling.b1.main, i, "")} or more <u>debuff(s)</u> affecting the enemy when the Skill is used, then the Skill decreases the enemy's All-Type RES by an additional ${scaleValue(S.SilverWolfScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Generate",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolf", "Generate"),
            description: (i) => `
        The duration of "Bug" is extended by ${scaleValue(S.SilverWolfScaling.b2.main, i, "")} turn(s). Every time an enemy is inflicted with Weakness Break, Silver Wolf has a ${scaleValue(S.SilverWolfScaling.b2.adjacent, i)} <u>base chance</u> of implanting a random "Bug" on that target.
      `,
        },
        b3: {
            id: "b3",
            name: "Inject",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolf", "Inject"),
            description: (i) => `
        The duration of the Weakness implanted by Silver Wolf's Skill increases by ${scaleValue(S.SilverWolfScaling.b3, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(SilverWolf);

const Arlan: Character = {
  name: "Arlan",
  path: Paths.Destruction,
  element: Elements.Lightning,
  world: Worlds.HertaSpaceStation, // TODO: Arlan
  image: charSplash("Arlan"),
  pfp: charPfp("Arlan"),
  eidolons: Eidolons.ArlanEidolons,

  baseATK: 599,
  baseDEF: 330,
  baseHP: 1199,
  baseSPD: 102,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Lightning Rush",
            type: "basic",
            level: "1/7",
            icon: charIcon("Arlan", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.ArlanScaling.attack, i)} of Arlan's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Shackle Breaker",
            type: "skill",
            level: "1/12",
            icon: charIcon("Arlan", "Skill"),
            description: (i) => `
        Consumes Arlan's HP equal to ${scaleValue(S.ArlanScaling.skill.main, i)} of his Max HP to deal Lightning DMG equal to ${scaleValue(S.ArlanScaling.skill.adjacent, i)} of Arlan's ATK to one designated enemy. If Arlan does not have sufficient HP, his HP will be reduced to 1 after using his Skill.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Frenzied Punishment",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Arlan", "Ultimate"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.ArlanScaling.ultimate.main, i)} of Arlan's ATK to one designated enemy and Lightning DMG equal to ${scaleValue(S.ArlanScaling.ultimate.adjacent, i)} of Arlan's ATK to enemies adjacent to it.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Pain and Anger",
            type: "talent",
            level: "1/12",
            icon: charIcon("Arlan", "Talent"),
            description: (i) => `
        Based on Arlan's current missing HP percentage, gains DMG bonus, up to a maximum increase of ${scaleValue(S.ArlanScaling.talent, i)} DMG dealt by Arlan.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Swift Harvest",
            type: "technique",
            level: "1/1",
            icon: charIcon("Arlan", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, deals Lightning DMG equal to ${scaleValue(S.ArlanScaling.technique, i)} of Arlan's ATK to all enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Repel",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Arlan", "Repel"),
            description: (i) => `
        Upon entering battle, if Arlan's HP percentage is less than or equal to ${scaleValue(S.ArlanScaling.b1, i)}, he can nullify all DMG received except for DoTs until he is attacked.
      `,
        },
        b2: {
            id: "b2",
            name: "Revival",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Arlan", "Revival"),
            description: (i) => `
        If the current HP percentage is ${scaleValue(S.ArlanScaling.b2.main, i)} or lower when defeating an enemy, immediately restores HP equal to ${scaleValue(S.ArlanScaling.b2.adjacent, i)} of Max HP.
      `,
        },
        b3: {
            id: "b3",
            name: "Endurance",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Arlan", "Endurance"),
            description: (i) => `
        The chance to resist DoT Debuffs increases by ${scaleValue(S.ArlanScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Arlan);

const Asta: Character = {
  name: "Asta",
  path: Paths.Harmony,
  element: Elements.Fire,
  world: Worlds.HertaSpaceStation, // TODO: Asta
  image: charSplash("Asta"),
  pfp: charPfp("Asta"),
  eidolons: Eidolons.AstaEidolons,

  baseATK: 511,
  baseDEF: 463,
  baseHP: 1023,
  baseSPD: 106,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Spectrum Beam",
            type: "basic",
            level: "1/7",
            icon: charIcon("Asta", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.AstaScaling.attack, i)} of Asta's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Meteor Storm",
            type: "skill",
            level: "1/12",
            icon: charIcon("Asta", "Skill"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.AstaScaling.skill, i)} of Asta's ATK to one designated enemy and further deals DMG for 4 extra times, with each time dealing Fire DMG equal to ${scaleValue(S.AstaScaling.skill, i)} of Asta's ATK to a random enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Astral Blessing",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Asta", "Ultimate"),
            description: (i) => `
        Increases SPD of all allies by ${scaleValue(S.AstaScaling.ultimate.main, i, "")} for ${scaleValue(S.AstaScaling.ultimate.adjacent, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Astrometry",
            type: "talent",
            level: "1/12",
            icon: charIcon("Asta", "Talent"),
            description: (i) => `
        Gains 1 stack of Charging for every different enemy hit by Asta plus an extra stack if the enemy hit has Fire Weakness.\\nFor every stack of Charging Asta has, all allies' ATK increases by ${scaleValue(S.AstaScaling.talent.main, i)}, up to ${scaleValue(S.AstaScaling.talent.adjacent, i, "")} time(s).\\nStarting from her second turn, Asta's Charging stack count is reduced by ${scaleValue(S.AstaScaling.talent.adjacent2, i, "")} at the beginning of every turn.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Miracle Flash",
            type: "technique",
            level: "1/1",
            icon: charIcon("Asta", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, deals Fire DMG equal to ${scaleValue(S.AstaScaling.technique, i)} of Asta's ATK to all enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Constellation",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Asta", "Constellation"),
            description: (i) => `
        Asta's DEF increases by ${scaleValue(S.AstaScaling.b1, i)} for every current Charging stack she possesses.
      `,
        },
        b2: {
            id: "b2",
            name: "Sparks",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Asta", "Sparks"),
            description: (i) => `
        Asta's Basic ATK has a ${scaleValue(S.AstaScaling.b2.main, i)} <u>base chance</u> to Burn the enemy target for ${scaleValue(S.AstaScaling.b2.adjacent, i, "")} turn(s).\\nBurned enemies take Fire DoT equal to ${scaleValue(S.AstaScaling.b2.adjacent2, i)} of DMG dealt by Asta's Basic ATK at the start of each turn.
      `,
        },
        b3: {
            id: "b3",
            name: "Ignite",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Asta", "Ignite"),
            description: (i) => `
        When Asta is on the field, all allies' Fire DMG increases by ${scaleValue(S.AstaScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Asta);

const Herta: Character = {
  name: "Herta",
  path: Paths.Erudition,
  element: Elements.Ice,
  world: Worlds.HertaSpaceStation, // TODO: Herta
  image: charSplash("Herta"),
  pfp: charPfp("Herta"),
  eidolons: Eidolons.HertaEidolons,

  baseATK: 582,
  baseDEF: 396,
  baseHP: 952,
  baseSPD: 100,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: What Are You Looking At?",
            type: "basic",
            level: "1/7",
            icon: charIcon("Herta", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.HertaScaling.attack, i)} of Herta's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: One-Time Offer",
            type: "skill",
            level: "1/12",
            icon: charIcon("Herta", "Skill"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.HertaScaling.skill.main, i)} of Herta's ATK to all enemies. If the enemy's HP percentage is ${scaleValue(S.HertaScaling.skill.adjacent, i)} or higher, DMG dealt to this target increases by ${scaleValue(S.HertaScaling.skill.adjacent2, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: It's Magic, I Added Some Magic",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Herta", "Ultimate"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.HertaScaling.ultimate, i)} of Herta's ATK to all enemies.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Fine, I'll Do It Myself",
            type: "talent",
            level: "1/12",
            icon: charIcon("Herta", "Talent"),
            description: (i) => `
        When an ally target's attack causes an enemy target's HP percentage to fall to ${scaleValue(S.HertaScaling.talent.main, i)} or lower, Herta will launch a <u>Follow-Up ATK</u>, dealing Ice DMG equal to ${scaleValue(S.HertaScaling.talent.adjacent, i)} of Herta's ATK to all enemies.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: It Can Still Be Optimized",
            type: "technique",
            level: "1/1",
            icon: charIcon("Herta", "Technique"),
            description: (i) => `
        After using her Technique, Herta's ATK increases by ${scaleValue(S.HertaScaling.technique.main, i)} for ${scaleValue(S.HertaScaling.technique.adjacent, i, "")} turn(s) at the beginning of the next battle.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Icing",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Herta", "Icing"),
            description: (i) => `
        When Ultimate is used, deals ${scaleValue(S.HertaScaling.b1, i)} more DMG to Frozen enemies.
      `,
        },
        b2: {
            id: "b2",
            name: "Efficiency",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Herta", "Efficiency"),
            description: (i) => `
        When Skill is used, the DMG Boost effect on target enemies increases by an extra ${scaleValue(S.HertaScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Puppet",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Herta", "Puppet"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.HertaScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
  },
};

Characters.push(Herta);

const Saber: Character = {
  name: "Saber",
  path: Paths.Destruction,
  element: Elements.Wind,
  world: Worlds.AnotherWorld, // TODO: Saber
  image: charSplash("Saber"),
  pfp: charPfp("Saber"),
  eidolons: Eidolons.SaberEidolons,

  baseATK: 601,
  baseDEF: 654,
  baseHP: 1241,
  baseSPD: 101,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Invisible Air: Barrier of the Wind King",
            type: "basic",
            level: "1/7",
            icon: charIcon("Saber", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.SaberScaling.attack, i)} of Saber's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Strike Air: Hammer of the Wind King",
            type: "skill",
            level: "1/12",
            icon: charIcon("Saber", "Skill"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.SaberScaling.skill.main, i)} of Saber's ATK to one designated enemy, and deals Wind DMG equal to ${scaleValue(S.SaberScaling.skill.adjacent, i)} of Saber's ATK to adjacent targets. If Saber currently holds "Core Resonance" and her Energy can be fully regenerated by consuming "Core Resonance" after this instance of Skill attack, then increases the multiplier for this instance of Skill. For every 1 point of "Core Resonance," increases the DMG multiplier for this instance of Skill by ${scaleValue(S.SaberScaling.skill.adjacent2, i)}. And after the attack, consumes all "Core Resonance" to regenerate Energy for Saber. Otherwise, immediately gains ${scaleValue(S.SaberScaling.skill.adjacent3, i, "")} point(s) of "Core Resonance."
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Excalibur",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Saber", "Ultimate"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.SaberScaling.ultimate.main, i)} of Saber's ATK to all enemies, and additionally deals ${scaleValue(S.SaberScaling.ultimate.adjacent, i, "")} instance(s) of DMG, with each instance being Wind DMG equal to ${scaleValue(S.SaberScaling.ultimate.adjacent2, i)} of Saber's ATK dealt to one random enemy. After using Ultimate, the next Basic ATK switches to "Release, the Golden Scepter," and only "Release, the Golden Scepter" can be used.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Dragon Reactor Core",
            type: "talent",
            level: "1/12",
            icon: charIcon("Saber", "Talent"),
            description: (i) => `
        When entering combat, gains ${scaleValue(S.SaberScaling.talent.main, i, "")} "Core Resonance" point(s). When any ally target uses Ultimate, increases the DMG dealt by Saber by ${scaleValue(S.SaberScaling.talent.adjacent, i)} for ${scaleValue(S.SaberScaling.talent.adjacent2, i, "")} turn(s) and gains ${scaleValue(S.SaberScaling.talent.adjacent3, i, "")} "Core Resonance" point(s). For every 1 "Core Resonance" point consumed, regenerates a fixed amount of ${scaleValue(S.SaberScaling.talent.adjacent4, i, "")} Energy for Saber.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Behold, the King of Knights",
            type: "technique",
            level: "1/1",
            icon: charIcon("Saber", "Technique"),
            description: (i) => `
        After using Technique, at the start of the next battle, increases Saber's ATK by ${scaleValue(S.SaberScaling.technique.main, i)} for ${scaleValue(S.SaberScaling.technique.adjacent, i, "")} turn(s) and gains ${scaleValue(S.SaberScaling.technique.adjacent2, i, "")} "Core Resonance."
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Crown of the Star",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Saber", "CrownoftheStar"),
            description: (i) => `
        When using Skill, increases Saber's CRIT DMG by ${scaleValue(S.SaberScaling.b1.main, i)} for ${scaleValue(S.SaberScaling.b1.adjacent, i, "")} turns. During this battle, for every 1 point of "Core Resonance" gained, increases Saber's CRIT DMG by ${scaleValue(S.SaberScaling.b1.adjacent2, i)}, stacking up to ${scaleValue(S.SaberScaling.b1.adjacent3, i, "")} time(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Knight of the Dragon",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Saber", "KnightoftheDragon"),
            description: (i) => `
        Increases Saber's CRIT Rate by ${scaleValue(S.SaberScaling.b2, i)}. When entering combat or when using her Enhanced Basic ATK, gains the "Mana Burst" effect. Under this effect, if Saber has "Core Resonance" and her Energy can be fully regenerated by using her Skill and consuming "Core Resonance," then consumes "Mana Burst" to recover 1 Skill Point for allies, and causes Saber to immediately take action.
      `,
        },
        b3: {
            id: "b3",
            name: "Blessing of the Lake",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Saber", "BlessingoftheLake"),
            description: (i) => `
        Saber can accumulate up to ${scaleValue(S.SaberScaling.b3.main, i, "")} overflow Energy. After using Ultimate, the overflow Energy is cleared and a corresponding amount of Energy is regenerated. When the battle starts, if Energy is below ${scaleValue(S.SaberScaling.b3.adjacent, i)}, it is regenerated to ${scaleValue(S.SaberScaling.b3.adjacent2, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(Saber);

const Archer: Character = {
  name: "Archer",
  path: Paths.Hunt,
  element: Elements.Quantum,
  world: Worlds.AnotherWorld, // TODO: Archer
  image: charSplash("Archer"),
  pfp: charPfp("Archer"),
  eidolons: Eidolons.ArcherEidolons,

  baseATK: 620,
  baseDEF: 485,
  baseHP: 1164,
  baseSPD: 105,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Kanshou and Bakuya",
            type: "basic",
            level: "1/9",
            icon: charIcon("Archer", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.ArcherScaling.attack, i)} of Archer's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Caladbolg II: Fake Spiral Sword",
            type: "skill",
            level: "1/12",
            icon: charIcon("Archer", "Skill"),
            description: (i) => `
        Enters the "Circuit Connection" state. Deals Quantum DMG equal to ${scaleValue(S.ArcherScaling.skill.main, i)} of Archer's ATK to one designated enemy. After using Skill in the "Circuit Connection" state, the current turn does not end, and the DMG dealt by Archer's Skill increases by ${scaleValue(S.ArcherScaling.skill.adjacent, i)}. This effect can stack up to ${scaleValue(S.ArcherScaling.skill.adjacent2, i, "")} time(s), lasting until he exits the "Circuit Connection" state. After actively using Skill ${scaleValue(S.ArcherScaling.skill.adjacent3, i, "")} time(s) or when Skill Points are insufficient to use Skill again, exits the "Circuit Connection" state. After all enemy targets have been defeated in each wave, exits the "Circuit Connection" state.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Unlimited Blade Works",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Archer", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.ArcherScaling.ultimate.main, i)} of Archer's ATK to one designated enemy and gains ${scaleValue(S.ArcherScaling.ultimate.adjacent, i, "")} point(s) of Charge, up to a maximum of ${scaleValue(S.ArcherScaling.ultimate.adjacent2, i, "")}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Mind's Eye (True)",
            type: "talent",
            level: "1/12",
            icon: charIcon("Archer", "Talent"),
            description: (i) => `
        After Archer's teammates attack enemy targets, Archer consumes 1 Charge and immediately launches <u>Follow-Up ATK</u> on the primary target, dealing Quantum DMG equal to ${scaleValue(S.ArcherScaling.talent, i)} of Archer's ATK and recovering 1 Skill Point. If the target is defeated before this <u>Follow-Up ATK</u> is launched, the <u>Follow-Up ATK</u> will be directed at one random enemy instead.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Clairvoyance",
            type: "technique",
            level: "1/1",
            icon: charIcon("Archer", "Technique"),
            description: (i) => `
        Immediately attacks enemies. After entering combat, deals Quantum DMG equal to ${scaleValue(S.ArcherScaling.technique.main, i)} of Archer's ATK to all enemies and gains ${scaleValue(S.ArcherScaling.technique.adjacent, i, "")} point(s) of Charge.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Guardian",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Archer", "Guardian"),
            description: (i) => `
        After allies gain a Skill Point, if there are ${scaleValue(S.ArcherScaling.b1.main, i, "")} Skill Points or more, increases Archer's CRIT DMG by ${scaleValue(S.ArcherScaling.b1.adjacent, i)} for ${scaleValue(S.ArcherScaling.b1.adjacent2, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Projection Magecraft",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Archer", "ProjectionMagecraft"),
            description: (i) => `
        When Archer is on the field, increases the maximum Skill Point limit by ${scaleValue(S.ArcherScaling.b2, i, "")}.
      `,
        },
        b3: {
            id: "b3",
            name: "Hero of Justice",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Archer", "HeroofJustice"),
            description: (i) => `
        When Archer enters combat, gains ${scaleValue(S.ArcherScaling.b3, i, "")} point(s) of Charge.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(Archer);

const Bronya: Character = {
  name: "Bronya",
  path: Paths.Harmony,
  element: Elements.Wind,
  world: Worlds.Belobog, // TODO: Bronya
  image: charSplash("Bronya"),
  pfp: charPfp("Bronya"),
  eidolons: Eidolons.BronyaEidolons,

  baseATK: 582,
  baseDEF: 533,
  baseHP: 1241,
  baseSPD: 99,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Windrider Bullet",
            type: "basic",
            level: "1/7",
            icon: charIcon("Bronya", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.BronyaScaling.attack, i)} of Bronya's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Combat Redeployment",
            type: "skill",
            level: "1/12",
            icon: charIcon("Bronya", "Skill"),
            description: (i) => `
        Dispels a <u>debuff</u> from a single ally, allows them to immediately take action, and increases their DMG by ${scaleValue(S.BronyaScaling.skill.main, i)} for ${scaleValue(S.BronyaScaling.skill.adjacent, i, "")} turn(s).\\nWhen this Skill is used on Bronya herself, she cannot immediately take action again.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: The Belobog March",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Bronya", "Ultimate"),
            description: (i) => `
        Increases the ATK of all allies by ${scaleValue(S.BronyaScaling.ultimate.main, i)}, and increases their CRIT DMG equal to ${scaleValue(S.BronyaScaling.ultimate.adjacent, i)} of Bronya's CRIT DMG plus ${scaleValue(S.BronyaScaling.ultimate.adjacent2, i)} for ${scaleValue(S.BronyaScaling.ultimate.adjacent3, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Leading the Way",
            type: "talent",
            level: "1/12",
            icon: charIcon("Bronya", "Talent"),
            description: (i) => `
        After using her Basic ATK, Bronya's next action will be <u>Advanced Forward</u> by ${scaleValue(S.BronyaScaling.talent, i)}.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Banner of Command",
            type: "technique",
            level: "1/1",
            icon: charIcon("Bronya", "Technique"),
            description: (i) => `
        After using Bronya's Technique, at the start of the next battle, all allies' ATK increases by ${scaleValue(S.BronyaScaling.technique.main, i)} for ${scaleValue(S.BronyaScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Military Might",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Bronya", "MilitaryMight"),
            description: (i) => `
        When Bronya is on the field, all allies deal ${scaleValue(S.BronyaScaling.b1, i)} more DMG.
      `,
        },
        b2: {
            id: "b2",
            name: "Command",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Bronya", "Command"),
            description: "The CRIT Rate for Basic ATK increases to 100%.",
        },
        b3: {
            id: "b3",
            name: "Battlefield",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Bronya", "Battlefield"),
            description: (i) => `
        At the start of the battle, all allies' DEF increases by ${scaleValue(S.BronyaScaling.b3.main, i)} for ${scaleValue(S.BronyaScaling.b3.adjacent, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Bronya);

const Seele: Character = {
  name: "Seele",
  path: Paths.Hunt,
  element: Elements.Quantum,
  world: Worlds.Belobog, // TODO: Seele
  image: charSplash("Seele"),
  pfp: charPfp("Seele"),
  eidolons: Eidolons.SeeleEidolons,

  baseATK: 640,
  baseDEF: 363,
  baseHP: 931,
  baseSPD: 115,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Thwack",
            type: "basic",
            level: "1/7",
            icon: charIcon("Seele", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.SeeleScaling.attack, i)} of Seele's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Sheathed Blade",
            type: "skill",
            level: "1/12",
            icon: charIcon("Seele", "Skill"),
            description: (i) => `
        Increases Seele's SPD by ${scaleValue(S.SeeleScaling.skill.main, i)} for ${scaleValue(S.SeeleScaling.skill.adjacent, i, "")} turn(s) and deals Quantum DMG equal to ${scaleValue(S.SeeleScaling.skill.adjacent2, i)} of Seele's ATK to one designated enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Butterfly Flurry",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Seele", "Ultimate"),
            description: (i) => `
        Seele enters the Amplification state and deals Quantum DMG equal to ${scaleValue(S.SeeleScaling.ultimate, i)} of her ATK to one designated enemy.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Resurgence",
            type: "talent",
            level: "1/12",
            icon: charIcon("Seele", "Talent"),
            description: (i) => `
        Enters the Amplification state upon defeating an enemy with Basic ATK, Skill, or Ultimate, and receives an <u>extra turn</u>. While in the Amplification state, increases the DMG of Seele's attacks by ${scaleValue(S.SeeleScaling.talent.main, i)} for ${scaleValue(S.SeeleScaling.talent.adjacent, i, "")} turn(s).\\nEnemies defeated in the <u>extra turn</u> provided by "Resurgence" will not trigger another "Resurgence."
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Phantom Illusion",
            type: "technique",
            level: "1/1",
            icon: charIcon("Seele", "Technique"),
            description: (i) => `
        After using her Technique, Seele gains Stealth for ${scaleValue(S.SeeleScaling.technique, i, "")} second(s). While Stealth is active, Seele cannot be detected by enemies. And when entering battle by attacking enemies, Seele will immediately enter the Amplification state.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Rippling Waves",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Seele", "RipplingWaves"),
            description: (i) => `
        After using a Basic ATK, advances Seele's next <u>action </u> by ${scaleValue(S.SeeleScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Nightshade",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Seele", "Nightshade"),
            description: (i) => `
        When current HP percentage is ${scaleValue(S.SeeleScaling.b2, i)} or lower, reduces the chance of being attacked by enemies.
      `,
        },
        b3: {
            id: "b3",
            name: "Lacerate",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Seele", "Lacerate"),
            description: (i) => `
        While Seele is in the Amplification state, her Quantum <u>RES PEN</u> increases by ${scaleValue(S.SeeleScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Seele);

const Serval: Character = {
  name: "Serval",
  path: Paths.Erudition,
  element: Elements.Lightning,
  world: Worlds.Belobog, // TODO: Serval
  image: charSplash("Serval"),
  pfp: charPfp("Serval"),
  eidolons: Eidolons.ServalEidolons,

  baseATK: 652,
  baseDEF: 374,
  baseHP: 917,
  baseSPD: 104,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Roaring Thunderclap",
            type: "basic",
            level: "1/7",
            icon: charIcon("Serval", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.ServalScaling.attack, i)} of Serval's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Lightning Flash",
            type: "skill",
            level: "1/12",
            icon: charIcon("Serval", "Skill"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.ServalScaling.skill.main, i)} of Serval's ATK to one designated enemy and Lightning DMG equal to ${scaleValue(S.ServalScaling.skill.adjacent, i)} of Serval's ATK to enemies adjacent to it, with a ${scaleValue(S.ServalScaling.skill.adjacent2, i)} <u>base chance</u> for enemies hit to become Shocked for ${scaleValue(S.ServalScaling.skill.adjacent3, i, "")} turn(s).\\nWhile Shocked, enemies take Lightning DoT equal to ${scaleValue(S.ServalScaling.skill.adjacent4, i)} of Serval's ATK at the beginning of each turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Here Comes the Mechanical Fever",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Serval", "Ultimate"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.ServalScaling.ultimate.main, i)} of Serval's ATK to all enemies. Enemies already Shocked will extend the duration of their Shock state by ${scaleValue(S.ServalScaling.ultimate.adjacent, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Galvanic Chords",
            type: "talent",
            level: "1/12",
            icon: charIcon("Serval", "Talent"),
            description: (i) => `
        After Serval attacks, deals Lightning <u>Additional DMG</u> equal to ${scaleValue(S.ServalScaling.talent, i)} of Serval's ATK to all Shocked enemies.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Good Night, Belobog",
            type: "technique",
            level: "1/1",
            icon: charIcon("Serval", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, deals Lightning DMG equal to ${scaleValue(S.ServalScaling.technique.main, i)} of Serval's ATK to a random enemy, with a ${scaleValue(S.ServalScaling.technique.adjacent, i)} <u>base chance</u> for all enemies to become Shocked for ${scaleValue(S.ServalScaling.technique.adjacent2, i, "")} turn(s).\\nWhile Shocked, enemies will take Lightning DoT equal to ${scaleValue(S.ServalScaling.technique.adjacent3, i)} of Serval's ATK at the beginning of each turn.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Mania",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Serval", "Mania"),
            description: (i) => `
        Upon defeating an enemy, ATK is increased by ${scaleValue(S.ServalScaling.b1.main, i)} for ${scaleValue(S.ServalScaling.b1.adjacent, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Rock 'n' Roll",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Serval", "RocknRoll"),
            description: (i) => `
        When using skill, increases the <u>base chance</u> for the attacked enemy target to become Shocked by ${scaleValue(S.ServalScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "String Vibration",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Serval", "StringVibration"),
            description: (i) => `
        At the start of the battle, immediately regenerates ${scaleValue(S.ServalScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Serval);

const Gepard: Character = {
  name: "Gepard",
  path: Paths.Preservation,
  element: Elements.Ice,
  world: Worlds.Belobog, // TODO: Gepard
  image: charSplash("Gepard"),
  pfp: charPfp("Gepard"),
  eidolons: Eidolons.GepardEidolons,

  baseATK: 543,
  baseDEF: 654,
  baseHP: 1397,
  baseSPD: 92,
  aggro: 150,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Fist of Conviction",
            type: "basic",
            level: "1/7",
            icon: charIcon("Gepard", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.GepardScaling.attack, i)} of Gepard's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Daunting Smite",
            type: "skill",
            level: "1/12",
            icon: charIcon("Gepard", "Skill"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.GepardScaling.skill.main, i)} of Gepard's ATK to one designated enemy, with a ${scaleValue(S.GepardScaling.skill.adjacent, i)} <u>base chance</u> to Freeze the enemy for ${scaleValue(S.GepardScaling.skill.adjacent2, i, "")} turn(s).\\nWhile Frozen, the enemy cannot take action and will take Ice <u>Additional DMG</u> equal to ${scaleValue(S.GepardScaling.skill.adjacent3, i)} of Gepard's ATK at the beginning of each turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Enduring Bulwark",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Gepard", "Ultimate"),
            description: (i) => `
        Applies a Shield to all allies, absorbing DMG equal to ${scaleValue(S.GepardScaling.ultimate.main, i)} of Gepard's DEF plus ${scaleValue(S.GepardScaling.ultimate.adjacent, i, "")} for ${scaleValue(S.GepardScaling.ultimate.adjacent2, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Unyielding Will",
            type: "talent",
            level: "1/12",
            icon: charIcon("Gepard", "Talent"),
            description: (i) => `
        When struck with a killing blow, instead of becoming <u>knocked down</u>, Gepard's HP immediately restores to ${scaleValue(S.GepardScaling.talent, i)} of his Max HP. This effect can only trigger once per battle.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Comradery",
            type: "technique",
            level: "1/1",
            icon: charIcon("Gepard", "Technique"),
            description: (i) => `
        After Gepard uses his Technique, when the next battle begins, a Shield will be applied to all allies, absorbing DMG equal to ${scaleValue(S.GepardScaling.technique.main, i)} of Gepard's DEF plus ${scaleValue(S.GepardScaling.technique.adjacent, i, "")} for ${scaleValue(S.GepardScaling.technique.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Grit",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gepard", "Grit"),
            description: (i) => `
        Gepard's ATK increases by ${scaleValue(S.GepardScaling.b1, i)} of his current DEF. This effect will refresh at the start of each turn.
      `,
        },
        b2: {
            id: "b2",
            name: "Integrity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gepard", "Integrity"),
            description: "Gepard has a higher chance to be attacked by enemies.",
        },
        b3: {
            id: "b3",
            name: "Commander",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gepard", "Commander"),
            description: "When \"Unyielding Will\" is triggered, Gepard's Energy will be restored to 100%.",
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(Gepard);

const Natasha: Character = {
  name: "Natasha",
  path: Paths.Abundance,
  element: Elements.Physical,
  world: Worlds.Belobog, // TODO: Natasha
  image: charSplash("Natasha"),
  pfp: charPfp("Natasha"),
  eidolons: Eidolons.NatashaEidolons,

  baseATK: 476,
  baseDEF: 507,
  baseHP: 1164,
  baseSPD: 98,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Behind the Kindness",
            type: "basic",
            level: "1/7",
            icon: charIcon("Natasha", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.NatashaScaling.attack, i)} of Natasha's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Love, Heal, and Choose",
            type: "skill",
            level: "1/12",
            icon: charIcon("Natasha", "Skill"),
            description: (i) => `
        Restores a single ally for ${scaleValue(S.NatashaScaling.skill.main, i)} of Natasha's Max HP plus ${scaleValue(S.NatashaScaling.skill.adjacent, i, "")}. Restores the ally for another ${scaleValue(S.NatashaScaling.skill.adjacent2, i)} of Natasha's Max HP plus ${scaleValue(S.NatashaScaling.skill.adjacent3, i, "")} at the beginning of each turn for ${scaleValue(S.NatashaScaling.skill.adjacent4, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Gift of Rebirth",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Natasha", "Ultimate"),
            description: (i) => `
        Heals all allies for ${scaleValue(S.NatashaScaling.ultimate.main, i)} of Natasha's Max HP plus ${scaleValue(S.NatashaScaling.ultimate.adjacent, i, "")}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Innervation",
            type: "talent",
            level: "1/12",
            icon: charIcon("Natasha", "Talent"),
            description: (i) => `
        When healing allies with HP percentage at ${scaleValue(S.NatashaScaling.talent.main, i)} or lower, increases Natasha's Outgoing Healing by ${scaleValue(S.NatashaScaling.talent.adjacent, i)}. This effect also works on continuous healing.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Hypnosis Research",
            type: "technique",
            level: "1/1",
            icon: charIcon("Natasha", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, deals Physical DMG equal to ${scaleValue(S.NatashaScaling.technique.main, i)} of Natasha's ATK to a random enemy, with a ${scaleValue(S.NatashaScaling.technique.adjacent, i)} <u>base chance</u> to Weaken all enemies.\\nWhile Weakened, enemies deal ${scaleValue(S.NatashaScaling.technique.adjacent2, i)} less DMG to allies for ${scaleValue(S.NatashaScaling.technique.adjacent3, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Recuperation",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Natasha", "Recuperation"),
            description: (i) => `
        Increases the duration of Skill's continuous healing effect for ${scaleValue(S.NatashaScaling.b1, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Soothe",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Natasha", "Soothe"),
            description: (i) => `
        When using Skill, dispels ${scaleValue(S.NatashaScaling.b2, i, "")} <u>debuff(s)</u> from one designated ally.
      `,
        },
        b3: {
            id: "b3",
            name: "Healer",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Natasha", "Healer"),
            description: (i) => `
        Natasha's Outgoing Healing increases by ${scaleValue(S.NatashaScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Natasha);

const Pela: Character = {
  name: "Pela",
  path: Paths.Nihility,
  element: Elements.Ice,
  world: Worlds.Belobog, // TODO: Pela
  image: charSplash("Pela"),
  pfp: charPfp("Pela"),
  eidolons: Eidolons.PelaEidolons,

  baseATK: 546,
  baseDEF: 463,
  baseHP: 987,
  baseSPD: 105,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Frost Shot",
            type: "basic",
            level: "1/7",
            icon: charIcon("Pela", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.PelaScaling.attack, i)} of Pela's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Frostbite",
            type: "skill",
            level: "1/12",
            icon: charIcon("Pela", "Skill"),
            description: (i) => `
        Removes ${scaleValue(S.PelaScaling.skill.main, i, "")} <u>buff(s)</u> and deals Ice DMG equal to ${scaleValue(S.PelaScaling.skill.adjacent, i)} of Pela's ATK to one designated target enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Zone Suppression",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Pela", "Ultimate"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.PelaScaling.ultimate.main, i)} of Pela's ATK to all enemies, with a ${scaleValue(S.PelaScaling.ultimate.adjacent, i)} <u>base chance</u> to inflict Exposed on all enemies.\\nWhen Exposed, enemies' DEF is reduced by ${scaleValue(S.PelaScaling.ultimate.adjacent2, i)} for ${scaleValue(S.PelaScaling.ultimate.adjacent3, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Data Collecting",
            type: "talent",
            level: "1/12",
            icon: charIcon("Pela", "Talent"),
            description: (i) => `
        If the enemy is <u>debuffed</u> after Pela's attack, Pela will restore ${scaleValue(S.PelaScaling.talent, i, "")} additional Energy. This effect can only be triggered 1 time per attack.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Preemptive Strike",
            type: "technique",
            level: "1/1",
            icon: charIcon("Pela", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. Upon entering battle, Pela deals Ice DMG equal to ${scaleValue(S.PelaScaling.technique.main, i)} of her ATK to a random enemy, with a ${scaleValue(S.PelaScaling.technique.adjacent, i)} <u>base chance</u> of lowering the DEF of all enemies by ${scaleValue(S.PelaScaling.technique.adjacent2, i)} for ${scaleValue(S.PelaScaling.technique.adjacent3, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Wipe Out",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Pela", "WipeOut"),
            description: (i) => `
        When using Skill to dispel <u>buff(s)</u>, increases the DMG dealt by the next attack by ${scaleValue(S.PelaScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Bash",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Pela", "Bash"),
            description: (i) => `
        Deals ${scaleValue(S.PelaScaling.b2, i)} more DMG to <u>debuffed</u> enemy targets.
      `,
        },
        b3: {
            id: "b3",
            name: "The Secret Strategy",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Pela", "TheSecretStrategy"),
            description: (i) => `
        When Pela is on the battlefield, all allies' Effect Hit Rate increases by ${scaleValue(S.PelaScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Pela);

const Clara: Character = {
  name: "Clara",
  path: Paths.Destruction,
  element: Elements.Physical,
  world: Worlds.Belobog, // TODO: Clara
  image: charSplash("Clara"),
  pfp: charPfp("Clara"),
  eidolons: Eidolons.ClaraEidolons,

  baseATK: 737,
  baseDEF: 485,
  baseHP: 1241,
  baseSPD: 90,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: I Want to Help",
            type: "basic",
            level: "1/7",
            icon: charIcon("Clara", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.ClaraScaling.attack, i)} of Clara's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Svarog Watches Over You",
            type: "skill",
            level: "1/12",
            icon: charIcon("Clara", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.ClaraScaling.skill.main, i)} of Clara's ATK to all enemies, and additionally deals Physical DMG equal to ${scaleValue(S.ClaraScaling.skill.adjacent, i)} of Clara's ATK to enemies marked by Svarog with a Mark of Counter.\\nAll Marks of Counter will be removed after this Skill is used.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Promise, Not Command",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Clara", "Ultimate"),
            description: (i) => `
        After Clara uses Ultimate, DMG dealt to her is reduced by an extra ${scaleValue(S.ClaraScaling.ultimate.main, i)}, and she has greatly increased chances of being attacked by enemies for ${scaleValue(S.ClaraScaling.ultimate.adjacent, i, "")} turn(s).\\nIn addition, Svarog's <u>Counter</u> is enhanced. When an ally is attacked, Svarog immediately launches a <u>Counter</u>, and its DMG multiplier against the enemy increases by ${scaleValue(S.ClaraScaling.ultimate.adjacent2, i)}. Enemies adjacent to it take 50% of the DMG dealt to the primary target enemy. Enhanced <u>Counter(s)</u> can take effect ${scaleValue(S.ClaraScaling.ultimate.adjacent3, i, "")} time(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Because We're Family",
            type: "talent",
            level: "1/12",
            icon: charIcon("Clara", "Talent"),
            description: (i) => `
        Under the protection of Svarog, DMG taken by Clara when hit by enemy attacks is reduced by ${scaleValue(S.ClaraScaling.talent.main, i)}. Svarog will mark enemies who attack Clara with his Mark of Counter and retaliate with a <u>Counter</u>, dealing Physical DMG equal to ${scaleValue(S.ClaraScaling.talent.adjacent, i)} of Clara's ATK.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: A Small Price for Victory",
            type: "technique",
            level: "1/1",
            icon: charIcon("Clara", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. Upon entering battle, the chance Clara will be attacked by enemies increases for ${scaleValue(S.ClaraScaling.technique, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Revenge",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Clara", "Revenge"),
            description: (i) => `
        Increases DMG dealt by Svarog's <u>Counter</u> by ${scaleValue(S.ClaraScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Kinship",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Clara", "Kinship"),
            description: (i) => `
        When attacked, this unit has a ${scaleValue(S.ClaraScaling.b2, i)} <u>fixed chance</u> to dispel 1 <u>debuff</u> placed on them.
      `,
        },
        b3: {
            id: "b3",
            name: "Under Protection",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Clara", "UnderProtection"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.ClaraScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Physical DMG Boost",
                type: "stat",
                icon: statIcon("PhysicalBoost"),
                description: "Physical DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Physical DMG Boost",
                type: "stat",
                icon: statIcon("PhysicalBoost"),
                description: "Physical DMG Increases by: <b><u>4.8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Physical DMG Boost",
                type: "stat",
                icon: statIcon("PhysicalBoost"),
                description: "Physical DMG Increases by: <b><u>3.2%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Clara);

const Sampo: Character = {
  name: "Sampo",
  path: Paths.Nihility,
  element: Elements.Wind,
  world: Worlds.Belobog, // TODO: Sampo
  image: charSplash("Sampo"),
  pfp: charPfp("Sampo"),
  eidolons: Eidolons.SampoEidolons,

  baseATK: 617,
  baseDEF: 396,
  baseHP: 1023,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Dazzling Blades",
            type: "basic",
            level: "1/7",
            icon: charIcon("Sampo", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.SampoScaling.attack, i)} of Sampo's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Ricochet Love",
            type: "skill",
            level: "1/12",
            icon: charIcon("Sampo", "Skill"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.SampoScaling.skill.main, i)} of Sampo's ATK to one designated enemy, and further deals DMG for ${scaleValue(S.SampoScaling.skill.adjacent, i, "")} extra time(s), with each time dealing Wind DMG equal to ${scaleValue(S.SampoScaling.skill.main, i)} of Sampo's ATK to a random enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Surprise Present",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Sampo", "Ultimate"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.SampoScaling.ultimate.main, i)} of Sampo's ATK to all enemies, with a ${scaleValue(S.SampoScaling.ultimate.adjacent, i)} <u>base chance</u> to increase the targets' DoT taken by ${scaleValue(S.SampoScaling.ultimate.adjacent2, i)} for ${scaleValue(S.SampoScaling.ultimate.adjacent3, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Windtorn Dagger",
            type: "talent",
            level: "1/12",
            icon: charIcon("Sampo", "Talent"),
            description: (i) => `
        Sampo's attacks have a ${scaleValue(S.SampoScaling.talent.main, i)} <u>base chance</u> to inflict Wind Shear for ${scaleValue(S.SampoScaling.talent.adjacent, i, "")} turn(s).\\nEnemies inflicted with Wind Shear will take Wind DoT equal to ${scaleValue(S.SampoScaling.talent.adjacent2, i)} of Sampo's ATK at the beginning of each turn. Wind Shear can stack up to ${scaleValue(S.SampoScaling.talent.adjacent3, i, "")} time(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Shining Bright",
            type: "technique",
            level: "1/1",
            icon: charIcon("Sampo", "Technique"),
            description: (i) => `
        After Sampo uses his Technique, enemies in a set area are afflicted with Blind for ${scaleValue(S.SampoScaling.technique.main, i, "")} second(s). Blinded enemies cannot detect ally targets.\\nWhen initiating combat against a Blinded enemy, there is a ${scaleValue(S.SampoScaling.technique.adjacent, i)} <u>fixed chance</u> to <u>delay all enemies' action</u> by ${scaleValue(S.SampoScaling.technique.adjacent2, i)}.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Spice Up",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sampo", "SpiceUp"),
            description: (i) => `
        Enemies with Wind Shear effect deal ${scaleValue(S.SampoScaling.b1, i)} less DMG to Sampo.
      `,
        },
        b2: {
            id: "b2",
            name: "Trap",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sampo", "Trap"),
            description: (i) => `
        Extends the duration of Wind Shear caused by Talent by ${scaleValue(S.SampoScaling.b2, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Defensive Position",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sampo", "DefensivePosition"),
            description: (i) => `
        Using Ultimate additionally regenerates ${scaleValue(S.SampoScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Sampo);

const Hook: Character = {
  name: "Hook",
  path: Paths.Destruction,
  element: Elements.Fire,
  world: Worlds.Belobog, // TODO: Hook
  image: charSplash("Hook"),
  pfp: charPfp("Hook"),
  eidolons: Eidolons.HookEidolons,

  baseATK: 617,
  baseDEF: 352,
  baseHP: 1340,
  baseSPD: 94,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Hehe! Don't Get Burned!",
            type: "basic",
            level: "1/7",
            icon: charIcon("Hook", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HookScaling.attack, i)} of Hook's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Hey! Remember Hook?",
            type: "skill",
            level: "1/12",
            icon: charIcon("Hook", "Skill"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HookScaling.skill.main, i)} of Hook's ATK to one designated enemy. In addition, there is a ${scaleValue(S.HookScaling.skill.adjacent, i)} <u>base chance</u> to inflict Burn for ${scaleValue(S.HookScaling.skill.adjacent2, i, "")} turn(s).\\nWhen afflicted with Burn, enemies will take Fire DoT equal to ${scaleValue(S.HookScaling.skill.adjacent3, i)} of Hook's ATK at the beginning of each turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Boom! Here Comes the Fire!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Hook", "Ultimate"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HookScaling.ultimate, i)} of Hook's ATK to one designated enemy.\\nAfter using Ultimate, the next Skill to be used is Enhanced, which deals DMG to one designated enemy and enemies adjacent to it.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Ha! Oil to the Flames!",
            type: "talent",
            level: "1/12",
            icon: charIcon("Hook", "Talent"),
            description: (i) => `
        When attacking a target afflicted with Burn, deals Fire <u>Additional DMG</u> equal to ${scaleValue(S.HookScaling.talent.main, i)} of Hook's ATK and regenerates ${scaleValue(S.HookScaling.talent.adjacent, i, "")} extra Energy.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Ack! Look at This Mess!",
            type: "technique",
            level: "1/1",
            icon: charIcon("Hook", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. Upon entering battle, Hook deals Fire DMG equal to ${scaleValue(S.HookScaling.technique.main, i)} of her ATK to a random enemy. In addition, there is a ${scaleValue(S.HookScaling.technique.adjacent, i)} <u>base chance</u> to inflict Burn on every enemy for ${scaleValue(S.HookScaling.technique.adjacent2, i, "")} turn(s).\\nWhen afflicted with Burn, enemies will take Fire DoT equal to ${scaleValue(S.HookScaling.technique.adjacent3, i)} of Hook's ATK at the beginning of each turn.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Playing With Fire",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hook", "PlayingWithFire"),
            description: (i) => `
        After using her Ultimate, Hook has her <u>action advanced</u> by ${scaleValue(S.HookScaling.b1.main, i)} and additionally regenerates ${scaleValue(S.HookScaling.b1.adjacent, i, "")} Energy.
      `,
        },
        b2: {
            id: "b2",
            name: "Innocence",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hook", "Innocence"),
            description: (i) => `
        Hook restores HP equal to ${scaleValue(S.HookScaling.b2, i)} of her Max HP whenever her Talent is triggered.
      `,
        },
        b3: {
            id: "b3",
            name: "Naivete",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hook", "Naivete"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.HookScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Hook);

const Lynx: Character = {
  name: "Lynx",
  path: Paths.Abundance,
  element: Elements.Quantum,
  world: Worlds.Belobog, // TODO: Lynx
  image: charSplash("Lynx"),
  pfp: charPfp("Lynx"),
  eidolons: Eidolons.LynxEidolons,

  baseATK: 493,
  baseDEF: 551,
  baseHP: 1058,
  baseSPD: 100,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Ice Crampon Technique",
            type: "basic",
            level: "1/7",
            icon: charIcon("Lynx", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.LynxScaling.attack, i)} of this character's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Salted Camping Cans",
            type: "skill",
            level: "1/12",
            icon: charIcon("Lynx", "Skill"),
            description: (i) => `
        Applies "Survival Response" to a single target ally and increases their Max HP by ${scaleValue(S.LynxScaling.skill.main, i)} of Lynx's Max HP plus ${scaleValue(S.LynxScaling.skill.adjacent, i, "")}. If the target ally is a character on the Path of Destruction or Preservation, the chance of them being attacked by enemies will greatly increase. "Survival Response" lasts for ${scaleValue(S.LynxScaling.skill.adjacent2, i, "")} turn(s).\\nRestores the target's HP by ${scaleValue(S.LynxScaling.skill.adjacent3, i)} of Lynx's Max HP plus ${scaleValue(S.LynxScaling.skill.adjacent4, i, "")}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Snowfield First Aid",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Lynx", "Ultimate"),
            description: (i) => `
        Dispels ${scaleValue(S.LynxScaling.ultimate.main, i, "")} <u>debuff(s)</u> from all allies and immediately restores their respective HP by an amount equal to ${scaleValue(S.LynxScaling.ultimate.adjacent, i)} of Lynx's Max HP plus ${scaleValue(S.LynxScaling.ultimate.adjacent2, i, "")}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Outdoor Survival Experience",
            type: "talent",
            level: "1/12",
            icon: charIcon("Lynx", "Talent"),
            description: (i) => `
        When using Lynx's Skill or Ultimate, applies continuous healing to the target ally for ${scaleValue(S.LynxScaling.talent.main, i, "")} turn(s), restoring the target ally's HP by an amount equal to ${scaleValue(S.LynxScaling.talent.adjacent, i)} of Lynx's Max HP plus ${scaleValue(S.LynxScaling.talent.adjacent2, i, "")} at the start of each turn. If the target has "Survival Response," the continuous healing effect additionally restores HP by an amount equal to ${scaleValue(S.LynxScaling.talent.adjacent3, i)} of Lynx's Max HP plus ${scaleValue(S.LynxScaling.talent.adjacent4, i, "")}.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Chocolate Energy Bar",
            type: "technique",
            level: "1/1",
            icon: charIcon("Lynx", "Technique"),
            description: (i) => `
        After Lynx uses her Technique, at the start of the next battle, all allies are granted her Talent's continuous healing effect, lasting for ${scaleValue(S.LynxScaling.technique, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Survival in the Extreme",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Lynx", "SurvivalintheExtreme"),
            description: (i) => `
        Extends the duration of the continuous healing effect granted by Talent for ${scaleValue(S.LynxScaling.b1, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Advance Surveying",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Lynx", "AdvanceSurveying"),
            description: (i) => `
        After a target with "Survival Response" is hit, Lynx regenerates ${scaleValue(S.LynxScaling.b2, i, "")} Energy immediately.
      `,
        },
        b3: {
            id: "b3",
            name: "Exploration Techniques",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Lynx", "ExplorationTechniques"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.LynxScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Lynx);

const Luka: Character = {
  name: "Luka",
  path: Paths.Nihility,
  element: Elements.Physical,
  world: Worlds.Belobog, // TODO: Luka
  image: charSplash("Luka"),
  pfp: charPfp("Luka"),
  eidolons: Eidolons.LukaEidolons,

  baseATK: 582,
  baseDEF: 485,
  baseHP: 917,
  baseSPD: 103,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Direct Punch",
            type: "basic",
            level: "1/7",
            icon: charIcon("Luka", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.LukaScaling.attack, i)} of Luka's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Lacerating Fist",
            type: "skill",
            level: "1/12",
            icon: charIcon("Luka", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.LukaScaling.skill.main, i)} of Luka's ATK to one designated enemy target. In addition, there is a ${scaleValue(S.LukaScaling.skill.adjacent, i)} <u>base chance</u> to inflict Bleed on them, lasting for ${scaleValue(S.LukaScaling.skill.adjacent2, i, "")} turn(s).\\nWhile Bleeding, the enemy will take ${scaleValue(S.LukaScaling.skill.adjacent3, i)} of their Max HP as Physical DoT at the start of each turn. This DMG will not exceed more than ${scaleValue(S.LukaScaling.skill.adjacent4, i)} of Luka's ATK.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Coup de Grâce",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Luka", "Ultimate"),
            description: (i) => `
        Receives ${scaleValue(S.LukaScaling.ultimate.main, i, "")} stack(s) of "Fighting Will," with a ${scaleValue(S.LukaScaling.ultimate.adjacent, i)} <u>base chance</u> to increase one designated enemy target's DMG received by ${scaleValue(S.LukaScaling.ultimate.adjacent2, i)} for ${scaleValue(S.LukaScaling.ultimate.adjacent3, i, "")} turn(s). Then, deals Physical DMG equal to ${scaleValue(S.LukaScaling.ultimate.adjacent4, i)} of Luka's ATK to the target.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Flying Sparks",
            type: "talent",
            level: "1/12",
            icon: charIcon("Luka", "Talent"),
            description: (i) => `
        After Luka uses his Basic ATK "Direct Punch" or Skill "Lacerating Fist," he receives ${scaleValue(S.LukaScaling.talent.main, i, "")} stack of Fighting Will, up to 4 stacks. When he has 2 or more stacks of Fighting Will, his Basic ATK "Direct Punch" is enhanced to "Sky-Shatter Fist." After his Enhanced Basic ATK's "Rising Uppercut" hits a Bleeding enemy target, the Bleed status will immediately deal DMG for 1 time equal to ${scaleValue(S.LukaScaling.talent.adjacent, i)} of the original DMG to the target. At the start of battle, Luka will possess 1 stack of Fighting Will.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Anticipator",
            type: "technique",
            level: "1/1",
            icon: charIcon("Luka", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. Upon entering battle, Luka deals Physical DMG equal to ${scaleValue(S.LukaScaling.technique.main, i)} of his ATK to a random single enemy with a ${scaleValue(S.LukaScaling.technique.adjacent, i)} <u>base chance</u> to inflict his Skill's Bleed effect on the target. Then, Luka gains 1 additional stack of Fighting Will.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Crush Fighting Will",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Luka", "CrushFightingWill"),
            description: (i) => `
        When using Enhanced Basic ATK, every hit of "Direct Punch" has a ${scaleValue(S.LukaScaling.b1, i)} <u>fixed chance</u> for Luka to use 1 additional hit. This effect does not apply to additional hits generated in this way.
      `,
        },
        b2: {
            id: "b2",
            name: "Kinetic Overload",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Luka", "KineticOverload"),
            description: (i) => `
        When using Skill, immediately dispels ${scaleValue(S.LukaScaling.b2, i, "")} <u>buff(s)</u> from the enemy target.
      `,
        },
        b3: {
            id: "b3",
            name: "Cycle Braking",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Luka", "CycleBraking"),
            description: (i) => `
        For every stack of Fighting Will obtained, additionally regenerates ${scaleValue(S.LukaScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Luka);

const TopazNumby: Character = {
  name: "Topaz & Numby",
  path: Paths.Hunt,
  element: Elements.Fire,
  world: Worlds.InterastralPeaceCorporation, // TODO: Topaz & Numby
  image: charSplash("TopazNumby"),
  pfp: charPfp("TopazNumby"),
  eidolons: Eidolons.TopazNumbyEidolons,

  baseATK: 620,
  baseDEF: 412,
  baseHP: 931,
  baseSPD: 110,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Deficit...",
            type: "basic",
            level: "1/7",
            icon: charIcon("TopazNumby", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.TopazNumbyScaling.attack, i)} of Topaz's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Difficulty Paying?",
            type: "skill",
            level: "1/12",
            icon: charIcon("TopazNumby", "Skill"),
            description: (i) => `
        Inflicts one designated enemy target with a "Proof of Debt" state, increasing the <u>Follow-Up ATK</u> DMG it receives by ${scaleValue(S.TopazNumbyScaling.skill.main, i)}. "Proof of Debt" only takes effect on the most recent target it is applied to. If there are no enemies inflicted with "Proof of Debt" on the field when an ally's turn starts or when an ally takes action, Topaz will inflict a random enemy with "Proof of Debt."\\nNumby deals Fire DMG equal to ${scaleValue(S.TopazNumbyScaling.skill.adjacent, i)} of Topaz's ATK to this target. Using this Skill to deal DMG is considered as launching a <u>Follow-Up ATK</u>.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Turn a Profit!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("TopazNumby", "Ultimate"),
            description: (i) => `
        Numby enters the Windfall Bonanza! state and its DMG multiplier increases by ${scaleValue(S.TopazNumbyScaling.ultimate.main, i)} and CRIT DMG increases by ${scaleValue(S.TopazNumbyScaling.ultimate.adjacent, i)}. Also, when enemies with Proof of Debt are hit by an ally's Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by ${scaleValue(S.TopazNumbyScaling.ultimate.adjacent2, i)}. Numby exits the Windfall Bonanza! state after using ${scaleValue(S.TopazNumbyScaling.ultimate.adjacent3, i, "")} attacks.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Trotter Market!?",
            type: "talent",
            level: "1/12",
            icon: charIcon("TopazNumby", "Talent"),
            description: (i) => `
        Summons Numby at the start of battle. Numby has ${scaleValue(S.TopazNumbyScaling.talent.main, i, "")} SPD by default. When taking action, Numby launches <u>Follow-Up ATKs</u> on one enemy target afflicted with "Proof of Debt," dealing Fire DMG equal to ${scaleValue(S.TopazNumbyScaling.talent.adjacent, i)} of Topaz's ATK.\\nWhen enemies afflicted with "Proof of Debt" receive an ally's Follow-Up ATKs, Numby's action is Advanced Forward by ${scaleValue(S.TopazNumbyScaling.talent.adjacent2, i)}. The action Advance Forward effect cannot be triggered during Numby's own turn.\\nWhen Topaz is <u>downed</u>, Numby disappears.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Explicit Subsidy",
            type: "technique",
            level: "1/1",
            icon: charIcon("TopazNumby", "Technique"),
            description: (i) => `
        Summons Numby when Topaz enters the overworld. Numby will automatically search for Basic Treasures and Trotters within a set radius.\\nUsing her Technique will regenerate ${scaleValue(S.TopazNumbyScaling.technique.main, i, "")} Energy for Topaz after Numby's first attack in the next battle.\\nIf Topaz is still in the team after using her Technique and defeating overworld enemies, a small bonus amount of credits will be added to the earned credits. A maximum of ${scaleValue(S.TopazNumbyScaling.technique.adjacent, i, "")} bonus credits can be received per calendar day.\\nAfter using her Technique and defeating enemies in Simulated Universe or Divergent Universe, additionally receive a small amount of Cosmic Fragments with a small chance to obtain 1 random Curio.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Stonks Market",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TopazNumby", "StonksMarket"),
            description: (i) => `
        After Numby uses an attack while in the Windfall Bonanza! state, Topaz additionally regenerates ${scaleValue(S.TopazNumbyScaling.b1, i, "")} Energy.
      `,
        },
        b2: {
            id: "b2",
            name: "Overdraft",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TopazNumby", "Overdraft"),
            description: "When Topaz uses Basic ATK to deal DMG, it is considered as a <u>Follow-Up ATK</u>.",
        },
        b3: {
            id: "b3",
            name: "Financial Turmoil",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TopazNumby", "FinancialTurmoil"),
            description: (i) => `
        Increases Topaz & Numby's DMG dealt to enemy targets with Fire Weakness by ${scaleValue(S.TopazNumbyScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(TopazNumby);

const Qingque: Character = {
  name: "Qingque",
  path: Paths.Erudition,
  element: Elements.Quantum,
  world: Worlds.TheXianzhouLuofu, // TODO: Qingque
  image: charSplash("Qingque"),
  pfp: charPfp("Qingque"),
  eidolons: Eidolons.QingqueEidolons,

  baseATK: 652,
  baseDEF: 441,
  baseHP: 1023,
  baseSPD: 98,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Flower Pick",
            type: "basic",
            level: "1/7",
            icon: charIcon("Qingque", "BasicATK"),
            description: (i) => `
        Tosses 1 jade tile from the suit with the fewest tiles in hand to deal Quantum DMG equal to ${scaleValue(S.QingqueScaling.attack, i)} of Qingque's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: A Scoop of Moon",
            type: "skill",
            level: "1/12",
            icon: charIcon("Qingque", "Skill"),
            description: (i) => `
        Immediately draws ${scaleValue(S.QingqueScaling.skill.main, i, "")} jade tile(s) and increases DMG by ${scaleValue(S.QingqueScaling.skill.adjacent, i)} until the end of the current turn. This effect can stack up to ${scaleValue(S.QingqueScaling.skill.adjacent2, i, "")} time(s). The turn will not end after this Skill is used.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: A Quartet? Woo-hoo!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Qingque", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.QingqueScaling.ultimate, i)} of Qingque's ATK to all enemies, and obtains 4 jade tiles of the same suit.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Celestial Jade",
            type: "talent",
            level: "1/12",
            icon: charIcon("Qingque", "Talent"),
            description: (i) => `
        When an ally's turn starts, Qingque randomly draws 1 tile from 3 different suits and can hold up to 4 tiles at one time.\\nIf Qingque starts her turn with 4 tiles of the same suit, she consumes all tiles to enter the "Hidden Hand" state.\\nWhile in this state, Qingque cannot use her Skill again. At the same time, Qingque's ATK increases by ${scaleValue(S.QingqueScaling.talent, i)}, and her Basic ATK "Flower Pick" is enhanced, becoming "Cherry on Top!" The "Hidden Hand" state ends after using "Cherry on Top!".
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Game Solitaire",
            type: "technique",
            level: "1/1",
            icon: charIcon("Qingque", "Technique"),
            description: (i) => `
        After using Technique, Qingque draws ${scaleValue(S.QingqueScaling.technique, i, "")} jade tile(s) when the battle starts.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Winning Hand",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Qingque", "WinningHand"),
            description: (i) => `
        Qingque's SPD increases by ${scaleValue(S.QingqueScaling.b1, i)} for 1 turn after using the Enhanced Basic ATK.
      `,
        },
        b2: {
            id: "b2",
            name: "Tile Battle",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Qingque", "TileBattle"),
            description: "Restores 1 Skill Point when using the Skill. This effect can only be triggered 1 time per battle.",
        },
        b3: {
            id: "b3",
            name: "Bide Time",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Qingque", "BideTime"),
            description: (i) => `
        Using the Skill increases DMG Boost effect of attacks by an extra ${scaleValue(S.QingqueScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Qingque);

const Tingyun: Character = {
  name: "Tingyun",
  path: Paths.Harmony,
  element: Elements.Lightning,
  world: Worlds.TheXianzhouLuofu, // TODO: Tingyun
  image: charSplash("Tingyun"),
  pfp: charPfp("Tingyun"),
  eidolons: Eidolons.TingyunEidolons,

  baseATK: 529,
  baseDEF: 396,
  baseHP: 846,
  baseSPD: 112,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Dislodged",
            type: "basic",
            level: "1/7",
            icon: charIcon("Tingyun", "BasicATK"),
            description: (i) => `
        Tingyun deals Lightning DMG equal to ${scaleValue(S.TingyunScaling.attack, i)} of her ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Soothing Melody",
            type: "skill",
            level: "1/12",
            icon: charIcon("Tingyun", "Skill"),
            description: (i) => `
        Grants a single ally with Benediction to increase their ATK by ${scaleValue(S.TingyunScaling.skill.main, i)}, up to ${scaleValue(S.TingyunScaling.skill.adjacent, i)} of Tingyun's current ATK.\\nWhen the ally with Benediction attacks, they will deal Lightning <u>Additional DMG</u> equal to ${scaleValue(S.TingyunScaling.skill.adjacent2, i)} of that ally's ATK for 1 time.\\nBenediction lasts for ${scaleValue(S.TingyunScaling.skill.adjacent3, i, "")} turn(s) and is only effective on the most recent receiver of Tingyun's Skill.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Amidst the Rejoicing Clouds",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Tingyun", "Ultimate"),
            description: (i) => `
        Regenerates ${scaleValue(S.TingyunScaling.ultimate.main, i, "")} Energy for a single ally and increases the target's DMG by ${scaleValue(S.TingyunScaling.ultimate.adjacent, i)} for ${scaleValue(S.TingyunScaling.ultimate.adjacent2, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Violet Sparknado",
            type: "talent",
            level: "1/12",
            icon: charIcon("Tingyun", "Talent"),
            description: (i) => `
        When an enemy is attacked by Tingyun, the ally with Benediction immediately deals Lightning <u>Additional DMG</u> equal to ${scaleValue(S.TingyunScaling.talent, i)} of that ally's ATK to the same enemy.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Gentle Breeze",
            type: "technique",
            level: "1/1",
            icon: charIcon("Tingyun", "Technique"),
            description: (i) => `
        Tingyun immediately regenerates ${scaleValue(S.TingyunScaling.technique, i, "")} Energy upon using her Technique.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Jubilant Passage",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Tingyun", "JubilantPassage"),
            description: (i) => `
        Tingyun immediately regenerates ${scaleValue(S.TingyunScaling.b1, i, "")} Energy at the start of her turn.
      `,
        },
        b2: {
            id: "b2",
            name: "Nourished Joviality",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Tingyun", "NourishedJoviality"),
            description: (i) => `
        Tingyun's SPD increases by ${scaleValue(S.TingyunScaling.b2, i)} for 1 turn after using Skill.
      `,
        },
        b3: {
            id: "b3",
            name: "Knell Subdual",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Tingyun", "KnellSubdual"),
            description: (i) => `
        DMG dealt by Basic ATK increases by ${scaleValue(S.TingyunScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>4.8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Tingyun);

const Luocha: Character = {
  name: "Luocha",
  path: Paths.Abundance,
  element: Elements.Imaginary,
  world: Worlds.TheXianzhouLuofu, // TODO: Luocha
  image: charSplash("Luocha"),
  pfp: charPfp("Luocha"),
  eidolons: Eidolons.LuochaEidolons,

  baseATK: 756,
  baseDEF: 363,
  baseHP: 1280,
  baseSPD: 101,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Thorns of the Abyss",
            type: "basic",
            level: "1/7",
            icon: charIcon("Luocha", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.LuochaScaling.attack, i)} of Luocha's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Prayer of Abyss Flower",
            type: "skill",
            level: "1/12",
            icon: charIcon("Luocha", "Skill"),
            description: (i) => `
        After using his Skill, Luocha immediately restores the target ally's HP equal to ${scaleValue(S.LuochaScaling.skill.main, i)} of Luocha's ATK plus ${scaleValue(S.LuochaScaling.skill.adjacent, i, "")}. Meanwhile, Luocha gains 1 stack of Abyss Flower.\\nWhen any ally's HP percentage drops to ${scaleValue(S.LuochaScaling.skill.adjacent2, i)} or lower, an effect equivalent to Luocha's Skill will immediately be triggered and applied to this ally for one time (without consuming Skill Points). This effect can be triggered again after ${scaleValue(S.LuochaScaling.skill.adjacent3, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Death Wish",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Luocha", "Ultimate"),
            description: (i) => `
        Removes ${scaleValue(S.LuochaScaling.ultimate.main, i, "")} <u>buff(s)</u> from all enemies and deals all enemies Imaginary DMG equal to ${scaleValue(S.LuochaScaling.ultimate.adjacent, i)} of Luocha's ATK. At the same time, Luocha gains 1 stack of Abyss Flower.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Cycle of Life",
            type: "talent",
            level: "1/12",
            icon: charIcon("Luocha", "Talent"),
            description: (i) => `
        When Abyss Flower reaches ${scaleValue(S.LuochaScaling.talent.main, i, "")} stacks, Luocha consumes all stacks of Abyss Flower to deploy a Zone against the enemy.\\nWhen any enemy in the Zone is attacked by an ally, the attacking ally's HP is immediately restored by an amount equal to ${scaleValue(S.LuochaScaling.talent.adjacent, i)} of Luocha's ATK plus ${scaleValue(S.LuochaScaling.talent.adjacent2, i, "")}.\\nThe Zone's effect lasts for ${scaleValue(S.LuochaScaling.talent.adjacent3, i, "")} turns. When Luocha is <u>knocked down</u>, the Zone will be dispelled.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Mercy of a Fool",
            type: "technique",
            level: "1/1",
            icon: charIcon("Luocha", "Technique"),
            description: "After the Technique is used, the Talent will be immediately triggered at the start of the next battle.",
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Through the Valley",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Luocha", "ThroughtheValley"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.LuochaScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Cleansing Revival",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Luocha", "CleansingRevival"),
            description: (i) => `
        When Skill's effect is triggered, dispel ${scaleValue(S.LuochaScaling.b2, i, "")} <u>debuff(s)</u> from one designated ally.
      `,
        },
        b3: {
            id: "b3",
            name: "Sanctified",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Luocha", "Sanctified"),
            description: (i) => `
        When any enemy in the Zone is attacked by an ally, all allies (except the attacker) restore HP equal to ${scaleValue(S.LuochaScaling.b3.main, i)} of Luocha's ATK plus ${scaleValue(S.LuochaScaling.b3.adjacent, i, "")}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Luocha);

const JingYuan: Character = {
  name: "Jing Yuan",
  path: Paths.Erudition,
  element: Elements.Lightning,
  world: Worlds.TheXianzhouLuofu, // TODO: Jing Yuan
  image: charSplash("JingYuan"),
  pfp: charPfp("JingYuan"),
  eidolons: Eidolons.JingYuanEidolons,

  baseATK: 698,
  baseDEF: 485,
  baseHP: 1164,
  baseSPD: 99,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Glistening Light",
            type: "basic",
            level: "1/7",
            icon: charIcon("JingYuan", "BasicATK"),
            description: (i) => `
        Jing Yuan deals Lightning DMG equal to ${scaleValue(S.JingYuanScaling.attack, i)} of his ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Rifting Zenith",
            type: "skill",
            level: "1/12",
            icon: charIcon("JingYuan", "Skill"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.JingYuanScaling.skill.main, i)} of Jing Yuan's ATK to all enemies and increases Lightning-Lord's Hits Per Action by ${scaleValue(S.JingYuanScaling.skill.adjacent, i, "")} for the next turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Lightbringer",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("JingYuan", "Ultimate"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.JingYuanScaling.ultimate.main, i)} of Jing Yuan's ATK to all enemies and increases Lightning-Lord's Hits Per Action by ${scaleValue(S.JingYuanScaling.ultimate.adjacent, i, "")} for the next turn.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Prana Extirpated",
            type: "talent",
            level: "1/12",
            icon: charIcon("JingYuan", "Talent"),
            description: (i) => `
        Summons "Lightning-Lord" at the start of the battle. "Lightning-Lord" has ${scaleValue(S.JingYuanScaling.talent.main, i, "")} base SPD and ${scaleValue(S.JingYuanScaling.talent.adjacent, i, "")} base Hits Per Action. When the Lightning-Lord takes action, its hits are considered as <u>Follow-Up ATKs</u>, with each hit dealing Lightning DMG equal to ${scaleValue(S.JingYuanScaling.talent.adjacent2, i)} of Jing Yuan's ATK to a random single enemy, and enemies adjacent to it also receive Lightning DMG equal to ${scaleValue(S.JingYuanScaling.talent.adjacent3, i)} of the DMG dealt to the primary target enemy.\\nThe Lightning-Lord's Hits Per Action can reach a max of ${scaleValue(S.JingYuanScaling.talent.adjacent4, i, "")}. Every time "Lightning-Lord's" Hits Per Action increases by 1, its SPD increases by ${scaleValue(S.JingYuanScaling.talent.adjacent5, i, "")}. After the "Lightning-Lord's" action ends, its SPD and Hits Per Action return to their base values.\\nWhen Jing Yuan is <u>knocked down</u>, the "Lightning-Lord" will disappear.\\nWhen Jing Yuan is affected by <u>Crowd Control debuff</u>, the "Lightning-Lord" is unable to take action.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Spiritus Invocation",
            type: "technique",
            level: "1/1",
            icon: charIcon("JingYuan", "Technique"),
            description: (i) => `
        After the Technique is used, the Lightning-Lord's Hits Per Action in the first turn increases by ${scaleValue(S.JingYuanScaling.technique, i, "")} at the start of the next battle.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "War Marshal",
            type: "bonus",
            level: "1/1",
            icon: charIcon("JingYuan", "WarMarshal"),
            description: (i) => `
        After the Skill is used, the CRIT Rate increases by ${scaleValue(S.JingYuanScaling.b1.main, i)} for ${scaleValue(S.JingYuanScaling.b1.adjacent, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Battalia Crush",
            type: "bonus",
            level: "1/1",
            icon: charIcon("JingYuan", "BattaliaCrush"),
            description: (i) => `
        If the Lightning-Lord's Hits Per Action is greater or equal to ${scaleValue(S.JingYuanScaling.b2.main, i, "")} in the next turn, its CRIT DMG increases by ${scaleValue(S.JingYuanScaling.b2.adjacent, i)} for the next turn.
      `,
        },
        b3: {
            id: "b3",
            name: "Savant Providence",
            type: "bonus",
            level: "1/1",
            icon: charIcon("JingYuan", "SavantProvidence"),
            description: (i) => `
        At the start of the battle, immediately regenerates ${scaleValue(S.JingYuanScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s3: {
                id: "s3",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(JingYuan);

const Blade: Character = {
  name: "Blade",
  path: Paths.Destruction,
  element: Elements.Wind,
  world: Worlds.StellaronHunters, // TODO: Blade
  image: charSplash("Blade"),
  pfp: charPfp("Blade"),
  eidolons: Eidolons.BladeEidolons,

  baseATK: 543,
  baseDEF: 485,
  baseHP: 1358,
  baseSPD: 97,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Shard Sword",
            type: "basic",
            level: "1/7",
            icon: charIcon("Blade", "BasicATK"),
            description: (i) => `
        Deals ${scaleValue(S.BladeScaling.attack, i)} of Blade's ATK as Wind DMG to a target enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Hellscape",
            type: "skill",
            level: "1/12",
            icon: charIcon("Blade", "Skill"),
            description: (i) => `
        Consumes HP equal to ${scaleValue(S.BladeScaling.skill.main, i)} of Blade's Max HP to enter the Hellscape state.\\nWhen Hellscape is active, his Skill cannot be used, his DMG dealt increases by ${scaleValue(S.BladeScaling.skill.adjacent, i)}, and his Basic ATK Shard Sword is enhanced to Forest of Swords for ${scaleValue(S.BladeScaling.skill.adjacent2, i, "")} turn(s).\\nIf Blade's current HP is insufficient, his HP will be reduced to 1 when he uses his Skill.\\nThis Skill does not regenerate Energy. Using this Skill does not end the current turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Death Sentence",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Blade", "Ultimate"),
            description: (i) => `
        Sets Blade's current HP to 50% of his Max HP and deals Wind DMG to one enemy equal to the sum of ${scaleValue(S.BladeScaling.ultimate.main, i)} of his ATK, ${scaleValue(S.BladeScaling.ultimate.adjacent, i)} of his Max HP, and ${scaleValue(S.BladeScaling.ultimate.adjacent2, i)} of the tally of Blade's HP loss in the current battle. At the same time, deals Wind DMG to adjacent targets equal to the sum of ${scaleValue(S.BladeScaling.ultimate.adjacent3, i)} of his ATK, ${scaleValue(S.BladeScaling.ultimate.adjacent4, i)} of his Max HP, and ${scaleValue(S.BladeScaling.ultimate.adjacent5, i)} of the tally of his HP loss in the current battle.\\nThe tally of Blade's HP loss in the current battle is capped at ${scaleValue(S.BladeScaling.ultimate.adjacent6, i)} of his Max HP. This value will be reset and re-accumulated after his Ultimate has been used.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Shuhu's Gift",
            type: "talent",
            level: "1/12",
            icon: charIcon("Blade", "Talent"),
            description: (i) => `
        When Blade sustains DMG or consumes his HP, he gains 1 stack of Charge, stacking up to 5 times. A max of 1 Charge stack can be gained every time he is attacked.\\nWhen Charge stack reaches maximum, immediately launches a <u>Follow-Up ATK</u> on all enemies, dealing Wind DMG equal to ${scaleValue(S.BladeScaling.talent.main, i)} of Blade's ATK plus ${scaleValue(S.BladeScaling.talent.adjacent, i)} of his Max HP. At the same time, restores Blade's HP by ${scaleValue(S.BladeScaling.talent.adjacent2, i)} of his Max HP. After the Follow-Up ATK, all Charges are consumed.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Karma Wind",
            type: "technique",
            level: "1/1",
            icon: charIcon("Blade", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering combat, consumes ${scaleValue(S.BladeScaling.technique.main, i)} of Blade's Max HP while dealing Wind DMG equal to ${scaleValue(S.BladeScaling.technique.adjacent, i)} of his Max HP to all enemies.\\nIf Blade's current HP is insufficient, his HP will be reduced to 1 when this Technique is used.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Cyclone of Destruction",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Blade", "CycloneofDestruction"),
            description: (i) => `
        Increases DMG dealt by the Talent's <u>Follow-Up ATK</u> by ${scaleValue(S.BladeScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Vita Infinita",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Blade", "VitaInfinita"),
            description: (i) => `
        When Blade's current HP percentage is at 50% of Max HP or lower, the HP restored when receiving healing increases by ${scaleValue(S.BladeScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Neverending Deaths",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Blade", "NeverendingDeaths"),
            description: (i) => `
        If Blade hits a <u>Weakness Broken</u> enemy after using "Forest of Swords," he will restore HP equal to ${scaleValue(S.BladeScaling.b3.main, i)} of his Max HP plus ${scaleValue(S.BladeScaling.b3.adjacent, i, "")}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Blade);

const Sushang: Character = {
  name: "Sushang",
  path: Paths.Hunt,
  element: Elements.Physical,
  world: Worlds.TheXianzhouLuofu, // TODO: Sushang
  image: charSplash("Sushang"),
  pfp: charPfp("Sushang"),
  eidolons: Eidolons.SushangEidolons,

  baseATK: 564,
  baseDEF: 418,
  baseHP: 917,
  baseSPD: 107,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Cloudfencer Art: Starshine",
            type: "basic",
            level: "1/7",
            icon: charIcon("Sushang", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.SushangScaling.attack, i)} of Sushang's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Cloudfencer Art: Mountainfall",
            type: "skill",
            level: "1/12",
            icon: charIcon("Sushang", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.SushangScaling.skill.main, i)} of Sushang's ATK to one designated enemy. In addition, there is a ${scaleValue(S.SushangScaling.skill.adjacent, i)} chance to trigger "Sword Stance" on the final hit, dealing Physical <u>Additional DMG</u> equal to ${scaleValue(S.SushangScaling.skill.adjacent2, i)} of Sushang's ATK to the enemy.\\nIf the enemy is inflicted with <u>Weakness Break</u>, "Sword Stance" is guaranteed to trigger.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Shape of Taixu: Dawn Herald",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Sushang", "Ultimate"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.SushangScaling.ultimate.main, i)} of Sushang's ATK to one designated enemy target, and she immediately takes action. In addition, Sushang's ATK increases by ${scaleValue(S.SushangScaling.ultimate.adjacent, i)} and using her Skill has 2 extra chances to trigger "Sword Stance" for ${scaleValue(S.SushangScaling.ultimate.adjacent2, i, "")} turn(s).\\n"Sword Stance" triggered from the extra chances deals ${scaleValue(S.SushangScaling.ultimate.adjacent3, i)} of the original DMG.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Dancing Blade",
            type: "talent",
            level: "1/12",
            icon: charIcon("Sushang", "Talent"),
            description: (i) => `
        When an enemy has their Weakness Broken on the field, Sushang's SPD increases by ${scaleValue(S.SushangScaling.talent.main, i)} for ${scaleValue(S.SushangScaling.talent.adjacent, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Cloudfencer Art: Warcry",
            type: "technique",
            level: "1/1",
            icon: charIcon("Sushang", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. Upon entering battle, Sushang deals Physical DMG equal to ${scaleValue(S.SushangScaling.technique, i)} of her ATK to all enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Vanquisher",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sushang", "Vanquisher"),
            description: (i) => `
        After using Basic ATK or Skill, if there are enemies on the field that are <u>Weakness Broken</u>, Sushang's <u>action advances</u> by ${scaleValue(S.SushangScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Guileless",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sushang", "Guileless"),
            description: (i) => `
        When current HP percentage is ${scaleValue(S.SushangScaling.b2, i)} or lower, reduces the chance of being attacked by enemies.
      `,
        },
        b3: {
            id: "b3",
            name: "Riposte",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sushang", "Riposte"),
            description: (i) => `
        For every Sword Stance triggered, the DMG dealt by Sword Stance increases by ${scaleValue(S.SushangScaling.b3.main, i)}. Stacks up to ${scaleValue(S.SushangScaling.b3.adjacent, i, "")} time(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Sushang);

const Yukong: Character = {
  name: "Yukong",
  path: Paths.Harmony,
  element: Elements.Imaginary,
  world: Worlds.TheXianzhouLuofu, // TODO: Yukong
  image: charSplash("Yukong"),
  pfp: charPfp("Yukong"),
  eidolons: Eidolons.YukongEidolons,

  baseATK: 599,
  baseDEF: 374,
  baseHP: 917,
  baseSPD: 107,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Arrowslinger",
            type: "basic",
            level: "1/7",
            icon: charIcon("Yukong", "BasicATK"),
            description: (i) => `
        Deals ${scaleValue(S.YukongScaling.attack, i)} of Yukong's ATK as Imaginary DMG to a target enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Emboldening Salvo",
            type: "skill",
            level: "1/12",
            icon: charIcon("Yukong", "Skill"),
            description: (i) => `
        Obtains ${scaleValue(S.YukongScaling.skill.main, i, "")} stack(s) of "Roaring Bowstrings" (to a maximum of 2 stacks). When "Roaring Bowstrings" is active, the ATK of all allies increases by ${scaleValue(S.YukongScaling.skill.adjacent, i)}, and every time an ally's turn (including Yukong's) ends, Yukong loses 1 stack of "Roaring Bowstrings."\\nWhen it's the turn where Yukong gains "Roaring Bowstrings" by using Skill, "Roaring Bowstrings" will not be removed.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Diving Kestrel",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Yukong", "Ultimate"),
            description: (i) => `
        If "Roaring Bowstrings" is active on Yukong when her Ultimate is used, additionally increases all allies' CRIT Rate by ${scaleValue(S.YukongScaling.ultimate.main, i)} and CRIT DMG by ${scaleValue(S.YukongScaling.ultimate.adjacent, i)}. At the same time, deals Imaginary DMG equal to ${scaleValue(S.YukongScaling.ultimate.adjacent2, i)} of Yukong's ATK to one designated enemy.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Seven Layers, One Arrow",
            type: "talent",
            level: "1/12",
            icon: charIcon("Yukong", "Talent"),
            description: (i) => `
        Basic ATK additionally deals Imaginary DMG equal to ${scaleValue(S.YukongScaling.talent.main, i)} of Yukong's ATK, and increases the Toughness Reduction of this attack by ${scaleValue(S.YukongScaling.talent.adjacent, i)}. This effect can be triggered again after ${scaleValue(S.YukongScaling.talent.adjacent2, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Windchaser",
            type: "technique",
            level: "1/1",
            icon: charIcon("Yukong", "Technique"),
            description: (i) => `
        After using her Technique, Yukong enters Sprint mode for ${scaleValue(S.YukongScaling.technique.main, i, "")} seconds. In Sprint mode, her movement speed increases by ${scaleValue(S.YukongScaling.technique.adjacent, i)}, and Yukong gains ${scaleValue(S.YukongScaling.technique.adjacent2, i, "")} stack(s) of "Roaring Bowstrings" when she enters combat by attacking enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Majestas",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yukong", "Majestas"),
            description: (i) => `
        When "Roaring Bowstrings" is active, Yukong regenerates ${scaleValue(S.YukongScaling.b1, i, "")} additional Energy every time an ally takes action.
      `,
        },
        b2: {
            id: "b2",
            name: "Archerion",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yukong", "Archerion"),
            description: (i) => `
        Yukong can resist 1 <u>debuff</u> application for 1 time. This effect can be triggered again after ${scaleValue(S.YukongScaling.b2, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Bowmaster",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yukong", "Bowmaster"),
            description: (i) => `
        When Yukong is on the field, Imaginary DMG dealt by all allies increases by ${scaleValue(S.YukongScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Yukong);

const FuXuan: Character = {
  name: "Fu Xuan",
  path: Paths.Preservation,
  element: Elements.Quantum,
  world: Worlds.TheXianzhouLuofu, // TODO: Fu Xuan
  image: charSplash("FuXuan"),
  pfp: charPfp("FuXuan"),
  eidolons: Eidolons.FuXuanEidolons,

  baseATK: 465,
  baseDEF: 606,
  baseHP: 1474,
  baseSPD: 100,
  aggro: 150,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Novaburst",
            type: "basic",
            level: "1/7",
            icon: charIcon("FuXuan", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.FuXuanScaling.attack, i)} of Fu Xuan's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Known by Stars, Shown by Hearts",
            type: "skill",
            level: "1/12",
            icon: charIcon("FuXuan", "Skill"),
            description: (i) => `
        Activates Matrix of Prescience, via which Fu Xuan's teammates will <u>Distribute</u> ${scaleValue(S.FuXuanScaling.skill.main, i)} of the DMG they receive (before this DMG is mitigated by any Shields) to Fu Xuan for ${scaleValue(S.FuXuanScaling.skill.adjacent, i, "")} turn(s).\\nWhile affected by Matrix of Prescience, all ally targets gain the Knowledge effect, which increases their respective Max HP by ${scaleValue(S.FuXuanScaling.skill.adjacent2, i)} of Fu Xuan's Max HP, and increases CRIT Rate by ${scaleValue(S.FuXuanScaling.skill.adjacent3, i)}.\\nWhen Fu Xuan is <u>knocked down</u>, the Matrix of Prescience will be dispelled.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Woes of Many Morphed to One",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("FuXuan", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.FuXuanScaling.ultimate, i)} of Fu Xuan's Max HP to all enemies and obtains 1 trigger count for the HP Restore effect granted by Fu Xuan's Talent.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Bleak Breeds Bliss",
            type: "talent",
            level: "1/12",
            icon: charIcon("FuXuan", "Talent"),
            description: (i) => `
        While Fu Xuan is still active in combat, Misfortune Avoidance is applied to the entire team. With Misfortune Avoidance, allies take ${scaleValue(S.FuXuanScaling.talent.main, i)} less DMG.\\nWhen Fu Xuan's current HP percentage falls to ${scaleValue(S.FuXuanScaling.talent.adjacent, i)} of her Max HP or less, HP Restore will be triggered for Fu Xuan, restoring her HP by ${scaleValue(S.FuXuanScaling.talent.adjacent2, i)} of the amount of HP she is currently missing. This effect cannot be triggered if she receives a killing blow. This effect has 1 trigger count by default and can hold up to a maximum of 2 trigger counts.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Of Fortune Comes Fate",
            type: "technique",
            level: "1/1",
            icon: charIcon("FuXuan", "Technique"),
            description: (i) => `
        After the Technique is used, all team members receive a Barrier, lasting for ${scaleValue(S.FuXuanScaling.technique.main, i, "")} seconds. This Barrier can block all enemy attacks, and the team will not enter combat when attacked. Entering battle while the Barrier is active will have Fu Xuan automatically activate Matrix of Prescience at the start of the battle, lasting for ${scaleValue(S.FuXuanScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Liuren, the Sexagenary",
            type: "bonus",
            level: "1/1",
            icon: charIcon("FuXuan", "LiurentheSexagenary"),
            description: "If a target enemy applies <u>Crowd Control debuffs</u> to allies while the \"Matrix of Prescience\" is active, all allies will resist all <u>Crowd Control debuffs</u> applied by the enemy target during the current action. This effect can only be triggered once. When \"Matrix of Prescience\" is activated again, the number of times this effect can be triggered will reset.",
        },
        b2: {
            id: "b2",
            name: "Taiyi, the Macrocosmic",
            type: "bonus",
            level: "1/1",
            icon: charIcon("FuXuan", "TaiyitheMacrocosmic"),
            description: (i) => `
        When Matrix of Prescience is active, Fu Xuan will regenerate ${scaleValue(S.FuXuanScaling.b2, i, "")} extra Energy when she uses her Skill.
      `,
        },
        b3: {
            id: "b3",
            name: "Dunjia, the Metamystic",
            type: "bonus",
            level: "1/1",
            icon: charIcon("FuXuan", "DunjiatheMetamystic"),
            description: (i) => `
        When Fu Xuan's Ultimate is used, heals all other allies by an amount equal to ${scaleValue(S.FuXuanScaling.b3.main, i)} of Fu Xuan's Max HP plus ${scaleValue(S.FuXuanScaling.b3.adjacent, i, "")}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
  },
};

Characters.push(FuXuan);

const Yanqing: Character = {
  name: "Yanqing",
  path: Paths.Hunt,
  element: Elements.Ice,
  world: Worlds.TheXianzhouLuofu, // TODO: Yanqing
  image: charSplash("Yanqing"),
  pfp: charPfp("Yanqing"),
  eidolons: Eidolons.YanqingEidolons,

  baseATK: 679,
  baseDEF: 412,
  baseHP: 892,
  baseSPD: 109,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Frost Thorn",
            type: "basic",
            level: "1/7",
            icon: charIcon("Yanqing", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.YanqingScaling.attack, i)} of Yanqing's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Darting Ironthorn",
            type: "skill",
            level: "1/12",
            icon: charIcon("Yanqing", "Skill"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.YanqingScaling.skill, i)} of Yanqing's ATK to one designated enemy and activates "Soulsteel Sync" for 1 turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Amidst the Raining Bliss",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Yanqing", "Ultimate"),
            description: (i) => `
        Increases Yanqing's CRIT Rate by ${scaleValue(S.YanqingScaling.ultimate.main, i)}. When "Soulsteel Sync" is active, increases Yanqing's CRIT DMG by an extra ${scaleValue(S.YanqingScaling.ultimate.adjacent, i)}. This <u>buff</u> lasts for one turn. Afterwards, deals Ice DMG equal to ${scaleValue(S.YanqingScaling.ultimate.adjacent2, i)} of Yanqing's ATK to one designated enemy.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: One With the Sword",
            type: "talent",
            level: "1/12",
            icon: charIcon("Yanqing", "Talent"),
            description: (i) => `
        When "Soulsteel Sync" is active, Yanqing is less likely to be attacked by enemies. Yanqing's CRIT Rate increases by ${scaleValue(S.YanqingScaling.talent.main, i)} and his CRIT DMG increases by ${scaleValue(S.YanqingScaling.talent.adjacent, i)}. After Yanqing attacks an enemy, there is a ${scaleValue(S.YanqingScaling.talent.adjacent2, i)} <u>fixed chance</u> to launch <u>Follow-Up ATK</u>, dealing Ice DMG equal to ${scaleValue(S.YanqingScaling.talent.adjacent3, i)} of Yanqing's ATK to the enemy, which has a ${scaleValue(S.YanqingScaling.talent.adjacent4, i)} <u>base chance</u> to Freeze the enemy for 1 turn.\\nThe Frozen target cannot take action and receives Ice <u>Additional DMG</u> equal to ${scaleValue(S.YanqingScaling.talent.adjacent5, i)} of Yanqing's ATK at the beginning of each turn.\\nWhen Yanqing receives DMG, the "Soulsteel Sync" effect will disappear.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: The One True Sword",
            type: "technique",
            level: "1/1",
            icon: charIcon("Yanqing", "Technique"),
            description: (i) => `
        After using his Technique, at the start of the next battle, Yanqing deals ${scaleValue(S.YanqingScaling.technique.main, i)} more DMG for ${scaleValue(S.YanqingScaling.technique.adjacent, i, "")} turn(s) to enemies whose current HP percentage is ${scaleValue(S.YanqingScaling.technique.adjacent2, i)} or higher.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Gentle Blade",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yanqing", "GentleBlade"),
            description: (i) => `
        When a CRIT Hit is triggered, increases SPD by ${scaleValue(S.YanqingScaling.b1.main, i)} for ${scaleValue(S.YanqingScaling.b1.adjacent, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Icing on the Kick",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yanqing", "IcingontheKick"),
            description: (i) => `
        After Yanqing attacks, deals Ice <u>Additional DMG</u> equal to ${scaleValue(S.YanqingScaling.b2, i)} of Yanqing's ATK to enemies with Ice Weakness.
      `,
        },
        b3: {
            id: "b3",
            name: "Frost Favors the Brave",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yanqing", "FrostFavorstheBrave"),
            description: (i) => `
        When Soulsteel Sync is active, Effect RES increases by ${scaleValue(S.YanqingScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Yanqing);

const Guinaifen: Character = {
  name: "Guinaifen",
  path: Paths.Nihility,
  element: Elements.Fire,
  world: Worlds.TheXianzhouLuofu, // TODO: Guinaifen
  image: charSplash("Guinaifen"),
  pfp: charPfp("Guinaifen"),
  eidolons: Eidolons.GuinaifenEidolons,

  baseATK: 582,
  baseDEF: 441,
  baseHP: 882,
  baseSPD: 106,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Standing Ovation",
            type: "basic",
            level: "1/7",
            icon: charIcon("Guinaifen", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.GuinaifenScaling.attack, i)} of Guinaifen's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Blazing Welcome",
            type: "skill",
            level: "1/12",
            icon: charIcon("Guinaifen", "Skill"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.GuinaifenScaling.skill.main, i)} of Guinaifen's ATK to one designated enemy and Fire DMG equal to ${scaleValue(S.GuinaifenScaling.skill.adjacent, i)} of Guinaifen's ATK to any adjacent enemies, with a ${scaleValue(S.GuinaifenScaling.skill.adjacent2, i)} <u>base chance</u> to Burn the target and adjacent targets. When Burned, enemies will take a Fire DoT equal to ${scaleValue(S.GuinaifenScaling.skill.adjacent3, i)} of Guinaifen's ATK at the beginning of each turn, lasting for ${scaleValue(S.GuinaifenScaling.skill.adjacent4, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Watch This Showstopper",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Guinaifen", "Ultimate"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.GuinaifenScaling.ultimate.main, i)} of Guinaifen's ATK to all enemies. If the target enemy is currently inflicted with Burn, then their Burn status immediately produces DMG equal to ${scaleValue(S.GuinaifenScaling.ultimate.adjacent, i)} of their original DMG.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: PatrAeon Benefits",
            type: "talent",
            level: "1/12",
            icon: charIcon("Guinaifen", "Talent"),
            description: (i) => `
        When Guinaifen is on the field, there is a ${scaleValue(S.GuinaifenScaling.talent.main, i)} <u>base chance</u> to apply Firekiss to an enemy after their Burn status causes DMG. While inflicted with Firekiss, the enemy receives ${scaleValue(S.GuinaifenScaling.talent.adjacent, i)} increased DMG, which lasts for ${scaleValue(S.GuinaifenScaling.talent.adjacent2, i, "")} turn(s) and can stack up to ${scaleValue(S.GuinaifenScaling.talent.adjacent3, i, "")} time(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Skill Showcase",
            type: "technique",
            level: "1/1",
            icon: charIcon("Guinaifen", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering battle, deals DMG for ${scaleValue(S.GuinaifenScaling.technique.main, i, "")} time(s), dealing Fire DMG equal to ${scaleValue(S.GuinaifenScaling.technique.adjacent, i)} of Guinaifen's ATK to a random single enemy target each time, with a ${scaleValue(S.GuinaifenScaling.technique.adjacent2, i)} <u>base chance</u> of inflicting Firekiss on them.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Walking on Knives",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Guinaifen", "WalkingonKnives"),
            description: (i) => `
        Deals ${scaleValue(S.GuinaifenScaling.b1, i)} more DMG to Burned enemies.
      `,
        },
        b2: {
            id: "b2",
            name: "High Poles",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Guinaifen", "HighPoles"),
            description: (i) => `
        Basic ATK has a ${scaleValue(S.GuinaifenScaling.b2, i)} <u>base chance</u> of inflicting an enemy with a Burn equivalent to that of Skill.
      `,
        },
        b3: {
            id: "b3",
            name: "Bladed Hoop",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Guinaifen", "BladedHoop"),
            description: (i) => `
        When the battle begins, Guinaifen's <u>action advances</u> by ${scaleValue(S.GuinaifenScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>6.4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Guinaifen);

const Bailu: Character = {
  name: "Bailu",
  path: Paths.Abundance,
  element: Elements.Lightning,
  world: Worlds.TheXianzhouLuofu, // TODO: Bailu
  image: charSplash("Bailu"),
  pfp: charPfp("Bailu"),
  eidolons: Eidolons.BailuEidolons,

  baseATK: 562,
  baseDEF: 485,
  baseHP: 1319,
  baseSPD: 98,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Diagnostic Kick",
            type: "basic",
            level: "1/7",
            icon: charIcon("Bailu", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.BailuScaling.attack, i)} of Bailu's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Singing Among Clouds",
            type: "skill",
            level: "1/12",
            icon: charIcon("Bailu", "Skill"),
            description: (i) => `
        Heals a single ally for ${scaleValue(S.BailuScaling.skill.main, i)} of Bailu's Max HP plus ${scaleValue(S.BailuScaling.skill.adjacent, i, "")}. Bailu then heals random allies ${scaleValue(S.BailuScaling.skill.adjacent2, i, "")} time(s). After each healing, HP restored from the next healing is reduced by ${scaleValue(S.BailuScaling.skill.adjacent3, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Felicitous Thunderleap",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Bailu", "Ultimate"),
            description: (i) => `
        Heals all allies for ${scaleValue(S.BailuScaling.ultimate.main, i)} of Bailu's Max HP plus ${scaleValue(S.BailuScaling.ultimate.adjacent, i, "")}.\\nBailu applies Invigoration to allies that are not already Invigorated. For those already Invigorated, Bailu extends the duration of their Invigoration by 1 turn.\\nThe effect of Invigoration can last for ${scaleValue(S.BailuScaling.ultimate.adjacent2, i, "")} turn(s). This effect cannot stack.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Gourdful of Elixir",
            type: "talent",
            level: "1/12",
            icon: charIcon("Bailu", "Talent"),
            description: (i) => `
        After an ally target with Invigoration is hit, restores the ally's HP for ${scaleValue(S.BailuScaling.talent.main, i)} of Bailu's Max HP plus ${scaleValue(S.BailuScaling.talent.adjacent, i, "")}. This effect can trigger ${scaleValue(S.BailuScaling.talent.adjacent2, i, "")} time(s).\\nWhen Bailu's teammate receives a killing blow, they will not be <u>knocked down</u>. Bailu immediately heals the ally for ${scaleValue(S.BailuScaling.talent.adjacent3, i)} of Bailu's Max HP plus ${scaleValue(S.BailuScaling.talent.adjacent4, i, "")} HP. This effect can be triggered 1 time per battle.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Saunter in the Rain",
            type: "technique",
            level: "1/1",
            icon: charIcon("Bailu", "Technique"),
            description: (i) => `
        After Technique is used, at the start of the next battle, all allies are granted Invigoration for ${scaleValue(S.BailuScaling.technique, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Aquatic Benediction",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Bailu", "AquaticBenediction"),
            description: (i) => `
        Characters with Invigoration receive ${scaleValue(S.BailuScaling.b1, i)} less DMG.
      `,
        },
        b2: {
            id: "b2",
            name: "Qihuang Analects",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Bailu", "QihuangAnalects"),
            description: (i) => `
        When Bailu heals a target ally above their normal Max HP, the target's Max HP increases by ${scaleValue(S.BailuScaling.b2.main, i)} for ${scaleValue(S.BailuScaling.b2.adjacent, i, "")} turns.
      `,
        },
        b3: {
            id: "b3",
            name: "Vidyadhara Ichor Lines",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Bailu", "VidyadharaIchorLines"),
            description: (i) => `
        Invigoration can trigger ${scaleValue(S.BailuScaling.b3, i, "")} more time(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Bailu);

const Jingliu: Character = {
  name: "Jingliu",
  path: Paths.Destruction,
  element: Elements.Ice,
  world: Worlds.TheXianzhouLuofu, // TODO: Jingliu
  image: charSplash("Jingliu"),
  pfp: charPfp("Jingliu"),
  eidolons: Eidolons.JingliuEidolons,

  baseATK: 679,
  baseDEF: 485,
  baseHP: 1435,
  baseSPD: 96,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Lucent Moonglow",
            type: "basic",
            level: "1/7",
            icon: charIcon("Jingliu", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.JingliuScaling.attack, i)} of Jingliu's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Transcendent Flash",
            type: "skill",
            level: "1/12",
            icon: charIcon("Jingliu", "Skill"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.JingliuScaling.skill.main, i)} of Jingliu's ATK to one designated enemy and obtains ${scaleValue(S.JingliuScaling.skill.adjacent, i, "")} stack(s) of "Syzygy."
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Florephemeral Dreamflux",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Jingliu", "Ultimate"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.JingliuScaling.ultimate.main, i)} of Jingliu's ATK to one designated enemy, and deals Ice DMG equal to ${scaleValue(S.JingliuScaling.ultimate.adjacent, i)} of Jingliu's ATK to any adjacent enemies. Gains ${scaleValue(S.JingliuScaling.ultimate.adjacent2, i, "")} stack(s) of "Syzygy" after attack ends.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Crescent Transmigration",
            type: "talent",
            level: "1/12",
            icon: charIcon("Jingliu", "Talent"),
            description: (i) => `
        When Jingliu has ${scaleValue(S.JingliuScaling.talent.main, i, "")} stack(s) of Syzygy, she enters the Spectral Transmigration state with her action advanced by ${scaleValue(S.JingliuScaling.talent.adjacent, i)} and her CRIT Rate increased by ${scaleValue(S.JingliuScaling.talent.adjacent2, i)}. Then, Jingliu's Skill "Transcendent Flash" is enhanced to "Moon On Glacial River," and only this enhanced Skill is available for use in battle. When Jingliu uses an attack in the Spectral Transmigration state, she consumes HP from her teammates equal to ${scaleValue(S.JingliuScaling.talent.adjacent3, i)} of their respective Max HP (this cannot reduce teammates' HP to lower than 1). Jingliu's ATK increases by ${scaleValue(S.JingliuScaling.talent.adjacent4, i)} of the total HP consumed from all allies in this attack, capped at ${scaleValue(S.JingliuScaling.talent.adjacent5, i)} of her base ATK, lasting until the current attack ends. Jingliu cannot enter the Spectral Transmigration state again until the current Spectral Transmigration state ends. Syzygy can stack up to 3 times. When Syzygy stacks become 0, Jingliu will exit the Spectral Transmigration state.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Shine of Truth",
            type: "technique",
            level: "1/1",
            icon: charIcon("Jingliu", "Technique"),
            description: (i) => `
        After using this Technique, creates a Special Dimension around Jingliu that lasts for ${scaleValue(S.JingliuScaling.technique.main, i, "")} seconds, and all enemies in this Special Dimension will become Frozen. After entering combat with enemies in the Special Dimension, Jingliu immediately regenerates ${scaleValue(S.JingliuScaling.technique.adjacent, i, "")} Energy and obtains ${scaleValue(S.JingliuScaling.technique.adjacent2, i, "")} stack(s) of Syzygy, with a ${scaleValue(S.JingliuScaling.technique.adjacent3, i)} <u>base chance</u> of Freezing enemy targets for ${scaleValue(S.JingliuScaling.technique.adjacent4, i, "")} turn(s). While Frozen, enemy targets cannot take action, and receive Ice <u>Additional DMG</u> equal to ${scaleValue(S.JingliuScaling.technique.adjacent5, i)} of Jingliu's ATK at the start of every turn. Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Frost Wraith",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jingliu", "FrostWraith"),
            description: (i) => `
        While in the Spectral Transmigration state, increases DMG dealt by Ultimate by ${scaleValue(S.JingliuScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Deathrealm",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jingliu", "Deathrealm"),
            description: (i) => `
        While in the Spectral Transmigration state, increases Effect RES by ${scaleValue(S.JingliuScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Sword Champion",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jingliu", "SwordChampion"),
            description: (i) => `
        After using "Transcendent Flash," the next <u>action advances</u> by ${scaleValue(S.JingliuScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Jingliu);

const DanHengImbibitorLunae: Character = {
  name: "Dan Heng • Imbibitor Lunae",
  path: Paths.Destruction,
  element: Elements.Imaginary,
  world: Worlds.TheXianzhouLuofu, // TODO: Dan Heng • Imbibitor Lunae
  image: charSplash("DanHengImbibitorLunae"),
  pfp: charPfp("DanHengImbibitorLunae"),
  eidolons: Eidolons.DanHengImbibitorLunaeEidolons,

  baseATK: 698,
  baseDEF: 363,
  baseHP: 1241,
  baseSPD: 102,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Beneficent Lotus",
            type: "basic",
            level: "1/7",
            icon: charIcon("DanHengImbibitorLunae", "BasicATK"),
            description: (i) => `
        Uses a 2-hit attack and deals Imaginary DMG equal to ${scaleValue(S.DanHengImbibitorLunaeScaling.attack, i)} of Dan Heng • Imbibitor Lunae's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Dracore Libre",
            type: "skill",
            level: "1/12",
            icon: charIcon("DanHengImbibitorLunae", "Skill"),
            description: (i) => `
        Enhances Basic ATK. Enhancements may be applied up to 3 times consecutively. Using this ability does not consume Skill Points and is not considered as using a Skill.\\nEnhanced once, Beneficent Lotus becomes Transcendence.\\nEnhanced twice, Beneficent Lotus becomes Divine Spear.\\nEnhanced thrice, Beneficent Lotus becomes Fulgurant Leap.\\nWhen using Divine Spear or Fulgurant Leap, starting from the fourth hit, 1 stack of Outroar is gained before every hit. Each stack of Outroar increases Dan Heng • Imbibitor Lunae's CRIT DMG by ${scaleValue(S.DanHengImbibitorLunaeScaling.skill.main, i)}, for a max of ${scaleValue(S.DanHengImbibitorLunaeScaling.skill.adjacent, i, "")} stacks. These stacks last until the end of his turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Azure's Aqua Ablutes All",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("DanHengImbibitorLunae", "Ultimate"),
            description: (i) => `
        Uses a 3-hit attack and deals Imaginary DMG equal to ${scaleValue(S.DanHengImbibitorLunaeScaling.ultimate.main, i)} of Dan Heng • Imbibitor Lunae's ATK to one designated enemy target. At the same time, deals Imaginary DMG equal to ${scaleValue(S.DanHengImbibitorLunaeScaling.ultimate.adjacent, i)} of Dan Heng • Imbibitor Lunae's ATK to adjacent targets. Then, obtains ${scaleValue(S.DanHengImbibitorLunaeScaling.ultimate.adjacent2, i, "")} "Squama Sacrosancta."\\nIt's possible to hold up to ${scaleValue(S.DanHengImbibitorLunaeScaling.ultimate.adjacent3, i, "")} "Squama Sacrosancta," which can be used to offset Dan Heng • Imbibitor Lunae's consumption of skill points. Consuming "Squama Sacrosancta" is considered equivalent to consuming skill points.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Righteous Heart",
            type: "talent",
            level: "1/12",
            icon: charIcon("DanHengImbibitorLunae", "Talent"),
            description: (i) => `
        After each hit dealt during an attack, Dan Heng • Imbibitor Lunae gains 1 stack of Righteous Heart, increasing his DMG by ${scaleValue(S.DanHengImbibitorLunaeScaling.talent.main, i)}. This effect can stack up to ${scaleValue(S.DanHengImbibitorLunaeScaling.talent.adjacent, i, "")} time(s), lasting until the end of his turn.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Heaven-Quelling Prismadrakon",
            type: "technique",
            level: "1/1",
            icon: charIcon("DanHengImbibitorLunae", "Technique"),
            description: (i) => `
        After using his Technique, Dan Heng • Imbibitor Lunae enters the Leaping Dragon state for ${scaleValue(S.DanHengImbibitorLunaeScaling.technique.main, i, "")} seconds. While in the Leaping Dragon state, using his attack enables him to move forward rapidly for a set distance, attacking all enemies he touches and blocking all incoming attacks. After entering combat via attacking enemies in the Leaping Dragon state, Dan Heng • Imbibitor Lunae deals Imaginary DMG equal to ${scaleValue(S.DanHengImbibitorLunaeScaling.technique.adjacent, i)} of his ATK to all enemies, and gains ${scaleValue(S.DanHengImbibitorLunaeScaling.technique.adjacent2, i, "")} Squama Sacrosancta.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Jolt Anew",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHengImbibitorLunae", "JoltAnew"),
            description: (i) => `
        When dealing DMG to enemy targets with Imaginary Weakness, CRIT DMG increases by ${scaleValue(S.DanHengImbibitorLunaeScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Star Veil",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHengImbibitorLunae", "StarVeil"),
            description: (i) => `
        At the start of the battle, immediately regenerates ${scaleValue(S.DanHengImbibitorLunaeScaling.b2, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Aqua Reign",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHengImbibitorLunae", "AquaReign"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.DanHengImbibitorLunaeScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(DanHengImbibitorLunae);

const Xueyi: Character = {
  name: "Xueyi",
  path: Paths.Destruction,
  element: Elements.Quantum,
  world: Worlds.TheXianzhouLuofu, // TODO: Xueyi
  image: charSplash("Xueyi"),
  pfp: charPfp("Xueyi"),
  eidolons: Eidolons.XueyiEidolons,

  baseATK: 599,
  baseDEF: 396,
  baseHP: 1058,
  baseSPD: 103,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Mara-Sunder Awl",
            type: "basic",
            level: "1/7",
            icon: charIcon("Xueyi", "BasicATK"),
            description: (i) => `
        Deals ${scaleValue(S.XueyiScaling.attack, i)} of Xueyi's ATK as Quantum DMG to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Iniquity Obliteration",
            type: "skill",
            level: "1/12",
            icon: charIcon("Xueyi", "Skill"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.XueyiScaling.skill.main, i)} of Xueyi's ATK to one designated enemy, and Quantum DMG equal to ${scaleValue(S.XueyiScaling.skill.adjacent, i)} of Xueyi's ATK to any adjacent enemies.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Divine Castigation",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Xueyi", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.XueyiScaling.ultimate.main, i)} of Xueyi's ATK to one designated enemy target. This attack ignores Weakness Types and reduces the enemy's Toughness. When the enemy's Weakness is Broken, the Quantum Weakness Break effect is triggered.\\nIn this attack, the more Toughness is reduced, the higher the DMG will be dealt, up to a max of ${scaleValue(S.XueyiScaling.ultimate.adjacent, i)} increase.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Karmic Perpetuation",
            type: "talent",
            level: "1/12",
            icon: charIcon("Xueyi", "Talent"),
            description: (i) => `
        When Xueyi reduces enemy Toughness with attacks, "Karma" will be stacked. The more Toughness is reduced, the more stacks of "Karma" are added, up to ${scaleValue(S.XueyiScaling.talent.main, i, "")} stacks.\\nWhen Xueyi's teammates reduce enemy Toughness with attacks, Xueyi gains ${scaleValue(S.XueyiScaling.talent.adjacent, i, "")} stack(s) of "Karma."\\nWhen "Karma" reaches the max number of stacks, consumes all current "Karma" stacks and immediately launches <u>Follow-Up ATK</u> against an enemy target, dealing DMG for 3 times, with each time dealing Quantum DMG equal to ${scaleValue(S.XueyiScaling.talent.adjacent2, i)} of Xueyi's ATK to a single random enemy. This Follow-Up ATK will not add "Karma" stacks.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Summary Execution",
            type: "technique",
            level: "1/1",
            icon: charIcon("Xueyi", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. After entering combat, deals ${scaleValue(S.XueyiScaling.technique, i)} of Xueyi's ATK as Quantum DMG to all enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Perspicacious Mainframe",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Xueyi", "PerspicaciousMainframe"),
            description: (i) => `
        Xueyi will keep a tally of the number of Karma stacks that exceed the max stack limit, up to ${scaleValue(S.XueyiScaling.b1, i, "")} stacks in the tally. After Xueyi's Talent is triggered, she will gain a corresponding number of tallied Karma stacks.
      `,
        },
        b2: {
            id: "b2",
            name: "Clairvoyant Loom",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Xueyi", "ClairvoyantLoom"),
            description: (i) => `
        Increases DMG dealt by this unit by an amount equal to ${scaleValue(S.XueyiScaling.b2.main, i)} of Break Effect, up to a maximum DMG increase of ${scaleValue(S.XueyiScaling.b2.adjacent, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Intrepid Rollerbearings",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Xueyi", "IntrepidRollerbearings"),
            description: (i) => `
        If the enemy target's Toughness is equal to or higher than ${scaleValue(S.XueyiScaling.b3.main, i)} of their Max Toughness, deals ${scaleValue(S.XueyiScaling.b3.adjacent, i)} more DMG when using Ultimate.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Xueyi);

const Hanya: Character = {
  name: "Hanya",
  path: Paths.Harmony,
  element: Elements.Physical,
  world: Worlds.TheXianzhouLuofu, // TODO: Hanya
  image: charSplash("Hanya"),
  pfp: charPfp("Hanya"),
  eidolons: Eidolons.HanyaEidolons,

  baseATK: 564,
  baseDEF: 352,
  baseHP: 917,
  baseSPD: 110,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Oracle Brush",
            type: "basic",
            level: "1/7",
            icon: charIcon("Hanya", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.HanyaScaling.attack, i)} of Hanya's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Samsara, Locked",
            type: "skill",
            level: "1/12",
            icon: charIcon("Hanya", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.HanyaScaling.skill.main, i)} of Hanya's ATK to one designated enemy target, then applies "Burden" to them.\\nFor every 2 Basic ATKs, Skills, or Ultimates allies use on an enemy with "Burden," allies will immediately recover 1 Skill Point. "Burden" is only active on the latest target it is applied to, and will be dispelled automatically after the Skill Point recovery effect has been triggered ${scaleValue(S.HanyaScaling.skill.adjacent, i, "")} times.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Ten-Lords' Decree, All Shall Obey",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Hanya", "Ultimate"),
            description: (i) => `
        Increases the SPD of a target ally by ${scaleValue(S.HanyaScaling.ultimate.main, i)} of Hanya's SPD and increases the same target ally's ATK by ${scaleValue(S.HanyaScaling.ultimate.adjacent, i)}, lasting for ${scaleValue(S.HanyaScaling.ultimate.adjacent2, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Sanction",
            type: "talent",
            level: "1/12",
            icon: charIcon("Hanya", "Talent"),
            description: (i) => `
        When an ally uses a Basic ATK, Skill, or Ultimate on an enemy inflicted with Burden, the DMG dealt increases by ${scaleValue(S.HanyaScaling.talent.main, i)}, lasting for ${scaleValue(S.HanyaScaling.talent.adjacent, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Netherworld Judgment",
            type: "technique",
            level: "1/1",
            icon: charIcon("Hanya", "Technique"),
            description: "Immediately attacks the enemy. After entering battle, applies Burden equivalent to that applied by the Skill to a random enemy.",
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Reanimated",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hanya", "Reanimated"),
            description: (i) => `
        When Burden's Skill Point recovery effect is triggered, this character regenerates ${scaleValue(S.HanyaScaling.b1, i, "")} Energy.
      `,
        },
        b2: {
            id: "b2",
            name: "Scrivener",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hanya", "Scrivener"),
            description: (i) => `
        Allies triggering Burden's Skill Point recovery effect have their ATK increased by ${scaleValue(S.HanyaScaling.b2.main, i)} for ${scaleValue(S.HanyaScaling.b2.adjacent, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Netherworld",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hanya", "Netherworld"),
            description: (i) => `
        If the trigger count for the Burden's Skill Point recovery effect is ${scaleValue(S.HanyaScaling.b3.main, i, "")} or lower when an enemy with Burden is defeated, then additionally recovers ${scaleValue(S.HanyaScaling.b3.adjacent, i, "")} Skill Point(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Hanya);

const Huohuo: Character = {
  name: "Huohuo",
  path: Paths.Abundance,
  element: Elements.Wind,
  world: Worlds.TheXianzhouLuofu, // TODO: Huohuo
  image: charSplash("Huohuo"),
  pfp: charPfp("Huohuo"),
  eidolons: Eidolons.HuohuoEidolons,

  baseATK: 601,
  baseDEF: 509,
  baseHP: 1358,
  baseSPD: 98,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Banner: Stormcaller",
            type: "basic",
            level: "1/7",
            icon: charIcon("Huohuo", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.HuohuoScaling.attack, i)} of Huohuo's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Talisman: Protection",
            type: "skill",
            level: "1/12",
            icon: charIcon("Huohuo", "Skill"),
            description: (i) => `
        Dispels ${scaleValue(S.HuohuoScaling.skill.main, i, "")} <u>debuff(s)</u> from one designated ally and immediately restores this ally's HP by an amount equal to ${scaleValue(S.HuohuoScaling.skill.adjacent, i)} of Huohuo's Max HP plus ${scaleValue(S.HuohuoScaling.skill.adjacent2, i, "")}. At the same time, restores HP for allies that are adjacent to this target ally by an amount equal to ${scaleValue(S.HuohuoScaling.skill.adjacent3, i)} of Huohuo's Max HP plus ${scaleValue(S.HuohuoScaling.skill.adjacent4, i, "")}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Tail: Spiritual Domination",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Huohuo", "Ultimate"),
            description: (i) => `
        Regenerates Energy for all teammates (i.e., excluding this unit) by an amount equal to ${scaleValue(S.HuohuoScaling.ultimate.main, i)} of their respective Max Energy. At the same time, increases their ATK by ${scaleValue(S.HuohuoScaling.ultimate.adjacent, i)} for ${scaleValue(S.HuohuoScaling.ultimate.adjacent2, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Possession: Ethereal Metaflow",
            type: "talent",
            level: "1/12",
            icon: charIcon("Huohuo", "Talent"),
            description: (i) => `
        After using her Skill, Huohuo gains Divine Provision, lasting for ${scaleValue(S.HuohuoScaling.talent.main, i, "")} turn(s). This duration decreases by 1 turn at the start of Huohuo's every turn. If Huohuo has Divine Provision when an ally's turn starts or when an ally uses their Ultimate, restores HP for that ally by an amount equal to ${scaleValue(S.HuohuoScaling.talent.adjacent, i)} of Huohuo's Max HP plus ${scaleValue(S.HuohuoScaling.talent.adjacent2, i, "")}. At the same time, every ally with ${scaleValue(S.HuohuoScaling.talent.adjacent3, i)} HP percentage or lower receives healing once.\\nWhen Divine Provision is triggered to heal an ally, dispel ${scaleValue(S.HuohuoScaling.talent.adjacent4, i, "")} <u>debuff(s)</u> from that ally. This effect can be triggered up to ${scaleValue(S.HuohuoScaling.talent.adjacent5, i, "")} time(s). Using the skill again resets the effect's trigger count.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Fiend: Impeachment of Evil",
            type: "technique",
            level: "1/1",
            icon: charIcon("Huohuo", "Technique"),
            description: (i) => `
        Huohuo terrorizes surrounding enemies, afflicting Horror-Struck on them. Enemies in Horror-Struck will flee away from Huohuo for ${scaleValue(S.HuohuoScaling.technique.main, i, "")} second(s). When entering battle with enemies in Horror-Struck, there is a ${scaleValue(S.HuohuoScaling.technique.adjacent, i)} <u>base chance</u> of reducing every single enemy's ATK by ${scaleValue(S.HuohuoScaling.technique.adjacent2, i)} for ${scaleValue(S.HuohuoScaling.technique.adjacent3, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Stress Reaction to Horror",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Huohuo", "StressReactiontoHorror"),
            description: (i) => `
        When her Talent is triggered to heal allies, Huohuo regenerates ${scaleValue(S.HuohuoScaling.b1, i, "")} Energy.
      `,
        },
        b2: {
            id: "b2",
            name: "Fearful to Act",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Huohuo", "FearfultoAct"),
            description: (i) => `
        When combat starts, Huohuo gains Divine Provision, lasting for ${scaleValue(S.HuohuoScaling.b2, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "The Cursed One",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Huohuo", "TheCursedOne"),
            description: (i) => `
        Increases the chance to resist <u>Crowd Control debuffs</u> by ${scaleValue(S.HuohuoScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Huohuo);

const Jiaoqiu: Character = {
  name: "Jiaoqiu",
  path: Paths.Nihility,
  element: Elements.Fire,
  world: Worlds.TheXianzhouYaoqing, // TODO: Jiaoqiu
  image: charSplash("Jiaoqiu"),
  pfp: charPfp("Jiaoqiu"),
  eidolons: Eidolons.JiaoqiuEidolons,

  baseATK: 601,
  baseDEF: 509,
  baseHP: 1358,
  baseSPD: 98,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Heart Afire",
            type: "basic",
            level: "1/7",
            icon: charIcon("Jiaoqiu", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.JiaoqiuScaling.attack, i)} of Jiaoqiu's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Scorch Onslaught",
            type: "skill",
            level: "1/12",
            icon: charIcon("Jiaoqiu", "Skill"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.JiaoqiuScaling.skill.main, i)} of Jiaoqiu's ATK to one designated enemy target and Fire DMG equal to ${scaleValue(S.JiaoqiuScaling.skill.adjacent, i)} of Jiaoqiu's ATK to adjacent targets, with a ${scaleValue(S.JiaoqiuScaling.skill.adjacent2, i)} <u>base chance</u> to inflict 1 stack of "Ashen Roast" on the primary target.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Pyrograph Arcanum",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Jiaoqiu", "Ultimate"),
            description: (i) => `
        Sets the number of "Ashen Roast" stacks on enemy targets to the highest number of "Ashen Roast" stacks present on the battlefield. Then, activates a Zone and deals Fire DMG equal to ${scaleValue(S.JiaoqiuScaling.ultimate.main, i)} of Jiaoqiu's ATK to all enemies.\\nWhile inside the Zone, enemy targets receive ${scaleValue(S.JiaoqiuScaling.ultimate.adjacent, i)} increased Ultimate DMG, with a ${scaleValue(S.JiaoqiuScaling.ultimate.adjacent2, i)} <u>base chance</u> of being inflicted with 1 stack of Ashen Roast when taking action. While the Zone exists, this effect can trigger up to ${scaleValue(S.JiaoqiuScaling.ultimate.adjacent3, i, "")} time(s). And for each enemy target, it can only trigger once per turn. This trigger count resets every time Jiaoqiu uses Ultimate.\\nThe Zone lasts for ${scaleValue(S.JiaoqiuScaling.ultimate.adjacent4, i, "")} turn(s), and its duration decreases by 1 at the start of this unit's every turn. If Jiaoqiu gets <u>knocked down</u>, the Zone will also be dispelled.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Quartet Finesse, Octave Finery",
            type: "talent",
            level: "1/12",
            icon: charIcon("Jiaoqiu", "Talent"),
            description: (i) => `
        When Jiaoqiu hits an enemy with Basic ATK, Skill or Ultimate, there is a ${scaleValue(S.JiaoqiuScaling.talent.main, i)} <u>base chance</u> to inflict 1 stack of Ashen Roast on them. At 1 stack, increases DMG received by the enemy by ${scaleValue(S.JiaoqiuScaling.talent.adjacent, i)}. Then, each subsequent stack increases this by ${scaleValue(S.JiaoqiuScaling.talent.adjacent2, i)}.\\nAshen Roast is capped at ${scaleValue(S.JiaoqiuScaling.talent.adjacent3, i, "")} stack(s) and lasts for ${scaleValue(S.JiaoqiuScaling.talent.adjacent4, i, "")} turn(s).\\nWhen an enemy target is afflicted with Ashen Roast, they are also considered as being Burned at the same time, taking Fire DoT equal to ${scaleValue(S.JiaoqiuScaling.talent.adjacent5, i)} of Jiaoqiu's ATK at the start of each turn.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Fiery Queller",
            type: "technique",
            level: "1/1",
            icon: charIcon("Jiaoqiu", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that lasts for ${scaleValue(S.JiaoqiuScaling.technique.main, i, "")} second(s). After entering combat with enemies in this Special Dimension, deals Fire DMG equal to ${scaleValue(S.JiaoqiuScaling.technique.adjacent, i)} of Jiaoqiu's ATK to all enemies, with a ${scaleValue(S.JiaoqiuScaling.technique.adjacent2, i)} <u>base chance</u> of applying 1 "Ashen Roast" stack. Only 1 dimension created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Seared Scent",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jiaoqiu", "SearedScent"),
            description: (i) => `
        While the Zone exists, enemies entering combat will be inflicted with Ashen Roast. The number of stacks applied will match the highest number of "Ashen Roast" stacks possessed by any unit while the Zone is active, with a minimum of ${scaleValue(S.JiaoqiuScaling.b1, i, "")} stack(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Pyre Cleanse",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jiaoqiu", "PyreCleanse"),
            description: (i) => `
        When battle starts, immediately regenerates ${scaleValue(S.JiaoqiuScaling.b2, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Hearth Kindle",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jiaoqiu", "HearthKindle"),
            description: (i) => `
        For every ${scaleValue(S.JiaoqiuScaling.b3.main, i)} of Jiaoqiu's Effect Hit Rate that exceeds ${scaleValue(S.JiaoqiuScaling.b3.adjacent, i)}, additionally increases ATK by ${scaleValue(S.JiaoqiuScaling.b3.adjacent2, i)}, up to ${scaleValue(S.JiaoqiuScaling.b3.adjacent3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s2: {
                id: "s2",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s6: {
                id: "s6",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Jiaoqiu);

const Feixiao: Character = {
  name: "Feixiao",
  path: Paths.Hunt,
  element: Elements.Wind,
  world: Worlds.TheXianzhouYaoqing, // TODO: Feixiao
  image: charSplash("Feixiao"),
  pfp: charPfp("Feixiao"),
  eidolons: Eidolons.FeixiaoEidolons,

  baseATK: 601,
  baseDEF: 388,
  baseHP: 1047,
  baseSPD: 112,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Boltsunder",
            type: "basic",
            level: "1/7",
            icon: charIcon("Feixiao", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.FeixiaoScaling.attack, i)} of Feixiao's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Waraxe",
            type: "skill",
            level: "1/12",
            icon: charIcon("Feixiao", "Skill"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.FeixiaoScaling.skill, i)} of Feixiao's ATK to one designated enemy target. Then, immediately launches 1 extra instance of Talent's <u>Follow-Up ATK</u> against the target.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Terrasplit",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Feixiao", "Ultimate"),
            description: (i) => `
        Deals Wind DMG to one designated enemy target, up to ${scaleValue(S.FeixiaoScaling.ultimate.main, i)} of Feixiao's ATK. During this time, can ignore Weakness Type to reduce the target's Toughness. When the target is not <u>Weakness Broken</u>, Feixiao's Weakness Break Efficiency increases by ${scaleValue(S.FeixiaoScaling.ultimate.adjacent, i)}.\\nDuring the attack, Feixiao first launches "Boltsunder Blitz" or "Waraxe Skyward" on the target, for a total of ${scaleValue(S.FeixiaoScaling.ultimate.adjacent2, i, "")} time(s). At the end, deals Wind DMG equal to ${scaleValue(S.FeixiaoScaling.ultimate.adjacent3, i)} of Feixiao's ATK to the target.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Thunderhunt",
            type: "talent",
            level: "1/12",
            icon: charIcon("Feixiao", "Talent"),
            description: (i) => `
        Can activate Ultimate when "Flying Aureus" reaches ${scaleValue(S.FeixiaoScaling.talent.main, i, "")} points, accumulating up to ${scaleValue(S.FeixiaoScaling.talent.adjacent, i, "")} points. Feixiao gains 1 point of "Flying Aureus" for every ${scaleValue(S.FeixiaoScaling.talent.adjacent2, i, "")} attacks by ally targets. Feixiao's Ultimate attacks do not count towards this number.\\nAfter Feixiao's teammates attack an Enemy target, Feixiao immediately launches <u>Follow-Up ATK</u> against the primary target, dealing Wind DMG equal to ${scaleValue(S.FeixiaoScaling.talent.adjacent3, i)} of Feixiao's ATK. If there is no primary target available to attack, Feixiao attacks a single random enemy instead. This effect can only trigger once per turn and the trigger count resets at the start of Feixiao's turn. When using this attack, increases DMG dealt by this unit by ${scaleValue(S.FeixiaoScaling.talent.adjacent4, i)}, lasting for ${scaleValue(S.FeixiaoScaling.talent.adjacent5, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Stormborn",
            type: "technique",
            level: "1/1",
            icon: charIcon("Feixiao", "Technique"),
            description: (i) => `
        After using Technique, enters the "Onrush" state, lasting for ${scaleValue(S.FeixiaoScaling.technique.main, i, "")} seconds. While in "Onrush," pulls in enemies within a certain range, and increases this unit's movement speed by ${scaleValue(S.FeixiaoScaling.technique.adjacent, i)}. After entering battle, gains ${scaleValue(S.FeixiaoScaling.technique.adjacent2, i, "")} point(s) of "Flying Aureus."\\nWhile in "Onrush," actively attacking will start battle with all pulled enemies. After entering battle, deals Wind DMG equal to ${scaleValue(S.FeixiaoScaling.technique.adjacent3, i)} of Feixiao's ATK to all enemies at the start of each wave. This DMG is guaranteed to CRIT. If more than 1 enemy is pulled in, increases the multiplier of this DMG by ${scaleValue(S.FeixiaoScaling.technique.adjacent4, i)} for each additional enemy pulled in, up to a maximum of ${scaleValue(S.FeixiaoScaling.technique.adjacent5, i)}.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Boltcatch",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Feixiao", "Boltcatch"),
            description: (i) => `
        When using Skill, increases ATK by ${scaleValue(S.FeixiaoScaling.b1.main, i)}, lasting for ${scaleValue(S.FeixiaoScaling.b1.adjacent, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Heavenpath",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Feixiao", "Heavenpath"),
            description: (i) => `
        When the battle starts, gains ${scaleValue(S.FeixiaoScaling.b2, i, "")} point(s) of "Flying Aureus."\\nAt the start of a turn, if no <u>Follow-Up ATK</u> was launched via Talent in the previous turn, then this counts as 1 toward the number of attacks required to gain "Flying Aureus."
      `,
        },
        b3: {
            id: "b3",
            name: "Formshift",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Feixiao", "Formshift"),
            description: (i) => `
        When using Ultimate to deal DMG to an enemy target, it is considered as a <u>Follow-Up ATK</u>. <u>Follow-Up ATKs'</u> CRIT DMG increases by ${scaleValue(S.FeixiaoScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Feixiao);

const Yunli: Character = {
  name: "Yunli",
  path: Paths.Destruction,
  element: Elements.Physical,
  world: Worlds.TheXianzhouYaoqing, // TODO: Yunli
  image: charSplash("Yunli"),
  pfp: charPfp("Yunli"),
  eidolons: Eidolons.YunliEidolons,

  baseATK: 679,
  baseDEF: 460,
  baseHP: 1358,
  baseSPD: 94,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Galespin Summersault",
            type: "basic",
            level: "1/7",
            icon: charIcon("Yunli", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.YunliScaling.attack, i)} of Yunli's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Bladeborne Quake",
            type: "skill",
            level: "1/12",
            icon: charIcon("Yunli", "Skill"),
            description: (i) => `
        Restores HP equal to ${scaleValue(S.YunliScaling.skill.main, i)} of Yunli's ATK plus ${scaleValue(S.YunliScaling.skill.adjacent, i, "")}. Deals Physical DMG equal to ${scaleValue(S.YunliScaling.skill.adjacent2, i)} of Yunli's ATK to one designated enemy target and Physical DMG equal to ${scaleValue(S.YunliScaling.skill.adjacent3, i)} of Yunli's ATK to adjacent targets.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Earthbind, Etherbreak",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Yunli", "Ultimate"),
            description: (i) => `
        Consumes ${scaleValue(S.YunliScaling.ultimate.main, i, "")} Energy. Yunli gains Parry and Taunts all enemies, lasting until the end of the next ally's or enemy's turn. Increases the CRIT DMG dealt by Yunli's next Counter by ${scaleValue(S.YunliScaling.ultimate.adjacent, i)}. When triggering the Counter effect from Talent, launches the <u>Counter</u> "Intuit: Cull" instead and removes the Parry effect. If no Counter is triggered while Parry is active, Yunli will immediately launch the <u>Counter</u> "Intuit: Slash" on a random enemy target.\\n\\n"Intuit: Slash": Deals Physical DMG equal to ${scaleValue(S.YunliScaling.ultimate.adjacent2, i)} of Yunli's ATK to the target, and deals Physical DMG equal to ${scaleValue(S.YunliScaling.ultimate.adjacent3, i)} of Yunli's ATK to adjacent targets.\\n"Intuit: Cull": Deals Physical DMG equal to ${scaleValue(S.YunliScaling.ultimate.adjacent2, i)} of Yunli's ATK to the target, and deals Physical DMG equal to ${scaleValue(S.YunliScaling.ultimate.adjacent3, i)} of Yunli's ATK to adjacent targets. Then, additionally deals ${scaleValue(S.YunliScaling.ultimate.adjacent4, i, "")} instances of DMG, each dealing Physical DMG equal to ${scaleValue(S.YunliScaling.ultimate.adjacent5, i)} of Yunli's ATK to a random single enemy.\\n\\nWhen Yunli deals DMG via this ability, it's considered as dealing Ultimate DMG.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Flashforge",
            type: "talent",
            level: "1/12",
            icon: charIcon("Yunli", "Talent"),
            description: (i) => `
        When Yunli gets attacked by an enemy target, additionally regenerates ${scaleValue(S.YunliScaling.talent.main, i, "")} Energy and immediately launches a <u>Counter</u> on the attacker, dealing Physical DMG equal to ${scaleValue(S.YunliScaling.talent.adjacent, i)} of Yunli's ATK to the attacker and Physical DMG equal to ${scaleValue(S.YunliScaling.talent.adjacent2, i)} of Yunli's ATK to adjacent targets.\\nIf there is no immediate target to Counter, then Counters a random enemy target instead.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Posterior Precedence",
            type: "technique",
            level: "1/1",
            icon: charIcon("Yunli", "Technique"),
            description: (i) => `
        This unit gains the Ward effect, lasting for ${scaleValue(S.YunliScaling.technique.main, i, "")} seconds. During this time, upon entering combat by either attacking enemies or receiving an attack, immediately casts "Intuit: Cull" on a random enemy, and increases the DMG dealt by this attack by ${scaleValue(S.YunliScaling.technique.adjacent, i)}.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "True Sunder",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yunli", "TrueSunder"),
            description: (i) => `
        When using a <u>Counter</u>, increases Yunli's ATK by ${scaleValue(S.YunliScaling.b1, i)}, lasting for 1 turn.
      `,
        },
        b2: {
            id: "b2",
            name: "Fiery Wheel",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yunli", "FieryWheel"),
            description: "After each use of \"Intuit: Slash,\" the next \"Intuit: Slash\" will be replaced by \"Intuit: Cull.\"",
        },
        b3: {
            id: "b3",
            name: "Demon Quell",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Yunli", "DemonQuell"),
            description: (i) => `
        While in the "Parry" state, resists Crowd Control <u>debuffs</u> received and reduces DMG received by ${scaleValue(S.YunliScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Yunli);

const Lingsha: Character = {
  name: "Lingsha",
  path: Paths.Abundance,
  element: Elements.Fire,
  world: Worlds.TheXianzhouYaoqing, // TODO: Lingsha
  image: charSplash("Lingsha"),
  pfp: charPfp("Lingsha"),
  eidolons: Eidolons.LingshaEidolons,

  baseATK: 679,
  baseDEF: 436,
  baseHP: 1358,
  baseSPD: 98,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Votive Incense",
            type: "basic",
            level: "1/7",
            icon: charIcon("Lingsha", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.LingshaScaling.attack, i)} of Lingsha's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Smoke and Splendor",
            type: "skill",
            level: "1/12",
            icon: charIcon("Lingsha", "Skill"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.LingshaScaling.skill.main, i)} of Lingsha's ATK to all enemies and at the same time, restores HP equal to ${scaleValue(S.LingshaScaling.skill.adjacent, i)} of Lingsha's ATK plus ${scaleValue(S.LingshaScaling.skill.adjacent2, i, "")} for all allies. Fuyuan's <u>action advances</u> by ${scaleValue(S.LingshaScaling.skill.adjacent3, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Dripping Mistscape",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Lingsha", "Ultimate"),
            description: (i) => `
        Inflicts "Befog" on all enemies. While in "Befog," targets receive ${scaleValue(S.LingshaScaling.ultimate.main, i)} increased <u>Break DMG</u>, lasting for ${scaleValue(S.LingshaScaling.ultimate.adjacent, i, "")} turn(s).\\nDeals Fire DMG equal to ${scaleValue(S.LingshaScaling.ultimate.adjacent2, i)} of Lingsha's ATK to all enemies, and at the same time restores HP equal to ${scaleValue(S.LingshaScaling.ultimate.adjacent3, i)} of Lingsha's ATK plus ${scaleValue(S.LingshaScaling.ultimate.adjacent4, i, "")} for all allies. Fuyuan's <u>action advances</u> by ${scaleValue(S.LingshaScaling.ultimate.adjacent5, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Mistdance Manifest",
            type: "talent",
            level: "1/12",
            icon: charIcon("Lingsha", "Talent"),
            description: (i) => `
        When using Skill, summons "Fuyuan," with an initial SPD of ${scaleValue(S.LingshaScaling.talent.main, i, "")} and an initial action count of ${scaleValue(S.LingshaScaling.talent.adjacent, i, "")}.\\nWhen taking action, "Fuyuan" launches <u>Follow-Up ATK</u>, dealing Fire DMG equal to ${scaleValue(S.LingshaScaling.talent.adjacent2, i)} of Lingsha's ATK to all enemies. Additionally deals Fire DMG equal to ${scaleValue(S.LingshaScaling.talent.adjacent3, i)} of Lingsha's ATK to one random enemy, and this DMG prioritizes targets that have both Toughness greater than 0 and Fire Weakness. Dispels ${scaleValue(S.LingshaScaling.talent.adjacent4, i, "")} <u>debuff(s)</u> from all allies and restores HP equal to ${scaleValue(S.LingshaScaling.talent.adjacent5, i)} of Lingsha's ATK plus ${scaleValue(S.LingshaScaling.talent.adjacent6, i, "")}.\\n"Fuyuan's" action count can accumulate up to ${scaleValue(S.LingshaScaling.talent.adjacent7, i, "")}. When the action count reaches 0 or when Lingsha is <u>knocked down</u>, "Fuyuan" disappears.\\nWhile "Fuyuan" is on the field, using Skill can increase "Fuyuan's" action count by ${scaleValue(S.LingshaScaling.talent.adjacent, i, "")}.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Wisps of Aurora",
            type: "technique",
            level: "1/1",
            icon: charIcon("Lingsha", "Technique"),
            description: (i) => `
        After using Technique, immediately summons Fuyuan at the start of the next battle and inflicts "Befog" on all enemies, lasting for ${scaleValue(S.LingshaScaling.technique, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Ember's Echo",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Lingsha", "EmbersEcho"),
            description: (i) => `
        While "Fuyuan" is on the field and any ally character takes DMG or consumes HP, if a character in the team has their current HP percentage lower than or equal to ${scaleValue(S.LingshaScaling.b1.main, i)}, "Fuyuan" will immediately launch the Talent's <u>Follow-Up ATK</u> against enemies. This does not consume Fuyuan's action count. This effect can trigger again after ${scaleValue(S.LingshaScaling.b1.adjacent, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Vermilion Waft",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Lingsha", "VermilionWaft"),
            description: (i) => `
        Increases this unit's ATK or Outgoing Healing by an amount equal to ${scaleValue(S.LingshaScaling.b2.main, i)}/${scaleValue(S.LingshaScaling.b2.adjacent, i)} of Break Effect, up to a maximum increase of ${scaleValue(S.LingshaScaling.b2.adjacent2, i)}/${scaleValue(S.LingshaScaling.b2.adjacent3, i)} respectively.
      `,
        },
        b3: {
            id: "b3",
            name: "Sylvan Smoke",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Lingsha", "SylvanSmoke"),
            description: (i) => `
        When using Basic ATK, additionally regenerates ${scaleValue(S.LingshaScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Lingsha);

const Moze: Character = {
  name: "Moze",
  path: Paths.Hunt,
  element: Elements.Lightning,
  world: Worlds.TheXianzhouYaoqing, // TODO: Moze
  image: charSplash("Moze"),
  pfp: charPfp("Moze"),
  eidolons: Eidolons.MozeEidolons,

  baseATK: 599,
  baseDEF: 352,
  baseHP: 811,
  baseSPD: 111,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Hurlthorn",
            type: "basic",
            level: "1/7",
            icon: charIcon("Moze", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.MozeScaling.attack, i)} of Moze's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Fleetwinged Raid",
            type: "skill",
            level: "1/12",
            icon: charIcon("Moze", "Skill"),
            description: (i) => `
        Marks a designated single enemy target as "Prey" and deals to it Lightning DMG equal to ${scaleValue(S.MozeScaling.skill.main, i)} of Moze's ATK, and gains ${scaleValue(S.MozeScaling.skill.adjacent, i, "")} points of Charge.\\nWhen there are no other characters on the field that are capable of combat, Moze cannot use his Skill and dispels the enemy's "Prey" state.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Dash In, Gash Out",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Moze", "Ultimate"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.MozeScaling.ultimate, i)} of Moze's ATK to one designated enemy target, and launches the Talent's <u>Follow-Up ATK</u> against this target. If the target is defeated before this <u>Follow-Up ATK</u> is used, then launches the <u>Follow-Up ATK</u> against a random single enemy instead.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Cascading Featherblade",
            type: "talent",
            level: "1/12",
            icon: charIcon("Moze", "Talent"),
            description: (i) => `
        When "Prey" exists on the field, Moze will enter the <u>Departed</u> state.\\nAfter ally targets attack "Prey," Moze will additionally deal 1 instance of Lightning <u>Additional DMG</u> equal to ${scaleValue(S.MozeScaling.talent.main, i)} of his ATK and consumes 1 point of Charge. For every ${scaleValue(S.MozeScaling.talent.adjacent, i, "")} point(s) of Charge consumed, Moze launches 1 <u>Follow-Up ATK</u> to "Prey," dealing Lightning DMG equal to ${scaleValue(S.MozeScaling.talent.adjacent2, i)} of his ATK. When Charge reaches 0, dispels the target's "Prey" state and resets the tally of Charge points required to launch <u>Follow-Up ATK</u>. Talent's <u>Follow-Up ATK</u> does not consume Charge.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Bated Wings",
            type: "technique",
            level: "1/1",
            icon: charIcon("Moze", "Technique"),
            description: (i) => `
        After using Technique, enters the Stealth state for ${scaleValue(S.MozeScaling.technique.main, i, "")} second(s). While in Stealth, Moze is undetectable by enemies. If Moze attacks enemies to enter combat while in Stealth, increases DMG by ${scaleValue(S.MozeScaling.technique.adjacent, i)}, lasting for ${scaleValue(S.MozeScaling.technique.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Vengewise",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Moze", "Vengewise"),
            description: (i) => `
        When dealing DMG by using Ultimate, it is considered as having launched a <u>Follow-Up ATK</u>. The <u>Follow-Up ATK</u> DMG taken by the "Prey" increases by ${scaleValue(S.MozeScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Nightfeather",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Moze", "Nightfeather"),
            description: (i) => `
        After using Talent's <u>Follow-Up ATK</u>, recovers ${scaleValue(S.MozeScaling.b2.main, i, "")} Skill Point(s). This effect can trigger again after ${scaleValue(S.MozeScaling.b2.adjacent, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Daggerhold",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Moze", "Daggerhold"),
            description: (i) => `
        When Moze dispels his <u>Departed</u> state, his <u>action advances</u> by ${scaleValue(S.MozeScaling.b3.main, i)}. At the start of each wave, Moze's <u>action advances</u> by ${scaleValue(S.MozeScaling.b3.adjacent, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Moze);

const March7thHunt: Character = {
  name: "March 7th Hunt",
  path: Paths.Hunt,
  element: Elements.Imaginary,
  world: Worlds.TheXianzhouYaoqing, // TODO: March 7th
  image: charSplash("MarchHunt"),
  pfp: charPfp("MarchHunt"),
  eidolons: Eidolons.PreservationMarch7thEidolons,

  baseATK: 564,
  baseDEF: 441,
  baseHP: 1058,
  baseSPD: 102,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: My Sword Zaps Demons",
            type: "basic",
            level: "1/7",
            icon: charIcon("March7th", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.March7thHuntScaling.attack.main, i)} of March 7th's ATK to one designated enemy target and gains ${scaleValue(S.March7thHuntScaling.attack.adjacent, i, "")} point(s) of Charge.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Master, It's Tea Time!",
            type: "skill",
            level: "1/12",
            icon: charIcon("March7th", "Skill"),
            description: (i) => `
        Designates one ally (excluding this unit) as "Shifu" and increases "Shifu"'s SPD by ${scaleValue(S.March7thHuntScaling.skill.main, i)}. Only the most recent target of March 7th's Skill is considered as "Shifu."\\nWhenever using Basic ATK or dealing 1 hit of Enhanced Basic ATK's DMG, triggers the corresponding effect if "Shifu" with the specified Path is present on the field:\\nErudition, Destruction, The Hunt, Remembrance, Elation: Deals <u>Additional DMG</u> (DMG Type based on "Shifu"'s Combat Type) equal to ${scaleValue(S.March7thScaling.skill.adjacent, i)} of March 7th's ATK.\\nHarmony, Nihility, Preservation, Abundance: Increases the Toughness Reduction of this instance of DMG by ${scaleValue(S.March7thScaling.skill.adjacent2, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: March 7th, the Apex Heroine",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("March7th", "Ultimate"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.March7thHuntScaling.ultimate.main, i)} of March 7th's ATK to one designated enemy target.\\nIncreases the initial Hits Per Action of the next Enhanced Basic ATK by ${scaleValue(S.March7thScaling.ultimate.adjacent, i, "")} hit(s) and increase the <u>fixed chance </u>of additionally dealing DMG by ${scaleValue(S.March7thScaling.ultimate.adjacent2, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Master, I've Ascended!",
            type: "talent",
            level: "1/12",
            icon: charIcon("March7th", "Talent"),
            description: (i) => `
        After Shifu uses an attack or Ultimate, March 7th gains up to 1 point of Charge each time.\\nUpon reaching ${scaleValue(S.March7thHuntScaling.talent.main, i, "")} or more points of Charge, March 7th immediately takes action and increases the DMG she deals by ${scaleValue(S.March7thHuntScaling.talent.adjacent, i)}. Her Basic ATK gets Enhanced, and her Skill cannot be used. After using Enhanced Basic ATK, consumes ${scaleValue(S.March7thHuntScaling.talent.main, i, "")} point(s) of Charge. Charge is capped at ${scaleValue(S.March7thHuntScaling.talent.adjacent2, i, "")} points.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Feast in One Go",
            type: "technique",
            level: "1/1",
            icon: charIcon("March7th", "Technique"),
            description: (i) => `
        If March 7th is on the team, she gains 1 point of Charge at the start of the next battle whenever a teammate uses Technique, up to a max of ${scaleValue(S.March7thScaling.technique.main, i, "")} point(s).\\nAfter using Technique, March 7th regenerates ${scaleValue(S.March7thScaling.technique.adjacent, i, "")} Energy when the next battle starts.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Tide Tamer",
            type: "bonus",
            level: "1/1",
            icon: charIcon("March7th", "TideTamer"),
            description: (i) => `
        After using Enhanced Basic ATK, increases Shifu's CRIT DMG by ${scaleValue(S.March7thHuntScaling.b1.main, i)} and Break Effect by ${scaleValue(S.March7thHuntScaling.b1.adjacent, i)}, lasting for ${scaleValue(S.March7thHuntScaling.b1.adjacent2, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Swan Soar",
            type: "bonus",
            level: "1/1",
            icon: charIcon("March7th", "SwanSoar"),
            description: (i) => `
        When the battle starts, March 7th's <u>action advances</u> by ${scaleValue(S.March7thHuntScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Filigree",
            type: "bonus",
            level: "1/1",
            icon: charIcon("March7th", "Filigree"),
            description: "March 7th can reduce the Toughness of enemies whose Weakness Type is the same as Shifu's Combat Type. When Breaking Weakness, triggers the Imaginary Weakness Break effect.",
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(March7thHunt);

const Fugue: Character = {
  name: "Fugue",
  path: Paths.Nihility,
  element: Elements.Fire,
  world: Worlds.TheXianzhouLuofu, // TODO: Fugue
  image: charSplash("Fugue"),
  pfp: charPfp("Fugue"),
  eidolons: Eidolons.FugueEidolons,

  baseATK: 582,
  baseDEF: 557,
  baseHP: 1125,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Radiant Streak",
            type: "basic",
            level: "1/7",
            icon: charIcon("Fugue", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.FugueScaling.attack, i)} of Fugue's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Virtue Beckons Bliss",
            type: "skill",
            level: "1/12",
            icon: charIcon("Fugue", "Skill"),
            description: (i) => `
        Grants one designated ally "Foxian Prayer". Enters the "Torrid Scorch" state, lasting for ${scaleValue(S.FugueScaling.skill.main, i, "")} turn(s). The duration decreases by 1 at the start of Fugue's every turn. "Foxian Prayer" only takes effect on the most recent target of Fugue's Skill.\\nThe ally target with "Foxian Prayer" increases their Break Effect by ${scaleValue(S.FugueScaling.skill.adjacent, i)} and can also reduce Toughness even when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to ${scaleValue(S.FugueScaling.skill.adjacent2, i)} of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.\\nWhile in the "Torrid Scorch" state, Fugue enhances her Basic ATK. Every time an ally target with "Foxian Prayer" attacks, Fugue has a ${scaleValue(S.FugueScaling.skill.adjacent3, i)} <u>base chance</u> to reduce the attacked enemy target's DEF by ${scaleValue(S.FugueScaling.skill.adjacent4, i)}, lasting for ${scaleValue(S.FugueScaling.skill.adjacent5, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Solar Splendor Shines Upon All",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Fugue", "Ultimate"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.FugueScaling.ultimate, i)} of Fugue's ATK to all enemies. This attack ignores Weakness Type to reduce all enemies' Toughness. And when breaking Weakness, triggers the Fire Weakness Break effect.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Fortune Follows Where Virtue Spreads",
            type: "talent",
            level: "1/12",
            icon: charIcon("Fugue", "Talent"),
            description: (i) => `
        While Fugue is on the field, enemy targets will get additionally afflicted with "Cloudflame Luster," equal to ${scaleValue(S.FugueScaling.talent.main, i)} of their Max Toughness. When the initial Toughness is reduced to 0, "Cloudflame Luster" can continue to be reduced. When "Cloudflame Luster" is reduced to 0, the enemy will receive Weakness Break DMG again.\\nWhile Fugue is on the field and after allies attack <u>Weakness Broken</u> enemy targets, converts the Toughness Reduction of this attack into 1 instance of ${scaleValue(S.FugueScaling.talent.adjacent, i)} <u>Super Break DMG</u>.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Percipient Shine",
            type: "technique",
            level: "1/1",
            icon: charIcon("Fugue", "Technique"),
            description: (i) => `
        After using Technique, inflicts Daze on enemies within a certain area, lasting for ${scaleValue(S.FugueScaling.technique.main, i, "")} second(s). While Dazed, enemies will not actively attack ally targets.\\nAfter entering battle via actively attacking Dazed enemies, Fugue's <u>action advances</u> by ${scaleValue(S.FugueScaling.technique.adjacent, i)}, with a ${scaleValue(S.FugueScaling.technique.adjacent2, i)} <u>base chance</u> to inflict each enemy target with the same DEF Reduction state as that applied by Fugue's Skill, lasting for ${scaleValue(S.FugueScaling.technique.adjacent3, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Phecda Primordia",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Fugue", "PhecdaPrimordia"),
            description: (i) => `
        When an enemy target's Weakness gets broken, increases teammates' (i.e., excluding this unit) Break Effect by ${scaleValue(S.FugueScaling.b1.main, i)}. If Fugue's Break Effect is ${scaleValue(S.FugueScaling.b1.adjacent, i)} or higher, the Break Effect increase is boosted by an additional ${scaleValue(S.FugueScaling.b1.adjacent2, i)}, lasting for ${scaleValue(S.FugueScaling.b1.adjacent3, i, "")} turn(s). This effect can stack up to ${scaleValue(S.FugueScaling.b1.adjacent4, i, "")} time(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Verdantia Renaissance",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Fugue", "VerdantiaRenaissance"),
            description: (i) => `
        After ally targets break weakness, additionally <u>delays the action</u> of the enemy target by ${scaleValue(S.FugueScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Sylvan Enigma",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Fugue", "SylvanEnigma"),
            description: (i) => `
        Increases this unit's Break Effect by ${scaleValue(S.FugueScaling.b3.main, i)}. After using Skill for the first time, immediately recovers ${scaleValue(S.FugueScaling.b3.adjacent, i, "")} Skill Point(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s7: {
                id: "s7",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s9: {
                id: "s9",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
  },
};

Characters.push(Fugue);

const Gallagher: Character = {
  name: "Gallagher",
  path: Paths.Abundance,
  element: Elements.Fire,
  world: Worlds.Penacony, // TODO: Gallagher
  image: charSplash("Gallagher"),
  pfp: charPfp("Gallagher"),
  eidolons: Eidolons.GallagherEidolons,

  baseATK: 529,
  baseDEF: 441,
  baseHP: 1305,
  baseSPD: 98,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Corkage Fee",
            type: "basic",
            level: "1/7",
            icon: charIcon("Gallagher", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.GallagherScaling.attack, i)} of Gallagher's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Special Brew",
            type: "skill",
            level: "1/12",
            icon: charIcon("Gallagher", "Skill"),
            description: (i) => `
        Immediately heals a target ally for ${scaleValue(S.GallagherScaling.skill, i, "")} HP.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Champagne Etiquette",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Gallagher", "Ultimate"),
            description: (i) => `
        Inflicts Besotted on all enemies, lasting for ${scaleValue(S.GallagherScaling.ultimate.main, i, "")} turn(s). At the same time, deals Fire DMG equal to ${scaleValue(S.GallagherScaling.ultimate.adjacent, i)} of Gallagher's ATK to all enemies, and enhances his next Basic ATK to Nectar Blitz.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Tipsy Tussle",
            type: "talent",
            level: "1/12",
            icon: charIcon("Gallagher", "Talent"),
            description: (i) => `
        The Besotted state makes targets receive ${scaleValue(S.GallagherScaling.talent.main, i)} more <u>Break DMG</u>. Every time a Besotted target gets attacked by an ally, the attacking ally's HP is restored by ${scaleValue(S.GallagherScaling.talent.adjacent, i, "")}.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Artisan Elixir",
            type: "technique",
            level: "1/1",
            icon: charIcon("Gallagher", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. Upon entering battle, inflicts Besotted on all enemies, lasting for ${scaleValue(S.GallagherScaling.technique.main, i, "")} turn(s). And deals Fire DMG equal to ${scaleValue(S.GallagherScaling.technique.adjacent, i)} of Gallagher's ATK to all enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Bottoms Up",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gallagher", "BottomsUp"),
            description: "When Gallagher uses Nectar Blitz to attack Besotted enemies, the HP Restore effect of his Talent will also apply to teammates for this time.",
        },
        b2: {
            id: "b2",
            name: "Novel Concoction",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gallagher", "NovelConcoction"),
            description: (i) => `
        Increases this unit's Outgoing Healing by an amount equal to ${scaleValue(S.GallagherScaling.b2.main, i)} of Break Effect, up to a maximum Outgoing Healing increase of ${scaleValue(S.GallagherScaling.b2.adjacent, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Organic Yeast",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gallagher", "OrganicYeast"),
            description: "After using the Ultimate, immediately <u>advances action</u> for this unit by 100%.",
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Gallagher);

const Argenti: Character = {
  name: "Argenti",
  path: Paths.Erudition,
  element: Elements.Physical,
  world: Worlds.TheKnightsOfBeauty, // TODO: Argenti
  image: charSplash("Argenti"),
  pfp: charPfp("Argenti"),
  eidolons: Eidolons.ArgentiEidolons,

  baseATK: 737,
  baseDEF: 363,
  baseHP: 1047,
  baseSPD: 103,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Fleeting Fragrance",
            type: "basic",
            level: "1/7",
            icon: charIcon("Argenti", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.ArgentiScaling.attack, i)} of Argenti's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Justice, Hereby Blooms",
            type: "skill",
            level: "1/12",
            icon: charIcon("Argenti", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.ArgentiScaling.skill, i)} of Argenti's ATK to all enemies.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: For In This Garden, Supreme Beauty Bestows",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Argenti", "Ultimate"),
            description: (i) => `
        Consumes ${scaleValue(S.ArgentiScaling.ultimate.main, i, "")} Energy and deals Physical DMG equal to ${scaleValue(S.ArgentiScaling.ultimate.adjacent, i)} of Argenti's ATK to all enemies.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Sublime Object",
            type: "talent",
            level: "1/12",
            icon: charIcon("Argenti", "Talent"),
            description: (i) => `
        For every enemy hit when Argenti uses his Basic Attack, Skill, or Ultimate, regenerates Argenti's Energy by ${scaleValue(S.ArgentiScaling.talent.main, i, "")}, and grants him a stack of Apotheosis, increasing his CRIT Rate by ${scaleValue(S.ArgentiScaling.talent.adjacent, i)}. This effect can stack up to ${scaleValue(S.ArgentiScaling.talent.adjacent2, i, "")} time(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Manifesto of Purest Virtue",
            type: "technique",
            level: "1/1",
            icon: charIcon("Argenti", "Technique"),
            description: (i) => `
        After using the Technique, enemies in a set area are inflicted with Daze for ${scaleValue(S.ArgentiScaling.technique.main, i, "")} second(s). Dazed enemies will not actively attack the team.\\nWhen attacking a Dazed enemy to enter combat, deals Physical DMG to all enemies equal to ${scaleValue(S.ArgentiScaling.technique.adjacent, i)} of Argenti's ATK and regenerates his Energy by ${scaleValue(S.ArgentiScaling.technique.adjacent2, i, "")}.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Courage",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Argenti", "Courage"),
            description: (i) => `
        Deals ${scaleValue(S.ArgentiScaling.b1.main, i)} more DMG to enemies whose HP percentage is ${scaleValue(S.ArgentiScaling.b1.adjacent, i)} or less.
      `,
        },
        b2: {
            id: "b2",
            name: "Piety",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Argenti", "Piety"),
            description: (i) => `
        At the start of a turn, immediately gains ${scaleValue(S.ArgentiScaling.b2, i, "")} stack(s) of Apotheosis.
      `,
        },
        b3: {
            id: "b3",
            name: "Generosity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Argenti", "Generosity"),
            description: (i) => `
        When enemy targets enter combat, immediately regenerates ${scaleValue(S.ArgentiScaling.b3, i, "")} Energy for self.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Physical DMG Boost",
                type: "stat",
                icon: statIcon("PhysicalBoost"),
                description: "Physical DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Physical DMG Boost",
                type: "stat",
                icon: statIcon("PhysicalBoost"),
                description: "Physical DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Physical DMG Boost",
                type: "stat",
                icon: statIcon("PhysicalBoost"),
                description: "Physical DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Argenti);

const RuanMei: Character = {
  name: "Ruan Mei",
  path: Paths.Harmony,
  element: Elements.Ice,
  world: Worlds.HertaSpaceStation, // TODO: Ruan Mei
  image: charSplash("Ruanmei"),
  pfp: charPfp("Ruanmei"),
  eidolons: Eidolons.RuanMeiEidolons,

  baseATK: 659,
  baseDEF: 485,
  baseHP: 1086,
  baseSPD: 104,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Threading Fragrance",
            type: "basic",
            level: "1/7",
            icon: charIcon("RuanMei", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.RuanMeiScaling.attack, i)} of Ruan Mei's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: String Sings Slow Swirls",
            type: "skill",
            level: "1/12",
            icon: charIcon("RuanMei", "Skill"),
            description: (i) => `
        After using her Skill, Ruan Mei gains Overtone, lasting for ${scaleValue(S.RuanMeiScaling.skill.main, i, "")} turn(s). This duration decreases by 1 at the start of Ruan Mei's every turn. When Ruan Mei has Overtone, all allies' DMG increases by ${scaleValue(S.RuanMeiScaling.skill.adjacent, i)} and Weakness Break Efficiency increases by ${scaleValue(S.RuanMeiScaling.skill.adjacent2, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Petals to Stream, Repose in Dream",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("RuanMei", "Ultimate"),
            description: (i) => `
        Ruan Mei deploys a Zone that lasts for ${scaleValue(S.RuanMeiScaling.ultimate.main, i, "")} turns. The Zone's duration decreases by 1 at the start of her turn.\\nWhile inside the Zone, all allies' All-Type RES PEN increases by ${scaleValue(S.RuanMeiScaling.ultimate.adjacent, i)} and their attacks apply Thanatoplum Rebloom to the enemies hit.\\nWhen these enemies attempt to recover from <u>Weakness Break</u>, Thanatoplum Rebloom is triggered, extending the duration of their <u>Weakness Break</u>, <u>delaying their action</u> by an amount equal to ${scaleValue(S.RuanMeiScaling.ultimate.adjacent2, i)} of Ruan Mei's Break Effect plus ${scaleValue(S.RuanMeiScaling.ultimate.adjacent3, i)}, and dealing Break DMG equal to ${scaleValue(S.RuanMeiScaling.ultimate.adjacent4, i)} of Ruan Mei's Ice <u>Break DMG</u>.\\nEnemy targets cannot have Thanatoplum Rebloom re-applied to them until they recover from <u>Weakness Break</u>.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Somatotypical Helix",
            type: "talent",
            level: "1/12",
            icon: charIcon("RuanMei", "Talent"),
            description: (i) => `
        Increases SPD by ${scaleValue(S.RuanMeiScaling.talent.main, i)} for all teammates (i.e., excluding this unit). When allies Break an enemy target's Weakness, Ruan Mei deals to this enemy target Break DMG equal to ${scaleValue(S.RuanMeiScaling.talent.adjacent, i)} of her Ice <u>Break DMG</u>.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Silken Serenade",
            type: "technique",
            level: "1/1",
            icon: charIcon("RuanMei", "Technique"),
            description: (i) => `
        After using the Technique, gains Silken Serenade. At the start of the next battle, automatically triggers the Skill for ${scaleValue(S.RuanMeiScaling.technique.main, i, "")} time(s) without consuming Skill Points.\\nIn Simulated Universe or Divergent Universe, when Ruan Mei has Silken Serenade, the team actively attacking enemies will always be regarded as attacking their Weakness to enter combat, and this attack can reduce all enemies' Toughness regardless of Weakness types. When breaking Weakness, triggers Weakness Break Effect corresponding to the attacker's Type. For every Blessing in possession (up to a max of ${scaleValue(S.RuanMeiScaling.technique.adjacent, i, "")} Blessings will be taken into account), additionally increases the Toughness Reduction of this attack by ${scaleValue(S.RuanMeiScaling.technique.adjacent2, i)}. After breaking an enemy target's Weakness, additionally deals to the enemy target Break DMG equal to ${scaleValue(S.RuanMeiScaling.technique.adjacent3, i)} of Ruan Mei's Ice Break DMG.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Candle Lights on Still Waters",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RuanMei", "CandleLightsonStillWaters"),
            description: (i) => `
        In battle, for every ${scaleValue(S.RuanMeiScaling.b1.main, i)} of Ruan Mei's Break Effect that exceeds ${scaleValue(S.RuanMeiScaling.b1.adjacent, i)}, her Skill additionally increases allies' DMG by ${scaleValue(S.RuanMeiScaling.b1.adjacent2, i)}, up to a maximum of ${scaleValue(S.RuanMeiScaling.b1.adjacent3, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Inert Respiration",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RuanMei", "InertRespiration"),
            description: (i) => `
        Increases Break Effect by ${scaleValue(S.RuanMeiScaling.b2, i)} for all allies.
      `,
        },
        b3: {
            id: "b3",
            name: "Days Wane, Thoughts Wax",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RuanMei", "DaysWaneThoughtsWax"),
            description: (i) => `
        Ruan Mei regenerates ${scaleValue(S.RuanMeiScaling.b3, i, "")} Energy at the start of her turn.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s9: {
                id: "s9",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(RuanMei);

const Aventurine: Character = {
  name: "Aventurine",
  path: Paths.Preservation,
  element: Elements.Imaginary,
  world: Worlds.InterastralPeaceCorporation, // TODO: Aventurine
  image: charSplash("Aventurine"),
  pfp: charPfp("Aventurine"),
  eidolons: Eidolons.AventurineEidolons,

  baseATK: 446,
  baseDEF: 654,
  baseHP: 1203,
  baseSPD: 106,
  aggro: 150,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Straight Bet",
            type: "basic",
            level: "1/7",
            icon: charIcon("Aventurine", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.AventurineScaling.attack, i)} of Aventurine's DEF to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Cornerstone Deluxe",
            type: "skill",
            level: "1/12",
            icon: charIcon("Aventurine", "Skill"),
            description: (i) => `
        Provides all allies with a Fortified Wager shield that can block DMG equal to ${scaleValue(S.AventurineScaling.skill.main, i)} of Aventurine's DEF plus ${scaleValue(S.AventurineScaling.skill.adjacent, i, "")}, lasting for ${scaleValue(S.AventurineScaling.skill.adjacent2, i, "")} turn(s). When Fortified Wager is gained repeatedly, the Shield Effect can stack, up to ${scaleValue(S.AventurineScaling.skill.adjacent3, i)} of the current Shield Effect provided by the Skill.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Roulette Shark",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Aventurine", "Ultimate"),
            description: (i) => `
        Randomly gains 1 to ${scaleValue(S.AventurineScaling.ultimate.main, i, "")} points of "Blind Bet." Then, inflicts "Unnerved" on one designated enemy target for ${scaleValue(S.AventurineScaling.ultimate.adjacent, i, "")} turn(s) and deals Imaginary DMG equal to ${scaleValue(S.AventurineScaling.ultimate.adjacent2, i)} of Aventurine's DEF to that enemy target. When an ally hits an "Unnerved" enemy target, the CRIT DMG dealt increases by ${scaleValue(S.AventurineScaling.ultimate.adjacent3, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Shot Loaded Right",
            type: "talent",
            level: "1/12",
            icon: charIcon("Aventurine", "Talent"),
            description: (i) => `
        For any single ally with "Fortified Wager," their Effect RES increases by ${scaleValue(S.AventurineScaling.talent.main, i)}, and when they get attacked, Aventurine gains 1 point of "Blind Bet." When Aventurine has "Fortified Wager," he can resist <u>Crowd Control debuffs</u>. This effect can trigger again after ${scaleValue(S.AventurineScaling.talent.adjacent, i, "")} turn(s). Aventurine additionally gains ${scaleValue(S.AventurineScaling.talent.adjacent2, i, "")} point(s) of "Blind Bet" after getting attacked. Upon reaching 7 points of "Blind Bet," Aventurine consumes the 7 points to launch a ${scaleValue(S.AventurineScaling.talent.adjacent3, i, "")}-hit <u>Follow-Up ATK</u>, with each hit dealing Imaginary DMG equal to ${scaleValue(S.AventurineScaling.talent.adjacent4, i)} of Aventurine's DEF to one random enemy. "Blind Bet" is capped at 10 points.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: The Red or the Black",
            type: "technique",
            level: "1/1",
            icon: charIcon("Aventurine", "Technique"),
            description: (i) => `
        After using the Technique, 1 of the following effects will be granted:\\nThere is a chance for DEF to increase by ${scaleValue(S.AventurineScaling.technique.main, i)}.\\nThere is a high chance for DEF to increase by ${scaleValue(S.AventurineScaling.technique.adjacent, i)}.\\nThere is a small chance for DEF to increase by ${scaleValue(S.AventurineScaling.technique.adjacent2, i)}.\\n\\nWhen this Technique is used repeatedly, the acquired effect with the highest buff value is retained.\\nWhen the next battle starts, increases all allies' DEF by the corresponding value, lasting for ${scaleValue(S.AventurineScaling.technique.adjacent3, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Bingo!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aventurine", "Bingo"),
            description: (i) => `
        After a teammate with "Fortified Wager" launches <u>Follow-Up ATK</u>, Aventurine accumulates 1 "Blind Bet" point. This effect can trigger up to ${scaleValue(S.AventurineScaling.b1.main, i, "")} time(s). Its trigger count resets at the start of Aventurine's turn. After Aventurine launches his Talent's <u>Follow-Up ATK</u>, provides all ally targets with a "Fortified Wager" that can offset DMG equal to ${scaleValue(S.AventurineScaling.b1.adjacent, i)} of Aventurine's DEF plus ${scaleValue(S.AventurineScaling.b1.adjacent2, i, "")}, and additionally grants a "Fortified Wager" that can block DMG equal to ${scaleValue(S.AventurineScaling.b1.adjacent3, i)} of Aventurine's DEF plus ${scaleValue(S.AventurineScaling.b1.adjacent4, i, "")} to the ally with the lowest Shield Effect, lasting for 3 turns.
      `,
        },
        b2: {
            id: "b2",
            name: "Leverage",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aventurine", "Leverage"),
            description: (i) => `
        For every 100 of Aventurine's DEF that exceeds ${scaleValue(S.AventurineScaling.b2.main, i, "")}, increases his own CRIT Rate by ${scaleValue(S.AventurineScaling.b2.adjacent, i)}, up to a maximum increase of ${scaleValue(S.AventurineScaling.b2.adjacent2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Hot Hand",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aventurine", "HotHand"),
            description: (i) => `
        When battle starts, grants all allies a Fortified Wager shield, whose Shield Effect is equal to ${scaleValue(S.AventurineScaling.b3.main, i)} of the one provided by the Skill, lasting for ${scaleValue(S.AventurineScaling.b3.adjacent, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s10: {
                id: "s10",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
  },
};

Characters.push(Aventurine);

const DrRatio: Character = {
  name: "Dr. Ratio",
  path: Paths.Hunt,
  element: Elements.Imaginary,
  world: Worlds.IntelligentsiaGuild, // TODO: Dr. Ratio
  image: charSplash("DrRatio"),
  pfp: charPfp("DrRatio"),
  eidolons: Eidolons.DrRatioEidolons,

  baseATK: 776,
  baseDEF: 460,
  baseHP: 1047,
  baseSPD: 103,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Mind is Might",
            type: "basic",
            level: "1/7",
            icon: charIcon("DrRatio", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.DrRatioScaling.attack, i)} of Dr. Ratio's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Intellectual Midwifery",
            type: "skill",
            level: "1/12",
            icon: charIcon("DrRatio", "Skill"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.DrRatioScaling.skill, i)} of Dr. Ratio's ATK to one designated enemy target.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Syllogistic Paradox",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("DrRatio", "Ultimate"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.DrRatioScaling.ultimate.main, i)} of Dr. Ratio's ATK to one designated enemy target and applies "Wiseman's Folly." When Dr. Ratio's teammates attack a target afflicted with "Wiseman's Folly," Dr. Ratio launches 1 instance of his Talent's <u>Follow-Up ATK</u> against this target.\\n"Wiseman's Folly" can be triggered for up to ${scaleValue(S.DrRatioScaling.ultimate.adjacent, i, "")} times and only affects the most recent target of Dr. Ratio's Ultimate. This trigger count resets after Dr. Ratio's Ultimate is used.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Cogito, Ergo Sum",
            type: "talent",
            level: "1/12",
            icon: charIcon("DrRatio", "Talent"),
            description: (i) => `
        When using his Skill, Dr. Ratio has a ${scaleValue(S.DrRatioScaling.talent.main, i)} <u>fixed chance</u> of launching a <u>Follow-Up ATK</u> against his target for 1 time, dealing Imaginary DMG equal to ${scaleValue(S.DrRatioScaling.talent.adjacent, i)} of Dr. Ratio's ATK. For each debuff the target enemy has, the <u>fixed chance</u> of launching <u>Follow-Up ATK</u> increases by ${scaleValue(S.DrRatioScaling.talent.adjacent2, i)}. If the target enemy is defeated before the <u>Follow-Up ATK</u> triggers, the <u>Follow-Up ATK</u> will be directed at a single random enemy instead.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Mold of Idolatry",
            type: "technique",
            level: "1/1",
            icon: charIcon("DrRatio", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that Taunts nearby enemies, lasting for ${scaleValue(S.DrRatioScaling.technique.main, i, "")} second(s). After entering battle with enemies in this Special Dimension, there is a ${scaleValue(S.DrRatioScaling.technique.adjacent, i)} <u>base chance</u> to reduce each single enemy target's SPD by ${scaleValue(S.DrRatioScaling.technique.adjacent2, i)} for ${scaleValue(S.DrRatioScaling.technique.adjacent3, i, "")} turn(s). Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Deduction",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DrRatio", "Deduction"),
            description: (i) => `
        When dealing DMG to a target that has ${scaleValue(S.DrRatioScaling.b1.main, i, "")} or more debuff(s), for each <u>debuff</u> the target has, the DMG dealt by Dr. Ratio to this target increases by ${scaleValue(S.DrRatioScaling.b1.adjacent, i)}, up to a maximum increase of ${scaleValue(S.DrRatioScaling.b1.adjacent2, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Summation",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DrRatio", "Summation"),
            description: (i) => `
        When Dr. Ratio uses his Skill, for every <u>debuff</u> on the target, his CRIT Rate increases by ${scaleValue(S.DrRatioScaling.b2.main, i)} and CRIT DMG by ${scaleValue(S.DrRatioScaling.b2.adjacent, i)}. This effect can stack up to ${scaleValue(S.DrRatioScaling.b2.adjacent2, i, "")} time(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Inference",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DrRatio", "Inference"),
            description: (i) => `
        When Skill is used to attack an enemy target, there is a ${scaleValue(S.DrRatioScaling.b3.main, i)} <u>base chance</u> to reduce the attacked enemy target's Effect RES by ${scaleValue(S.DrRatioScaling.b3.adjacent, i)} for ${scaleValue(S.DrRatioScaling.b3.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(DrRatio);

const Sparkle: Character = {
  name: "Sparkle",
  path: Paths.Harmony,
  element: Elements.Quantum,
  world: Worlds.MaskedFools, // TODO: Sparkle
  image: charSplash("Sparkle"),
  pfp: charPfp("Sparkle"),
  eidolons: Eidolons.SparkleEidolons,

  baseATK: 523,
  baseDEF: 485,
  baseHP: 1397,
  baseSPD: 101,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Monodrama",
            type: "basic",
            level: "1/7",
            icon: charIcon("Sparkle", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.SparkleScaling.attack, i)} of Sparkle's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Dreamdiver",
            type: "skill",
            level: "1/12",
            icon: charIcon("Sparkle", "Skill"),
            description: (i) => `
        Increases the CRIT DMG of a single target ally by ${scaleValue(S.SparkleScaling.skill.main, i)} of Sparkle's CRIT DMG plus ${scaleValue(S.SparkleScaling.skill.adjacent, i)}, lasting for ${scaleValue(S.SparkleScaling.skill.adjacent2, i, "")} turn(s). And at the same time, Advances Forward this ally's action by ${scaleValue(S.SparkleScaling.skill.adjacent3, i)}.\\nWhen Sparkle uses this ability on herself, the Action Advance effect will not trigger.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: The Hero with a Thousand Faces",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Sparkle", "Ultimate"),
            description: (i) => `
        Recovers ${scaleValue(S.SparkleScaling.ultimate.main, i, "")} Skill Points for the team and grants all allies Cipher. For allies with Cipher, each stack of the DMG Boost effect provided by Sparkle's Talent additionally increases by ${scaleValue(S.SparkleScaling.ultimate.adjacent, i)}, lasting for ${scaleValue(S.SparkleScaling.ultimate.adjacent2, i, "")} turns.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Red Herring",
            type: "talent",
            level: "1/12",
            icon: charIcon("Sparkle", "Talent"),
            description: (i) => `
        While Sparkle is on the battlefield, additionally increases the max number of Skill Points by ${scaleValue(S.SparkleScaling.talent.main, i, "")}. Whenever an ally consumes 1 Skill Point, all allies' DMG dealt increases by ${scaleValue(S.SparkleScaling.talent.adjacent, i)}. This effect lasts for ${scaleValue(S.SparkleScaling.talent.adjacent2, i, "")} turn(s) and can stack up to ${scaleValue(S.SparkleScaling.talent.adjacent3, i, "")} time(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Unreliable Narrator",
            type: "technique",
            level: "1/1",
            icon: charIcon("Sparkle", "Technique"),
            description: (i) => `
        After using Technique, grants all allies Misdirect for ${scaleValue(S.SparkleScaling.technique.main, i, "")} seconds. Characters with Misdirect will not be detected by enemies, and entering combat in the Misdirect state recovers ${scaleValue(S.SparkleScaling.technique.adjacent, i, "")} Skill Point(s) for the team.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Nocturne",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparkle", "Nocturne"),
            description: (i) => `
        Increases all allies' ATK by ${scaleValue(S.SparkleScaling.b1.main, i)}. When there are 1/2/3 Quantum-Type allies in the team, additionally increases Quantum-Type allies' ATK by ${scaleValue(S.SparkleScaling.b1.adjacent, i)}/${scaleValue(S.SparkleScaling.b1.adjacent2, i)}/${scaleValue(S.SparkleScaling.b1.adjacent3, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Almanac",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparkle", "Almanac"),
            description: (i) => `
        When using Basic ATK, additionally regenerates ${scaleValue(S.SparkleScaling.b2, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Artificial Flower",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparkle", "ArtificialFlower"),
            description: "The CRIT DMG Boost effect provided by the Skill will be extended until the start of the target's next turn.",
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Sparkle);

const BlackSwan: Character = {
  name: "Black Swan",
  path: Paths.Nihility,
  element: Elements.Wind,
  world: Worlds.GardenOfRecollection, // TODO: Black Swan
  image: charSplash("BlackSwan"),
  pfp: charPfp("BlackSwan"),
  eidolons: Eidolons.BlackSwanEidolons,

  baseATK: 659,
  baseDEF: 485,
  baseHP: 1086,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Percipience, Silent Dawn",
            type: "basic",
            level: "1/7",
            icon: charIcon("BlackSwan", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.BlackSwanScaling.attack.main, i)} of Black Swan's ATK to one designated enemy target, with a ${scaleValue(S.BlackSwanScaling.attack.adjacent, i)} <u>base chance</u> of inflicting 1 stack of "<u>Arcana</u>" on the target. Additionally, when attacking a target that suffers Wind Shear, Bleed, Burn, or Shock, there is respectively a ${scaleValue(S.BlackSwanScaling.attack.adjacent2, i)} <u>base chance</u> of inflicting 1 extra stack of "<u>Arcana</u>" on the target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Decadence, False Twilight",
            type: "skill",
            level: "1/12",
            icon: charIcon("BlackSwan", "Skill"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.BlackSwanScaling.skill.main, i)} of Black Swan's ATK to one designated enemy target and any adjacent targets. At the same time, there is a ${scaleValue(S.BlackSwanScaling.skill.adjacent, i)} <u>base chance</u> of inflicting 1 stack of "<u>Arcana</u>" on the target enemy and the adjacent targets. Additionally, there is a ${scaleValue(S.BlackSwanScaling.skill.adjacent2, i)} <u>base chance</u> of reducing the DEF of the target enemy and the adjacent targets by ${scaleValue(S.BlackSwanScaling.skill.adjacent3, i)}, lasting for ${scaleValue(S.BlackSwanScaling.skill.adjacent4, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Bliss of Otherworld's Embrace",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("BlackSwan", "Ultimate"),
            description: (i) => `
        Inflicts Epiphany on all enemies for ${scaleValue(S.BlackSwanScaling.ultimate.main, i, "")} turn(s).\\nWhile afflicted with Epiphany, enemies take ${scaleValue(S.BlackSwanScaling.ultimate.adjacent, i)} increased DMG in their turn. Additionally, if enemies are also inflicted with <u>Arcana</u>, they are also considered to be simultaneously afflicted with Wind Shear, Bleed, Burn, and Shock. After <u>Arcana</u> causes DMG at the start of each turn, its stacks are not reset. This non-reset effect of <u>Arcana</u> stacks can be triggered up to ${scaleValue(S.BlackSwanScaling.ultimate.adjacent2, i, "")} time(s) for the duration of Epiphany. And the trigger count resets when Epiphany is applied again.\\nDeals Wind DMG equal to ${scaleValue(S.BlackSwanScaling.ultimate.adjacent3, i)} of Black Swan's ATK to all enemies.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Loom of Fate's Caprice",
            type: "talent",
            level: "1/12",
            icon: charIcon("BlackSwan", "Talent"),
            description: (i) => `
        Every time an enemy target receives DoT at the start of each turn, there is a ${scaleValue(S.BlackSwanScaling.talent.main, i)} <u>base chance</u> for it to be inflicted with 1 stack of <u>Arcana</u>.\\nWhile afflicted with <u>Arcana</u>, enemy targets receive Wind DoT equal to ${scaleValue(S.BlackSwanScaling.talent.adjacent, i)} of Black Swan's ATK at the start of each turn. Each stack of <u>Arcana</u> increases this DMG multiplier by ${scaleValue(S.BlackSwanScaling.talent.adjacent2, i)}. Then <u>Arcana</u> resets to 1 stack. <u>Arcana</u> can stack up to ${scaleValue(S.BlackSwanScaling.talent.adjacent3, i, "")} times.\\nOnly when <u>Arcana</u> causes DMG at the start of an enemy target's turn, Black Swan triggers additional effects based on the number of <u>Arcana</u> stacks inflicted on the target:\\nWhen there are ${scaleValue(S.BlackSwanScaling.talent.adjacent4, i, "")} or more <u>Arcana</u> stacks, deals Wind DoT equal to ${scaleValue(S.BlackSwanScaling.talent.adjacent5, i)} of Black Swan's ATK to adjacent targets, with a ${scaleValue(S.BlackSwanScaling.talent.main, i)} <u>base chance</u> of inflicting 1 stack of <u>Arcana</u> on adjacent targets.\\nWhen there are ${scaleValue(S.BlackSwanScaling.talent.adjacent6, i, "")} or more <u>Arcana</u> stacks, enables the current DoT dealt this time to ignore ${scaleValue(S.BlackSwanScaling.talent.adjacent7, i)} of the target's and adjacent targets' DEF.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: From Façade to Vérité",
            type: "technique",
            level: "1/1",
            icon: charIcon("BlackSwan", "Technique"),
            description: (i) => `
        After this Technique is used, there is a ${scaleValue(S.BlackSwanScaling.technique.main, i)} <u>base chance</u> for each enemy to be inflicted with 1 stack of <u>Arcana</u> at the start of the next battle. For each successful application of <u>Arcana</u> on a target, inflicts another stack of <u>Arcana</u> on the same target. This process repeats until <u>Arcana</u> fails to be inflicted on this target. For each successive application of <u>Arcana</u> on a target, its <u>base chance</u> of success is equal to ${scaleValue(S.BlackSwanScaling.technique.adjacent, i)} of the <u>base chance</u> of the previous successful infliction of <u>Arcana</u> on that target.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Candleflame's Portent",
            type: "bonus",
            level: "1/1",
            icon: charIcon("BlackSwan", "CandleflamesPortent"),
            description: (i) => `
        Increases this unit's DMG by an amount equal to ${scaleValue(S.BlackSwanScaling.b1.main, i)} of Effect Hit Rate, up to a maximum DMG increase of ${scaleValue(S.BlackSwanScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Viscera's Disquiet",
            type: "bonus",
            level: "1/1",
            icon: charIcon("BlackSwan", "ViscerasDisquiet"),
            description: (i) => `
        After using Skill to attack one designated enemy that has Wind Shear, Bleed, Burn, or Shock, each of these debuffs respectively has a ${scaleValue(S.BlackSwanScaling.b2, i)} <u>base chance</u> of inflicting 1 extra stack of <u>Arcana</u>.
      `,
        },
        b3: {
            id: "b3",
            name: "Goblet's Dredges",
            type: "bonus",
            level: "1/1",
            icon: charIcon("BlackSwan", "GobletsDredges"),
            description: (i) => `
        When an enemy target enters combat, there is a ${scaleValue(S.BlackSwanScaling.b3.main, i)} <u>base chance</u> for it to be inflicted with 1 stack of <u>Arcana</u>.\\nEvery time an enemy target receives 1 instance of DoT during a single attack by an ally, there is a ${scaleValue(S.BlackSwanScaling.b3.main, i)} <u>base chance</u> for the target to be inflicted with 1 stack of <u>Arcana</u>. The maximum number of stacks that can be inflicted during 1 single attack is ${scaleValue(S.BlackSwanScaling.b3.adjacent, i, "")}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(BlackSwan);

const Acheron: Character = {
  name: "Acheron",
  path: Paths.Nihility,
  element: Elements.Lightning,
  world: Worlds.SelfAnnihilator, // TODO: Acheron
  image: charSplash("Acheron"),
  pfp: charPfp("Acheron"),
  eidolons: Eidolons.AcheronEidolons,

  baseATK: 698,
  baseDEF: 436,
  baseHP: 1125,
  baseSPD: 101,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Trilateral Wiltcross",
            type: "basic",
            level: "1/7",
            icon: charIcon("Acheron", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.AcheronScaling.attack, i)} of Acheron's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Octobolt Flash",
            type: "skill",
            level: "1/12",
            icon: charIcon("Acheron", "Skill"),
            description: (i) => `
        Gains ${scaleValue(S.AcheronScaling.skill.main, i, "")} point(s) of "Slashed Dream." Inflicts ${scaleValue(S.AcheronScaling.skill.main, i, "")} stack(s) of "Crimson Knot" on one designated enemy target, dealing Lightning DMG equal to ${scaleValue(S.AcheronScaling.skill.adjacent, i)} of Acheron's ATK to this target, as well as Lightning DMG equal to ${scaleValue(S.AcheronScaling.skill.adjacent2, i)} of Acheron's ATK to adjacent targets.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Slashed Dream Cries in Red",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Acheron", "Ultimate"),
            description: (i) => `
        Sequentially unleash "Rainblade" 3 times and "Stygian Resurge" 1 time, dealing Lightning DMG up to ${scaleValue(S.AcheronScaling.ultimate.main, i)} of Acheron's ATK to one designated enemy target, as well as Lightning DMG up to ${scaleValue(S.AcheronScaling.ultimate.adjacent, i)} of Acheron's ATK to other targets.\\n"Rainblade": Deals Lightning DMG equal to ${scaleValue(S.AcheronScaling.ultimate.adjacent2, i)} of Acheron's ATK to one designated enemy target and removes up to 3 stacks of "Crimson Knot" from the target. When "Crimson Knot" is removed, immediately deals Lightning DMG equal to ${scaleValue(S.AcheronScaling.ultimate.adjacent3, i)} of Acheron's ATK to all enemies. For every stack of "Crimson Knot" removed, this DMG Multiplier is additionally increased, up to a maximum of ${scaleValue(S.AcheronScaling.ultimate.adjacent4, i)}.\\n"Stygian Resurge": Deals Lightning DMG equal to ${scaleValue(S.AcheronScaling.ultimate.adjacent5, i)} of Acheron's ATK to all enemies and remove all "Crimson Knots."\\n"Crimson Knot" cannot be applied to enemies during the Ultimate.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Atop Rainleaf Hangs Oneness",
            type: "talent",
            level: "1/12",
            icon: charIcon("Acheron", "Talent"),
            description: (i) => `
        When Slashed Dream reaches ${scaleValue(S.AcheronScaling.talent.main, i, "")} point(s), the Ultimate can be activated. During the Ultimate, reduces enemies' Toughness regardless of Weakness Types and reduces all enemies' All-Type RES by ${scaleValue(S.AcheronScaling.talent.adjacent, i)}, lasting until the end of the Ultimate.\\nWhen any unit inflicts debuffs on an enemy target while using their ability, Acheron gains 1 point of Slashed Dream and inflicts 1 stack of Crimson Knot on a target. If debuffs are inflicted on multiple targets, then the 1 stack of Crimson Knot will be inflicted on the enemy target with the most Crimson Knot stacks. This effect can only trigger once for every ability use.\\nAfter an enemy target exits the field or gets defeated by any unit while Acheron is on the field, their Crimson Knot stacks will be transferred to the enemy target with the most Crimson Knot stacks on the whole field.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Quadrivalent Ascendance",
            type: "technique",
            level: "1/1",
            icon: charIcon("Acheron", "Technique"),
            description: (i) => `
        Immediately attacks the enemy. At the start of each wave, gains Quadrivalent Ascendance, dealing Lightning DMG equal to ${scaleValue(S.AcheronScaling.technique.main, i)} of Acheron's ATK to all enemies and reducing Toughness of all enemies irrespective of Weakness Types. When breaking Weaknesses, triggers the Lightning Weakness Break effect.\\nQuadrivalent Ascendance: After using the Ultimate, Acheron gains ${scaleValue(S.AcheronScaling.technique.adjacent, i, "")} point(s) of Slashed Dream and inflicts ${scaleValue(S.AcheronScaling.technique.adjacent, i, "")} stack(s) of Crimson Knot on a single random enemy.\\nIf attacking a normal enemy, immediately defeats them without entering combat. When not hitting enemies, no Technique Points are consumed.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Thunder Core",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Acheron", "ThunderCore"),
            description: (i) => `
        When the Ultimate's Rainblade hits enemy targets that have Crimson Knot, the DMG dealt by Acheron increases by ${scaleValue(S.AcheronScaling.b1.main, i)}, stacking up to ${scaleValue(S.AcheronScaling.b1.adjacent, i, "")} time(s) and lasting for ${scaleValue(S.AcheronScaling.b1.adjacent2, i, "")} turn(s). And when Stygian Resurge triggers, additionally deals DMG for ${scaleValue(S.AcheronScaling.b1.adjacent3, i, "")} times. Each time deals Lightning DMG equal to ${scaleValue(S.AcheronScaling.b1.adjacent4, i)} of Acheron's ATK to a single random enemy and is considered as Ultimate DMG.
      `,
        },
        b2: {
            id: "b2",
            name: "Red Oni",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Acheron", "RedOni"),
            description: (i) => `
        When battle starts, immediately gains ${scaleValue(S.AcheronScaling.b2.main, i, "")} point(s) of Slashed Dream and applies ${scaleValue(S.AcheronScaling.b2.main, i, "")} stack(s) of Crimson Knot to a random enemy. When Slashed Dream reaches its upper limit, for every point of Slashed Dream that exceeds the limit, gains 1 stack of Quadrivalent Ascendance. Enables Quadrivalent Ascendance to stack up to ${scaleValue(S.AcheronScaling.b2.adjacent, i, "")} time(s).
      `,
        },
        b3: {
            id: "b3",
            name: "The Abyss",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Acheron", "TheAbyss"),
            description: (i) => `
        When there are 1 or 2 Nihility characters other than Acheron in the team, the DMG dealt by Acheron's Basic ATK, Skill, and Ultimate increases to ${scaleValue(S.AcheronScaling.b3.main, i)} or ${scaleValue(S.AcheronScaling.b3.adjacent, i)} of the original DMG respectively.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>4.8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Acheron);

const Robin: Character = {
  name: "Robin",
  path: Paths.Harmony,
  element: Elements.Physical,
  world: Worlds.Penacony, // TODO: Robin
  image: charSplash("Robin"),
  pfp: charPfp("Robin"),
  eidolons: Eidolons.RobinEidolons,

  baseATK: 640,
  baseDEF: 485,
  baseHP: 1280,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Wingflip White Noise",
            type: "basic",
            level: "1/7",
            icon: charIcon("Robin", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.RobinScaling.attack, i)} of Robin's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Pinion's Aria",
            type: "skill",
            level: "1/12",
            icon: charIcon("Robin", "Skill"),
            description: (i) => `
        Increase DMG dealt by all allies by ${scaleValue(S.RobinScaling.skill.main, i)}, lasting for ${scaleValue(S.RobinScaling.skill.adjacent, i, "")} turn(s). This duration decreases by 1 at the start of Robin's every turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Vox Harmonique, Opus Cosmique",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Robin", "Ultimate"),
            description: (i) => `
        Robin enters the "Concerto" state and makes all teammates (i.e., excluding this unit) immediately take action.\\nWhile in the "Concerto" state, increases all allies' ATK by ${scaleValue(S.RobinScaling.ultimate.main, i)} of Robin's ATK plus ${scaleValue(S.RobinScaling.ultimate.adjacent, i, "")}. Moreover, after every attack by ally targets, Robin deals Physical <u>Additional DMG</u> equal to ${scaleValue(S.RobinScaling.ultimate.adjacent2, i)} of her ATK for 1 time, with a fixed CRIT Rate for this damage set at ${scaleValue(S.RobinScaling.ultimate.adjacent3, i)} and fixed CRIT DMG set at ${scaleValue(S.RobinScaling.ultimate.adjacent4, i)}.\\nWhile in the "Concerto" state, Robin is immune to <u>Crowd Control debuffs</u> and cannot enter her turn or take action until the "Concerto" state ends.\\nA "Concerto" countdown appears in the Action Order. When the countdown's turn begins, Robin exits the "Concerto" state and immediately takes action. The countdown has its own fixed SPD of ${scaleValue(S.RobinScaling.ultimate.adjacent5, i, "")}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Tonal Resonance",
            type: "talent",
            level: "1/12",
            icon: charIcon("Robin", "Talent"),
            description: (i) => `
        Increase all allies' CRIT DMG by ${scaleValue(S.RobinScaling.talent.main, i)}. Moreover, after allies attack enemy targets, Robin additionally regenerates ${scaleValue(S.RobinScaling.talent.adjacent, i, "")} Energy for herself.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Overture of Inebriation",
            type: "technique",
            level: "1/1",
            icon: charIcon("Robin", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension around the character that lasts for ${scaleValue(S.RobinScaling.technique.main, i, "")} seconds. Enemies within this dimension will not attack Robin and will follow Robin while the dimension is active. After entering battle while the dimension is active, Robin regenerates ${scaleValue(S.RobinScaling.technique.adjacent, i, "")} Energy at the start of each wave. Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Sequential Passage",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Robin", "SequentialPassage"),
            description: (i) => `
        When using Skill, additionally regenerates ${scaleValue(S.RobinScaling.b1, i, "")} Energy.
      `,
        },
        b2: {
            id: "b2",
            name: "Coloratura Cadenza",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Robin", "ColoraturaCadenza"),
            description: (i) => `
        When the battle begins, <u>action advances</u> this character by ${scaleValue(S.RobinScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Impromptu Flourish",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Robin", "ImpromptuFlourish"),
            description: (i) => `
        While the "Concerto" state is active, the CRIT DMG dealt when all allies launch <u>Follow-Up ATK</u> increases by ${scaleValue(S.RobinScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(Robin);

const Firefly: Character = {
  name: "Firefly",
  path: Paths.Destruction,
  element: Elements.Fire,
  world: Worlds.StellaronHunters, // TODO: Firefly
  image: charSplash("Firefly"),
  pfp: charPfp("Firefly"),
  eidolons: Eidolons.FireflyEidolons,

  baseATK: 523,
  baseDEF: 776,
  baseHP: 814,
  baseSPD: 104,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Order: Flare Propulsion",
            type: "basic",
            level: "1/7",
            icon: charIcon("Firefly", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.FireflyScaling.attack, i)} of SAM's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Order: Aerial Bombardment",
            type: "skill",
            level: "1/12",
            icon: charIcon("Firefly", "Skill"),
            description: (i) => `
        Consumes HP equal to ${scaleValue(S.FireflyScaling.skill.main, i)} of this unit's Max HP and regenerates a fixed amount of Energy equal to ${scaleValue(S.FireflyScaling.skill.adjacent, i)} of this unit's Max Energy. Deals Fire DMG equal to ${scaleValue(S.FireflyScaling.skill.adjacent2, i)} of SAM's ATK to one designated enemy. If the current HP is not sufficient, reduces SAM's HP to 1 when using this Skill. <u>Advances</u> this unit's next Action by ${scaleValue(S.FireflyScaling.skill.adjacent3, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Fyrefly Type-IV: Complete Combustion",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Firefly", "Ultimate"),
            description: (i) => `
        Enters the Complete Combustion state, advances this unit's Action by 100%, and gains Enhanced Basic ATK and Enhanced Skill. While in Complete Combustion, increases SPD by ${scaleValue(S.FireflyScaling.ultimate.main, i, "")}, and when using the Enhanced Basic ATK or Enhanced Skill, increases this unit's Weakness Break Efficiency by ${scaleValue(S.FireflyScaling.ultimate.adjacent, i)} and increases the Break DMG dealt by SAM to the enemy targets by ${scaleValue(S.FireflyScaling.ultimate.adjacent2, i)}, lasting until this current attack ends.\\nA countdown timer for the Complete Combustion state appears in the Action Order. When the countdown timer's turn starts, SAM exits the Complete Combustion state. The countdown timer has a fixed SPD of ${scaleValue(S.FireflyScaling.ultimate.adjacent3, i, "")}.\\nSAM cannot use Ultimate while in Complete Combustion.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Chrysalid Pyronexus",
            type: "talent",
            level: "1/12",
            icon: charIcon("Firefly", "Talent"),
            description: (i) => `
        The lower the HP, the less DMG received. When HP is ${scaleValue(S.FireflyScaling.talent.main, i)} or lower, the DMG Reduction reaches its maximum effect, reducing up to ${scaleValue(S.FireflyScaling.talent.adjacent, i)}. During the Complete Combustion, the DMG Reduction remains at its maximum effect, and the Effect RES increases by ${scaleValue(S.FireflyScaling.talent.adjacent2, i)}.\\nIf Energy is lower than ${scaleValue(S.FireflyScaling.talent.adjacent3, i)} when the battle starts, regenerates Energy to ${scaleValue(S.FireflyScaling.talent.adjacent3, i)}. Once Energy is regenerated to its maximum, dispels all <u>debuffs</u> on this unit.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Δ Order: Meteoric Incineration",
            type: "technique",
            level: "1/1",
            icon: charIcon("Firefly", "Technique"),
            description: (i) => `
        Leaps into the air and moves about freely for ${scaleValue(S.FireflyScaling.technique.main, i, "")} seconds, which can be ended early by launching a plunging attack. When the duration ends, plunges and immediately attacks all enemies within a set area. At the start of each wave, applies a Fire Weakness to all enemies, lasting for ${scaleValue(S.FireflyScaling.technique.adjacent, i, "")} turn(s). Then, deals Fire DMG equal to ${scaleValue(S.FireflyScaling.technique.adjacent2, i)} of SAM's ATK to all enemies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Module γ: Core Overload",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Firefly", "ModuleGammaCoreOverload"),
            description: (i) => `
        For every ${scaleValue(S.FireflyScaling.b1.main, i, "")} point(s) of SAM's ATK that exceeds ${scaleValue(S.FireflyScaling.b1.adjacent, i, "")}, increases this unit's Break Effect by ${scaleValue(S.FireflyScaling.b1.adjacent2, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Module α: Antilag Outburst",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Firefly", "ModuleAlphaAntilagOutburst"),
            description: (i) => `
        During the Complete Combustion, attacking enemies that have no Fire Weakness can also reduce their Toughness, with the effect being equivalent to ${scaleValue(S.FireflyScaling.b2, i)} of the original Toughness Reduction from abilities.
      `,
        },
        b3: {
            id: "b3",
            name: "Module β: Autoreactive Armor",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Firefly", "ModuleBetaAutoreactiveArmor"),
            description: (i) => `
        When SAM is in Complete Combustion with a Break Effect that is equal to or greater than ${scaleValue(S.FireflyScaling.b3.main, i)}/${scaleValue(S.FireflyScaling.b3.adjacent, i)}, attacking a <u>Weakness-Broken</u> enemy target will convert the Toughness Reduction of this attack into 1 instance of ${scaleValue(S.FireflyScaling.b3.adjacent2, i)}/${scaleValue(S.FireflyScaling.b3.adjacent3, i)} <u>Super Break DMG</u>.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Firefly);

const Misha: Character = {
  name: "Misha",
  path: Paths.Destruction,
  element: Elements.Ice,
  world: Worlds.Penacony, // TODO: Misha
  image: charSplash("Misha"),
  pfp: charPfp("Misha"),
  eidolons: Eidolons.MishaEidolons,

  baseATK: 599,
  baseDEF: 396,
  baseHP: 1270,
  baseSPD: 96,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: E—Excuse Me, Please!",
            type: "basic",
            level: "1/7",
            icon: charIcon("Misha", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.MishaScaling.attack, i)} of Misha's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: R—Room Service!",
            type: "skill",
            level: "1/12",
            icon: charIcon("Misha", "Skill"),
            description: (i) => `
        Increases the Hits Per Action for Misha's next Ultimate by ${scaleValue(S.MishaScaling.skill.main, i, "")} hit(s). Deals Ice DMG equal to ${scaleValue(S.MishaScaling.skill.adjacent, i)} of Misha's ATK to one designated enemy target, and Ice DMG equal to ${scaleValue(S.MishaScaling.skill.adjacent2, i)} of Misha's ATK to adjacent targets.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: G—Gonna Be Late!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Misha", "Ultimate"),
            description: (i) => `
        Has ${scaleValue(S.MishaScaling.ultimate.main, i, "")} Hits Per Action by default. First, uses 1 hit to deal Ice DMG equal to ${scaleValue(S.MishaScaling.ultimate.adjacent, i)} of Misha's ATK to one designated enemy target. Then, the rest of the hits each deals Ice DMG equal to ${scaleValue(S.MishaScaling.ultimate.adjacent, i)} of Misha's ATK to one random enemy. Just before each hit lands, there is a ${scaleValue(S.MishaScaling.ultimate.adjacent2, i)} <u>base chance</u> to Freeze the target, lasting for 1 turn.\\nWhile Frozen, enemy targets cannot take any actions, and at the start of their turn, they receive Ice <u>Additional DMG</u> equal to ${scaleValue(S.MishaScaling.ultimate.adjacent3, i)} of Misha's ATK.\\nThis Ultimate can possess up to ${scaleValue(S.MishaScaling.ultimate.adjacent4, i, "")} Hits Per Action. After the Ultimate is used, its Hits Per Action will be reset to the default level.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Horological Escapement",
            type: "talent",
            level: "1/12",
            icon: charIcon("Misha", "Talent"),
            description: (i) => `
        For every 1 Skill Point allies consume, Misha's next Ultimate delivers ${scaleValue(S.MishaScaling.talent.main, i, "")} more Hit(s) Per Action, and Misha regenerates ${scaleValue(S.MishaScaling.talent.adjacent, i, "")} Energy.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Wait, You Are So Beautiful!",
            type: "technique",
            level: "1/1",
            icon: charIcon("Misha", "Technique"),
            description: (i) => `
        After using the Technique, creates a Special Dimension that lasts for ${scaleValue(S.MishaScaling.technique.main, i, "")} seconds. Enemies caught in the Special Dimension are inflicted with Dream Prison and stop all their actions. Upon entering battle against enemies afflicted with Dream Prison, increases the Hits Per Action for Misha's next Ultimate by ${scaleValue(S.MishaScaling.technique.adjacent, i, "")} hit(s). Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Transmission",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Misha", "Transmission"),
            description: (i) => `
        When dealing DMG to Frozen enemies, increases CRIT DMG by ${scaleValue(S.MishaScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Release",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Misha", "Release"),
            description: (i) => `
        Before the Ultimate's first hit, increases the <u>base chance</u> of Freezing the target by ${scaleValue(S.MishaScaling.b2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Interlock",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Misha", "Interlock"),
            description: (i) => `
        When using the Ultimate, increases the Effect Hit Rate by ${scaleValue(S.MishaScaling.b3, i)}, lasting until the end of the current Ultimate's action.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
  },
};

Characters.push(Misha);

const Sunday: Character = {
  name: "Sunday",
  path: Paths.Harmony,
  element: Elements.Imaginary,
  world: Worlds.Penacony, // TODO: Sunday
  image: charSplash("Sunday"),
  pfp: charPfp("Sunday"),
  eidolons: Eidolons.SundayEidolons,

  baseATK: 640,
  baseDEF: 533,
  baseHP: 1241,
  baseSPD: 96,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Gleaming Admonition",
            type: "basic",
            level: "1/7",
            icon: charIcon("Sunday", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.SundayScaling.attack, i)} of Sunday's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Benison of Paper and Rites",
            type: "skill",
            level: "1/12",
            icon: charIcon("Sunday", "Skill"),
            description: (i) => `
        Enables one designated ally character and their summon to immediately take action, and increases their DMG dealt by ${scaleValue(S.SundayScaling.skill.main, i)}. If the target has a summon, then the DMG Boost effect is further boosted by an additional ${scaleValue(S.SundayScaling.skill.adjacent, i)}, lasting for ${scaleValue(S.SundayScaling.skill.adjacent2, i, "")} turn(s).\\nAfter using Skill on The Beatified, recovers 1 Skill Point.\\nWhen Sunday uses this ability on characters following the Path of Harmony, cannot trigger the "immediate action" effect.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Ode to Caress and Cicatrix",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Sunday", "Ultimate"),
            description: (i) => `
        Regenerates Energy by ${scaleValue(S.SundayScaling.ultimate.main, i)} of Max Energy for one designated ally character, and turns the target and their summon into "The Beatified." "The Beatified" have their CRIT DMG increased by an amount equal to ${scaleValue(S.SundayScaling.ultimate.adjacent, i)} of Sunday's CRIT DMG plus ${scaleValue(S.SundayScaling.ultimate.adjacent2, i)}.\\nAt the start of Sunday's every turn, the duration of "The Beatified" decreases by 1 turn, lasting for a total of ${scaleValue(S.SundayScaling.ultimate.adjacent3, i, "")} turn(s). And it only takes effect on the most recent target of the Ultimate (excluding Sunday himself). When Sunday is knocked down, "The Beatified" will also be dispelled.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: The Sorrowing Body",
            type: "talent",
            level: "1/12",
            icon: charIcon("Sunday", "Talent"),
            description: (i) => `
        When using Skill, increases the target's CRIT Rate by ${scaleValue(S.SundayScaling.talent.main, i)}, lasting for ${scaleValue(S.SundayScaling.talent.adjacent, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: The Glorious Mysteries",
            type: "technique",
            level: "1/1",
            icon: charIcon("Sunday", "Technique"),
            description: (i) => `
        After this Technique is used, the first time Sunday uses an ability on an ally target in the next battle, the target's DMG dealt increases by ${scaleValue(S.SundayScaling.technique.main, i)}, lasting for ${scaleValue(S.SundayScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Haven in Palm",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sunday", "HaveninPalm"),
            description: (i) => `
        When using Skill, dispels ${scaleValue(S.SundayScaling.b1, i, "")} <u>debuff(s)</u> from the target.
      `,
        },
        b2: {
            id: "b2",
            name: "Rest Day's Longing",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sunday", "RestDaysLonging"),
            description: (i) => `
        When using Ultimate, if the Energy regenerated for the target is less than ${scaleValue(S.SundayScaling.b2, i, "")}, increases the regenerated Energy to ${scaleValue(S.SundayScaling.b2, i, "")}.
      `,
        },
        b3: {
            id: "b3",
            name: "Exalted Sweep",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sunday", "ExaltedSweep"),
            description: (i) => `
        When battle starts, Sunday regenerates ${scaleValue(S.SundayScaling.b3, i, "")} Energy.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s9: {
                id: "s9",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Sunday);

const Jade: Character = {
  name: "Jade",
  path: Paths.Erudition,
  element: Elements.Quantum,
  world: Worlds.InterastralPeaceCorporation, // TODO: Jade
  image: charSplash("Jade"),
  pfp: charPfp("Jade"),
  eidolons: Eidolons.JadeEidolons,

  baseATK: 659,
  baseDEF: 509,
  baseHP: 1086,
  baseSPD: 103,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Lash of Riches",
            type: "basic",
            level: "1/7",
            icon: charIcon("Jade", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.JadeScaling.attack.main, i)} of Jade's ATK to one designated enemy target, and Quantum DMG equal to ${scaleValue(S.JadeScaling.attack.adjacent, i)} of Jade's ATK to adjacent enemies.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Acquisition Surety",
            type: "skill",
            level: "1/12",
            icon: charIcon("Jade", "Skill"),
            description: (i) => `
        Makes a single target ally become the Debt Collector and increases their SPD by ${scaleValue(S.JadeScaling.skill.main, i, "")}, lasting for ${scaleValue(S.JadeScaling.skill.adjacent, i, "")} turn(s).\\nAfter the Debt Collector attacks, deals 1 instance of Quantum <u>Additional DMG</u> equal to ${scaleValue(S.JadeScaling.skill.adjacent2, i)} of Jade's ATK to each enemy target hit, and consumes the Debt Collector's HP by an amount equal to ${scaleValue(S.JadeScaling.skill.adjacent3, i)} of their Max HP. If the current HP is insufficient, reduces HP to 1.\\nIf Jade becomes the Debt Collector, she cannot gain the SPD boost effect, and her attacks do not consume HP.\\nWhen the Debt Collector exists on the field, Jade cannot use her Skill. At the start of Jade's every turn, the Debt Collector's duration decreases by 1 turn.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Vow of the Deep",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Jade", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.JadeScaling.ultimate.main, i)} of Jade's ATK to all enemies. At the same time, Jade enhances her Talent's <u>Follow-Up ATK</u>, increasing its DMG multiplier by ${scaleValue(S.JadeScaling.ultimate.adjacent, i)}. This enhancement can take effect ${scaleValue(S.JadeScaling.ultimate.adjacent2, i, "")} time(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Fang of Flare Flaying",
            type: "talent",
            level: "1/12",
            icon: charIcon("Jade", "Talent"),
            description: (i) => `
        After Jade or the "Debt Collector" unit attacks, gains 1 point of Charge for each enemy target hit. Upon reaching ${scaleValue(S.JadeScaling.talent.main, i, "")} points of Charge, consumes the ${scaleValue(S.JadeScaling.talent.main, i, "")} points to launch 1 instance of <u>Follow-Up ATK</u>, dealing Quantum DMG equal to ${scaleValue(S.JadeScaling.talent.adjacent, i)} of Jade's ATK to all enemies. This <u>Follow-Up ATK</u> does not generate Charge.\\nWhen launching her Talent's <u>Follow-Up ATK</u>, Jade immediately gains ${scaleValue(S.JadeScaling.talent.adjacent2, i, "")} stack(s) of "Pawned Asset," with each stack increasing CRIT DMG by ${scaleValue(S.JadeScaling.talent.adjacent3, i)}, stacking up to ${scaleValue(S.JadeScaling.talent.adjacent4, i, "")} times.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Visionary Predation",
            type: "technique",
            level: "1/1",
            icon: charIcon("Jade", "Technique"),
            description: (i) => `
        After using the Technique, inflicts enemies within a set area with Blind Fealty for ${scaleValue(S.JadeScaling.technique.main, i, "")} second(s). Enemies inflicted with Blind Fealty will not initiate attacks on allies. When entering battle via actively attacking enemies inflicted with Blind Fealty, all enemies with Blind Fealty will enter combat simultaneously. After entering battle, deals Quantum DMG equal to ${scaleValue(S.JadeScaling.technique.adjacent, i)} of Jade's ATK to all enemies, and immediately gains ${scaleValue(S.JadeScaling.technique.adjacent2, i, "")} stack(s) of Pawned Asset.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Asset Forfeiture",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jade", "AssetForfeiture"),
            description: (i) => `
        Each Pawned Asset stack from the Talent additionally increases Jade's ATK by ${scaleValue(S.JadeScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Reverse Repo",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jade", "ReverseRepo"),
            description: (i) => `
        When an enemy target enters combat, Jade gains ${scaleValue(S.JadeScaling.b2.main, i, "")} stack(s) of Pawned Asset. When the Debt Collector character's turn starts, additionally gains ${scaleValue(S.JadeScaling.b2.adjacent, i, "")} stack(s) of Pawned Asset.
      `,
        },
        b3: {
            id: "b3",
            name: "Collateral Ticket",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Jade", "CollateralTicket"),
            description: (i) => `
        When the battle starts, <u>action advances</u> Jade by ${scaleValue(S.JadeScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
            },
  },
};

Characters.push(Jade);

const Boothill: Character = {
  name: "Boothill",
  path: Paths.Hunt,
  element: Elements.Physical,
  world: Worlds.GalaxyRanger, // TODO: Boothill
  image: charSplash("Boothill"),
  pfp: charPfp("Boothill"),
  eidolons: Eidolons.BoothillEidolons,

  baseATK: 620,
  baseDEF: 436,
  baseHP: 1203,
  baseSPD: 107,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Skullcrush Spurs",
            type: "basic",
            level: "1/7",
            icon: charIcon("Boothill", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.BoothillScaling.attack, i)} of Boothill's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Sizzlin' Tango",
            type: "skill",
            level: "1/12",
            icon: charIcon("Boothill", "Skill"),
            description: (i) => `
        Forces Boothill and one designated enemy target into the "Standoff" state. Boothill's Basic ATK gets Enhanced, and he cannot use his Skill, lasting for ${scaleValue(S.BoothillScaling.skill.main, i, "")} turn(s). This duration decreases by 1 at the start of Boothill's every turn.\\nThe enemy target in the "Standoff" becomes Taunted. When this enemy target/Boothill gets attacked by the other party in the Standoff, the DMG they receive increases by ${scaleValue(S.BoothillScaling.skill.adjacent, i)}/${scaleValue(S.BoothillScaling.skill.adjacent2, i)}.\\nAfter this target is defeated or becomes Weakness Broken, Boothill gains 1 stack of "Pocket Trickshot," then dispels the "Standoff."\\nThis Skill cannot regenerate Energy. After using this Skill, the current turn does not end.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Dust Devil's Sunset Rodeo",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Boothill", "Ultimate"),
            description: (i) => `
        Applies Physical Weakness to one designated enemy target, lasting for ${scaleValue(S.BoothillScaling.ultimate.main, i, "")} turn(s).\\nDeals Physical DMG equal to ${scaleValue(S.BoothillScaling.ultimate.adjacent, i)} of Boothill's ATK to the target and <u>delays their action</u> by ${scaleValue(S.BoothillScaling.ultimate.adjacent2, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Five Peas in a Pod",
            type: "talent",
            level: "1/12",
            icon: charIcon("Boothill", "Talent"),
            description: (i) => `
        Each stack of Pocket Trickshot increases the Enhanced Basic Attack's Toughness Reduction by ${scaleValue(S.BoothillScaling.talent.main, i)}, stacking up to ${scaleValue(S.BoothillScaling.talent.adjacent, i, "")} time(s).\\nIf the target is <u>Weakness Broken</u> while the Enhanced Basic ATK is being used, based on the number of Pocket Trickshot stacks, deals <u>Break DMG</u> to this target equal to ${scaleValue(S.BoothillScaling.talent.adjacent2, i)}/${scaleValue(S.BoothillScaling.talent.adjacent3, i)}/${scaleValue(S.BoothillScaling.talent.adjacent4, i)} of Boothill's Physical Break DMG. The max Toughness taken into account for this DMG cannot exceed ${scaleValue(S.BoothillScaling.talent.adjacent5, i, "")} times the base Toughness Reduction of the Basic Attack "Skullcrush Spurs."\\nAfter winning the battle, Boothill can retain Pocket Trickshot for the next battle.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: 3-9× Smile",
            type: "technique",
            level: "1/1",
            icon: charIcon("Boothill", "Technique"),
            description: (i) => `
        After the Technique is used, when casting the Skill for the first time in the next battle, applies the same Physical Weakness to the target as the one induced by the Ultimate, lasting for ${scaleValue(S.BoothillScaling.technique, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Point Blank",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Boothill", "PointBlank"),
            description: (i) => `
        When in Standoff and gaining Pocket Trickshot, regenerates ${scaleValue(S.BoothillScaling.b1, i, "")} Energy. Can also trigger this effect when gaining Pocket Trickshot stacks that exceed the max limit.
      `,
        },
        b2: {
            id: "b2",
            name: "Ghost Load",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Boothill", "GhostLoad"),
            description: (i) => `
        Increase this character's CRIT Rate/CRIT DMG, by an amount equal to ${scaleValue(S.BoothillScaling.b2.main, i)}/${scaleValue(S.BoothillScaling.b2.adjacent, i)} of Break Effect, up to a max increase of ${scaleValue(S.BoothillScaling.b2.adjacent2, i)}/${scaleValue(S.BoothillScaling.b2.adjacent3, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Above Snakes",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Boothill", "AboveSnakes"),
            description: (i) => `
        While Boothill is in the Standoff, reduces the DMG he receives from targets that are not in the Standoff by ${scaleValue(S.BoothillScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Boothill);

const Rappa: Character = {
  name: "Rappa",
  path: Paths.Erudition,
  element: Elements.Imaginary,
  world: Worlds.GalaxyRanger, // TODO: Rappa
  image: charSplash("Rappa"),
  pfp: charPfp("Rappa"),
  eidolons: Eidolons.RappaEidolons,

  baseATK: 717,
  baseDEF: 460,
  baseHP: 1086,
  baseSPD: 96,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Ninjutsu: Rise Above Tumbles",
            type: "basic",
            level: "1/7",
            icon: charIcon("Rappa", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.RappaScaling.attack, i)} of Rappa's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Ninja Strike: Rooted Resolute",
            type: "skill",
            level: "1/12",
            icon: charIcon("Rappa", "Skill"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.RappaScaling.skill, i)} of Rappa's ATK to all enemies.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Nindō Supreme: Aishiteru",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Rappa", "Ultimate"),
            description: (i) => `
        Enters the "Sealform" state, immediately gains 1 <u>extra turn</u>, obtains ${scaleValue(S.RappaScaling.ultimate.main, i, "")} points of "Chroma Ink," and increases Weakness Break Efficiency by ${scaleValue(S.RappaScaling.ultimate.adjacent, i)} and Break Effect by ${scaleValue(S.RappaScaling.ultimate.adjacent2, i)}.\\nWhile in the "Sealform" state, Basic ATK is enhanced, and Skill and Ultimate cannot be used. After using Enhanced Basic ATK, consumes 1 point of "Chroma Ink." When "Chroma Ink" is depleted, exits the "Sealform" state.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Ninja Tech: Endurance Gauge",
            type: "talent",
            level: "1/12",
            icon: charIcon("Rappa", "Talent"),
            description: (i) => `
        Each time the enemy target is Weakness Broken, Rappa gains 1 point of Charge, up to a max of ${scaleValue(S.RappaScaling.talent.main, i, "")} points of Charge. When Rappa next launches the third hit of "Ningu: Demonbane Petalblade," additionally deals Break DMG equal to ${scaleValue(S.RappaScaling.talent.adjacent, i)} of Rappa's Imaginary Break DMG to all enemies. This DMG can ignore Weakness Type to reduce ${scaleValue(S.RappaScaling.talent.adjacent2, i, "")} Toughness, consuming all Charge. Each point of Charge increases the Break DMG multiplier by ${scaleValue(S.RappaScaling.talent.adjacent3, i)} and increases the Toughness Reduction that can ignore Weakness Type by ${scaleValue(S.RappaScaling.talent.adjacent4, i, "")}.\\nWhen Breaking Weakness, triggers the Imaginary Weakness Break effect.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Ninja Dash: By Leaps and Bounds",
            type: "technique",
            level: "1/1",
            icon: charIcon("Rappa", "Technique"),
            description: (i) => `
        After using Technique, enters the "Graffiti" state for ${scaleValue(S.RappaScaling.technique.main, i, "")} seconds. While in the "Graffiti" state, moves forward rapidly for a set distance and attacks any enemies touched. During the rapid movement, can block all enemies' attacks. Using an attack in the "Graffiti" state can end the state's duration early. After entering combat via attacking enemies, deals ${scaleValue(S.RappaScaling.technique.adjacent, i, "")} Toughness Reduction regardless of Weakness Type and Break DMG equal to ${scaleValue(S.RappaScaling.technique.adjacent2, i)} of Rappa's Imaginary Break DMG to each enemy target, and deals Break DMG equal to ${scaleValue(S.RappaScaling.technique.adjacent3, i)} of Rappa's Imaginary Break DMG to adjacent targets. At the same time, this unit regenerates ${scaleValue(S.RappaScaling.technique.adjacent4, i, "")} Energy.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Ninjutsu Inscription: Withered Leaf",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Rappa", "NinjutsuInscriptionWitheredLeaf"),
            description: (i) => `
        When an enemy target becomes Weakness Broken, increases the <u>Break DMG</u> taken by ${scaleValue(S.RappaScaling.b1.main, i)}. If Rappa's current ATK is higher than ${scaleValue(S.RappaScaling.b1.adjacent, i, "")}, for every 100 excess ATK, additionally increases this value by ${scaleValue(S.RappaScaling.b1.adjacent2, i)}, up to a max additional increase of ${scaleValue(S.RappaScaling.b1.adjacent3, i)}. This effect lasts for ${scaleValue(S.RappaScaling.b1.adjacent4, i, "")} turn(s).
      `,
        },
        b2: {
            id: "b2",
            name: "Ninjutsu Inscription: Sky High",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Rappa", "NinjutsuInscriptionSkyHigh"),
            description: (i) => `
        When the Weakness of an elite-level or higher enemy is broken, Rappa additionally gains ${scaleValue(S.RappaScaling.b2.main, i, "")} point(s) of Charge and regenerates ${scaleValue(S.RappaScaling.b2.adjacent, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Ninjutsu Inscription: Sea Echo",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Rappa", "NinjutsuInscriptionSeaEcho"),
            description: (i) => `
        While in the "Sealform" state, after Rappa uses Enhanced Basic ATK to deal DMG to a <u>Weakness Broken</u> enemy target, converts the Toughness Reduction from this instance of DMG to 1 instance of ${scaleValue(S.RappaScaling.b3, i)} <u>Super Break DMG</u>.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Rappa);

const TheDahlia: Character = {
  name: "The Dahlia",
  path: Paths.Nihility,
  element: Elements.Fire,
  world: Worlds.TheCremator, // TODO: The Dahlia
  image: charSplash("TheDahlia"),
  pfp: charPfp("TheDahlia"),
  eidolons: Eidolons.TheDahliaEidolons,

  baseATK: 679,
  baseDEF: 606,
  baseHP: 1086,
  baseSPD: 96,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Fiddle... Fissured Memory",
            type: "basic",
            level: "1/7",
            icon: charIcon("TheDahlia", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.TheDahliaScaling.attack, i)} of The Dahlia's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Lick... Enkindled Betrayal",
            type: "skill",
            level: "1/12",
            icon: charIcon("TheDahlia", "Skill"),
            description: (i) => `
        Deploys a Zone that lasts for ${scaleValue(S.TheDahliaScaling.skill.main, i, "")} turn(s). This duration decreases by 1 at the start of The Dahlia's turn. Then, deals Fire DMG equal to ${scaleValue(S.TheDahliaScaling.skill.adjacent, i)} of The Dahlia's ATK to one designated enemy and their adjacent targets.\\nWhile the Zone lasts, increases all allies' Weakness Break Efficiency by ${scaleValue(S.TheDahliaScaling.skill.adjacent2, i)}. Toughness Reduction taken by enemy targets while not <u>Weakness Broken</u> can also be converted into <u>Super Break DMG</u>.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Wallow... Entombed Ash",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("TheDahlia", "Ultimate"),
            description: (i) => `
        Inflicts a "Wilt" state on all enemies, lasting for ${scaleValue(S.TheDahliaScaling.ultimate.main, i, "")} turn(s). Then, deals Fire DMG equal to ${scaleValue(S.TheDahliaScaling.ultimate.adjacent, i)} of The Dahlia's ATK, which is distributed evenly across all enemies.\\nEnemy targets in the "Wilt" state have their DEF reduced by ${scaleValue(S.TheDahliaScaling.ultimate.adjacent2, i)} and will be implanted with Weakness of all Dance Partners' Types.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Who's Afraid of Constance?",
            type: "talent",
            level: "1/12",
            icon: charIcon("TheDahlia", "Talent"),
            description: (i) => `
        When entering combat, The Dahlia regenerates ${scaleValue(S.TheDahliaScaling.talent.main, i, "")} Energy and becomes "Dance Partners" along with the teammate that triggered combat. Whenever there is no other "Dance Partner" on the field, this unit and the teammate with the highest Break Effect become "Dance Partners" together. After a "Dance Partner" attacks a <u>Weakness Broken</u> enemy target, the Toughness Reduction from this attack will be converted into 1 instance of <u>Super Break DMG</u> at ${scaleValue(S.TheDahliaScaling.talent.adjacent, i)}.\\nAfter an enemy target gets attacked by the other "Dance Partner," The Dahlia launches <u>Follow-Up ATK</u> and deals ${scaleValue(S.TheDahliaScaling.talent.adjacent2, i, "")} instance(s) of DMG, each dealing Fire DMG equal to ${scaleValue(S.TheDahliaScaling.talent.adjacent3, i)} of The Dahlia's ATK to one random enemy. After each instance of DMG dealt to a <u>Weakness Broken</u> enemy target, the Toughness Reduction from this DMG will be converted into 1 instance of <u>Super Break DMG</u> at ${scaleValue(S.TheDahliaScaling.talent.adjacent4, i)}.\\nThis effect can only trigger once per turn. If the target is defeated before the <u>Follow-Up ATK</u> is used, it will be launched at one random enemy instead.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: The Heart Makes the Finest Tomb",
            type: "technique",
            level: "1/1",
            icon: charIcon("TheDahlia", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that lasts for ${scaleValue(S.TheDahliaScaling.technique.main, i, "")} second(s). Enemies within this dimension will not actively attack ally targets. After entering combat with enemies in the Special Dimension, The Dahlia immediately deploys her Skill's Zone, and converts the combat-triggering Toughness Reduction into 1 instance of <u>Super Break DMG</u> at ${scaleValue(S.TheDahliaScaling.technique.adjacent, i)} against enemy targets that are <u>Weakness Broken</u>.\\nOnly 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Outgrow the Old, Espouse the New",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TheDahlia", "OutgrowtheOldEspousetheNew"),
            description: (i) => `
        When an ally target adds Weakness to an enemy target, increases SPD by ${scaleValue(S.TheDahliaScaling.b1.main, i)} for ${scaleValue(S.TheDahliaScaling.b1.adjacent, i, "")} turn(s). If a Fire ally character has implanted a Weakness when using an attack, then after the attack, additionally deals a fixed amount of ${scaleValue(S.TheDahliaScaling.b1.adjacent2, i, "")} Fire Toughness Reduction to every target implanted with Weakness. Also, regenerates Energy equal to ${scaleValue(S.TheDahliaScaling.b1.adjacent3, i)} of Max Energy. This effect can regenerate Energy up to ${scaleValue(S.TheDahliaScaling.b1.adjacent4, i)} of Max Energy.
      `,
        },
        b2: {
            id: "b2",
            name: "Yet Another Funeral",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TheDahlia", "YetAnotherFuneral"),
            description: (i) => `
        When entering combat, increases other characters' Break Effect by an amount equal to ${scaleValue(S.TheDahliaScaling.b2.main, i)} of The Dahlia's Break Effect plus ${scaleValue(S.TheDahliaScaling.b2.adjacent, i)}, lasting for ${scaleValue(S.TheDahliaScaling.b2.adjacent2, i, "")} turn(s). When The Dahlia receives healing or a Shield provided by a teammate, this effect triggers again, lasting for ${scaleValue(S.TheDahliaScaling.b2.adjacent3, i, "")} turn(s). Cannot trigger repeatedly within one turn.
      `,
        },
        b3: {
            id: "b3",
            name: "Lament, Lost Soul",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TheDahlia", "LamentLostSoul"),
            description: (i) => `
        When using Talent's <u>Follow-Up ATK</u>, recovers 1 Skill Point for allies. For every ${scaleValue(S.TheDahliaScaling.b3, i, "")} instance(s) of Talent's <u>Follow-Up ATK</u> used, this effect can trigger once.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s5: {
                id: "s5",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s6: {
                id: "s6",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(TheDahlia);

const TheHerta: Character = {
  name: "The Herta",
  path: Paths.Erudition,
  element: Elements.Ice,
  world: Worlds.HertaSpaceStation, // TODO: The Herta
  image: charSplash("TheHerta"),
  pfp: charPfp("TheHerta"),
  eidolons: Eidolons.TheHertaEidolons,

  baseATK: 679,
  baseDEF: 485,
  baseHP: 1164,
  baseSPD: 99,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Did You Get It",
            type: "basic",
            level: "1/7",
            icon: charIcon("TheHerta", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.TheHertaScaling.attack, i)} of The Herta's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Big Brain Energy",
            type: "skill",
            level: "1/12",
            icon: charIcon("TheHerta", "Skill"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.TheHertaScaling.skill.main, i)} of The Herta's ATK to one designated enemy, and inflicts ${scaleValue(S.TheHertaScaling.skill.adjacent, i, "")} stack(s) of "Interpretation." Deals Ice DMG equal to ${scaleValue(S.TheHertaScaling.skill.main, i)} of The Herta's ATK to the targets hit by this instance of Skill and their respective adjacent targets. This effect can repeat 2 times.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Told Ya! Magic Happens",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("TheHerta", "Ultimate"),
            description: (i) => `
        Rearranges the numbers of "Interpretation" stacks on all enemies, prioritizing the transfer of the higher numbers of "Interpretation" stacks to Elite-level targets and above. Then, deals Ice DMG equal to ${scaleValue(S.TheHertaScaling.ultimate.main, i)} of The Herta's ATK to all enemies. When using Ultimate, increases The Herta's ATK by ${scaleValue(S.TheHertaScaling.ultimate.adjacent, i)}, lasting for ${scaleValue(S.TheHertaScaling.ultimate.adjacent2, i, "")} turn(s). After the use, The Herta immediately takes action and gains 1 stack of "Inspiration." "Inspiration" can stack up to ${scaleValue(S.TheHertaScaling.ultimate.adjacent3, i, "")} time(s). While having "Inspiration," enhances Skill to "Hear Me Out."
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Hand Them Over",
            type: "talent",
            level: "1/12",
            icon: charIcon("TheHerta", "Talent"),
            description: (i) => `
        When enemy targets enter combat, The Herta inflicts 1 stack of "Interpretation" on them. At the start of each wave, applies ${scaleValue(S.TheHertaScaling.talent.main, i, "")} stack(s) of "Interpretation" to a random enemy target, prioritizing Elite-level targets and above. When the Enhanced Skill's primary target has "Interpretation," the multiplier for the DMG dealt increases, with each stack granting an increase of ${scaleValue(S.TheHertaScaling.talent.adjacent, i)}/${scaleValue(S.TheHertaScaling.talent.adjacent2, i)} on the primary target/other targets respectively. If 2 or more characters follow the Path of Erudition in the team, each stack grants an additional increase of ${scaleValue(S.TheHertaScaling.talent.adjacent, i)}/${scaleValue(S.TheHertaScaling.talent.adjacent2, i)} on the primary target/other targets respectively. "Interpretation" can stack up to ${scaleValue(S.TheHertaScaling.talent.adjacent3, i, "")} time(s). When using the Enhanced Skill, resets the number of "Interpretation" stacks on the primary target to 1. After the enemy target leaves the field or gets defeated by any unit, "Interpretation" will be transferred, prioritizing the transfer to Elite-level targets and above.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Vibe Checker",
            type: "technique",
            level: "1/1",
            icon: charIcon("TheHerta", "Technique"),
            description: (i) => `
        After using Technique, increases The Herta's ATK by ${scaleValue(S.TheHertaScaling.technique.main, i)} at the start of the next battle, lasting for ${scaleValue(S.TheHertaScaling.technique.adjacent, i, "")} turn(s).\\nIf there are Basic Treasures in this current map, using Technique can mark up to ${scaleValue(S.TheHertaScaling.technique.adjacent2, i, "")} Basic Treasures' locations.\\nAfter entering battle by using Technique in Simulated Universe or Divergent Universe, at the start of each wave, deals <u>True DMG</u> to enemy targets lower than Elite-level by an amount equal to ${scaleValue(S.TheHertaScaling.technique.adjacent3, i)} of the targets' Max HP, and deals <u>True DMG</u> to enemy targets at Elite-level and above by an amount equal to ${scaleValue(S.TheHertaScaling.technique.adjacent4, i)} of the targets' Max HP.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Starved Landscape of Vacua",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TheHerta", "StarvedLandscapeofVacua"),
            description: (i) => `
        For every 1 stack of "Interpretation" inflicted on enemy targets, The Herta gains 1 stack of "Answer," up to a max of ${scaleValue(S.TheHertaScaling.b1.main, i, "")} stack(s). When using Ultimate, each "Answer" stack increases this instance of Ultimate's DMG multiplier by ${scaleValue(S.TheHertaScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Aloofly Honest",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TheHerta", "AlooflyHonest"),
            description: (i) => `
        When ally targets attack, inflicts 1 stack of "Interpretation" on the hit enemy target. After attacking, for every 1 target hit by this attack, regenerates ${scaleValue(S.TheHertaScaling.b2.main, i, "")} fixed Energy for The Herta, counting up to a maximum of 5 targets. When using Enhanced Skill, if the primary target's "Interpretation" stack reaches 42, increases the Ice DMG dealt by The Herta by ${scaleValue(S.TheHertaScaling.b2.adjacent, i)}, lasting until the end of this attack.
      `,
        },
        b3: {
            id: "b3",
            name: "Message From Beyond the Veil",
            type: "bonus",
            level: "1/1",
            icon: charIcon("TheHerta", "MessageFromBeyondtheVeil"),
            description: (i) => `
        When entering battle, if the team has 2 or more Erudition characters, increases all allies' CRIT DMG by ${scaleValue(S.TheHertaScaling.b3.main, i)}. And the Trace "Aloofly Honest" counts at least ${scaleValue(S.TheHertaScaling.b3.adjacent, i, "")} target(s) when calculating the number of targets hit. After attacking, applies ${scaleValue(S.TheHertaScaling.b3.adjacent2, i, "")} "Interpretation" stack(s) to the target that has the highest existing "Interpretation" stacks among the hit enemy targets. If the attacker is an Erudition character, then additionally applies ${scaleValue(S.TheHertaScaling.b3.adjacent3, i, "")} "Interpretation" stack(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s4: {
                id: "s4",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Ice DMG Boost",
                type: "stat",
                icon: statIcon("IceBoost"),
                description: "Ice DMG Increases by: <b><u>6.4%</u></b>",
            },
  },
};

Characters.push(TheHerta);

const Aglaea: Character = {
  name: "Aglaea",
  path: Paths.Remembrance,
  element: Elements.Lightning,
  world: Worlds.Amphoreus,
  image: charSplash("Aglaea"),
  pfp: charPfp("Aglaea"),
  eidolons: Eidolons.AglaeaEidolons,

  baseATK: 698,
  baseDEF: 485,
  baseHP: 1241,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Thorned Nectar",
            type: "basic",
            level: "1/7",
            icon: charIcon("Aglaea", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.AglaeaScaling.attack, i)} of Aglaea's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Rise, Exalted Renown",
            type: "skill",
            level: "1/12",
            icon: charIcon("Aglaea", "Skill"),
            description: (i) => `
        Restores HP to Garmentmaker by ${scaleValue(S.AglaeaScaling.skill, i)} of its Max HP. If Garmentmaker is absent, then <u>summons the memosprite</u> Garmentmaker and makes this unit immediately take action.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Dance, Destined Weaveress",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Aglaea", "Ultimate"),
            description: (i) => `
        <u>Summons the memosprite</u> Garmentmaker. If Garmentmaker is already on the field, then restores its HP to max. Aglaea enters the "Supreme Stance" state and immediately takes action.\\nWhile in "Supreme Stance," Aglaea gains the SPD Boost stacks from Garmentmaker's Memosprite Talent, with each stack increasing this unit's SPD by ${scaleValue(S.AglaeaScaling.ultimate.main, i)}. Enhances Basic ATK to "Slash by a Thousandfold Kiss," and cannot use Skill. Garmentmaker is immune to <u>Crowd Control debuffs</u>.\\nA countdown appears in the Action Order, with its own SPD set at ${scaleValue(S.AglaeaScaling.ultimate.adjacent, i, "")}. While the countdown exists, using Ultimate again will reset the countdown. When the countdown's turn starts, Garmentmaker self-destructs. When Garmentmaker disappears, Aglaea dispels the "Supreme Stance" state.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Rosy-Fingered",
            type: "talent",
            level: "1/12",
            icon: charIcon("Aglaea", "Talent"),
            description: (i) => `
        The memosprite Garmentmaker has an initial SPD equal to ${scaleValue(S.AglaeaScaling.talent.main, i)} of Aglaea's SPD and a Max HP equal to ${scaleValue(S.AglaeaScaling.talent.adjacent, i)} of Aglaea's Max HP plus ${scaleValue(S.AglaeaScaling.talent.adjacent2, i, "")}. While Garmentmaker is on the field, Aglaea's attacks inflict the target with the "Seam Stitch" state. After attacking enemies in the "Seam Stitch" state, further deals Lightning <u>Additional DMG</u> equal to ${scaleValue(S.AglaeaScaling.talent.adjacent3, i)} of Aglaea's ATK. "Seam Stitch" only takes effect on the most recently inflicted target.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Meteoric Sunder",
            type: "technique",
            level: "1/1",
            icon: charIcon("Aglaea", "Technique"),
            description: (i) => `
        <u>Summons the memosprite</u> Garmentmaker and launches a forward joint attack. After entering battle, regenerates ${scaleValue(S.AglaeaScaling.technique.main, i, "")} Energy and deals Lightning DMG equal to ${scaleValue(S.AglaeaScaling.technique.adjacent, i)} of Aglaea's ATK to all enemy targets. Then, randomly inflicts the "Seam Stitch" state on a random enemy target.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "The Speeding Sol",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aglaea", "TheSpeedingSol"),
            description: (i) => `
        At the start of battle, if this unit's Energy is lower than ${scaleValue(S.AglaeaScaling.b1.main, i)}, regenerates this unit's Energy to ${scaleValue(S.AglaeaScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "The Myopic's Doom",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aglaea", "TheMyopicsDoom"),
            description: (i) => `
        While in "Supreme Stance," increases Aglaea's and Garmentmaker's ATK by an amount equal to ${scaleValue(S.AglaeaScaling.b2.main, i)} of Aglaea's SPD plus ${scaleValue(S.AglaeaScaling.b2.adjacent, i)} of Garmentmaker's SPD.
      `,
        },
        b3: {
            id: "b3",
            name: "Last Thread of Fate",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aglaea", "LastThreadofFate"),
            description: (i) => `
        When Garmentmaker disappears, up to ${scaleValue(S.AglaeaScaling.b3, i, "")} stack(s) of the SPD Boost from the Memosprite Talent can be retained. When Garmentmaker is summoned again, gains the corresponding number of SPD Boost stacks.
      `,
        },
        b4: {
            id: "b4",
            name: "A Body Brewed by Tears",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aglaea", "ABodyBrewedbyTears"),
            description: (i) => `
        <b>A Body Brewed by Tears</b><br>After attacking an enemy afflicted with "Seam Stitch," increases this unit's SPD by ${scaleValue(S.AglaeaScaling.b4.ABodyBrewedbyTears.main, i, "")}, stacking up to ${scaleValue(S.AglaeaScaling.b4.ABodyBrewedbyTears.adjacent, i, "")} time(s). When Garmentmaker takes action, automatically uses "Thorned Snare," prioritizing enemies under the "Seam Stitch" state.
<br>
        <b>The Speeding Summer</b><br>When Garmentmaker is summoned, this unit's <u>action advances</u> by ${scaleValue(S.AglaeaScaling.b4.TheSpeedingSummer, i)}.
<br>
        <b>Bloom of Drying Grass</b><br>When Garmentmaker disappears, regenerates ${scaleValue(S.AglaeaScaling.b4.BloomofDryingGrass, i, "")} Energy for Aglaea.
      `,
        },
        b5: {
            id: "b5",
            name: "Thorned Snare",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Aglaea", "ThornedSnare"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.AglaeaScaling.b5.main, i)} of ATK to one enemy and Lightning DMG equal to ${scaleValue(S.AglaeaScaling.b5.adjacent, i)} of ATK to adjacent targets.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Aglaea);

const Tribbie: Character = {
  name: "Tribbie",
  path: Paths.Harmony,
  element: Elements.Quantum,
  world: Worlds.Amphoreus,
  image: charSplash("Tribbie"),
  pfp: charPfp("Tribbie"),
  eidolons: Eidolons.TribbieEidolons,

  baseATK: 523,
  baseDEF: 727,
  baseHP: 1047,
  baseSPD: 96,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Hundred Rockets",
            type: "basic",
            level: "1/7",
            icon: charIcon("Tribbie", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.TribbieScaling.attack.main, i)} of Tribbie's Max HP to one designated enemy. Deals Quantum DMG equal to ${scaleValue(S.TribbieScaling.attack.adjacent, i)} of Tribbie's Max HP to adjacent targets.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Where'd the Gifts Go",
            type: "skill",
            level: "1/12",
            icon: charIcon("Tribbie", "Skill"),
            description: (i) => `
        Gains "Numinosity," lasting for ${scaleValue(S.TribbieScaling.skill.main, i, "")} turn(s). This duration decreases by 1 at the start of this unit's every turn. While Tribbie has "Numinosity," increases all ally targets' All-Type <u>RES PEN</u> by ${scaleValue(S.TribbieScaling.skill.adjacent, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Guess Who Lives Here",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Tribbie", "Ultimate"),
            description: (i) => `
        Activates a Zone and deals Quantum DMG equal to ${scaleValue(S.TribbieScaling.ultimate.main, i)} of Tribbie's Max HP to all enemies.\\nWhile the Zone lasts, increases enemy targets' DMG taken by ${scaleValue(S.TribbieScaling.ultimate.adjacent, i)}. After an ally target attacks, for every 1 target hit, deals 1 instance of Quantum <u>Additional DMG</u> equal to ${scaleValue(S.TribbieScaling.ultimate.adjacent2, i)} of Tribbie's Max HP to the target that has the highest HP among the hit targets.\\nThe Zone lasts for ${scaleValue(S.TribbieScaling.ultimate.adjacent3, i, "")} turn(s). This duration decreases by 1 at the start of this unit's every turn.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Busy as Tribbie",
            type: "talent",
            level: "1/12",
            icon: charIcon("Tribbie", "Talent"),
            description: (i) => `
        After other ally characters use Ultimate, Tribbie launches <u>Follow-Up ATK</u>, dealing Quantum DMG equal to ${scaleValue(S.TribbieScaling.talent, i)} of Tribbie's Max HP to all enemies. This effect triggers up to 1 time per character. When Tribbie uses Ultimate, resets the trigger count for other ally characters. If the target was defeated before the <u>Follow-Up ATK</u> is launched, then launches the <u>Follow-Up ATK</u> against new enemy targets entering the battlefield.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: If You're Happy and You Know It",
            type: "technique",
            level: "1/1",
            icon: charIcon("Tribbie", "Technique"),
            description: (i) => `
        After using Technique and upon entering battle, obtains "Numinosity," lasting for ${scaleValue(S.TribbieScaling.technique, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Pebble at Crossroads?",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Tribbie", "PebbleatCrossroads"),
            description: (i) => `
        At the start of battle, Tribbie regenerates ${scaleValue(S.TribbieScaling.b1.main, i, "")} Energy. After other ally targets attack, Tribbie regenerates ${scaleValue(S.TribbieScaling.b1.adjacent, i, "")} Energy for each target hit.
      `,
        },
        b2: {
            id: "b2",
            name: "Lamb Outside the Wall...",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Tribbie", "LambOutsidetheWall"),
            description: (i) => `
        After using Talent's <u>Follow-Up ATK</u>, increases the DMG dealt by Tribbie by ${scaleValue(S.TribbieScaling.b2.main, i)}. This effect can stack up to ${scaleValue(S.TribbieScaling.b2.adjacent, i, "")} time(s), lasting for ${scaleValue(S.TribbieScaling.b2.adjacent2, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Glass Ball with Wings!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Tribbie", "GlassBallwithWings"),
            description: (i) => `
        While the Zone lasts, Tribbie's Max HP increases by an amount equal to ${scaleValue(S.TribbieScaling.b3, i)} of the sum of all ally characters' Max HP.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Tribbie);

const Mydei: Character = {
  name: "Mydei",
  path: Paths.Destruction,
  element: Elements.Imaginary,
  world: Worlds.Amphoreus,
  image: charSplash("Mydei"),
  pfp: charPfp("Mydei"),
  eidolons: Eidolons.MydeiEidolons,

  baseATK: 426,
  baseDEF: 194,
  baseHP: 1552,
  baseSPD: 95,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Vow of Voyage",
            type: "basic",
            level: "1/7",
            icon: charIcon("Mydei", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.MydeiScaling.attack, i)} of Mydei's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Deaths are Legion, Regrets are None",
            type: "skill",
            level: "1/12",
            icon: charIcon("Mydei", "Skill"),
            description: (i) => `
        Consumes HP by an amount equal to ${scaleValue(S.MydeiScaling.skill.main, i)} of Mydei's current HP. Deals Imaginary DMG equal to ${scaleValue(S.MydeiScaling.skill.adjacent, i)} of Mydei's Max HP to one designated enemy and Imaginary DMG equal to ${scaleValue(S.MydeiScaling.skill.adjacent2, i)} of Mydei's Max HP to adjacent targets.\\nIf the current HP is not sufficient, using Skill reduces Mydei's current HP to 1.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Throne of Bones",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Mydei", "Ultimate"),
            description: (i) => `
        Restores HP by ${scaleValue(S.MydeiScaling.ultimate.main, i)} of Mydei's Max HP and accumulates ${scaleValue(S.MydeiScaling.ultimate.adjacent, i, "")} Talent's Charge point(s). Deals Imaginary DMG equal to ${scaleValue(S.MydeiScaling.ultimate.adjacent2, i)} of Mydei's Max HP to one designated enemy, and deals Imaginary DMG equal to ${scaleValue(S.MydeiScaling.ultimate.adjacent3, i)} of Mydei's Max HP to adjacent targets. Additionally, Taunts the target and targets adjacent to it, lasting for ${scaleValue(S.MydeiScaling.ultimate.adjacent4, i, "")} turn(s). The next use of "Godslayer Be God" prioritizes attacking one designated enemy, and this effect only works on the latest target.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Blood for Blood",
            type: "talent",
            level: "1/12",
            icon: charIcon("Mydei", "Talent"),
            description: (i) => `
        For each 1% of HP lost, accumulates 1 point of Charge (up to 200 points). When Charge reaches 100, consumes 100 points of Charge to enter the "Vendetta" state, restores HP equal to ${scaleValue(S.MydeiScaling.talent.main, i)} of Mydei's Max HP, and advances action by 100%. While the "Vendetta" state is active, Max HP increases by ${scaleValue(S.MydeiScaling.talent.adjacent, i)} of the current Max HP and DEF remains at 0. At the start of this unit's turn, automatically uses "Kingslayer Be King."\\nWhen Charge reaches ${scaleValue(S.MydeiScaling.talent.adjacent2, i, "")} points during the "Vendetta" state, Mydei immediately gains 1 <u>extra turn</u> and automatically uses "Godslayer Be God."\\nWhen receiving a killing blow during the "Vendetta" state, Mydei will not be <u>knocked down</u>, but will clear his Charge, exits the "Vendetta" state, and restores HP by ${scaleValue(S.MydeiScaling.talent.adjacent3, i)} of his Max HP.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Cage of Broken Lance",
            type: "technique",
            level: "1/1",
            icon: charIcon("Mydei", "Technique"),
            description: (i) => `
        After using Technique, pulls in enemies within a certain area and inflicts Daze on them for ${scaleValue(S.MydeiScaling.technique.main, i, "")} second(s). Dazed enemies will not actively attack ally targets.\\nIf actively attacking Dazed enemies, when entering battle, deals Imaginary DMG equal to ${scaleValue(S.MydeiScaling.technique.adjacent, i)} of Mydei's Max HP to all enemies, and Taunts the targets, lasting for ${scaleValue(S.MydeiScaling.technique.adjacent2, i, "")} turn(s). This unit accumulates ${scaleValue(S.MydeiScaling.technique.adjacent3, i, "")} point(s) of Talent's Charge.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Bloodied Chiton",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Mydei", "BloodiedChiton"),
            description: (i) => `
        When battle starts, if Mydei's Max HP exceeds ${scaleValue(S.MydeiScaling.b1.main, i, "")}, for every 100 excess HP, Mydei's CRIT Rate increases by ${scaleValue(S.MydeiScaling.b1.adjacent, i)}, his Charge ratio from enemy targets' DMG increases by ${scaleValue(S.MydeiScaling.b1.adjacent2, i)}, and his HP restored when receiving healing increases by ${scaleValue(S.MydeiScaling.b1.adjacent3, i)}. Up to ${scaleValue(S.MydeiScaling.b1.adjacent4, i, "")} excess HP can be taken into account for this effect.
      `,
        },
        b2: {
            id: "b2",
            name: "Earth and Water",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Mydei", "EarthandWater"),
            description: (i) => `
        During the "Vendetta" state, Mydei will not exit the "Vendetta" state when receiving a killing blow. This effect can trigger ${scaleValue(S.MydeiScaling.b2, i, "")} time(s) per battle.
      `,
        },
        b3: {
            id: "b3",
            name: "Thirty Tyrants",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Mydei", "ThirtyTyrants"),
            description: "While in the \"Vendetta\" state, Mydei is immune to <u>Crowd Control debuffs</u>.",
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Mydei);

const Anaxa: Character = {
  name: "Anaxa",
  path: Paths.Erudition,
  element: Elements.Wind,
  world: Worlds.Amphoreus,
  image: charSplash("Anaxa"),
  pfp: charPfp("Anaxa"),
  eidolons: Eidolons.AnaxaEidolons,

  baseATK: 756,
  baseDEF: 557,
  baseHP: 970,
  baseSPD: 97,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Pain, Brews Truth",
            type: "basic",
            level: "1/7",
            icon: charIcon("Anaxa", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.AnaxaScaling.attack, i)} of Anaxa's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Fractal, Exiles Fallacy",
            type: "skill",
            level: "1/12",
            icon: charIcon("Anaxa", "Skill"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.AnaxaScaling.skill.main, i)} of Anaxa's ATK to one designated enemy and additionally deals ${scaleValue(S.AnaxaScaling.skill.adjacent, i, "")} instance(s) of DMG. Each instance of DMG deals Wind DMG equal to ${scaleValue(S.AnaxaScaling.skill.main, i)} of Anaxa's ATK to one random enemy, prioritizing Bouncing to enemy targets that have not been hit by this instance of Skill.\\nWhen used, for each attackable enemy on the field, this Skill has its DMG dealt increased by ${scaleValue(S.AnaxaScaling.skill.adjacent2, i)}.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Sprouting Life Sculpts Earth",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Anaxa", "Ultimate"),
            description: (i) => `
        Inflicts the "Sublimation" state on all enemies, then deals Wind DMG equal to ${scaleValue(S.AnaxaScaling.ultimate, i)} of Anaxa's ATK to all enemies.\\nIn the "Sublimation" state, the targets will be simultaneously inflicted with Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses, lasting until the start of the targets' turn. If the targets do not have Control RES, they are unable to take action in the "Sublimation" state.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Tetrad Wisdom Reigns Thrice",
            type: "talent",
            level: "1/12",
            icon: charIcon("Anaxa", "Talent"),
            description: (i) => `
        Each time Anaxa lands 1 hit on enemy targets, inflicts 1 Weakness of a random Type to the targets, lasting for ${scaleValue(S.AnaxaScaling.talent.main, i, "")} turn(s), with priority to the Weakness Type that the target doesn't already possess.\\nWhile Anaxa is on the field, inflicts the "Qualitative Disclosure" state on enemy targets that have at least ${scaleValue(S.AnaxaScaling.talent.adjacent, i, "")} different Types of Weaknesses. Anaxa deals ${scaleValue(S.AnaxaScaling.talent.adjacent2, i)} increased DMG to targets afflicted with the "Qualitative Disclosure" state. In addition, after using Basic ATK or Skill on them, unleashes 1 additional instance of Skill on the targets. This additional Skill does not consume any Skill Points and cannot trigger this effect again. If the target has been defeated before the additional Skill is used, it will be cast on one random enemy instead.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Prism of the Pupil",
            type: "technique",
            level: "1/1",
            icon: charIcon("Anaxa", "Technique"),
            description: (i) => `
        After using Technique, inflicts the Terrified state on enemies in a set area. Terrified enemies will flee in a direction away from Anaxa for ${scaleValue(S.AnaxaScaling.technique.main, i, "")} second(s). When allies enter combat via actively attacking a Terrified enemy, it will always be considered as entering battle via attacking a Weakness. After entering battle, Anaxa applies 1 Weakness of the attacker's Type to every enemy target, lasting for ${scaleValue(S.AnaxaScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Qualitative Shift",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Anaxa", "QualitativeShift"),
            description: (i) => `
        For every 1 different Weakness Type an enemy target has, the DMG that Anaxa deals to that target ignores ${scaleValue(S.AnaxaScaling.b1, i)} of their DEF. Up to a max of 7 Weakness Types can be taken into account for this effect.
      `,
        },
        b2: {
            id: "b2",
            name: "Roaming Signifier",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Anaxa", "RoamingSignifier"),
            description: (i) => `
        When using Basic ATK, additionally regenerates ${scaleValue(S.AnaxaScaling.b2.main, i, "")} Energy.\\nAt the start of the turn, if there are no enemy targets in the "Qualitative Disclosure" state, immediately regenerates ${scaleValue(S.AnaxaScaling.b2.adjacent, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Imperative Hiatus",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Anaxa", "ImperativeHiatus"),
            description: (i) => `
        Based on the number of "Erudition" characters in the team, one of the following effects will be triggered in the current battle:\\n1 character: Increases Anaxa's CRIT DMG by ${scaleValue(S.AnaxaScaling.b3.main, i)}.\\nAt least 2 characters: Increases DMG dealt by all allies by ${scaleValue(S.AnaxaScaling.b3.adjacent, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>6.4%</u></b>",
            },
  },
};

Characters.push(Anaxa);

const Cipher: Character = {
  name: "Cipher",
  path: Paths.Nihility,
  element: Elements.Quantum,
  world: Worlds.Amphoreus,
  image: charSplash("Cipher"),
  pfp: charPfp("Cipher"),
  eidolons: Eidolons.CipherEidolons,

  baseATK: 640,
  baseDEF: 509,
  baseHP: 931,
  baseSPD: 106,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Oops, a Missed Catch",
            type: "basic",
            level: "1/7",
            icon: charIcon("Cipher", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.CipherScaling.attack, i)} of Cipher's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Hey, Jackpot for the Taking",
            type: "skill",
            level: "1/12",
            icon: charIcon("Cipher", "Skill"),
            description: (i) => `
        Has a ${scaleValue(S.CipherScaling.skill.main, i)} <u>base chance</u> to Weaken one designated enemy and its adjacent targets (decreasing their DMG dealt by ${scaleValue(S.CipherScaling.skill.adjacent, i)}) and increases Cipher's ATK by ${scaleValue(S.CipherScaling.skill.adjacent2, i)}, lasting for ${scaleValue(S.CipherScaling.skill.adjacent3, i, "")} turn(s). Moreover, deals Quantum DMG equal to ${scaleValue(S.CipherScaling.skill.adjacent4, i)} of Cipher's ATK to one designated enemy, and Quantum DMG equal to ${scaleValue(S.CipherScaling.skill.adjacent5, i)} of Cipher's ATK to the adjacent targets.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Yours Truly, Kitty Phantom Thief!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Cipher", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.CipherScaling.ultimate.main, i)} of Cipher's ATK to one designated enemy. Then, deals <u>True DMG</u> equal to ${scaleValue(S.CipherScaling.ultimate.adjacent, i)} of the current tally kept by Talent to the one designated enemy. Moreover, deals Quantum DMG equal to ${scaleValue(S.CipherScaling.ultimate.adjacent2, i)} of Cipher's ATK alongside <u>True DMG</u> equal to ${scaleValue(S.CipherScaling.ultimate.adjacent3, i)} of the current tally kept by Talent to the one designated enemy and its adjacent targets. And this <u>True DMG</u> is distributed evenly among all targets of this ability.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: The Hospitable Dolosian",
            type: "talent",
            level: "1/12",
            icon: charIcon("Cipher", "Talent"),
            description: (i) => `
        When there are no enemy targets in the "Patron" state on the battlefield, Cipher immediately causes one enemy target with the highest Max HP on the battlefield to become the "Patron." When using Skill and Ultimate, the primary target becomes the "Patron." The "Patron" state only takes effect on the most recent target.\\nAfter the "Patron" gets attacked by other ally targets, Cipher immediately launches <u>Follow-Up ATK</u> against the "Patron," dealing Quantum DMG equal to ${scaleValue(S.CipherScaling.talent.main, i)} of Cipher's ATK. This effect can trigger up to ${scaleValue(S.CipherScaling.talent.adjacent, i, "")} time(s) per turn, and this trigger count resets at the start of Cipher's turn.\\nCipher will tally ${scaleValue(S.CipherScaling.talent.adjacent2, i)} of the non-<u>True DMG</u> dealt by ally targets to the "Patron." Overflow DMG will not be tallied. After using Ultimate, clears this tally.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Puss in Boots",
            type: "technique",
            level: "1/1",
            icon: charIcon("Cipher", "Technique"),
            description: (i) => `
        Gains "Zagreus's Blessing" that lasts for ${scaleValue(S.CipherScaling.technique.main, i, "")} second(s). During this time, Cipher will be undetectable by enemies and her movement speed increases by 50%. When approaching an enemy in the overworld/Simulated Universe/Divergent Universe, can immediately gain a random Consumable. Consumables can be gained this way for up to ${scaleValue(S.CipherScaling.technique.adjacent, i, "")} time(s) in each Earth day.\\nWhen entering battle with "Zagreus's Blessing" active, deals Quantum DMG equal to ${scaleValue(S.CipherScaling.technique.adjacent2, i)} of Cipher's ATK to all enemies. And the tallied amount Cipher gains from this instance of DMG increases by ${scaleValue(S.CipherScaling.technique.adjacent3, i)}.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Sleight of Sky",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cipher", "SleightOfSky"),
            description: (i) => `
        Increases the CRIT DMG dealt by the Talent's <u>Follow-Up ATK</u> by ${scaleValue(S.CipherScaling.b1.main, i)}. When Cipher is on the battlefield, DMG received by all enemy targets increases by ${scaleValue(S.CipherScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Empyrean Strides",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cipher", "EmpyreanStrides"),
            description: (i) => `
        When Cipher's SPD is higher than or equal to 140/170, CRIT Rate increases by ${scaleValue(S.CipherScaling.b2.main, i)}/${scaleValue(S.CipherScaling.b2.adjacent, i)}, and the gained tally increases by ${scaleValue(S.CipherScaling.b2.adjacent2, i)}/${scaleValue(S.CipherScaling.b2.adjacent3, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "300 Rogues",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cipher", "300Rogues"),
            description: (i) => `
        Cipher can tally ${scaleValue(S.CipherScaling.b3, i)} of the non-<u>True DMG</u> dealt by ally targets to the enemy targets other than the "Patron." Overflow DMG is not tallied.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s7: {
                id: "s7",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s9: {
                id: "s9",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
  },
};

Characters.push(Cipher);

const Castorice: Character = {
  name: "Castorice",
  path: Paths.Remembrance,
  element: Elements.Quantum,
  world: Worlds.Amphoreus,
  image: charSplash("Castorice"),
  pfp: charPfp("Castorice"),
  eidolons: Eidolons.CastoriceEidolons,

  baseATK: 523,
  baseDEF: 485,
  baseHP: 1629,
  baseSPD: 95,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Lament, Nethersea's Ripple",
            type: "basic",
            level: "1/7",
            icon: charIcon("Castorice", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.CastoriceScaling.attack, i)} of Castorice's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Silence, Wraithfly's Caress",
            type: "skill",
            level: "1/12",
            icon: charIcon("Castorice", "Skill"),
            description: (i) => `
        Consumes ${scaleValue(S.CastoriceScaling.skill.main, i)} of all allies' current HP. Deals Quantum DMG equal to ${scaleValue(S.CastoriceScaling.skill.adjacent, i)} of Castorice's Max HP to one designated enemy and Quantum DMG equal to ${scaleValue(S.CastoriceScaling.skill.adjacent2, i)} of Castorice's Max HP to adjacent targets.\\nIf the current HP is insufficient, reduces the current HP down to 1.\\nIf Netherwing is on the battlefield, the Skill becomes "Boneclaw, Doomdrake's Embrace" instead.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Doomshriek, Dawn's Chime",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Castorice", "Ultimate"),
            description: (i) => `
        <u>Summons the memosprite</u> Netherwing and <u>advances its action</u> by 100%. At the same time, deploys the <u>Territory</u> "Lost Netherland," which decreases all enemies' All-Type RES by ${scaleValue(S.CastoriceScaling.ultimate.main, i)}. If Castorice has the DMG Boost effect from her Talent, then this effect spreads to Netherwing. Netherwing has an initial SPD of ${scaleValue(S.CastoriceScaling.ultimate.adjacent, i, "")} and a set Max HP equal to ${scaleValue(S.CastoriceScaling.ultimate.adjacent2, i)} of max "Newbud."\\nAfter Netherwing experiences ${scaleValue(S.CastoriceScaling.ultimate.adjacent3, i, "")} turns or when its HP is 0, it disappears and dispels the <u>Territory</u> "Lost Netherland."
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Desolation Across Palms",
            type: "talent",
            level: "1/12",
            icon: charIcon("Castorice", "Talent"),
            description: (i) => `
        The maximum limit of "Newbud" is related to the levels of all characters on the battlefield. For every 1 point of HP lost by all allies, Castorice gains 1 point of "Newbud." When "Newbud" reaches its maximum limit, can activate the Ultimate. When allies lose HP, Castorice's and Netherwing's DMG dealt increases by ${scaleValue(S.CastoriceScaling.talent.main, i)}. This effect can stack up to ${scaleValue(S.CastoriceScaling.talent.adjacent, i, "")} time(s), lasting for ${scaleValue(S.CastoriceScaling.talent.adjacent2, i, "")} turn(s).\\nWhen Netherwing is on the field, "Newbud" cannot be gained through Talent, and every 1 point of HP lost by all allies (except Netherwing) will be converted to an equal amount of HP for Netherwing.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Wail, Death's Herald",
            type: "technique",
            level: "1/1",
            icon: charIcon("Castorice", "Technique"),
            description: (i) => `
        After using Technique, enters the "Netherveil" state that lasts for ${scaleValue(S.CastoriceScaling.technique.main, i, "")} seconds. While "Netherveil" is active, enemies are unable to actively approach Castorice.\\nDuring "Netherveil," active attacks will cause all enemies within range to enter combat. At the same time, <u>summons the memosprite</u> Netherwing, <u>advances its action</u> by 100%, and deploys the <u>Territory</u> "Lost Netherland." Netherwing has its current HP equal to ${scaleValue(S.CastoriceScaling.technique.adjacent, i)} of max "Newbud." After entering battle, consumes ${scaleValue(S.CastoriceScaling.technique.adjacent2, i)} of the current HP of all allies (except Netherwing).\\nIf Netherwing is not summoned after entering battle, Castorice gains "Newbud" by an amount equal to ${scaleValue(S.CastoriceScaling.technique.adjacent3, i)} of max "Newbud."
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Where the West Wind Dwells",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Castorice", "WhereTheWestWindDwells"),
            description: (i) => `
        Each time Netherwing uses "Breath Scorches the Shadow," the DMG dealt increases by ${scaleValue(S.CastoriceScaling.b1.main, i)}. This effect stacks up to ${scaleValue(S.CastoriceScaling.b1.adjacent, i, "")} time(s) and lasts until the end of this turn.
      `,
        },
        b2: {
            id: "b2",
            name: "Contained Dark Tide",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Castorice", "ContainedDarkTide"),
            description: (i) => `
        After ally targets (excluding Netherwing) receive healing, converts ${scaleValue(S.CastoriceScaling.b2.main, i)} of the healed amount into "Newbud." If Netherwing is on the field, this is converted to Netherwing's HP instead. Each ally target can accumulate a conversion amount up to ${scaleValue(S.CastoriceScaling.b2.adjacent, i)} of the max "Newbud." After any unit takes action, all units reset their accumulated conversion amount.
      `,
        },
        b3: {
            id: "b3",
            name: "Inverted Torch",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Castorice", "InvertedTorch"),
            description: (i) => `
        When Castorice's current HP is higher than or equal to ${scaleValue(S.CastoriceScaling.b3.main, i)} of her Max HP, her SPD increases by ${scaleValue(S.CastoriceScaling.b3.adjacent, i)}. When Netherwing uses "Breath Scorches the Shadow" and deals fatal damage to all enemies on the field or brings them to a point where their HP cannot be reduced further, Netherwing's SPD increases by ${scaleValue(S.CastoriceScaling.b3.adjacent2, i)}, lasting for 1 turn.
      `,
        },
        b4: {
            id: "b4",
            name: "Mooncocoon Shrouds the Form",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Castorice", "MooncocoonShroudstheForm"),
            description: (i) => `
        <b>Mooncocoon Shrouds the Form</b><br>When Netherwing is on the field, it acts as <u>backup</u> for allies. When allies take DMG or consume HP, their current HP can be reduced down to a minimum of 1, after which Netherwing will bear the HP loss. But Netherwing consumes HP equal to ${scaleValue(S.CastoriceScaling.b4.MooncocoonShroudstheForm, i)} of the original value. This lasts until Netherwing disappears.
<br>
        <b>Roar Rumbles the Realm</b><br>When Netherwing is summoned, increases DMG dealt by all allies by ${scaleValue(S.CastoriceScaling.b4.RoarRumblestheRealm.main, i)}, lasting for ${scaleValue(S.CastoriceScaling.b4.RoarRumblestheRealm.adjacent, i, "")} turn(s).
<br>
        <b>Wings Sweep the Ruins</b><br>When Netherwing disappears, deals ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins.main, i, "")} instance(s) of DMG, with each instance dealing Quantum DMG equal to ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins.adjacent, i)} of Castorice's Max HP to one random enemy. At the same time, restores HP by an amount equal to ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins.adjacent2, i)} of Castorice's Max HP plus ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins.adjacent3, i, "")} for all allies.
<br>
        <b>Wings Sweep the Ruins</b><br>Consumes all HP and deals ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins2.main, i, "")} instance(s) of DMG, with each instance dealing Quantum DMG equal to ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins2.adjacent, i)} of Castorice's Max HP to one random enemy. At the same time, restores HP by an amount equal to ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins2.adjacent2, i)} of Castorice's Max HP plus ${scaleValue(S.CastoriceScaling.b4.WingsSweeptheRuins2.adjacent3, i, "")} for all allies.
      `,
        },
        b5: {
            id: "b5",
            name: "Claw Splits the Veil",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Castorice", "ClawSplitstheVeil"),
            description: (i) => `
        <b>Claw Splits the Veil</b><br>Deals Quantum DMG equal to ${scaleValue(S.CastoriceScaling.b5.ClawSplitstheVeil, i)} of Castorice's Max HP to all enemies.
<br>
        <b>Breath Scorches the Shadow</b><br>Launching "Breath Scorches the Shadow" will consume ${scaleValue(S.CastoriceScaling.b5.BreathScorchestheShadow.main, i)} of Netherwing's Max HP to deal Quantum DMG equal to ${scaleValue(S.CastoriceScaling.b5.BreathScorchestheShadow.adjacent, i)} of Castorice's Max HP to all enemies.\\nIn one attack, "Breath Scorches the Shadow" can be launched repeatedly, with the DMG multiplier increased progressively to ${scaleValue(S.CastoriceScaling.b5.BreathScorchestheShadow.adjacent2, i)} / ${scaleValue(S.CastoriceScaling.b5.BreathScorchestheShadow.adjacent3, i)}. After reaching ${scaleValue(S.CastoriceScaling.b5.BreathScorchestheShadow.adjacent3, i)}, it will not increase further. The DMG Multiplier Boost effect will not decrease before Netherwing disappears.\\nWhen Netherwing's current HP is equal to or less than ${scaleValue(S.CastoriceScaling.b5.BreathScorchestheShadow.adjacent4, i)} of its Max HP, launching this ability will actively reduce HP down to 1, and then trigger the ability effect equal to that of the Talent "Wings Sweep the Ruins."
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Castorice);

const Phainon: Character = {
  name: "Phainon",
  path: Paths.Destruction,
  element: Elements.Physical,
  world: Worlds.Amphoreus,
  image: charSplash("Phainon"),
  pfp: charPfp("Phainon"),
  eidolons: Eidolons.PhainonEidolons,

  baseATK: 582,
  baseDEF: 703,
  baseHP: 1435,
  baseSPD: 94,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Stride to Deliverance",
            type: "basic",
            level: "1/7",
            icon: charIcon("Phainon", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.PhainonScaling.attack, i)} of Phainon's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Let There Be Light",
            type: "skill",
            level: "1/12",
            icon: charIcon("Phainon", "Skill"),
            description: (i) => `
        Gains ${scaleValue(S.PhainonScaling.skill.main, i, "")} point(s) of "Coreflame," dealing Physical DMG equal to ${scaleValue(S.PhainonScaling.skill.adjacent, i)} of Phainon's ATK to one designated enemy and Physical DMG equal to ${scaleValue(S.PhainonScaling.skill.adjacent2, i)} of Phainon's ATK to adjacent targets.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: He Who Bears the World Must Burn",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Phainon", "Ultimate"),
            description: (i) => `
        Transforms into Khaslana. During the transformation, deploys the <u>Territory</u> "Ruinous Irontomb." Within the <u>Territory</u>, other teammates <u>depart</u> and cannot take action, and all enemies have Physical Weaknesses.\\nKhaslana does not enter his own turn, but has ${scaleValue(S.PhainonScaling.ultimate.main, i, "")} <u>Khaslana's extra turn(s)</u>, with a SPD set at ${scaleValue(S.PhainonScaling.ultimate.adjacent, i)} of Khaslana's base SPD. When the last of <u>Khaslana's extra turns</u> starts, immediately launches a final hit and deals Physical Ultimate DMG equal to ${scaleValue(S.PhainonScaling.ultimate.adjacent2, i)} of Khaslana's ATK that is distributed evenly across all enemies.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Pyric Corpus",
            type: "talent",
            level: "1/12",
            icon: charIcon("Phainon", "Talent"),
            description: (i) => `
        Phainon's Talent. When "Coreflame" reaches ${scaleValue(S.PhainonScaling.talent.main, i, "")} point(s), can activate Ultimate. Even after reaching the limit, can still hold up to ${scaleValue(S.PhainonScaling.talent.adjacent, i, "")} overflow point(s). When the transformation ends, gains "Coreflame" based on the number of overflow points.\\nWhen Phainon is targeted by an ability from any other target, gains 1 "Coreflame" point. And if the ability is cast by one of Phainon's teammates, can also increase Phainon's CRIT DMG by ${scaleValue(S.PhainonScaling.talent.adjacent2, i)} for ${scaleValue(S.PhainonScaling.talent.adjacent3, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Beginning of the End",
            type: "technique",
            level: "1/1",
            icon: charIcon("Phainon", "Technique"),
            description: (i) => `
        While Phainon is in the team, increases Max Technique Points by 3.\\nWhen actively using this Technique, consumes 2 Technique Points and immediately attacks all enemies within a certain range. After entering combat, regenerates ${scaleValue(S.PhainonScaling.technique.main, i, "")} Energy for allies and gains ${scaleValue(S.PhainonScaling.technique.adjacent, i, "")} <u>"Scourge"</u> and ${scaleValue(S.PhainonScaling.technique.adjacent2, i, "")} Skill Point(s). Deals Physical DMG equal to ${scaleValue(S.PhainonScaling.technique.adjacent3, i)} of Phainon's ATK to all enemies at the start of each wave.\\nIf attacking a normal enemy, immediately defeats them without entering combat. No Technique Points are consumed if no enemies are hit.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Shine with Valor",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Phainon", "ShinewithValor"),
            description: (i) => `
        When entering combat or ending transformation, increases ATK by ${scaleValue(S.PhainonScaling.b1.main, i)}. This effect can stack up to ${scaleValue(S.PhainonScaling.b1.adjacent, i, "")} time(s).
      `,
        },
        b2: {
            id: "b2",
            name: "March to Oblivion",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Phainon", "MarchtoOblivion"),
            description: (i) => `
        When the battle starts, gains ${scaleValue(S.PhainonScaling.b2.main, i, "")} point(s) of "Coreflame." When the transformation ends, gains ${scaleValue(S.PhainonScaling.b2.adjacent, i, "")} point(s) of "Coreflame."
      `,
        },
        b3: {
            id: "b3",
            name: "Bide in Flames",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Phainon", "BideinFlames"),
            description: (i) => `
        When receiving healing or a Shield from a teammate, deals ${scaleValue(S.PhainonScaling.b3.main, i)} increased DMG for ${scaleValue(S.PhainonScaling.b3.adjacent, i, "")} turn(s). This effect cannot trigger repeatedly within one turn.\\nWhen receiving an Energy Regeneration effect from a teammate's ability, gains ${scaleValue(S.PhainonScaling.b3.adjacent2, i, "")} point(s) of "Coreflame."
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s9: {
                id: "s9",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Phainon);

const Hyacine: Character = {
  name: "Hyacine",
  path: Paths.Remembrance,
  element: Elements.Wind,
  world: Worlds.Amphoreus,
  image: charSplash("Hyacine"),
  pfp: charPfp("Hyacine"),
  eidolons: Eidolons.HyacineEidolons,

  baseATK: 388,
  baseDEF: 630,
  baseHP: 1086,
  baseSPD: 110,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: When Breeze Kisses Cirrus",
            type: "basic",
            level: "1/7",
            icon: charIcon("Hyacine", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.HyacineScaling.attack, i)} of Hyacine's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Love Over the Rainbow",
            type: "skill",
            level: "1/12",
            icon: charIcon("Hyacine", "Skill"),
            description: (i) => `
        <u>Summons memosprite</u> Little Ica. Restores HP equal to ${scaleValue(S.HyacineScaling.skill.main, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.skill.adjacent, i, "")} for all allies (except Little Ica), and restores HP equal to ${scaleValue(S.HyacineScaling.skill.adjacent2, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.skill.adjacent3, i, "")} for Little Ica.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: We Who Fly Into Twilight",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Hyacine", "Ultimate"),
            description: (i) => `
        <u>Summons memosprite</u> Little Ica. Restores HP equal to ${scaleValue(S.HyacineScaling.ultimate.main, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.ultimate.adjacent, i, "")} for all allies (except Little Ica), and restores HP equal to ${scaleValue(S.HyacineScaling.ultimate.adjacent2, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.ultimate.adjacent3, i, "")} for Little Ica. Hyacine enters the "After Rain" state, lasting for ${scaleValue(S.HyacineScaling.ultimate.adjacent4, i, "")} turn(s). This duration decreases by 1 at the start of Hyacine's every turn. While "After Rain" is active, all ally targets increase their Max HP by ${scaleValue(S.HyacineScaling.ultimate.adjacent5, i)} plus ${scaleValue(S.HyacineScaling.ultimate.adjacent6, i, "")}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: First Light Heals the World",
            type: "talent",
            level: "1/12",
            icon: charIcon("Hyacine", "Talent"),
            description: (i) => `
        The memosprite Little Ica initially has Max HP equal to ${scaleValue(S.HyacineScaling.talent.main, i)} of Hyacine's Max HP. When Hyacine or Little Ica provides healing, increases Little Ica's DMG dealt by ${scaleValue(S.HyacineScaling.talent.adjacent, i)} for ${scaleValue(S.HyacineScaling.talent.adjacent2, i, "")} turn(s). Stacks up to ${scaleValue(S.HyacineScaling.talent.adjacent3, i, "")} time(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Day So Right, Life So Fine!",
            type: "technique",
            level: "1/1",
            icon: charIcon("Hyacine", "Technique"),
            description: (i) => `
        When the next battle starts, restores HP by an amount equal to ${scaleValue(S.HyacineScaling.technique.main, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.technique.adjacent, i, "")} for all allies and increases Max HP by ${scaleValue(S.HyacineScaling.technique.adjacent2, i)}, lasting for ${scaleValue(S.HyacineScaling.technique.adjacent3, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Tempestuous Halt",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hyacine", "TempestuousHalt"),
            description: (i) => `
        When Hyacine's SPD exceeds ${scaleValue(S.HyacineScaling.b1.main, i, "")}, increases her and Little Ica's Max HP by ${scaleValue(S.HyacineScaling.b1.adjacent, i)}. Then, for every ${scaleValue(S.HyacineScaling.b1.adjacent2, i, "")} excess SPD, increases Hyacine's and Little Ica's Outgoing Healing by ${scaleValue(S.HyacineScaling.b1.adjacent3, i)}. Up to a max of ${scaleValue(S.HyacineScaling.b1.adjacent4, i, "")} excess SPD can be taken into account for this effect.
      `,
        },
        b2: {
            id: "b2",
            name: "Gloomy Grin",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hyacine", "GloomyGrin"),
            description: (i) => `
        Increases Hyacine's and Little Ica's CRIT Rate by ${scaleValue(S.HyacineScaling.b2.main, i)}. When providing healing to an ally target whose current HP is equal to or less than ${scaleValue(S.HyacineScaling.b2.adjacent, i)} of their Max HP, increases Hyacine's and Little Ica's Outgoing Healing by ${scaleValue(S.HyacineScaling.b2.adjacent2, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Stormy Caress",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hyacine", "StormyCaress"),
            description: (i) => `
        Increases Hyacine's Effect RES by ${scaleValue(S.HyacineScaling.b3.main, i)}. When using Skill and Ultimate, dispels ${scaleValue(S.HyacineScaling.b3.adjacent, i, "")} <u>debuff(s)</u> from all ally targets.
      `,
        },
        b4: {
            id: "b4",
            name: "Take Sky in Hand",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hyacine", "TakeSkyinHand"),
            description: (i) => `
        <b>Take Sky in Hand</b><br>Little Ica maintains 0 SPD, is immune to <u>debuffs</u>, and will not appear in the Action Order.\\nIf the HP of an ally target (except Little Ica) is reduced, then at the start of any target's turn or after any target takes action, Little Ica will consume ${scaleValue(S.HyacineScaling.b4.TakeSkyinHand.main, i)} of their own Max HP and heal the ally target with reduced HP for an amount equal to ${scaleValue(S.HyacineScaling.b4.TakeSkyinHand.adjacent, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.b4.TakeSkyinHand.adjacent2, i, "")}.\\nWhile Hyacine is in the "After Rain" state, Little Ica gains 1 <u>extra turn</u> and automatically casts "Rainclouds, Time to Go!" immediately after Hyacine uses an ability. Moreover, when Little Ica triggers the Talent's healing effect, additionally restores HP for all ally targets by an amount equal to ${scaleValue(S.HyacineScaling.b4.TakeSkyinHand.adjacent3, i)} of Hyacine's Max HP plus ${scaleValue(S.HyacineScaling.b4.TakeSkyinHand.adjacent4, i, "")}. After Little Ica uses an ability, the duration of all their <u>Continuous Effects</u> decreases by 1 turn.
<br>
        <b>Soar, Unto the Sunlight</b><br>When summoned, regenerates ${scaleValue(S.HyacineScaling.b4.SoarUntotheSunlight.main, i, "")} Energy for Hyacine. On the first summon, additionally regenerates ${scaleValue(S.HyacineScaling.b4.SoarUntotheSunlight.adjacent, i, "")} Energy.
<br>
        <b>Fall, Then Take Wing</b><br>Upon disappearing, <u>advances the action</u> of Hyacine by ${scaleValue(S.HyacineScaling.b4.FallThenTakeWing, i)}.
      `,
        },
        b5: {
            id: "b5",
            name: "Rainclouds, Time to Go!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hyacine", "RaincloudsTimetoGo"),
            description: (i) => `
        Deals Wind DMG to all enemies by an amount equal to ${scaleValue(S.HyacineScaling.b5.main, i)} of the tally of healing done by Hyacine and Little Ica in the current battle, and clears ${scaleValue(S.HyacineScaling.b5.adjacent, i)} of this tally of healing.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
  },
};

Characters.push(Hyacine);

const Hysilens: Character = {
  name: "Hysilens",
  path: Paths.Nihility,
  element: Elements.Physical,
  world: Worlds.Amphoreus, // TODO: Hysilens
  image: charSplash("Hysilens"),
  pfp: charPfp("Hysilens"),
  eidolons: Eidolons.HysilensEidolons,

  baseATK: 601,
  baseDEF: 485,
  baseHP: 1203,
  baseSPD: 102,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Aeolian Mode: Echoes in Still Waters",
            type: "basic",
            level: "1/7",
            icon: charIcon("Hysilens", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.HysilensScaling.attack, i)} of Hysilens's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Overtone Hum: Chorus After Dark Tides",
            type: "skill",
            level: "1/12",
            icon: charIcon("Hysilens", "Skill"),
            description: (i) => `
        Has a ${scaleValue(S.HysilensScaling.skill.main, i)} <u>base chance</u> to increase the DMG taken by all enemies by ${scaleValue(S.HysilensScaling.skill.adjacent, i)}, lasting for ${scaleValue(S.HysilensScaling.skill.adjacent2, i, "")} turn(s). At the same time, deals Physical DMG equal to ${scaleValue(S.HysilensScaling.skill.adjacent3, i)} of Hysilens's ATK to all enemies.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Maelstrom Rhapsody",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Hysilens", "Ultimate"),
            description: (i) => `
        Hysilens deploys a Zone that reduces enemy targets' ATK by ${scaleValue(S.HysilensScaling.ultimate.main, i)} and DEF by ${scaleValue(S.HysilensScaling.ultimate.adjacent, i)}, and deals Physical DMG equal to ${scaleValue(S.HysilensScaling.ultimate.adjacent2, i)} of Hysilens's ATK to all enemies.\\nFor every 1 instance of DoT taken by an enemy target within the Zone, Hysilens deals Physical DoT equal to ${scaleValue(S.HysilensScaling.ultimate.adjacent3, i)} of her ATK to them. This damage triggers at the start of each turn or after one attack by an ally target, up to ${scaleValue(S.HysilensScaling.ultimate.adjacent4, i, "")} time(s). And it cannot repeatedly trigger this effect.\\nThe Zone lasts for ${scaleValue(S.HysilensScaling.ultimate.adjacent5, i, "")} turn(s) and this duration decreases by 1 at the start of this unit's every turn. When Hysilens gets <u>knocked down</u>, the Zone will also be dispelled.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Sirenic Serenade",
            type: "talent",
            level: "1/12",
            icon: charIcon("Hysilens", "Talent"),
            description: (i) => `
        When an ally target attacks, there is a ${scaleValue(S.HysilensScaling.talent.main, i)} <u>base chance</u> for Hysilens to inflict the hit enemy target with one of the following states: Wind Shear, Bleed, Burn, or Shock. Priority is given to inflicting a different state.\\nWhile in the Wind Shear/Burn/Shock state, at the start of each turn, the enemy target takes Wind/Fire/Lightning DoT equal to ${scaleValue(S.HysilensScaling.talent.adjacent, i)} of Hysilens's ATK for ${scaleValue(S.HysilensScaling.talent.adjacent2, i, "")} turn(s).\\nWhile in the Bleed state, at the start of each turn, the enemy target takes Physical DoT equal to ${scaleValue(S.HysilensScaling.talent.adjacent3, i)} of their Max HP, up to ${scaleValue(S.HysilensScaling.talent.adjacent4, i)} of Hysilens's ATK, lasting for ${scaleValue(S.HysilensScaling.talent.adjacent2, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: At Ocean's Abode",
            type: "technique",
            level: "1/1",
            icon: charIcon("Hysilens", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that lasts for ${scaleValue(S.HysilensScaling.technique.main, i, "")} seconds and automatically moves forward. Enemies within the Special Dimension enter the "Soulstruck" state. "Soulstruck" enemies will not attack ally targets and will follow the dimension while it persists.\\nAfter entering combat with "Soulstruck" enemies, there is a ${scaleValue(S.HysilensScaling.technique.adjacent, i)} <u>base chance</u> to inflict each enemy target with ${scaleValue(S.HysilensScaling.technique.adjacent2, i, "")} of the following states: Wind Shear/Bleed/Burn/Shock, all of which are equivalent to those provided by Hysilens's Talent effect. Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "The Fiddle of Pearls",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hysilens", "TheFiddleofPearls"),
            description: (i) => `
        For every ${scaleValue(S.HysilensScaling.b1.main, i)} of Hysilens's Effect Hit Rate that exceeds ${scaleValue(S.HysilensScaling.b1.adjacent, i)}, increases her DMG dealt by ${scaleValue(S.HysilensScaling.b1.adjacent2, i)}, up to a max increase of ${scaleValue(S.HysilensScaling.b1.adjacent3, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "The Gladius of Conquest",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hysilens", "TheGladiusofConquest"),
            description: (i) => `
        At the start of combat, Hysilens deploys a Zone, equivalent to that provided by her Ultimate, lasting for ${scaleValue(S.HysilensScaling.b2.main, i, "")} turn(s). Whenever Hysilens deploys a Zone, she recovers ${scaleValue(S.HysilensScaling.b2.adjacent, i, "")} Skill Point(s).
      `,
        },
        b3: {
            id: "b3",
            name: "The Bubble of Banquets",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Hysilens", "TheBubbleofBanquets"),
            description: (i) => `
        When Hysilens uses Ultimate, if the enemy target is currently afflicted with DoT(s), all DoTs currently applied on the target will immediately produce DMG equal to ${scaleValue(S.HysilensScaling.b3, i)} of their original DMG.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "Effect Hit Rate Boost",
                type: "stat",
                icon: statIcon("EffectHitRate"),
                description: "Effect Hit Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s7: {
                id: "s7",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
  },
};

Characters.push(Hysilens);

const Cerydra: Character = {
  name: "Cerydra",
  path: Paths.Harmony,
  element: Elements.Wind,
  world: Worlds.Amphoreus, // TODO: Cerydra
  image: charSplash("Cerydra"),
  pfp: charPfp("Cerydra"),
  eidolons: Eidolons.CerydraEidolons,

  baseATK: 620,
  baseDEF: 485,
  baseHP: 1358,
  baseSPD: 99,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: King's Castling",
            type: "basic",
            level: "1/7",
            icon: charIcon("Cerydra", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.CerydraScaling.attack, i)} of Cerydra's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Pawn's Promotion",
            type: "skill",
            level: "1/12",
            icon: charIcon("Cerydra", "Skill"),
            description: (i) => `
        Grants "Military Merit" to one designated ally character and gives Cerydra ${scaleValue(S.CerydraScaling.skill.main, i, "")} points of Charge. Charge is capped at ${scaleValue(S.CerydraScaling.skill.adjacent, i, "")} points. When Charge reaches ${scaleValue(S.CerydraScaling.skill.adjacent2, i, "")} points, automatically upgrades the character's "Military Merit" to "Peerage" and dispels their <u>Crowd Control debuffs</u>. The character with "Peerage" is considered to have "Military Merit" simultaneously. The character with "Peerage" increases the CRIT DMG for their dealt Skill DMG by ${scaleValue(S.CerydraScaling.skill.adjacent3, i)}, increases their All-Type <u>RES PEN</u> by ${scaleValue(S.CerydraScaling.skill.adjacent4, i)}, and triggers <u>Coup de Main</u> when using their Skill on enemy targets. After <u>Coup de Main</u> ends, consumes ${scaleValue(S.CerydraScaling.skill.adjacent2, i, "")} points of Charge to revert "Peerage" to "Military Merit."
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Scholar's Mate",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Cerydra", "Ultimate"),
            description: (i) => `
        Gains ${scaleValue(S.CerydraScaling.ultimate.main, i, "")} Charge. Deals Wind DMG equal to ${scaleValue(S.CerydraScaling.ultimate.adjacent, i)} of Cerydra's ATK to all enemies. If no character on the field has "Military Merit," prioritizes granting "Military Merit" to the first character in the current team.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Ave Imperator",
            type: "talent",
            level: "1/12",
            icon: charIcon("Cerydra", "Talent"),
            description: (i) => `
        The character with "Military Merit" increases ATK by an amount equal to ${scaleValue(S.CerydraScaling.talent.main, i)} of Cerydra's ATK. When the character uses Basic ATK or Skill, Cerydra gains ${scaleValue(S.CerydraScaling.talent.adjacent, i, "")} Charge. During <u>Coup de Main</u>, Cerydra cannot gain Charge. After the character with "Military Merit" uses an attack, Cerydra additionally deals 1 instance of Wind <u>Additional DMG</u> equal to ${scaleValue(S.CerydraScaling.talent.adjacent2, i)} of her ATK. This effect can trigger up to ${scaleValue(S.CerydraScaling.talent.adjacent3, i, "")} time(s). The trigger count resets every time Cerydra uses her Ultimate. "Military Merit" only takes effect on the most recent target. When the target changes, Cerydra's Charge is reset to 0.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: First-Move Advantage",
            type: "technique",
            level: "1/1",
            icon: charIcon("Cerydra", "Technique"),
            description: "After using Technique, gains \"Military Merit.\" When switching the active character, \"Military Merit\" transfers to the current active character. At the start of the next battle, automatically uses Skill 1 time on the character with \"Military Merit\" without consuming any Skill Points.",
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Vici",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cerydra", "Vici"),
            description: (i) => `
        When using Skill, increases SPD by ${scaleValue(S.CerydraScaling.b1.main, i, "")} for this unit and the teammate with "Military Merit," lasting for ${scaleValue(S.CerydraScaling.b1.adjacent, i, "")} turn(s). When the character with "Military Merit" uses Basic ATK or Skill, regenerates ${scaleValue(S.CerydraScaling.b1.adjacent2, i, "")} Energy for Cerydra.
      `,
        },
        b2: {
            id: "b2",
            name: "Veni",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cerydra", "Veni"),
            description: (i) => `
        For every ${scaleValue(S.CerydraScaling.b2.main, i, "")} of Cerydra's ATK that exceeds ${scaleValue(S.CerydraScaling.b2.adjacent, i, "")}, increases her CRIT DMG by ${scaleValue(S.CerydraScaling.b2.adjacent2, i)}, up to a max increase of ${scaleValue(S.CerydraScaling.b2.adjacent3, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Vidi",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cerydra", "Vidi"),
            description: (i) => `
        Increases Cerydra's CRIT Rate by ${scaleValue(S.CerydraScaling.b3.main, i)}. While Cerydra's Charge is below its maximum, the character with "Military Merit" using their Ultimate grants Cerydra ${scaleValue(S.CerydraScaling.b3.adjacent, i, "")} Charge. This effect can trigger once per battle.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>6.4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>3.2%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Wind DMG Boost",
                type: "stat",
                icon: statIcon("WindBoost"),
                description: "Wind DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(Cerydra);

const Evernight: Character = {
  name: "Evernight",
  path: Paths.Remembrance,
  element: Elements.Ice,
  world: Worlds.Amphoreus, // TODO: Evernight
  image: charSplash("Evernight"),
  pfp: charPfp("Evernight"),
  eidolons: Eidolons.EvernightEidolons,

  baseATK: 543,
  baseDEF: 582,
  baseHP: 1319,
  baseSPD: 99,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Time Thence Blurs",
            type: "basic",
            level: "1/7",
            icon: charIcon("Evernight", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.EvernightScaling.attack, i)} of Evernight's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Day Gently Slips",
            type: "skill",
            level: "1/12",
            icon: charIcon("Evernight", "Skill"),
            description: (i) => `
        Consumes ${scaleValue(S.EvernightScaling.skill.main, i)} of Evernight's current HP to <u>summon memosprite</u> Evey and increases CRIT DMG of all ally memosprites by an amount equal to ${scaleValue(S.EvernightScaling.skill.adjacent, i)} of Evernight's CRIT DMG for ${scaleValue(S.EvernightScaling.skill.adjacent2, i, "")} turn(s). This duration decreases by 1 at the start of Evernight's every turn. If Evey is already on the field, restores its HP by ${scaleValue(S.EvernightScaling.skill.adjacent3, i)} of its Max HP. When using this, gains ${scaleValue(S.EvernightScaling.skill.adjacent4, i, "")} point(s) of "Memoria." If in the "Darkest Riddle" state, gains ${scaleValue(S.EvernightScaling.skill.adjacent5, i, "")} additional point(s) of "Memoria."
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: O Wakeful World, Goodnight",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Evernight", "Ultimate"),
            description: (i) => `
        <u>Summons memosprite</u> Evey. Then Evey deals Ice DMG to all enemies equal to ${scaleValue(S.EvernightScaling.ultimate.main, i)} of Evey's Max HP and Evernight enters the "Darkest Riddle" state. During this state, all enemies take ${scaleValue(S.EvernightScaling.ultimate.adjacent, i)} increased DMG while both Evernight and Evey deal ${scaleValue(S.EvernightScaling.ultimate.adjacent2, i)} increased DMG and are immune to <u>Crowd Control debuffs</u>. Gains ${scaleValue(S.EvernightScaling.ultimate.adjacent3, i, "")} point(s) of Charge for "Darkest Riddle." And Evey consumes 1 point after it uses "Dream, Dissolving, as Dew." At the start of Evernight's turn, if no Charge remains, exits the "Darkest Riddle" state.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: With Me, This Night",
            type: "talent",
            level: "1/12",
            icon: charIcon("Evernight", "Talent"),
            description: (i) => `
        When entering combat, <u>summons memosprite</u> Evey. Evey has an initial SPD of ${scaleValue(S.EvernightScaling.talent.main, i, "")} and its Max HP equals to ${scaleValue(S.EvernightScaling.talent.adjacent, i)} of that of Evernight's. Each time Evernight or Evey loses HP, increases CRIT DMG for Evernight and Evey by ${scaleValue(S.EvernightScaling.talent.adjacent2, i)} for ${scaleValue(S.EvernightScaling.talent.adjacent3, i, "")} turn(s), and gains ${scaleValue(S.EvernightScaling.talent.adjacent4, i, "")} "Memoria." This effect can trigger only once per target for each received attack.\\nWhen Evernight has ${scaleValue(S.EvernightScaling.talent.adjacent5, i, "")} or more points of "Memoria," dispels <u>Crowd Control debuffs</u> and becomes immune to them. If Evey is on the field, it immediately takes action. The immediate action effect can only trigger again after Evey uses "Dream, Dissolving, as Dew."
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Let it Rain Cold On Thee",
            type: "technique",
            level: "1/1",
            icon: charIcon("Evernight", "Technique"),
            description: (i) => `
        After using Technique, at the start of the next battle, obtains the same effect as the one from Skill that increases CRIT DMG for all ally memosprites, and gains ${scaleValue(S.EvernightScaling.technique, i, "")} "Memoria."
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Kindle the Morn, Drop the Rain",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evernight", "KindletheMornDroptheRain"),
            description: (i) => `
        When there are 1/2/3/≥4 Remembrance characters in the team, increases CRIT DMG for all ally memosprites by ${scaleValue(S.EvernightScaling.b1.main, i)}/${scaleValue(S.EvernightScaling.b1.adjacent, i)}/${scaleValue(S.EvernightScaling.b1.adjacent2, i)}/${scaleValue(S.EvernightScaling.b1.adjacent3, i)} respectively while Evernight's Skill lasts.
      `,
        },
        b2: {
            id: "b2",
            name: "Dark the Night, Still the Moon",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evernight", "DarktheNightStilltheMoon"),
            description: (i) => `
        Increases Evernight's and the memosprite Evey's CRIT Rate by ${scaleValue(S.EvernightScaling.b2.main, i)}. When using an ability, consumes ${scaleValue(S.EvernightScaling.b2.adjacent, i)} of this unit's current HP to increase CRIT DMG for both of them by ${scaleValue(S.EvernightScaling.b2.adjacent2, i)}, lasting for ${scaleValue(S.EvernightScaling.b2.adjacent3, i, "")} turn(s). After Evey uses "Dream, Dissolving, as Dew," recovers 1 Skill Point for allies.
      `,
        },
        b3: {
            id: "b3",
            name: "Rouse the Flame, Lull the Light",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evernight", "RousetheFlameLulltheLight"),
            description: (i) => `
        When combat starts, Evernight regenerates ${scaleValue(S.EvernightScaling.b3.main, i, "")} Energy and gains ${scaleValue(S.EvernightScaling.b3.adjacent, i, "")} "Memoria." When Evernight or an ally memosprite uses an ability, Evernight regenerates ${scaleValue(S.EvernightScaling.b3.adjacent2, i, "")} Energy and gains ${scaleValue(S.EvernightScaling.b3.adjacent3, i, "")} "Memoria."
      `,
        },
        b4: {
            id: "b4",
            name: "Solitude, Drifting, In Murk",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evernight", "SolitudeDriftingInMurk"),
            description: (i) => `
        <b>Solitude, Drifting, In Murk</b><br>Evey is immune to <u>Crowd Control debuffs</u> and has an increased chance of getting attacked. While Evey is on the field, Evernight and Evey deal ${scaleValue(S.EvernightScaling.b4.SolitudeDriftingInMurk, i)} increased DMG.
<br>
        <b>Night, Trailing, In Step</b><br>"When summoned, this unit immediately takes action."
<br>
        <b>You, Parting, Beyond Reach</b><br>Upon disappearing, increases Evernight's SPD by ${scaleValue(S.EvernightScaling.b4.YouPartingBeyondReach.main, i)}. If the disappearance is due to using "Dream, Dissolving, as Dew," then, for every 1 "Memoria" point consumed by the attack, additionally increases Evernight's SPD by ${scaleValue(S.EvernightScaling.b4.YouPartingBeyondReach.adjacent, i)}. Up to ${scaleValue(S.EvernightScaling.b4.YouPartingBeyondReach.adjacent2, i, "")} "Memoria" points can be taken into account for this. The SPD Boost effect cannot stack and is removed at the start of Evernight's next turn.
      `,
        },
        b5: {
            id: "b5",
            name: "Remembrance, Whirling, Like Rain",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evernight", "RemembranceWhirlingLikeRain"),
            description: (i) => `
        <b>Remembrance, Whirling, Like Rain</b><br>This ability automatically selects a target, prioritizing the enemy target that Evernight last attacked. Deals Ice DMG equal to ${scaleValue(S.EvernightScaling.b5.RemembranceWhirlingLikeRain.main, i)} of Evey's Max HP to one enemy. For every ${scaleValue(S.EvernightScaling.b5.RemembranceWhirlingLikeRain.adjacent, i, "")} point(s) of "Memoria" Evernight currently has, additionally deals Ice DMG equal to ${scaleValue(S.EvernightScaling.b5.RemembranceWhirlingLikeRain.adjacent2, i)} of Evey's Max HP. Gains ${scaleValue(S.EvernightScaling.b5.RemembranceWhirlingLikeRain.adjacent3, i, "")} point(s) of "Memoria" after use.
<br>
        <b>Dream, Dissolving, as Dew</b><br>This ability is used when Evernight's "Memoria" is greater than or equal to ${scaleValue(S.EvernightScaling.b5.DreamDissolvingasDew.main, i, "")} and she is not affected by Crowd Control. For every 1 "Memoria" point currently held, deals Ice DMG equal to ${scaleValue(S.EvernightScaling.b5.DreamDissolvingasDew.adjacent, i)} of Evey's Max HP to the primary target, and Ice DMG equal to ${scaleValue(S.EvernightScaling.b5.DreamDissolvingasDew.adjacent2, i)} of Evey's Max HP to the other enemy targets. After use, consumes all "Memoria" and HP, and makes Evey disappear.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Evernight);

const DanHengPermansorTerrae: Character = {
  name: "Dan Heng • Permansor Terrae",
  path: Paths.Preservation,
  element: Elements.Physical,
  world: Worlds.Amphoreus, // TODO: Dan Heng • Permansor Terrae
  image: charSplash("DanHengPermansorTerrae"),
  pfp: charPfp("DanHengPermansorTerrae"),
  eidolons: Eidolons.DanHengPermansorTerraeEidolons,

  baseATK: 582,
  baseDEF: 776,
  baseHP: 1047,
  baseSPD: 97,
  aggro: 150,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Aegis Vitae",
            type: "basic",
            level: "1/7",
            icon: charIcon("DanHengPermansorTerrae", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.DanHengPermansorTerraeScaling.attack, i)} of Dan Heng • Permansor Terrae's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Terra Omnibus",
            type: "skill",
            level: "1/12",
            icon: charIcon("DanHengPermansorTerrae", "Skill"),
            description: (i) => `
        Designates one ally character as the "Bondmate" and provides all allies with a Shield that can offset DMG equal to ${scaleValue(S.DanHengPermansorTerraeScaling.skill.main, i)} of Dan Heng • Permansor Terrae's ATK plus ${scaleValue(S.DanHengPermansorTerraeScaling.skill.adjacent, i, "")} for ${scaleValue(S.DanHengPermansorTerraeScaling.skill.adjacent2, i, "")} turn(s). When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed ${scaleValue(S.DanHengPermansorTerraeScaling.skill.adjacent3, i)} of the current Shield provided by Skill.\\n"Bondmate" only applies to the most recent target of Dan Heng • Permansor Terrae's Skill.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: A Dragon's Zenith Knows No Rue",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("DanHengPermansorTerrae", "Ultimate"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.main, i)} of Dan Heng • Permansor Terrae's ATK to all enemies, and provides a Shield to all allies that can offset DMG equal to ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent, i)} of Dan Heng • Permansor Terrae's ATK plus ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent2, i, "")}, lasting for ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent3, i, "")} turn(s). When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent4, i)} of the current Shield provided by Skill.\\n"Souldragon" becomes enhanced. When "Souldragon" takes action, launches <u>Follow-Up ATK</u>, dealing Physical DMG to all enemies equal to ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent5, i)} of Dan Heng • Permansor Terrae's ATK and <u>Additional DMG</u> of the Bondmate's Type to all enemies equal to ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent6, i)} of the Bondmate's ATK. The enhancement lasts for ${scaleValue(S.DanHengPermansorTerraeScaling.ultimate.adjacent7, i, "")} "Souldragon" action(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Of Virtue, Forms Unfold",
            type: "talent",
            level: "1/12",
            icon: charIcon("DanHengPermansorTerrae", "Talent"),
            description: (i) => `
        When an ally character becomes the "Bondmate," Dan Heng • Permansor Terrae summons "Souldragon" for them, which has an initial SPD of ${scaleValue(S.DanHengPermansorTerraeScaling.talent.main, i, "")}.\\nWhen "Souldragon" takes action, dispels ${scaleValue(S.DanHengPermansorTerraeScaling.talent.adjacent, i, "")} <u>debuff(s)</u> from all allies and provides a Shield that can offset DMG equal to ${scaleValue(S.DanHengPermansorTerraeScaling.talent.adjacent2, i)} of Dan Heng • Permansor Terrae's ATK plus ${scaleValue(S.DanHengPermansorTerraeScaling.talent.adjacent3, i, "")} for ${scaleValue(S.DanHengPermansorTerraeScaling.talent.adjacent4, i, "")} turn(s). The Shield Effect provided by Dan Heng • Permansor Terrae and "Souldragon" can be stacked, but it will not exceed ${scaleValue(S.DanHengPermansorTerraeScaling.talent.adjacent5, i)} of the Shield provided by Dan Heng • Permansor Terrae's Skill.\\nWhen Dan Heng • Permansor Terrae or the "Bondmate" is <u>knocked down</u>, "Souldragon" disappears.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Earthrend",
            type: "technique",
            level: "1/1",
            icon: charIcon("DanHengPermansorTerrae", "Technique"),
            description: (i) => `
        After using Technique, gains "Bondmate" and inflict Daze on enemies within a certain area for ${scaleValue(S.DanHengPermansorTerraeScaling.technique, i, "")} second(s). Dazed enemies will not actively attack ally targets.\\nWhen switching the active character, "Bondmate" transfers to the current active character. At the start of the next battle, automatically uses Skill 1 time on the character with "Bondmate" without consuming any Skill Points.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Sublimity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHengPermansorTerrae", "Sublimity"),
            description: (i) => `
        When "Souldragon" takes action, additionally provides a Shield that can offset DMG equal to ${scaleValue(S.DanHengPermansorTerraeScaling.b1.main, i)} of Dan Heng • Permansor Terrae's ATK plus ${scaleValue(S.DanHengPermansorTerraeScaling.b1.adjacent, i, "")} to the ally target whose current Shield Effect is the lowest. When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed ${scaleValue(S.DanHengPermansorTerraeScaling.b1.adjacent2, i)} of the current Shield provided by Skill. When the enhanced "Souldragon" takes action, additionally deals 1 instance of <u>Additional DMG</u> of the Bondmate's Type to the one enemy target whose current HP is the highest, equal to ${scaleValue(S.DanHengPermansorTerraeScaling.b1.adjacent3, i)} of the Bondmate's ATK.
      `,
        },
        b2: {
            id: "b2",
            name: "Empyreanity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHengPermansorTerrae", "Empyreanity"),
            description: (i) => `
        When using Skill, increases ATK for the target who has become "Bondmate" by an amount equal to ${scaleValue(S.DanHengPermansorTerraeScaling.b2, i)} of Dan Heng • Permansor Terrae's ATK.
      `,
        },
        b3: {
            id: "b3",
            name: "Sylvanity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("DanHengPermansorTerrae", "Sylvanity"),
            description: (i) => `
        When combat starts, Dan Heng • Permansor Terrae <u>advances action</u> by ${scaleValue(S.DanHengPermansorTerraeScaling.b3.main, i)}. When the "Bondmate" uses an attack, Dan Heng • Permansor Terrae regenerates ${scaleValue(S.DanHengPermansorTerraeScaling.b3.adjacent, i, "")} Energy and "Souldragon" <u>advances action</u> by ${scaleValue(S.DanHengPermansorTerraeScaling.b3.adjacent2, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s8: {
                id: "s8",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(DanHengPermansorTerrae);

const Cyrene: Character = {
  name: "Cyrene",
  path: Paths.Remembrance,
  element: Elements.Ice,
  world: Worlds.Amphoreus, // TODO: Cyrene
  image: charSplash("Cyrene"),
  pfp: charPfp("Cyrene"),
  eidolons: Eidolons.CyreneEidolons,

  baseATK: 446,
  baseDEF: 582,
  baseHP: 1397,
  baseSPD: 101,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Lo, Hope Takes Flight!",
            type: "basic",
            level: "1/7",
            icon: charIcon("Cyrene", "BasicATK"),
            description: (i) => `
        Gains ${scaleValue(S.CyreneScaling.attack.main, i, "")} "Recollection" point(s) and deals Ice DMG equal to ${scaleValue(S.CyreneScaling.attack.adjacent, i)} of Cyrene's Max HP to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Bloom, Elysium of Beyond",
            type: "skill",
            level: "1/12",
            icon: charIcon("Cyrene", "Skill"),
            description: (i) => `
        Gains ${scaleValue(S.CyreneScaling.skill.main, i, "")} "Recollection" point(s) and deploys a Zone that lasts for ${scaleValue(S.CyreneScaling.skill.adjacent, i, "")} turns. The Zone's duration decreases by 1 at the start of Cyrene's every turn. While the Zone lasts, for each instance of DMG dealt by all ally targets, deals 1 additional instance of <u>True DMG</u> equal to ${scaleValue(S.CyreneScaling.skill.adjacent2, i)} of the original DMG. When Cyrene is <u>downed</u>, the Zone will also be dispelled.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Verse ◦ Vow ∞",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Cyrene", "Ultimate"),
            description: (i) => `
        <u>Summons memosprite</u> Demiurge, causes it to immediately gain 1 <u>extra turn</u>, and activates all teammates' Ultimate. Then, enters the "Ripples of Past Reverie" state. Enhances Basic ATK to "To Love and Tomorrow ♪" and can only use this Basic ATK. Increases Cyrene's and Demiurge's CRIT Rate by ${scaleValue(S.CyreneScaling.ultimate.main, i)}, and deploys the Zone effect from Skill with no duration limit.\\nCan only be used once per battle. Demiurge's initial Max HP equals to ${scaleValue(S.CyreneScaling.ultimate.adjacent, i)} of Cyrene's Max HP.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Hearts Gather as One",
            type: "talent",
            level: "1/12",
            icon: charIcon("Cyrene", "Talent"),
            description: (i) => `
        When combat begins or after Cyrene takes action, other ally characters under any state and their memosprites gain "Future." When ally targets with "Future" take action, consumes "Future" to grant Cyrene ${scaleValue(S.CyreneScaling.talent.main, i, "")} "Recollection" point(s). When Cyrene has ${scaleValue(S.CyreneScaling.talent.adjacent, i, "")} "Recollection" points, can activate Ultimate and dispel all <u>debuffs</u> on her. When she has ${scaleValue(S.CyreneScaling.talent.adjacent2, i, "")} "Recollection" points during the "Ripples of Past Reverie" state, can activate Ultimate. After reaching the maximum, it can overflow by up to ${scaleValue(S.CyreneScaling.talent.adjacent3, i, "")} points. While Cyrene is on the field, increases DMG dealt by all ally targets by ${scaleValue(S.CyreneScaling.talent.adjacent4, i)}.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Peace at West Wind's End",
            type: "technique",
            level: "1/1",
            icon: charIcon("Cyrene", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that lasts for ${scaleValue(S.CyreneScaling.technique.main, i, "")} second(s) around the character. Enemies within this Special Dimension enter the "This Moment, Forever" state. While in this state, enemies will cease all actions. Ally characters within this Special Dimension have ${scaleValue(S.CyreneScaling.technique.adjacent, i)} increased movement speed. After entering combat within the duration, deploys the Skill's Zone. Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Causality in Trichotomy",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cyrene", "CausalityinTrichotomy"),
            description: (i) => `
        When Cyrene's SPD is ${scaleValue(S.CyreneScaling.b1.main, i, "")} or higher, increases all allies' DMG dealt by ${scaleValue(S.CyreneScaling.b1.adjacent, i)}. Then, for every 1 SPD that exceeds ${scaleValue(S.CyreneScaling.b1.main, i, "")}, increases Cyrene's and Demiurge's Ice <u>RES PEN</u> by ${scaleValue(S.CyreneScaling.b1.adjacent2, i)}. Up to a maximum of ${scaleValue(S.CyreneScaling.b1.adjacent3, i, "")} excess SPD can be taken into account for this effect.
      `,
        },
        b2: {
            id: "b2",
            name: "Child of Remembrance",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cyrene", "ChildofRemembrance"),
            description: "When a teammate's memosprite is summoned, it gains \"Future.\" \"Future\" held by the memosprite won't be consumed.",
        },
        b3: {
            id: "b3",
            name: "Ripples Across Time",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cyrene", "RipplesAcrossTime"),
            description: (i) => `
        When there are 1/2/3 <u>Chrysos Heir</u> or Remembrance characters (excluding Cyrene) in the team, Cyrene gains ${scaleValue(S.CyreneScaling.b3.main, i, "")}/${scaleValue(S.CyreneScaling.b3.adjacent, i, "")}/${scaleValue(S.CyreneScaling.b3.adjacent2, i, "")} "Recollection" point(s) respectively at the start of combat.
      `,
        },
        b4: {
            id: "b4",
            name: "Waiting, In Every Past",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cyrene", "WaitingInEveryPast"),
            description: (i) => `
        <b>Waiting, In Every Past</b><br>Demiurge's SPD remains at 0, and it will not appear on the Action Order. While on the field, it is considered as <u>Out-of-Bounds</u>. When Cyrene's HP percentage changes, Demiurge's HP percentage will also change accordingly. While Demiurge is on the field, Cyrene's and Demiurge's Max HP increases by ${scaleValue(S.CyreneScaling.b4.WaitingInEveryPast, i)}. After Demiurge uses abilities, decreases the duration of all <u>Continuous Effects</u> on this unit by 1.
<br>
        <b>"Hello, World ♪"</b><br>"When Demiurge is summoned, dispels <u>Crowd Control debuffs</u> from all allies."
      `,
        },
        b5: {
            id: "b5",
            name: "Minuet of Blooms and Plumes",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Cyrene", "ThisOdetoAllLives"),
            description: (i) => `
        <b>Minuet of Blooms and Plumes</b><br>Deals Ice DMG to all enemies equal to ${scaleValue(S.CyreneScaling.b5.MinuetofBloomsandPlumes, i)} of Demiurge's Max HP.
<br>
        <b>This Ode, to All Lives</b><br>Applies a <u>buff</u> to one designated ally character. When the character is a <u>Chrysos Heir</u>, the target gains a <u>special effect</u>. When the character is not a <u>Chrysos Heir</u>, increases the target's DMG dealt by ${scaleValue(S.CyreneScaling.b5.ThisOdetoAllLives.main, i)} for ${scaleValue(S.CyreneScaling.b5.ThisOdetoAllLives.adjacent, i, "")} turns. This effect also applies on memosprites.
<br>
        <b>Ode to Genesis</b><br>Effective for the entire battle. When used on Trailblazer (Remembrance), increases Trailblazer (Remembrance)'s ATK by an amount equal to ${scaleValue(S.CyreneScaling.b5.OdetoGenesis.main, i)} of Demiurge's Max HP, and increases Trailblazer (Remembrance)'s CRIT Rate by an amount equal to ${scaleValue(S.CyreneScaling.b5.OdetoGenesis.adjacent, i)} of Demiurge's CRIT Rate. This effect also applies to Mem. After Trailblazer (Remembrance) uses Enhanced Basic ATK in this battle, Demiurge immediately gains 1 <u>extra turn</u> and automatically uses "Minuet of Blooms and Plumes." If the target was defeated before this ability is used, it will be used on newly appeared enemy targets instead.
<br>
        <b>Ode to Romance</b><br>One-time effect. When used on Aglaea, causes Aglaea to gain "Romance" and immediately stacks Garmentmaker's Memosprite Talent's SPD Boost effect to its upper limit. After Aglaea or Garmentmaker uses an attack, consumes "Romance" and regenerates ${scaleValue(S.CyreneScaling.b5.OdetoRomance.main, i, "")} Energy. Increases DMG dealt by Aglaea and Garmentmaker by ${scaleValue(S.CyreneScaling.b5.OdetoRomance.adjacent, i)}, and ignores ${scaleValue(S.CyreneScaling.b5.OdetoRomance.adjacent2, i)} of the targets' DEF, lasting until Aglaea exits the "Supreme Stance" state.
<br>
        <b>Ode to Passage</b><br>Effective for the entire battle. When used on Tribbie, causes DMG dealt by Tribbie to ignore ${scaleValue(S.CyreneScaling.b5.OdetoPassage.main, i)} of enemies' DEF. When Tribbie launches Follow-Up ATK and triggers the <u>Additional DMG</u> from Tribbie's Zone, it further deals ${scaleValue(S.CyreneScaling.b5.OdetoPassage.adjacent, i, "")} instance(s) of Additional DMG.
<br>
        <b>Ode to Strife</b><br>One-time effect. When used on Mydei, removes all <u>Crowd Control debuffs</u> inflicted on him. And if Mydei is in the "Vendetta" state, he automatically uses 1 instance of "Godslayer Be God" without consuming Charge. Mydei's CRIT DMG increases by ${scaleValue(S.CyreneScaling.b5.OdetoStrife.main, i)} during this attack. If the target gets defeated before the use, then it will target the newly arriving enemy targets instead. If Mydei is not in the "Vendetta" state, then <u>advances Mydei's action</u> by ${scaleValue(S.CyreneScaling.b5.OdetoStrife.adjacent, i)}.
<br>
        <b>Ode to Life and Death</b><br>Effective for the entire battle. When used on Castorice, "Newbud" can overflow up to ${scaleValue(S.CyreneScaling.b5.OdetoLifeandDeath.main, i)}. When summoning Netherwing, consumes all overflowing "Newbud." For every 1% overflow amount consumed, increases the multiplier by ${scaleValue(S.CyreneScaling.b5.OdetoLifeandDeath.adjacent, i)} for the DMG dealt when this summoned Netherwing triggers the ability effect of its Talent "Wings Sweep the Ruins." If there are ${scaleValue(S.CyreneScaling.b5.OdetoLifeandDeath.adjacent2, i, "")} enemy target(s) or fewer on the field when summoned, the DMG multiplier additionally increases by ${scaleValue(S.CyreneScaling.b5.OdetoLifeandDeath.adjacent3, i)}.
<br>
        <b>Ode to Reason</b><br>One-time effect. When used on Anaxa, recovers ${scaleValue(S.CyreneScaling.b5.OdetoReason.main, i, "")} Skill Point(s) for allies and enables Anaxa to take action immediately. Skill has ${scaleValue(S.CyreneScaling.b5.OdetoReason.adjacent, i, "")} more instances of DMG, lasting for 1 turn. The next time Anaxa uses Basic ATK or Skill, he gains "True Knowledge": All Erudition characters have their ATK increased by ${scaleValue(S.CyreneScaling.b5.OdetoReason.adjacent2, i)} and their dealt Skill DMG increased by ${scaleValue(S.CyreneScaling.b5.OdetoReason.adjacent3, i)}, lasting until the start of Anaxa's next turn.
<br>
        <b>Ode to Sky</b><br>When Demiurge uses Memosprite Skill, causes Hyacine to gain 2 stacks of "Ode to Sky." When used on Hyacine, regenerates ${scaleValue(S.CyreneScaling.b5.OdetoSky.main, i, "")} Energy for Hyacine. When Hyacine has "Ode to Sky" and is providing healing, additionally increases the amount to be included in the tally of Little Ica's Memosprite Skill by an amount equal to ${scaleValue(S.CyreneScaling.b5.OdetoSky.adjacent, i)} of the current healing amount. After Hyacine uses Skill/Ultimate, consumes 1 stack of "Ode to Sky."
<br>
        <b>Ode to Trickery</b><br>Effective for the entire battle. When used on Cipher, increases the DMG dealt by Cipher by ${scaleValue(S.CyreneScaling.b5.OdetoTrickery.main, i)}, decreases the DEF of the "Patron" by ${scaleValue(S.CyreneScaling.b5.OdetoTrickery.adjacent, i)} and decreases the DEF of all other enemy targets by ${scaleValue(S.CyreneScaling.b5.OdetoTrickery.adjacent2, i)}.
<br>
        <b>Ode to Worldbearing</b><br>Effective for the entire battle. After it is used on Phainon, Phainon gains ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.main, i, "")} "Coreflame" as well as "Eternal Ignition" when Transforming. When Transforming, if "Coreflame" exceeds ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent, i, "")}, for each point in excess, Khaslana's CRIT DMG increases by ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent2, i)}, up to a max increase of ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent3, i)}. While "Eternal Ignition" persists, increases Khaslana's CRIT Rate by ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent4, i)}. After the <u>extra turns</u> are depleted, the Transformation does not end, and all of <u>Khaslana's extra turns</u> get refreshed and ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent5, i, "")} "<u>Scourge</u>" is granted. At the start of <u>extra turns</u>, Khaslana consumes HP equal to ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent6, i)} of his current HP. After using an attack, deals ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent7, i, "")} instances of <u>Additional DMG</u>, with each instance dealing Fire <u>Additional DMG</u> equal to ${scaleValue(S.CyreneScaling.b5.OdetoWorldbearing.adjacent8, i)} of Khaslana's ATK to one random enemy.
<br>
        <b>Ode to Ocean</b><br>One-time effect. When used on Hysilens, Hysilens gains "Flowing Warmth." After Hysilens uses an attack, consumes "Flowing Warmth" and regenerates ${scaleValue(S.CyreneScaling.b5.OdetoOcean.main, i, "")} Energy for this unit. In this battle, increases the DMG dealt by Hysilens by ${scaleValue(S.CyreneScaling.b5.OdetoOcean.adjacent, i)}. After Hysilens uses Basic ATK/Skill to attack enemies, causes all the DoT currently applied on the attacked enemy targets to immediately produce DMG equal to ${scaleValue(S.CyreneScaling.b5.OdetoOcean.adjacent2, i)}/${scaleValue(S.CyreneScaling.b5.OdetoOcean.adjacent3, i)} of the original DMG.
<br>
        <b>Ode to Law</b><br>Effective for the entire battle. After using on Cerydra, increases the CRIT DMG of the character with "Military Merit" by ${scaleValue(S.CyreneScaling.b5.OdetoLaw.main, i)}. After <u>Coup de Main</u> ends, Cerydra immediately gains ${scaleValue(S.CyreneScaling.b5.OdetoLaw.adjacent, i, "")} Charge.
<br>
        <b>Ode to Time</b><br>Effective for the entire battle. After it is used on Evernight, increases the DMG dealt when Evey uses the Memosprite Skill "Dream, Dissolving, as Dew" by ${scaleValue(S.CyreneScaling.b5.OdetoTime.main, i)}. After Evernight uses Skill/Ultimate, additionally gains ${scaleValue(S.CyreneScaling.b5.OdetoTime.adjacent, i, "")} "Memoria." The CRIT DMG boost effect provided by the Skill is further increased by an amount equal to ${scaleValue(S.CyreneScaling.b5.OdetoTime.adjacent2, i)} of Evernight's CRIT DMG.
<br>
        <b>Ode to Earth</b><br>When Demiurge uses Memosprite Skill, grants "Ode to Earth" to Dan Heng • Permansor Terrae, and enables the next ${scaleValue(S.CyreneScaling.b5.OdetoEarth.main, i, "")} attack(s) of "Souldragon" to deal <u>Additional DMG</u> of the Bondmate's Type, equal to ${scaleValue(S.CyreneScaling.b5.OdetoEarth.adjacent, i)} of the Bondmate's Shield Effect. When Dan Heng • Permansor Terrae holds "Ode to Earth," the "Bondmate" deals ${scaleValue(S.CyreneScaling.b5.OdetoEarth.adjacent2, i)} increased DMG. When used on Dan Heng • Permansor Terrae, advances Souldragon's action by 100%. Souldragon's next action gains the enhancement effect of Dan Heng • Permansor Terrae's Ultimate and the Shield Effect provided by Souldragon is ${scaleValue(S.CyreneScaling.b5.OdetoEarth.adjacent3, i)} of its original Shield Effect. Does not consume the enhancement number of Dan Heng • Permansor Terrae's Ultimate.
<br>
        <b>Ode to Ego</b><br>For every 1 different teammate (i.e., excluding Demiurge) from whom Cyrene has gained "Recollection," additionally deals 1 instance of Ice DMG equal to ${scaleValue(S.CyreneScaling.b5.OdetoEgo.main, i)} of Demiurge's Max HP to one random enemy when Demiurge uses "Minuet of Blooms and Plumes." After Cyrene uses Ultimate or when Demiurge is summoned, Demiurge immediately gains 1 "Story." When "Story" reaches ${scaleValue(S.CyreneScaling.b5.OdetoEgo.adjacent, i, "")}, Demiurge consumes all "Story" points to immediately gain 1 <u>extra turn</u> and automatically use "Minuet of Blooms and Plumes."
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Cyrene);

const Sparxie: Character = {
  name: "Sparxie",
  path: Paths.Elation,
  element: Elements.Fire,
  world: Worlds.Amphoreus, // TODO: Sparxie
  image: charSplash("Sparxie"),
  pfp: charPfp("Sparxie"),
  eidolons: Eidolons.SparxieEidolons,

  baseATK: 640,
  baseDEF: 460,
  baseHP: 1047,
  baseSPD: 107,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Cat Got Your Flametongue?",
            type: "basic",
            level: "1/7",
            icon: charIcon("Sparxie", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.SparxieScaling.attack, i)} of Sparxie's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Boom! Sparxicle's Poppin'",
            type: "skill",
            level: "1/12",
            icon: charIcon("Sparxie", "Skill"),
            description: (i) => `
        Start a livestream to turn Basic ATK into "Bloom! Winner Takes All" and trigger "Engagement Farming" 1 time. During this ability, "Engagement Farming" can be triggered repeatedly, up to ${scaleValue(S.SparxieScaling.skill, i, "")} time(s). Using this ability is not considered as using a Skill.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Party's Wildin' and Camera's Rollin'",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Sparxie", "Ultimate"),
            description: (i) => `
        Gains ${scaleValue(S.SparxieScaling.ultimate.main, i, "")} <u>Punchline</u> point(s). Deals Fire DMG equal to (${scaleValue(S.SparxieScaling.ultimate.adjacent, i, "")} × Elation + ${scaleValue(S.SparxieScaling.ultimate.adjacent2, i)}) of Sparxie's ATK to all enemies.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Sleight of Sparx Hand",
            type: "talent",
            level: "1/12",
            icon: charIcon("Sparxie", "Talent"),
            description: (i) => `
        While Sparxie holds "<u>Certified Banger</u>":\\nUsing Enhanced Basic ATK deals ${scaleValue(S.SparxieScaling.talent.main, i)} Fire <u>Elation DMG</u> to one designated enemy, and ${scaleValue(S.SparxieScaling.talent.adjacent, i)} Fire <u>Elation DMG</u> to their adjacent targets. Additionally, for every 1 instance of "Engagement Farming" triggered, the Enhanced Basic ATK deals 1 extra instance of ${scaleValue(S.SparxieScaling.talent.adjacent2, i)} Fire <u>Elation DMG</u> to 1 random attacked enemy target.\\nUsing Ultimate deals ${scaleValue(S.SparxieScaling.talent.adjacent3, i)} Fire <u>Elation DMG</u> to all enemies.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Content Monetization",
            type: "technique",
            level: "1/1",
            icon: charIcon("Sparxie", "Technique"),
            description: (i) => `
        After using the Technique, inflicts enemies within a set area with "Block" for ${scaleValue(S.SparxieScaling.technique.main, i, "")} second(s). "Blocked" enemies cannot detect ally targets.\\nAfter entering combat via actively attacking a "Blocked" enemy, deals Fire DMG to all enemies equal to ${scaleValue(S.SparxieScaling.technique.adjacent, i)} of Sparxie's ATK and recovers ${scaleValue(S.SparxieScaling.technique.adjacent2, i, "")} Skill Point(s) for allies.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Signal Overflow: The Great Encore!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparxie", "SignalOverflowTheGreatEncore"),
            description: (i) => `
        Deals ${scaleValue(S.SparxieScaling.b1.main, i)} Fire <u>Elation DMG</u> to all enemies and deals ${scaleValue(S.SparxieScaling.b1.adjacent, i, "")} additional instance(s) of DMG. Each instance deals ${scaleValue(S.SparxieScaling.b1.adjacent2, i)} Fire <u>Elation DMG</u> to one random enemy. Grants ${scaleValue(S.SparxieScaling.b1.adjacent3, i, "")} "Thrill" point(s) to Sparxie, which can be used to offset Sparxie's Skill Point consumption. Consuming "Thrill" is considered as consuming Skill Points.
      `,
        },
        b2: {
            id: "b2",
            name: "Sweet! Punchline Signing",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparxie", "SweetPunchlineSigning"),
            description: (i) => `
        For every ${scaleValue(S.SparxieScaling.b2.main, i, "")} of Sparxie's ATK that exceeds ${scaleValue(S.SparxieScaling.b2.adjacent, i, "")}, increases this unit's Elation by ${scaleValue(S.SparxieScaling.b2.adjacent2, i)}, up to a maximum increase of ${scaleValue(S.SparxieScaling.b2.adjacent3, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Dazzling! Persona Kaleidoscope",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparxie", "DazzlingPersonaKaleidoscope"),
            description: (i) => `
        When there are 1/2/≥3 Elation characters in the team, using Sparxie's Ultimate will additionally gain ${scaleValue(S.SparxieScaling.b3.main, i, "")}/${scaleValue(S.SparxieScaling.b3.adjacent, i, "")}/${scaleValue(S.SparxieScaling.b3.adjacent2, i, "")} <u>Punchline</u> and ${scaleValue(S.SparxieScaling.b3.adjacent3, i, "")}/${scaleValue(S.SparxieScaling.b3.adjacent4, i, "")}/${scaleValue(S.SparxieScaling.b3.adjacent5, i, "")} "Thrill".
      `,
        },
        b4: {
            id: "b4",
            name: "Frenzy! Palette of Truth and Lies",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Sparxie", "FrenzyPaletteofTruthandLies"),
            description: (i) => `
        For every 1 <u>Punchline</u> currently owned, increases all allies' CRIT DMG by ${scaleValue(S.SparxieScaling.b4.main, i)}, up to a max increase of ${scaleValue(S.SparxieScaling.b4.adjacent, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(Sparxie);

const YaoGuang: Character = {
  name: "Yao Guang",
  path: Paths.Elation,
  element: Elements.Physical,
  world: Worlds.TheXianzhouYuque, // TODO: Yao Guang
  image: charSplash("YaoGuang"),
  pfp: charPfp("YaoGuang"),
  eidolons: Eidolons.YaoGuangEidolons,

  baseATK: 465,
  baseDEF: 654,
  baseHP: 1241,
  baseSPD: 101,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Whistlebolt Sings Joy",
            type: "basic",
            level: "1/7",
            icon: charIcon("YaoGuang", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.YaoGuangScaling.attack.main, i)} of Yao Guang's ATK to one designated enemy and Physical DMG equal to ${scaleValue(S.YaoGuangScaling.attack.adjacent, i)} of Yao Guang's ATK to targets adjacent to it. The Energy regenerated from Basic ATK increases to 30.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Decalight Unveils All",
            type: "skill",
            level: "1/12",
            icon: charIcon("YaoGuang", "Skill"),
            description: (i) => `
        Deploys a Zone for ${scaleValue(S.YaoGuangScaling.skill.main, i, "")} turn(s). This duration decreases by 1 at the start of this unit's every turn. While the Zone is active, increases all allies' Elation by an amount equal to ${scaleValue(S.YaoGuangScaling.skill.adjacent, i)} of Yao Guang's Elation. After Yao Guang uses Basic ATK or Skill, gains ${scaleValue(S.YaoGuangScaling.skill.adjacent2, i, "")} <u>Punchline</u>.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Hexagram of Feathered Fortune",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("YaoGuang", "Ultimate"),
            description: (i) => `
        Gains ${scaleValue(S.YaoGuangScaling.ultimate.main, i, "")} <u>Punchline</u>. <u>Aha</u> immediately gains 1 <u>extra turn</u> where a fixed amount of ${scaleValue(S.YaoGuangScaling.ultimate.adjacent, i, "")} <u>Punchline</u> is taken into account. This turn does not consume <u>Punchline</u>, and increases all allies' All-Type <u>RES PEN</u> by ${scaleValue(S.YaoGuangScaling.ultimate.adjacent2, i)} for ${scaleValue(S.YaoGuangScaling.ultimate.adjacent3, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Behold Wherever Light Unfolds",
            type: "talent",
            level: "1/12",
            icon: charIcon("YaoGuang", "Talent"),
            description: (i) => `
        While Yao Guang holds "<u>Certified Banger</u>":\\nAfter an ally target uses an attack, triggers the "Great Boon" effect, dealing 1 additional instance of ${scaleValue(S.YaoGuangScaling.talent, i)} <u>Elation DMG</u> of the corresponding Type to 1 random hit target. If this attack consumes Skill Points, then additionally triggers "Great Boon" 1 time.\\nWhen triggering the "Great Boon" effect, if the attacker's Elation is lower than that of Yao Guang, then this instance of <u>Elation DMG</u> will take Yao Guang's Elation into calculation.\\nTriggering the "Great Boon" effect is not considered as using 1 instance of attack.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Untethered Glimmer Sails Far",
            type: "technique",
            level: "1/1",
            icon: charIcon("YaoGuang", "Technique"),
            description: (i) => `
        After using Technique, automatically triggers Skill 1 time at the start of the next battle without consuming any Skill Points. When Yao Guang is in the team, breaking destructible objects immediately grants Fortune Pouch, up to ${scaleValue(S.YaoGuangScaling.technique, i, "")} within every Earth Week.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Let Thy Fortune Burst in Flames",
            type: "bonus",
            level: "1/1",
            icon: charIcon("YaoGuang", "LetThyFortuneBurstinFlames"),
            description: (i) => `
        Inflicts "Woe's Whisper" on all enemies, lasting for ${scaleValue(S.YaoGuangScaling.b1.main, i, "")} turn(s). Enemy targets under the "Woe's Whisper" state take ${scaleValue(S.YaoGuangScaling.b1.adjacent, i)} increased DMG. Deals ${scaleValue(S.YaoGuangScaling.b1.adjacent2, i)} Physical <u>Elation DMG</u> to all enemies. Then, deals ${scaleValue(S.YaoGuangScaling.b1.adjacent3, i, "")} instance(s) of ${scaleValue(S.YaoGuangScaling.b1.adjacent4, i)} Physical <u>Elation DMG</u> to one random enemy.
      `,
        },
        b2: {
            id: "b2",
            name: "Amaze-In Grace",
            type: "bonus",
            level: "1/1",
            icon: charIcon("YaoGuang", "AmazeInGrace"),
            description: (i) => `
        When Yao Guang's SPD is ${scaleValue(S.YaoGuangScaling.b2.main, i, "")} or higher, increases this unit's Elation by ${scaleValue(S.YaoGuangScaling.b2.adjacent, i)}. For every ${scaleValue(S.YaoGuangScaling.b2.adjacent2, i, "")} SPD exceeded, increases this unit's Elation by ${scaleValue(S.YaoGuangScaling.b2.adjacent3, i)}. Up to a max of ${scaleValue(S.YaoGuangScaling.b2.adjacent4, i, "")} excess SPD can be taken into account for this effect.
      `,
        },
        b3: {
            id: "b3",
            name: "Poised and Sated",
            type: "bonus",
            level: "1/1",
            icon: charIcon("YaoGuang", "PoisedandSated"),
            description: (i) => `
        Increases this unit's CRIT DMG by ${scaleValue(S.YaoGuangScaling.b3.main, i)}. After using Elation Skill, recovers ${scaleValue(S.YaoGuangScaling.b3.adjacent, i, "")} Skill Point(s) for the team.
      `,
        },
        b4: {
            id: "b4",
            name: "Felicity Ensemble",
            type: "bonus",
            level: "1/1",
            icon: charIcon("YaoGuang", "FelicityEnsemble"),
            description: (i) => `
        When Yao Guang gains "<u>Certified Banger</u>," its duration increases by ${scaleValue(S.YaoGuangScaling.b4, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(YaoGuang);

const Ashveil: Character = {
  name: "Ashveil",
  path: Paths.Hunt,
  element: Elements.Lightning,
  world: Worlds.Planacardia, // TODO: Ashveil
  image: charSplash("Ashveil"),
  pfp: charPfp("Ashveil"),
  eidolons: Eidolons.AshveilEidolons,

  baseATK: 776,
  baseDEF: 388,
  baseHP: 853,
  baseSPD: 106,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Talons: Inculcate Decorum",
            type: "basic",
            level: "1/7",
            icon: charIcon("Ashveil", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.AshveilScaling.attack, i)} of Ashveil's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Flog: Smite Evil",
            type: "skill",
            level: "1/12",
            icon: charIcon("Ashveil", "Skill"),
            description: (i) => `
        Makes one designated enemy become the "Bait," dealing it Lightning DMG equal to ${scaleValue(S.AshveilScaling.skill.main, i)} of Ashveil's ATK. If the target is already the "Bait," additionally deals it Lightning DMG equal to ${scaleValue(S.AshveilScaling.skill.adjacent, i)} of Ashveil's ATK, and recovers ${scaleValue(S.AshveilScaling.skill.adjacent2, i, "")} Skill Point(s). When the "Bait" exists on the field, all enemies' DEF gets reduced by ${scaleValue(S.AshveilScaling.skill.adjacent3, i)}.\\nWhen there is no "Bait" on the field, Ashveil immediately makes the enemy target with the lowest HP on the field become the "Bait." The "Bait" state only takes effect on the most recently applied target.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Banquet: Insatiable Appetite",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Ashveil", "Ultimate"),
            description: (i) => `
        Makes one designated enemy become the "Bait," dealing it Lightning DMG equal to ${scaleValue(S.AshveilScaling.ultimate.main, i)} of Ashveil's ATK. Then, immediately launches 1 instance of enhanced Talent's <u>Follow-Up ATK</u> against the "Bait." And Ashveil gains ${scaleValue(S.AshveilScaling.ultimate.adjacent, i, "")} Charge.\\nThis enhanced Talent's <u>Follow-Up ATK</u> does not consume Charge. Whenever "Gluttony" reaches ${scaleValue(S.AshveilScaling.ultimate.adjacent2, i, "")} stack(s) or more, consumes ${scaleValue(S.AshveilScaling.ultimate.adjacent2, i, "")} stack(s) of "Gluttony" to additionally deal 1 instance of Lightning DMG equal to ${scaleValue(S.AshveilScaling.ultimate.adjacent3, i)} of Ashveil's ATK. And when this instance of <u>Follow-Up ATK</u> deals a killing blow to the target, it will continue to deal DMG to a new "Bait." This triggers until "Gluttony" becomes lower than ${scaleValue(S.AshveilScaling.ultimate.adjacent2, i, "")} stack(s). If all enemy targets currently on the field have been dealt killing blows, the enhanced Talent's <u>Follow-Up ATK</u> will immediately end.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Rancor: Enmity Reprisal",
            type: "talent",
            level: "1/12",
            icon: charIcon("Ashveil", "Talent"),
            description: (i) => `
        Ashveil has an initial Charge of ${scaleValue(S.AshveilScaling.talent.main, i, "")} and can hold up to a max of ${scaleValue(S.AshveilScaling.talent.adjacent, i, "")}. After the "Bait" gets attacked by other ally targets, Ashveil regenerates a fixed amount of ${scaleValue(S.AshveilScaling.talent.adjacent2, i, "")} Energy, then consumes ${scaleValue(S.AshveilScaling.talent.adjacent3, i, "")} Charge to launch <u>Follow-Up ATK</u> against the "Bait," dealing Lightning DMG equal to ${scaleValue(S.AshveilScaling.talent.adjacent4, i)} of Ashveil's ATK. Afterwards, gains ${scaleValue(S.AshveilScaling.talent.adjacent5, i, "")} stack(s) of "Gluttony," which can stack up to ${scaleValue(S.AshveilScaling.talent.adjacent6, i, "")}.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Devour: O Loathsome Hand",
            type: "technique",
            level: "1/1",
            icon: charIcon("Ashveil", "Technique"),
            description: (i) => `
        After using Technique, inflicts Daze on enemies within a set area for ${scaleValue(S.AshveilScaling.technique.main, i, "")} second(s). Dazed enemies will not actively attack ally targets.\\nWhen entering combat via actively attacking a Dazed enemy, deals Lightning DMG to all enemies equal to ${scaleValue(S.AshveilScaling.technique.adjacent, i)} of Ashveil's ATK, and grants Ashveil ${scaleValue(S.AshveilScaling.technique.adjacent2, i, "")} Charge.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "First Fang",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Ashveil", "FirstFang"),
            description: (i) => `
        While Ashveil is on the field, CRIT DMG dealt by ally targets increases by ${scaleValue(S.AshveilScaling.b1.main, i)}, and CRIT DMG dealt by ally target's <u>Follow-Up ATK</u> additionally increases by ${scaleValue(S.AshveilScaling.b1.adjacent, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Damnation Trail",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Ashveil", "DamnationTrail"),
            description: (i) => `
        When Ashveil uses Skill/Ultimate, gains ${scaleValue(S.AshveilScaling.b2.main, i, "")}/${scaleValue(S.AshveilScaling.b2.adjacent, i, "")} stacks of "Gluttony." During Ashveil's <u>Follow-Up ATK</u>, for every ${scaleValue(S.AshveilScaling.b2.adjacent2, i, "")} enemy(ies) that suffer a killing blow, Ashveil gains ${scaleValue(S.AshveilScaling.b2.adjacent3, i, "")} stack(s) of "Gluttony."
      `,
        },
        b3: {
            id: "b3",
            name: "Phantom Limb",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Ashveil", "PhantomLimb"),
            description: (i) => `
        DMG dealt by Ashveil's <u>Follow-Up ATK</u> increases by ${scaleValue(S.AshveilScaling.b3.main, i)}. And for every ${scaleValue(S.AshveilScaling.b3.adjacent, i, "")} stack(s) of "Gluttony" in possession, DMG dealt by Follow-Up ATK additionally increases by ${scaleValue(S.AshveilScaling.b3.adjacent2, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
  },
};

Characters.push(Ashveil);

const Evanescia: Character = {
  name: "Evanescia",
  path: Paths.Elation,
  element: Elements.Physical,
  world: Worlds.Planacardia, // TODO: Evanescia
  image: charSplash("Evanescia"),
  pfp: charPfp("Evanescia"),
  eidolons: Eidolons.EvanesciaEidolons,

  baseATK: 737,
  baseDEF: 460,
  baseHP: 1047,
  baseSPD: 104,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Syllabus: Pop Quiz",
            type: "basic",
            level: "1/7",
            icon: charIcon("Evanescia", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.EvanesciaScaling.attack, i)} of Evanescia's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Discipline: Final Verdict",
            type: "skill",
            level: "1/12",
            icon: charIcon("Evanescia", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.EvanesciaScaling.skill.main, i)} of Evanescia's ATK to one designated enemy and Physical DMG equal to ${scaleValue(S.EvanesciaScaling.skill.adjacent, i)} of Evanescia's ATK to adjacent targets. Additionally gains ${scaleValue(S.EvanesciaScaling.skill.adjacent2, i, "")} <u>Punchline</u>.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Swordsong: Absolution Denied",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Evanescia", "Ultimate"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.EvanesciaScaling.ultimate.main, i)} of Evanescia's ATK to all enemy targets, then deals 5 instances of DMG, with each instance dealing Physical DMG equal to ${scaleValue(S.EvanesciaScaling.ultimate.adjacent, i)} of Evanescia's ATK to one random enemy.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Youth: Halcyon Evermore",
            type: "talent",
            level: "1/12",
            icon: charIcon("Evanescia", "Talent"),
            description: (i) => `
        Evanescia gains Elation equal to ${scaleValue(S.EvanesciaScaling.talent.main, i)} of CRIT DMG. When Evanescia gains Energy, she will simultaneously gain an equal amount of "<u>Certified Banger</u>." When Evanescia gains "<u>Certified Banger</u>," she will simultaneously gain an equal amount of Energy. The amount of "<u>Certified Banger</u>" taken into calculation via this method cannot exceed 100 points in a single instance.\\nAfter accumulating ${scaleValue(S.EvanesciaScaling.talent.adjacent, i, "")} Energy, she consumes this accumulation of ${scaleValue(S.EvanesciaScaling.talent.adjacent, i, "")}, and "Master Fox" launches <u>Follow-Up ATK</u>, dealing Physical DMG equal to ${scaleValue(S.EvanesciaScaling.talent.adjacent2, i)} of Evanescia's ATK to all enemies, and regenerates ${scaleValue(S.EvanesciaScaling.talent.adjacent3, i, "")} Energy for Evanescia. Each instance of Energy regeneration grants up to an accumulation of ${scaleValue(S.EvanesciaScaling.talent.adjacent, i, "")}. While Evanescia holds "<u>Certified Banger</u>":\\nUsing Skill can deal ${scaleValue(S.EvanesciaScaling.talent.adjacent4, i)} Physical <u>Elation DMG</u> to the attacked enemy targets.\\nUsing Ultimate can deal ${scaleValue(S.EvanesciaScaling.talent.adjacent5, i)} Physical <u>Elation DMG</u> to all enemies and also deals ${scaleValue(S.EvanesciaScaling.talent.adjacent6, i)} Physical <u>Elation DMG</u> to the enemy targets that have been randomly dealt DMG by Ultimate. When Ultimate deals <u>Elation DMG</u>, the amount of "<u>Certified Banger</u>" taken into account is at least equal to Max Energy.\\nMaster Fox's <u>Follow-Up ATK</u> deals ${scaleValue(S.EvanesciaScaling.talent.adjacent7, i)} Physical <u>Elation DMG</u> to all enemies.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Petalfall: Floral Reminiscence",
            type: "technique",
            level: "1/1",
            icon: charIcon("Evanescia", "Technique"),
            description: (i) => `
        Immediately attacks all enemies within a certain range. After entering combat, deals Physical DMG equal to ${scaleValue(S.EvanesciaScaling.technique.main, i)} of Evanescia's ATK to all enemies and gains ${scaleValue(S.EvanesciaScaling.technique.adjacent, i, "")} point(s) of "<u>Certified Banger</u>."
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Scarlet: Elation or Execution",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evanescia", "ScarletElationorExecution"),
            description: (i) => `
        Deals ${scaleValue(S.EvanesciaScaling.b1.main, i)} Physical <u>Elation DMG</u> to all enemies and additionally gains ${scaleValue(S.EvanesciaScaling.b1.adjacent, i, "")} point(s) of "<u>Certified Banger</u>".
      `,
        },
        b2: {
            id: "b2",
            name: "Watch All Revels",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evanescia", "WatchAllRevels"),
            description: (i) => `
        Increases Evanescia's CRIT Rate by ${scaleValue(S.EvanesciaScaling.b2.main, i)}. When there are (≥3)/2/1 enemy target(s) on the field, the Ultimate's bounce count increases by ${scaleValue(S.EvanesciaScaling.b2.adjacent, i, "")}/${scaleValue(S.EvanesciaScaling.b2.adjacent2, i, "")}/${scaleValue(S.EvanesciaScaling.b2.adjacent3, i, "")}. When a teammate with an Elation Skill Participant ID lower than Evanescia's gains "<u>Certified Banger</u>," Evanescia converts ${scaleValue(S.EvanesciaScaling.b2.adjacent4, i)} of it into her own "<u>Certified Banger</u>."
      `,
        },
        b3: {
            id: "b3",
            name: "Weigh All Truths",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evanescia", "WeighAllTruths"),
            description: (i) => `
        When "Master Fox" uses an attack, it additionally inflicts Vulnerability on the target, increasing the DMG they take by ${scaleValue(S.EvanesciaScaling.b3.main, i)} for ${scaleValue(S.EvanesciaScaling.b3.adjacent, i, "")} turn(s).
      `,
        },
        b4: {
            id: "b4",
            name: "Best All Blooms",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Evanescia", "BestAllBlooms"),
            description: (i) => `
        When a teammate's "<u>Certified Banger</u>" ends, Evanescia converts ${scaleValue(S.EvanesciaScaling.b4, i)} of it into her own "<u>Certified Banger</u>."
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
  },
};

Characters.push(Evanescia);

const SilverWolfLV999: Character = {
  name: "Silver Wolf LV.999",
  path: Paths.Elation,
  element: Elements.Imaginary,
  world: Worlds.StellaronHunters, // TODO: Silver Wolf LV.999
  image: charSplash("SilverWolfLV999"),
  pfp: charPfp("SilverWolfLV999"),
  eidolons: Eidolons.SilverWolfLV999Eidolons,

  baseATK: 388,
  baseDEF: 654,
  baseHP: 1047,
  baseSPD: 110,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: One Punch!",
            type: "basic",
            level: "1/7",
            icon: charIcon("SilverWolfLV999", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.SilverWolfLV999Scaling.attack, i)} of Silver Wolf LV.999's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Trigger Happy",
            type: "skill",
            level: "1/12",
            icon: charIcon("SilverWolfLV999", "Skill"),
            description: (i) => `
        Gains ${scaleValue(S.SilverWolfLV999Scaling.skill.main, i, "")} <u>Punchline</u> point(s) and deals Imaginary DMG equal to ${scaleValue(S.SilverWolfLV999Scaling.skill.adjacent, i)} of Silver Wolf LV.999's ATK to all enemies.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: God Mode: ON!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("SilverWolfLV999", "Ultimate"),
            description: (i) => `
        Enters the "Godmode Player" state, and <u>advances action</u> by 100%.\\nDeploys a Zone while in the "Godmode Player" state. While Silver Wolf LV.999 holds "<u>Certified Banger</u>," for every 1 Skill Point consumed by an ally target within the Zone, there is a chance to trigger 1 instance of Silver Wolf LV.999's "<u>Top Loot Box</u>": Deals ${scaleValue(S.SilverWolfLV999Scaling.ultimate.main, i)} Imaginary <u>Elation DMG</u> that is distributed evenly among all enemies, and randomly triggers 1 of the following effects:\\n"Big Flipping Sword": Additionally deals <u>True DMG</u> equal to ${scaleValue(S.SilverWolfLV999Scaling.ultimate.adjacent, i)} of the total DMG dealt this time to the enemy target with the highest HP.\\n"Kaboom Eggsplosion": Recovers ${scaleValue(S.SilverWolfLV999Scaling.ultimate.adjacent2, i, "")} Skill Point(s).\\n"Funky Munch Bean": Gains ${scaleValue(S.SilverWolfLV999Scaling.ultimate.adjacent3, i, "")} <u>Punchline</u> point(s).\\nThe initial <u>fixed chance</u> to trigger the effect is 100%. After a successfully trigger, the <u>fixed chance</u> for the next trigger is reduced to ${scaleValue(S.SilverWolfLV999Scaling.ultimate.adjacent4, i)} of the current chance. If the target is defeated before it triggers, it will instead trigger on a newly entering enemy target.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: I Carry, We Win",
            type: "talent",
            level: "1/12",
            icon: charIcon("SilverWolfLV999", "Talent"),
            description: (i) => `
        After "Hidden MMR" reaches ${scaleValue(S.SilverWolfLV999Scaling.talent.main, i, "")}, can activate Ultimate. And after reaching its maximum limit, it can overflow by an additional ${scaleValue(S.SilverWolfLV999Scaling.talent.adjacent, i, "")} point(s).\\nWhen gaining <u>Punchline</u>, Silver Wolf LV.999 gains an equal amount of "Hidden MMR." Each point of "Hidden MMR" increases CRIT Rate by ${scaleValue(S.SilverWolfLV999Scaling.talent.adjacent2, i)}. Once CRIT Rate reaches 100%, each additional point of "Hidden MMR" instead increases CRIT DMG by ${scaleValue(S.SilverWolfLV999Scaling.talent.adjacent3, i)}.\\nWhile in the "Godmode Player" state, Silver Wolf LV.999 becomes immune to <u>Crowd Control debuffs</u>, cannot use Ultimate, and gains Enhanced Basic ATK and Enhanced Elation Skill. After fully using Enhanced Basic ATK ${scaleValue(S.SilverWolfLV999Scaling.talent.adjacent4, i, "")} time(s), she exits the "Godmode Player" state. When exiting the "Godmode Player" state, clears "Hidden MMR".\\nWhile holding "<u>Certified Banger</u>," using Basic ATK or Skill deals ${scaleValue(S.SilverWolfLV999Scaling.talent.adjacent5, i)} Imaginary <u>Elation DMG</u> to the attacked enemy targets. And the Enhanced Basic ATK's ability DMG changes to <u>Elation DMG</u> at the same multiplier.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: This? Absolute Meta!",
            type: "technique",
            level: "1/1",
            icon: charIcon("SilverWolfLV999", "Technique"),
            description: (i) => `
        Summons "Funky Munch Bean." Use again to dismiss. Using Technique does not consume Technique Points. When Technique Points reach 0, the summon is dismissed and Technique cannot be used.\\n"Funky Munch Bean" causes Normal Enemies within a certain range to enter a Terrified state. It will also automatically search for and attack Normal Enemies, consuming 1 Technique Point to instantly defeat them without entering combat.\\nWhile "Funky Munch Bean" is present, after entering combat, 1 instance of "<u>Top Loot Box</u>" from "Funky Munch Bean" is triggered at the start of each wave. A fixed amount of ${scaleValue(S.SilverWolfLV999Scaling.technique, i, "")} "<u>Certified Banger</u>" is taken into account for the <u>Elation DMG</u> dealt in this instance.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Elation Skill",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolfLV999", "ElationSkill"),
            description: (i) => `
        <b>Pro-Gamer Move</b><br>Gains ${scaleValue(S.SilverWolfLV999Scaling.b1.ProGamerMove, i, "")} "Hidden MMR" point(s).
<br>
        <b>Honkai-DMG Demo</b><br>Deals ${scaleValue(S.SilverWolfLV999Scaling.b1.HonkaiDMGDemo.main, i, "")} instances of DMG, with each instance dealing ${scaleValue(S.SilverWolfLV999Scaling.b1.HonkaiDMGDemo.adjacent, i)} Imaginary <u>Elation DMG</u> to one random enemy. Then, resets the <u>fixed chance</u> to trigger "<u>Top Loot Box</u>" to its initial value.
      `,
        },
        b2: {
            id: "b2",
            name: "False Ending Speedrun",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolfLV999", "FalseEndingSpeedrun"),
            description: (i) => `
        When SPD is ${scaleValue(S.SilverWolfLV999Scaling.b2.main, i, "")} or higher, increases this unit's Elation by ${scaleValue(S.SilverWolfLV999Scaling.b2.adjacent, i)}. For every ${scaleValue(S.SilverWolfLV999Scaling.b2.adjacent2, i, "")} SPD exceeded, increases this unit's Elation by ${scaleValue(S.SilverWolfLV999Scaling.b2.adjacent3, i)}. Up to a max of ${scaleValue(S.SilverWolfLV999Scaling.b2.adjacent4, i, "")} excess SPD can be taken into account for this effect.
      `,
        },
        b3: {
            id: "b3",
            name: "True Ending Unlocked",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolfLV999", "TrueEndingUnlocked"),
            description: (i) => `
        If the number of <u>Punchline</u> points taken into account when using Elation Skill is ${scaleValue(S.SilverWolfLV999Scaling.b3.main, i, "")} or more, additionally gains ${scaleValue(S.SilverWolfLV999Scaling.b3.adjacent, i, "")} "Hidden MMR" points (And if it's ${scaleValue(S.SilverWolfLV999Scaling.b3.adjacent2, i, "")} or more, then gains ${scaleValue(S.SilverWolfLV999Scaling.b3.adjacent3, i, "")} more points on top of that).
      `,
        },
        b4: {
            id: "b4",
            name: "Secret Level Maxed",
            type: "bonus",
            level: "1/1",
            icon: charIcon("SilverWolfLV999", "SecretLevelMaxed"),
            description: (i) => `
        After entering the "Godmode Player" state, gains ${scaleValue(S.SilverWolfLV999Scaling.b4, i, "")} "Hidden MMR" point(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s3: {
                id: "s3",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s4: {
                id: "s4",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Elation Boost",
                type: "stat",
                icon: statIcon("Elation"),
                description: "Elation Increases by: <b><u>6%</u></b>",
            },
  },
};

Characters.push(SilverWolfLV999);

const MortenaxBlade: Character = {
  name: "Mortenax Blade",
  path: Paths.Nihility,
  element: Elements.Fire,
  world: Worlds.StellaronHunters, // TODO: Mortenax Blade
  image: charSplash("MortenaxBlade"),
  pfp: charPfp("MortenaxBlade"),
  eidolons: Eidolons.MortenaxBladeEidolons,

  baseATK: 543,
  baseDEF: 485,
  baseHP: 1358,
  baseSPD: 107,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: A Broken Blade Still Slays",
            type: "basic",
            level: "1/7",
            icon: charIcon("MortenaxBlade", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.MortenaxBladeScaling.attack, i)} of Mortenax Blade's Max HP to one designated enemy, and causes the target to enter the Taunt state for 1 turn.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: A Rain of Blades Seals Fate",
            type: "skill",
            level: "1/12",
            icon: charIcon("MortenaxBlade", "Skill"),
            description: (i) => `
        Consumes HP equal to ${scaleValue(S.MortenaxBladeScaling.skill.main, i)} of Mortenax Blade's Max HP and deals Fire DMG equal to ${scaleValue(S.MortenaxBladeScaling.skill.adjacent, i)} of Mortenax Blade's Max HP to all enemies, and additionally deals ${scaleValue(S.MortenaxBladeScaling.skill.adjacent2, i, "")} instance(s) of DMG, with each instance dealing Fire DMG equal to ${scaleValue(S.MortenaxBladeScaling.skill.adjacent3, i)} of Mortenax Blade's Max HP to one random enemy.\\nIf the current HP is insufficient, Mortenax Blade's current HP will be reduced to 1 when he uses Skill.\\nWhile not in the "Infinite Fury" state or when the current HP is 1 or lower, Mortenax Blade cannot use his Skill.\\nUsing Skill does not consume Skill Points.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Fornax Ex Corpore",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("MortenaxBlade", "Ultimate"),
            description: (i) => `
        Inflicts "Balefire Bind" on all enemies. Enemy targets in the "Balefire Bind" state have their DEF reduced by ${scaleValue(S.MortenaxBladeScaling.ultimate.main, i)} and the DMG they receive increases by ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent, i)}, lasting for ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent2, i, "")} turn(s). Then, consumes HP equal to ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent3, i)} of Mortenax Blade's Max HP to deploy a Zone. While the Zone is active, Mortenax Blade enters the "Infinite Fury" state.\\nDuring the "Infinite Fury" state, increases CRIT Rate by ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent4, i)}, increases CRIT DMG by ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent5, i)}, enhances Basic ATK, unlocks Skill, and gains a new Ultimate "Tenax Per Ignem." When receiving a killing blow, this unit will not be <u>knocked down</u>, but will dispel the Zone, exit the "Infinite Fury" state, and restore HP equal to ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent6, i)} of this unit's Max HP.\\nWhen gaining the "Infinite Fury" state, a corresponding countdown appears on the Action Order. The countdown has a fixed SPD of ${scaleValue(S.MortenaxBladeScaling.ultimate.adjacent7, i, "")}. At the start of the countdown's turn, dispels the Zone and exits the "Infinite Fury" state.\\nIf the current HP is insufficient, Mortenax Blade's current HP will be reduced to 1 when he uses this ability.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: All Karma Comes Due",
            type: "talent",
            level: "1/12",
            icon: charIcon("MortenaxBlade", "Talent"),
            description: (i) => `
        While the Zone is active, after each attack an ally target uses on an enemy, inflicts the "Balefire Bind" state on the corresponding enemy target and grants 1 Charge to Mortenax Blade. When Charge reaches ${scaleValue(S.MortenaxBladeScaling.talent.main, i, "")} points and the current HP is more than 1, consumes ${scaleValue(S.MortenaxBladeScaling.talent.main, i, "")} Charge, regenerates ${scaleValue(S.MortenaxBladeScaling.talent.adjacent, i, "")} Energy, and enables Mortenax Blade to use Skill 1 extra time. This extra Skill use is considered as <u>Follow-Up ATK</u>.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Blade's Reach Spares None",
            type: "technique",
            level: "1/1",
            icon: charIcon("MortenaxBlade", "Technique"),
            description: (i) => `
        Immediately attacks all enemies within a certain range. After entering combat, inflicts the Taunt state on all enemies for 1 turn and decreases DMG taken by this unit by ${scaleValue(S.MortenaxBladeScaling.technique.main, i)} for ${scaleValue(S.MortenaxBladeScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Heart, Refined ad Infinitum",
            type: "bonus",
            level: "1/1",
            icon: charIcon("MortenaxBlade", "HeartRefinedadInfinitum"),
            description: (i) => `
        While the Zone is active, ally targets deal ${scaleValue(S.MortenaxBladeScaling.b1.main, i)} increased DMG. If there are other Nihility characters aside from Mortenax Blade in the team, Ultimate DMG dealt by ally targets increases by ${scaleValue(S.MortenaxBladeScaling.b1.adjacent, i)}. Otherwise, DMG dealt by Mortenax Blade additionally increases by ${scaleValue(S.MortenaxBladeScaling.b1.adjacent2, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Bone, Hardened ad Nauseam",
            type: "bonus",
            level: "1/1",
            icon: charIcon("MortenaxBlade", "BoneHardenedadNauseam"),
            description: (i) => `
        Mortenax Blade can accumulate up to ${scaleValue(S.MortenaxBladeScaling.b2.main, i, "")} overflow Energy. After using Ultimate, clears it and regenerates a corresponding amount of Energy. When the battle starts or when the Zone is dispelled, if Energy is below ${scaleValue(S.MortenaxBladeScaling.b2.adjacent, i)}, it is immediately regenerated to ${scaleValue(S.MortenaxBladeScaling.b2.adjacent, i)}. When Energy is regenerated to its maximum, dispels all <u>debuffs</u> from this unit.
      `,
        },
        b3: {
            id: "b3",
            name: "Soul, Tempered ad Mortem",
            type: "bonus",
            level: "1/1",
            icon: charIcon("MortenaxBlade", "SoulTemperedadMortem"),
            description: (i) => `
        While the Zone is active, increases the chance of being attacked by enemies, decreases DMG taken by this unit by ${scaleValue(S.MortenaxBladeScaling.b3.main, i)}, and increases Incoming Healing by ${scaleValue(S.MortenaxBladeScaling.b3.adjacent, i)}. After being attacked, inflicts the "Balefire Bind" state on the corresponding target, and enables Mortenax Blade to gain 1 Charge.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>6.4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
  },
};

Characters.push(MortenaxBlade);

const RinTohsaka: Character = {
  name: "Rin Tohsaka",
  path: Paths.Erudition,
  element: Elements.Quantum,
  world: Worlds.AnotherWorld, // TODO: Rin Tohsaka
  image: charSplash("Rin"),
  pfp: charPfp("Rin"),
  eidolons: Eidolons.RinEidolons,

  baseATK: 698,
  baseDEF: 460,
  baseHP: 1047,
  baseSPD: 102,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Bajiquan",
            type: "basic",
            level: "1/7",
            icon: charIcon("RinTohsaka", "BasicATK"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.RinTohsakaScaling.attack, i)} of Rin Tohsaka's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Jeweled Sword Zelretch",
            type: "skill",
            level: "1/12",
            icon: charIcon("RinTohsaka", "Skill"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.RinTohsakaScaling.skill, i)} of Rin Tohsaka's ATK to one designated enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: An Gal Ta Ki Gal Šè",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("RinTohsaka", "Ultimate"),
            description: (i) => `
        Deals Quantum DMG equal to ${scaleValue(S.RinTohsakaScaling.ultimate.main, i)} of Rin Tohsaka's ATK to one designated enemy, and Quantum DMG equal to ${scaleValue(S.RinTohsakaScaling.ultimate.adjacent, i)} of Rin Tohsaka's ATK to other enemy targets. When used, recovers ${scaleValue(S.RinTohsakaScaling.ultimate.adjacent2, i, "")} Skill Point(s) for allies, and increases the DMG taken by all enemies by ${scaleValue(S.RinTohsakaScaling.ultimate.adjacent3, i)}, lasting for ${scaleValue(S.RinTohsakaScaling.ultimate.adjacent4, i, "")} turn(s).
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Gem Magecraft",
            type: "talent",
            level: "1/12",
            icon: charIcon("RinTohsaka", "Talent"),
            description: (i) => `
        When entering combat, gains ${scaleValue(S.RinTohsakaScaling.talent.main, i, "")} "Gem Energy." When an ally target consumes or recovers Skill Points, increases their CRIT DMG by ${scaleValue(S.RinTohsakaScaling.talent.adjacent, i)} for ${scaleValue(S.RinTohsakaScaling.talent.adjacent2, i, "")} turn(s). For every 1 Skill Point consumed or recovered, Rin Tohsaka gains 1 "Gem Energy." If Rin Tohsaka holds ${scaleValue(S.RinTohsakaScaling.talent.adjacent3, i, "")} or more "Gem Energy," or if the current Skill Points are ${scaleValue(S.RinTohsakaScaling.talent.adjacent4, i, "")} or more, her Skill is enhanced to "Second Magic Experiment."
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Conversion Charge",
            type: "technique",
            level: "1/1",
            icon: charIcon("RinTohsaka", "Technique"),
            description: (i) => `
        After using Technique, gains ${scaleValue(S.RinTohsakaScaling.technique, i, "")} "Gem Energy" at the start of the next battle.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Inbound Prosperity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RinTohsaka", "InboundProsperity"),
            description: (i) => `
        When Rin Tohsaka uses Ultimate, gains ${scaleValue(S.RinTohsakaScaling.b1, i, "")} "Gem Energy."
      `,
        },
        b2: {
            id: "b2",
            name: "Elegant Conduct",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RinTohsaka", "ElegantConduct"),
            description: (i) => `
        While Rin Tohsaka is on the field, additionally increases the upper limit of Skill Points by ${scaleValue(S.RinTohsakaScaling.b2.main, i, "")}. When entering combat, Rin Tohsaka's ATK increases by ${scaleValue(S.RinTohsakaScaling.b2.adjacent, i)}, and Quantum <u>RES PEN</u> increases by ${scaleValue(S.RinTohsakaScaling.b2.adjacent2, i)}. If Archer is in the team, Archer also gains this effect.
      `,
        },
        b3: {
            id: "b3",
            name: "Ladylike Poise",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RinTohsaka", "LadylikePoise"),
            description: (i) => `
        When entering combat or after using Enhanced Skill, increases Rin Tohsaka's SPD by ${scaleValue(S.RinTohsakaScaling.b3.main, i)}, lasting for ${scaleValue(S.RinTohsakaScaling.b3.adjacent, i, "")} turn(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>4.8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Quantum DMG Boost",
                type: "stat",
                icon: statIcon("QuantumBoost"),
                description: "Quantum DMG Increases by: <b><u>3.2%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
  },
};

Characters.push(RinTohsaka);

const Gilgamesh: Character = {
  name: "Gilgamesh",
  path: Paths.Destruction,
  element: Elements.Lightning,
  world: Worlds.AnotherWorld, // TODO: Gilgamesh
  image: charSplash("Gilgamesh"),
  pfp: charPfp("Gilgamesh"),
  eidolons: Eidolons.GilgameshEidolons,

  baseATK: 717,
  baseDEF: 509,
  baseHP: 1125,
  baseSPD: 97,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Halfhearted Blow",
            type: "basic",
            level: "1/7",
            icon: charIcon("Gilgamesh", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.GilgameshScaling.attack, i)} of Gilgamesh's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Gate of Babylon",
            type: "skill",
            level: "1/12",
            icon: charIcon("Gilgamesh", "Skill"),
            description: (i) => `
        Gains "King's Acknowledgement," allowing this unit to ignore ${scaleValue(S.GilgameshScaling.skill.main, i)} of the target's DEF when dealing DMG, lasting for ${scaleValue(S.GilgameshScaling.skill.adjacent, i, "")} turn(s).\\nDeals Lightning DMG equal to ${scaleValue(S.GilgameshScaling.skill.adjacent2, i)} of Gilgamesh's ATK to one designated enemy, and deals Lightning DMG equal to ${scaleValue(S.GilgameshScaling.skill.adjacent3, i)} of Gilgamesh's ATK to adjacent targets.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Enuma Elish",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Gilgamesh", "Ultimate"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.GilgameshScaling.ultimate.main, i)} of Gilgamesh's ATK to all enemies, and additionally deals ${scaleValue(S.GilgameshScaling.ultimate.adjacent, i, "")} instance(s) of DMG, with each instance dealing Lightning DMG equal to ${scaleValue(S.GilgameshScaling.ultimate.adjacent2, i)} of Gilgamesh's ATK to one random enemy.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: \"Amuse Me to the Fullest\"",
            type: "talent",
            level: "1/12",
            icon: charIcon("Gilgamesh", "Talent"),
            description: (i) => `
        When a teammate uses their Ultimate, Gilgamesh gains "King's Burden," which increases Ultimate DMG dealt by this unit by ${scaleValue(S.GilgameshScaling.talent.main, i)}, lasting for ${scaleValue(S.GilgameshScaling.talent.adjacent, i, "")} turn(s).\\nInitially, automatically uses Basic ATK at the start of this unit's turn. When another ally target takes action, Gilgamesh gains 1 point of "Interest." For each point of "Interest" in possession, increases this unit's SPD by ${scaleValue(S.GilgameshScaling.talent.adjacent2, i)}.\\nWhen "Interest" reaches ${scaleValue(S.GilgameshScaling.talent.adjacent3, i, "")} for the first time, enters the "Interest Piqued!" state. In that state, can only use Skill, lasting for the entire battle. After using Skill, clears this unit's "Interest."
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Enkidu",
            type: "technique",
            level: "1/1",
            icon: charIcon("Gilgamesh", "Technique"),
            description: (i) => `
        After using Technique, creates 1 Special Dimension lasting for ${scaleValue(S.GilgameshScaling.technique.main, i, "")} second(s). Enemies in the Special Dimension enter the "King's Permission" state. Enemies in the "King's Permission" state will cease all actions.\\nWhen entering combat by actively attacking an enemy in the "King's Permission" state, causes all enemies in the "King's Permission" state to enter combat, and deals Lightning DMG equal to ${scaleValue(S.GilgameshScaling.technique.adjacent, i)} of Gilgamesh's ATK to all enemies after entering combat. Gilgamesh also immediately gains ${scaleValue(S.GilgameshScaling.technique.adjacent2, i, "")} "Interest." Only 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Hegemon's Strife",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gilgamesh", "HegemonsStrife"),
            description: (i) => `
        While Gilgamesh is on the field, increases all ally targets' ATK by ${scaleValue(S.GilgameshScaling.b1.main, i)} and CRIT DMG by ${scaleValue(S.GilgameshScaling.b1.adjacent, i)}. If the target's Max Energy exceeds ${scaleValue(S.GilgameshScaling.b1.adjacent2, i, "")}, for every 1 excess point of Max Energy, additionally increases ATK and CRIT DMG by ${scaleValue(S.GilgameshScaling.b1.adjacent3, i)}, up to a maximum additional increase of ${scaleValue(S.GilgameshScaling.b1.adjacent4, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Epic's Opening",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gilgamesh", "EpicsOpening"),
            description: (i) => `
        When Gilgamesh uses Ultimate, gains ${scaleValue(S.GilgameshScaling.b2.main, i, "")} "Interest." When other ally characters use Ultimate, Gilgamesh additionally gains ${scaleValue(S.GilgameshScaling.b2.adjacent, i, "")} "Interest" and regenerates a fixed amount of Energy equal to ${scaleValue(S.GilgameshScaling.b2.adjacent2, i)} of the Energy consumed this time.
      `,
        },
        b3: {
            id: "b3",
            name: "Hero's Hauteur",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Gilgamesh", "HerosHauteur"),
            description: (i) => `
        During the current battle, for every 1 point of "Interest" gained by Gilgamesh, increases his CRIT DMG by ${scaleValue(S.GilgameshScaling.b3.main, i)}. This effect can stack up to ${scaleValue(S.GilgameshScaling.b3.adjacent, i, "")} time(s).
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>4.8%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Lightning DMG Boost",
                type: "stat",
                icon: statIcon("LightningBoost"),
                description: "Lightning DMG Increases by: <b><u>3.2%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
  },
};

Characters.push(Gilgamesh);

const HimekoNova: Character = {
  name: "Himeko • Nova",
  path: Paths.Erudition,
  element: Elements.Fire,
  world: Worlds.AstralExpress, // TODO: Himeko • Nova
  image: charSplash("HimekoNova"),
  pfp: charPfp("HimekoNova"),
  eidolons: Eidolons.HimekoNovaEidolons,

  baseATK: 756,
  baseDEF: 485,
  baseHP: 1125,
  baseSPD: 98,
  aggro: 75,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Enkindle the First Lodestar",
            type: "basic",
            level: "1/7",
            icon: charIcon("HimekoNova", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.HimekoNovaScaling.attack, i)} of Himeko • Nova's ATK to one enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Upraise the Vanward Cresset",
            type: "skill",
            level: "1/12",
            icon: charIcon("HimekoNova", "Skill"),
            description: (i) => `
        After using Skill, immediately recovers all <u>Assist Skill</u> uses. Himeko • Nova gains "Navigator's Semaphore," lasting for ${scaleValue(S.HimekoNovaScaling.skill.main, i, "")} turn(s). This duration decreases by 1 at the start of Himeko • Nova's every turn. When Himeko • Nova has "Navigator's Semaphore," DMG dealt by all allies increases by ${scaleValue(S.HimekoNovaScaling.skill.adjacent, i)}. At the start of every turn, immediately recovers 1 <u>Assist Skill</u> use.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: We, Too, Stride the Stars",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("HimekoNova", "Ultimate"),
            description: (i) => `
        Immediately takes control of "Starblazer." "Starblazer" can launch "Hyperluminal Particle Beam" against enemies 6 times, or consume <u>"Source Energy"</u> to launch "Orbital Annihilation Pulse," dealing Fire DMG up to ${scaleValue(S.HimekoNovaScaling.ultimate.main, i)} of Himeko • Nova's ATK to one designated enemy, and Fire DMG up to ${scaleValue(S.HimekoNovaScaling.ultimate.adjacent, i)} of Himeko • Nova's ATK to other targets.\\nWhen the uses of "Hyperluminal Particle Beam" are depleted, automatically launches "Orbital Annihilation Pulse," followed by Final Hit, dealing ${scaleValue(S.HimekoNovaScaling.ultimate.adjacent2, i, "")} instance(s) of DMG, with each instance dealing Fire DMG equal to ${scaleValue(S.HimekoNovaScaling.ultimate.adjacent3, i)} of Himeko • Nova's ATK to one random enemy.\\nWhen "Hyperluminal Particle Beam" or "Orbital Annihilation Pulse" deals fatal damage to all enemies on the field, or when enemy HP can no longer be reduced, immediately launches Final Hit.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Of Fire and Far Faring",
            type: "talent",
            level: "1/12",
            icon: charIcon("HimekoNova", "Talent"),
            description: (i) => `
        While Himeko • Nova is on the field, immediately deploys the <u>Territory</u> "Starblazer Visioscape," summoning "Starblazer" to the field and granting all ally characters 1 <u>Assist Skill</u> use. Ally characters can use <u>Assist Skill</u> to call upon "Starblazer" to attack enemies.\\nUsing <u>Assist Skill</u> is considered as Himeko • Nova using her Skill. Himeko • Nova gains ${scaleValue(S.HimekoNovaScaling.talent.main, i)} increased All-Type <u>RES PEN</u> and ${scaleValue(S.HimekoNovaScaling.talent.adjacent, i)} increased CRIT DMG. When attacking, can ignore Weakness Types to reduce enemy Toughness. When breaking Weakness, triggers the Fire Weakness Break effect.\\nWhen ally characters other than Himeko • Nova use their <u>Assist Skill</u>, regenerates ${scaleValue(S.HimekoNovaScaling.talent.adjacent2, i, "")} Energy for them.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Starcharter Cruise",
            type: "technique",
            level: "1/1",
            icon: charIcon("HimekoNova", "Technique"),
            description: (i) => `
        When Himeko • Nova is in the team, increases the max Technique Points by 3.\\nAfter using Technique, enters the "Cruise" state for ${scaleValue(S.HimekoNovaScaling.technique, i, "")} seconds. Actively using the Technique consumes 2 Technique Points and immediately attacks all enemies within a certain range. After entering combat, immediately uses Skill 1 time at the start of each wave.\\nIf attacking a Normal Enemy, immediately defeats them without entering combat. No Technique Points are consumed if no enemies are hit.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "The Silver Rail, Hushed in Antiquity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("HimekoNova", "TheSilverRailHushedinAntiquity"),
            description: (i) => `
        When using Ultimate, immediately gains ${scaleValue(S.HimekoNovaScaling.b1.main, i, "")} <u>"Source Energy."</u> If the current <u>"Source Energy"</u> is ${scaleValue(S.HimekoNovaScaling.b1.adjacent, i, "")} or more, when using the "Orbital Annihilation Pulse" attack, the DMG multiplier of "Orbital Annihilation Pulse" against random single enemies increases by ${scaleValue(S.HimekoNovaScaling.b1.adjacent2, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Whither, the Last and First Men?",
            type: "bonus",
            level: "1/1",
            icon: charIcon("HimekoNova", "WhithertheLastandFirstMen"),
            description: (i) => `
        When Himeko • Nova launches <u>Assist Skill</u>, it does not consume <u>Assist Skill</u> uses. At the start of the turn, if the <u>Assist Skill</u> uses have reached the current cap, Himeko • Nova additionally regenerates ${scaleValue(S.HimekoNovaScaling.b2, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Hark! The Express's Pulse Roars",
            type: "bonus",
            level: "1/1",
            icon: charIcon("HimekoNova", "HarkTheExpresssPulseRoars"),
            description: "When a <u>Trailblaze Companions</u> character other than Himeko • Nova uses <u>Assist Skill</u>, that character immediately gains 1 <u>extra turn</u> in which they can insert the use of their Ultimate. The <u>extra turn</u> gained from <u>Assist Skill</u> will not repeatedly trigger this Trace effect.",
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>4.8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Fire DMG Boost",
                type: "stat",
                icon: statIcon("FireBoost"),
                description: "Fire DMG Increases by: <b><u>3.2%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(HimekoNova);

const RobinSummeretto: Character = {
  name: "Robin • Summeretto",
  path: Paths.Remembrance,
  element: Elements.Wind,
  world: Worlds.Penacony, // TODO: Robin • Summeretto
  image: charSplash("RobinSummeretto"),
  pfp: charPfp("RobinSummeretto"),
  eidolons: Eidolons.RobinSummerettoEidolons,

  baseATK: 601,
  baseDEF: 485,
  baseHP: 1203,
  baseSPD: 95,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: The Sea Sings in My Key",
            type: "basic",
            level: "1/7",
            icon: charIcon("RobinSummeretto", "BasicATK"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.RobinSummerettoScaling.attack, i)} of Robin • Summeretto's Max HP to one enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Summer Strums the Soul",
            type: "skill",
            level: "1/12",
            icon: charIcon("RobinSummeretto", "Skill"),
            description: (i) => `
        <u>Summons the memosprite</u> "Summer Songbirds" Bessie. If any member of the "Summer Songbirds" is already on the field, restores their HP by an amount equal to ${scaleValue(S.RobinSummerettoScaling.skill.main, i)} of "Summer Songbirds'" Max HP, and gains ${scaleValue(S.RobinSummerettoScaling.skill.adjacent, i, "")} Vibes.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Ascend That Rhapsody in Blue",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("RobinSummeretto", "Ultimate"),
            description: (i) => `
        <u>Advances the action</u> of one designated ally character (excluding Robin • Summeretto) by ${scaleValue(S.RobinSummerettoScaling.ultimate.main, i)} and regenerates a fixed amount of Energy equal to ${scaleValue(S.RobinSummerettoScaling.ultimate.adjacent, i)} of their Max Energy. Then, grants them the "Special Guest" effect. When the "Special Guest" character or their summon attacks, they additionally grant Robin • Summeretto ${scaleValue(S.RobinSummerettoScaling.ultimate.adjacent2, i, "")} Vibes but cannot make other friendly targets gain the <u>action advance</u> effect. This lasts for 2 turn(s), and its duration decreases by 1 at the start of this character's turn.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Wings Heed No Borders",
            type: "talent",
            level: "1/12",
            icon: charIcon("RobinSummeretto", "Talent"),
            description: (i) => `
        Memosprite "Summer Songbirds" has an initial Max HP equal to ${scaleValue(S.RobinSummerettoScaling.talent.main, i)} of Robin • Summeretto's Max HP and an initial SPD equal to ${scaleValue(S.RobinSummerettoScaling.talent.adjacent, i)} of Robin • Summeretto's SPD. When an ally target uses an attack, or when they provide healing or Shield for the first time in any target's turn, Robin • Summeretto gains Vibes by 1 point, capped at ${scaleValue(S.RobinSummerettoScaling.talent.adjacent2, i, "")}. While "Summer Songbirds" Bessie is on the field, if Robin • Summeretto's Vibes is ${scaleValue(S.RobinSummerettoScaling.talent.adjacent3, i, "")} or higher, immediately summons "Summer Songbirds" Drummie, and if Vibes is ${scaleValue(S.RobinSummerettoScaling.talent.adjacent4, i, "")} or higher, immediately summons "Summer Songbirds" Paddie. When all "Summer Songbirds" take the stage, dispels all <u>Crowd Control debuffs</u> inflicted upon Robin • Summeretto and the "Summer Songbirds", starts the "Fever" state, and deploys a Zone. When ally targets deal DMG within the Zone, they ignore a percentage of enemy targets' DEF equal to (${scaleValue(S.RobinSummerettoScaling.talent.adjacent5, i)} + Vibes × ${scaleValue(S.RobinSummerettoScaling.talent.adjacent6, i)}).\\nWhile in the "Fever" state, Robin • Summeretto and the "Summer Songbirds" are immune to <u>Crowd Control debuffs</u>. Robin • Summeretto will not enter her turn until the "Fever" state ends.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: We Are the Melody",
            type: "technique",
            level: "1/1",
            icon: charIcon("RobinSummeretto", "Technique"),
            description: (i) => `
        After using Technique, <u>advances action</u> by ${scaleValue(S.RobinSummerettoScaling.technique.main, i)} at the start of the next battle, immediately gains ${scaleValue(S.RobinSummerettoScaling.technique.adjacent, i, "")} Vibes, and increases all allies' DMG dealt by ${scaleValue(S.RobinSummerettoScaling.technique.adjacent2, i)}, lasting for 2 turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Rebuilt Harmony",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RobinSummeretto", "RebuiltHarmony"),
            description: (i) => `
        Increases the CRIT Rate of Robin • Summeretto and "Summer Songbirds" by ${scaleValue(S.RobinSummerettoScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Deviated Chords",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RobinSummeretto", "DeviatedChords"),
            description: (i) => `
        When an ally target causes Robin • Summeretto to gain Vibes, if their ATK is higher than Robin • Summeretto's, increases that target's ATK by an amount equal to (${scaleValue(S.RobinSummerettoScaling.b2.main, i)} + Vibes × ${scaleValue(S.RobinSummerettoScaling.b2.adjacent, i)}) of Robin • Summeretto's Max HP. Otherwise, increases that target's CRIT DMG by an amount equal to (${scaleValue(S.RobinSummerettoScaling.b2.adjacent2, i)} + Vibes × ${scaleValue(S.RobinSummerettoScaling.b2.adjacent3, i)}). Lasts for ${scaleValue(S.RobinSummerettoScaling.b2.adjacent4, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Improvised Blues",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RobinSummeretto", "ImprovisedBlues"),
            description: (i) => `
        When Robin • Summeretto or the "Summer Songbirds" receive healing or Shield provided by teammates, causes Robin • Summeretto to gain ${scaleValue(S.RobinSummerettoScaling.b3.main, i, "")} stack(s) of "Groove," capped at ${scaleValue(S.RobinSummerettoScaling.b3.adjacent, i, "")}. The first time Robin • Summeretto gains Vibes during any target's turn, if she has "Groove," consumes 1 stack of "Groove" and regenerates a fixed ${scaleValue(S.RobinSummerettoScaling.b3.adjacent2, i, "")} Energy.
      `,
        },
        b4: {
            id: "b4",
            name: "A Warble of Wings",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RobinSummeretto", "AWarbleofWings"),
            description: (i) => `
        <b>A Warble of Wings</b><br>While in the "Fever" state, the "Summer Songbirds" and a countdown will appear on the Action Order. And the DMG dealt by Robin • Summeretto and "Summer Songbirds" increases by an amount equal to (${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.main, i)} + Vibes × ${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent, i)}). When "Summer Songbirds'" turn starts, uses the Memosprite Skill. The countdown has an initial SPD of ${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent2, i, "")}. And when its turn starts, deducts ${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent3, i)} of the current Vibes (minimum ${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent4, i, "")} points). When the Vibes reaches 0, the "Summer Songbirds" disappears and Robin • Summeretto exits the "Fever" state. While the "Summer Songbirds" is on the field, based on the number of its members present, increases the DMG taken by all enemies by ${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent5, i)}/${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent6, i)}/${scaleValue(S.RobinSummerettoScaling.b4.AWarbleofWings.adjacent7, i)} respectively.
<br>
        <b>Near the Sea's Heartbeat</b><br>When the "Summer Songbirds" gets summoned, regenerates ${scaleValue(S.RobinSummerettoScaling.b4.NeartheSeasHeartbeat, i, "")} Energy for Robin • Summeretto.
<br>
        <b>Astride Summer's Nightwind</b><br>When the "Summer Songbirds" disappears, Robin • Summeretto's <u>action advances</u> by ${scaleValue(S.RobinSummerettoScaling.b4.AstrideSummersNightwind, i)}.
      `,
        },
        b5: {
            id: "b5",
            name: "Chirrup Quartet",
            type: "bonus",
            level: "1/1",
            icon: charIcon("RobinSummeretto", "ChirrupQuartet"),
            description: (i) => `
        Deals Wind DMG equal to ${scaleValue(S.RobinSummerettoScaling.b5, i)} of "Summer Songbirds'" Max HP to all enemies.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>4</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s6: {
                id: "s6",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>2</u></b>",
            },
        s7: {
                id: "s7",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s8: {
                id: "s8",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "SPD Boost",
                type: "stat",
                icon: statIcon("SPD"),
                description: "SPD Increases by: <b><u>3</u></b>",
            },
  },
};

Characters.push(RobinSummeretto);

const Trailblazer: Character = {
  name: "Trailblazer Destruction",
  path: Paths.Destruction,
  element: Elements.Physical,
  world: Worlds.AstralExpress, // TODO: Trailblazer
  image: charSplash("NICKNAME"),
  pfp: charPfp("NICKNAME"),
  eidolons: Eidolons.DestructionTrailblazerEidolons,

  baseATK: 620,
  baseDEF: 460,
  baseHP: 1203,
  baseSPD: 100,
  aggro: 125,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Farewell Hit",
            type: "basic",
            level: "1/7",
            icon: charIcon("Trailblazer", "BasicATK"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.TrailblazerScaling.attack, i)} of the Trailblazer's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: RIP Home Run",
            type: "skill",
            level: "1/12",
            icon: charIcon("Trailblazer", "Skill"),
            description: (i) => `
        Deals Physical DMG equal to ${scaleValue(S.TrailblazerScaling.skill, i)} of the Trailblazer's ATK to one designated enemy and enemies adjacent to it.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Stardust Ace",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Trailblazer", "Ultimate"),
            description: (i) => `
        Choose between two attack modes to deliver a full strike.\\n"Blowout: Farewell Hit" deals Physical DMG equal to ${scaleValue(S.TrailblazerScaling.ultimate.main, i)} of the Trailblazer's ATK to one designated enemy.\\n"Blowout: RIP Home Run" deals Physical DMG equal to ${scaleValue(S.TrailblazerScaling.ultimate.adjacent, i)} of the Trailblazer's ATK to one designated enemy, and Physical DMG equal to ${scaleValue(S.TrailblazerScaling.ultimate.adjacent2, i)} of the Trailblazer's ATK to enemies adjacent to it.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Perfect Pickoff",
            type: "talent",
            level: "1/12",
            icon: charIcon("Trailblazer", "Talent"),
            description: (i) => `
        Each time after this character inflicts Weakness Break on an enemy, ATK increases by ${scaleValue(S.TrailblazerScaling.talent.main, i)}. This effect stacks up to ${scaleValue(S.TrailblazerScaling.talent.adjacent, i, "")} time(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Immortal Third Strike",
            type: "technique",
            level: "1/1",
            icon: charIcon("Trailblazer", "Technique"),
            description: (i) => `
        Immediately heals all allies for ${scaleValue(S.TrailblazerScaling.technique, i)} of their respective Max HP after using this Technique.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Fighting Will",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "FightingWill"),
            description: (i) => `
        When using Skill or Ultimate "Blowout: RIP Home Run," DMG dealt to the target enemy is increased by ${scaleValue(S.TrailblazerScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Ready for Battle",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "ReadyforBattle"),
            description: (i) => `
        At the start of the battle, immediately regenerates ${scaleValue(S.TrailblazerScaling.b2, i, "")} Energy.
      `,
        },
        b3: {
            id: "b3",
            name: "Tenacity",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "Tenacity"),
            description: (i) => `
        Each Talent stack increases the Trailblazer's DEF by ${scaleValue(S.TrailblazerScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s9: {
                id: "s9",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s10: {
                id: "s10",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
  },
};

Characters.push(Trailblazer);

const TrailblazerPreservation: Character = {
  name: "Trailblazer Preservation",
  path: Paths.Preservation,
  element: Elements.Fire,
  world: Worlds.AstralExpress, // TODO: Trailblazer
  image: charSplash("NICKNAME"),
  pfp: charPfp("NICKNAME"),
  eidolons: Eidolons.PreservationTrailblazerEidolons,

  baseATK: 601,
  baseDEF: 606,
  baseHP: 1241,
  baseSPD: 95,
  aggro: 150,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Ice-Breaking Light",
            type: "basic",
            level: "1/7",
            icon: charIcon("Trailblazer", "BasicATK"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.TrailblazerPreservationScaling.attack, i)} of the Trailblazer's ATK to one designated enemy and gains 1 stack of "Magma Will."
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Ever-Burning Amber",
            type: "skill",
            level: "1/12",
            icon: charIcon("Trailblazer", "Skill"),
            description: (i) => `
        Increases the Trailblazer's DMG Reduction by ${scaleValue(S.TrailblazerPreservationScaling.skill.main, i)} and gains 1 stack of Magma Will, with a ${scaleValue(S.TrailblazerPreservationScaling.skill.adjacent, i)} <u>base chance</u> to Taunt all enemies for ${scaleValue(S.TrailblazerPreservationScaling.skill.adjacent2, i, "")} turn(s).
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: War-Flaming Lance",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Trailblazer", "Ultimate"),
            description: (i) => `
        Deals Fire DMG equal to ${scaleValue(S.TrailblazerPreservationScaling.ultimate.main, i)} of the Trailblazer's ATK plus ${scaleValue(S.TrailblazerPreservationScaling.ultimate.adjacent, i)} of the Trailblazer's DEF to all enemies. The next Basic ATK will be automatically enhanced and does not cost Magma Will.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Treasure of the Architects",
            type: "talent",
            level: "1/12",
            icon: charIcon("Trailblazer", "Talent"),
            description: (i) => `
        Each time the Trailblazer is hit, they gain 1 stack of "Magma Will" for a max of ${scaleValue(S.TrailblazerPreservationScaling.talent.main, i, "")} stack(s).\\nWhen "Magma Will" has no fewer than 4 stacks, the Trailblazer's Basic ATK becomes enhanced, dealing DMG to one designated enemy and enemies adjacent to it.\\nWhen the Trailblazer uses Basic ATK, Skill, or Ultimate, apply a Shield to all allies that absorbs DMG equal to ${scaleValue(S.TrailblazerPreservationScaling.talent.adjacent, i)} of the Trailblazer's DEF plus ${scaleValue(S.TrailblazerPreservationScaling.talent.adjacent2, i, "")}. The Shield lasts for ${scaleValue(S.TrailblazerPreservationScaling.talent.adjacent3, i, "")} turn(s).
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Call of the Guardian",
            type: "technique",
            level: "1/1",
            icon: charIcon("Trailblazer", "Technique"),
            description: (i) => `
        After using Technique, at the start of the next battle, gains a Shield that absorbs DMG equal to ${scaleValue(S.TrailblazerPreservationScaling.technique.main, i)} of the Trailblazer's DEF plus ${scaleValue(S.TrailblazerPreservationScaling.technique.adjacent, i, "")} for ${scaleValue(S.TrailblazerPreservationScaling.technique.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Action Beats Overthinking",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "ActionBeatsOverthinking"),
            description: (i) => `
        When the Trailblazer is protected by a Shield at the beginning of the turn, increases their ATK by ${scaleValue(S.TrailblazerPreservationScaling.b1.main, i)} and regenerates ${scaleValue(S.TrailblazerPreservationScaling.b1.adjacent, i, "")} Energy until the action is over.
      `,
        },
        b2: {
            id: "b2",
            name: "The Strong Defend the Weak",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "TheStrongDefendtheWeak"),
            description: (i) => `
        After using the Skill, the DMG taken by all allies decreases by ${scaleValue(S.TrailblazerPreservationScaling.b2.main, i)} for ${scaleValue(S.TrailblazerPreservationScaling.b2.adjacent, i, "")} turn(s).
      `,
        },
        b3: {
            id: "b3",
            name: "Unwavering Gallantry",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "UnwaveringGallantry"),
            description: (i) => `
        Using Enhanced Basic ATK restores the Trailblazer's HP by ${scaleValue(S.TrailblazerScaling.b3, i)} of their Max HP.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>10%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
        s6: {
                id: "s6",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s7: {
                id: "s7",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s8: {
                id: "s8",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s9: {
                id: "s9",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>7.5%</u></b>",
            },
        s10: {
                id: "s10",
                name: "DEF Boost",
                type: "stat",
                icon: statIcon("DEF"),
                description: "DEF Increases by: <b><u>5%</u></b>",
            },
  },
};

Characters.push(TrailblazerPreservation);

const TrailblazerHarmony: Character = {
  name: "Trailblazer Harmony",
  path: Paths.Harmony,
  element: Elements.Imaginary,
  world: Worlds.AstralExpress, // TODO: Trailblazer
  image: charSplash("NICKNAME"),
  pfp: charPfp("NICKNAME"),
  eidolons: Eidolons.HarmonyTrailblazerEidolons,

  baseATK: 446,
  baseDEF: 679,
  baseHP: 1086,
  baseSPD: 105,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Swing Dance Etiquette",
            type: "basic",
            level: "1/7",
            icon: charIcon("Trailblazer", "BasicATK"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.TrailblazerHarmonyScaling.attack, i)} of the Trailblazer's ATK to one designated enemy target.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Halftime to Make It Rain",
            type: "skill",
            level: "1/12",
            icon: charIcon("Trailblazer", "Skill"),
            description: (i) => `
        Deals Imaginary DMG equal to ${scaleValue(S.TrailblazerHarmonyScaling.skill, i)} of the Trailblazer's ATK to one designated enemy target and additionally deals DMG for 4 times, with each time dealing Imaginary DMG equal to ${scaleValue(S.TrailblazerHarmonyScaling.skill, i)} of the Trailblazer's ATK to a random enemy.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: All-Out Footlight Parade",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Trailblazer", "Ultimate"),
            description: (i) => `
        Grants all allies the Backup Dancer effect, lasting for ${scaleValue(S.TrailblazerHarmonyScaling.ultimate.main, i, "")} turn(s). This duration decreases by 1 at the start of Trailblazer's every turn. Allies with the Backup Dancer effect have their Break Effect increased by ${scaleValue(S.TrailblazerHarmonyScaling.ultimate.adjacent, i)}. And when they attack enemy targets that are in the <u>Weakness Broken state</u>, the Toughness Reduction of the attack will be converted into 1 instance of <u>Super Break DMG</u>.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Full-on Aerial Dance",
            type: "talent",
            level: "1/12",
            icon: charIcon("Trailblazer", "Talent"),
            description: (i) => `
        The Trailblazer immediately regenerates ${scaleValue(S.TrailblazerHarmonyScaling.talent, i, "")} Energy when an enemy target's Weakness is Broken.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Now! I'm the Band!",
            type: "technique",
            level: "1/1",
            icon: charIcon("Trailblazer", "Technique"),
            description: (i) => `
        After the Technique is used, at the start of the next battle, all allies' Break Effect increases by ${scaleValue(S.TrailblazerHarmonyScaling.technique.main, i)}, lasting for ${scaleValue(S.TrailblazerHarmonyScaling.technique.adjacent, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Hat of the Theater",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "HatoftheTheater"),
            description: (i) => `
        After ally targets break weakness, additionally <u>delays the action</u> of the enemy target by ${scaleValue(S.TrailblazerScaling.b1, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Dance With the One",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "DanceWiththeOne"),
            description: (i) => `
        When the number of enemy targets on the field is (≥5)/4/3/2/1, the <u>Super Break DMG</u> triggered by the Backup Dancer effect increases by ${scaleValue(S.TrailblazerHarmonyScaling.b2.main, i)}/${scaleValue(S.TrailblazerHarmonyScaling.b2.adjacent, i)}/${scaleValue(S.TrailblazerHarmonyScaling.b2.adjacent2, i)}/${scaleValue(S.TrailblazerHarmonyScaling.b2.adjacent3, i)}/${scaleValue(S.TrailblazerHarmonyScaling.b2.adjacent4, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Shuffle Along",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "ShuffleAlong"),
            description: (i) => `
        When using Skill, additionally increases the Toughness Reduction of the first instance of DMG by ${scaleValue(S.TrailblazerHarmonyScaling.b3, i)}.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>6.4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>10.7%</u></b>",
            },
        s4: {
                id: "s4",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s5: {
                id: "s5",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>3.2%</u></b>",
            },
        s6: {
                id: "s6",
                name: "Imaginary DMG Boost",
                type: "stat",
                icon: statIcon("ImaginaryBoost"),
                description: "Imaginary DMG Increases by: <b><u>4.8%</u></b>",
            },
        s7: {
                id: "s7",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
        s8: {
                id: "s8",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>5.3%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Effect RES Boost",
                type: "stat",
                icon: statIcon("EffectRES"),
                description: "Effect RES Increases by: <b><u>4%</u></b>",
            },
        s10: {
                id: "s10",
                name: "Break Effect Boost",
                type: "stat",
                icon: statIcon("Break"),
                description: "Break Effect Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(TrailblazerHarmony);

const TrailblazerRemembrance: Character = {
  name: "Trailblazer Remembrance",
  path: Paths.Remembrance,
  element: Elements.Ice,
  world: Worlds.AstralExpress, // TODO: Trailblazer
  image: charSplash("NICKNAME"),
  pfp: charPfp("NICKNAME"),
  eidolons: Eidolons.RemembranceTrailblazerEidolons,

  baseATK: 543,
  baseDEF: 630,
  baseHP: 1047,
  baseSPD: 103,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Leave It to Me!",
            type: "basic",
            level: "1/7",
            icon: charIcon("Trailblazer", "BasicATK"),
            description: (i) => `
        Deals Ice DMG equal to ${scaleValue(S.TrailblazerScaling.attack, i)} of Trailblazer's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: I Choose You!",
            type: "skill",
            level: "1/12",
            icon: charIcon("Trailblazer", "Skill"),
            description: (i) => `
        <u>Summons the memosprite</u> Mem. If Mem is already on the field, restores Mem's HP by an amount equal to ${scaleValue(S.TrailblazerRemembranceScaling.skill.main, i)} of Mem's Max HP, and grants Mem ${scaleValue(S.TrailblazerRemembranceScaling.skill.adjacent, i)} Charge.
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: Together, Mem!",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Trailblazer", "Ultimate"),
            description: (i) => `
        <u>Summons memosprite</u> Mem. Grants Mem ${scaleValue(S.TrailblazerScaling.ultimate.main, i)} Charge, then makes Mem deal Ice DMG equal to ${scaleValue(S.TrailblazerScaling.ultimate.adjacent, i)} of Mem's ATK to all enemies.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: Almighty Companion",
            type: "talent",
            level: "1/12",
            icon: charIcon("Trailblazer", "Talent"),
            description: (i) => `
        Memosprite Mem has an initial SPD of ${scaleValue(S.TrailblazerScaling.talent.main, i, "")} and a Max HP equal to ${scaleValue(S.TrailblazerScaling.talent.adjacent, i)} of Trailblazer's Max HP plus ${scaleValue(S.TrailblazerRemembranceScaling.talent.adjacent2, i, "")}. For every ${scaleValue(S.TrailblazerRemembranceScaling.talent.adjacent3, i, "")} Energy regenerated by all allies in total, Mem gains 1% Charge.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: Memories Back as Echoes",
            type: "technique",
            level: "1/1",
            icon: charIcon("Trailblazer", "Technique"),
            description: (i) => `
        After using Technique, creates a Special Dimension that lasts for ${scaleValue(S.TrailblazerRemembranceScaling.technique.main, i, "")} second(s). Enemies within the Special Dimension are placed in a Time Stop state, halting all their actions.\\nAfter entering battle against enemies afflicted with the Time Stop state, <u>delays the action</u> of all enemies by ${scaleValue(S.TrailblazerRemembranceScaling.technique.adjacent, i)}, and then deals Ice DMG to all enemies equal to ${scaleValue(S.TrailblazerRemembranceScaling.technique.adjacent2, i)} of Trailblazer's ATK.\\nOnly 1 Dimension Effect created by allies can exist at the same time.
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "Magnets and Long Chains",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "MagnetsandLongChains"),
            description: (i) => `
        When the Max Energy of an ally target that has "Mem's Support" exceeds ${scaleValue(S.TrailblazerRemembranceScaling.b1.main, i, "")}, for every ${scaleValue(S.TrailblazerRemembranceScaling.b1.adjacent, i, "")} excess Energy, additionally increases the multiplier of the <u>True DMG</u> dealt via "Mem's Support" by ${scaleValue(S.TrailblazerRemembranceScaling.b1.adjacent2, i)}, up to a max increase of ${scaleValue(S.TrailblazerRemembranceScaling.b1.adjacent3, i)}.
      `,
        },
        b2: {
            id: "b2",
            name: "Rhapsode's Scepter",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "RhapsodesScepter"),
            description: (i) => `
        When the battle starts, Trailblazer's <u>action advances</u> by ${scaleValue(S.TrailblazerRemembranceScaling.b2.main, i)}. When Mem is first summoned, grants Mem ${scaleValue(S.TrailblazerRemembranceScaling.b2.adjacent, i)} Charge.
      `,
        },
        b3: {
            id: "b3",
            name: "Petite Parable",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "PetiteParable"),
            description: (i) => `
        When using "Baddies! Trouble!," Mem immediately gains ${scaleValue(S.TrailblazerRemembranceScaling.b3, i)} Charge.
      `,
        },
        b4: {
            id: "b4",
            name: "Friends! Together!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "FriendsTogether"),
            description: (i) => `
        <b>Friends! Together!</b><br>Increases all allies' CRIT DMG by an amount equal to ${scaleValue(S.TrailblazerRemembranceScaling.b4.FriendsTogether.main, i)} of Mem's CRIT DMG plus ${scaleValue(S.TrailblazerRemembranceScaling.b4.FriendsTogether.adjacent, i)}.\\nIf the Charge has yet to reach 100%, Mem automatically uses "Baddies! Trouble!" when taking action. When the Charge reaches 100%, Mem immediately takes action. In the next action, can select one ally and use "Lemme! Help You!".
<br>
        <b>Go, Mem, Go!</b><br>When Mem is summoned, immediately gains ${scaleValue(S.TrailblazerRemembranceScaling.b4.GoMemGo, i)} Charge.
<br>
        <b>No... Regrets</b><br>When Mem disappears, Trailblazer's <u>action advances</u> by ${scaleValue(S.TrailblazerRemembranceScaling.b4.NoRegrets, i)}.
      `,
        },
        b5: {
            id: "b5",
            name: "Baddies! Trouble!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "BaddiesTrouble"),
            description: (i) => `
        <b>Baddies! Trouble!</b><br>Deals ${scaleValue(S.TrailblazerRemembranceScaling.b5.BaddiesTrouble.main, i, "")} instance(s) of DMG, with each instance dealing Ice DMG equal to ${scaleValue(S.TrailblazerRemembranceScaling.b5.BaddiesTrouble.adjacent, i)} of Mem's ATK to one random enemy. At the end, deals Ice DMG equal to ${scaleValue(S.TrailblazerRemembranceScaling.b5.BaddiesTrouble.adjacent2, i)} of Mem's ATK to all enemies.
<br>
        <b>Lemme! Help You!</b><br><u>Advances the action</u> of one designated ally by ${scaleValue(S.TrailblazerRemembranceScaling.b5.LemmeHelpYou.main, i)} and grants them "Mem's Support," lasting for ${scaleValue(S.TrailblazerRemembranceScaling.b5.LemmeHelpYou.adjacent, i, "")} turn(s).\\nFor every 1 instance of DMG dealt by a target that has "Mem's Support," additionally deals 1 instance of <u>True DMG</u> equal to ${scaleValue(S.TrailblazerRemembranceScaling.b5.LemmeHelpYou.adjacent2, i)} of the original DMG.\\nWhen using this ability on this unit, cannot trigger the <u>action advance</u> effect.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>8%</u></b>",
            },
        s2: {
                id: "s2",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>10.7%</u></b>",
            },
        s3: {
                id: "s3",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s4: {
                id: "s4",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s5: {
                id: "s5",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
        s9: {
                id: "s9",
                name: "Max HP Boost",
                type: "stat",
                icon: statIcon("MaxHP"),
                description: "Max HP Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(TrailblazerRemembrance);

const TrailblazerElation: Character = {
  name: "Trailblazer Elation",
  path: Paths.Elation,
  element: Elements.Lightning,
  world: Worlds.AstralExpress, // TODO: Trailblazer
  image: charSplash("NICKNAME"),
  pfp: charPfp("NICKNAME"),
  eidolons: Eidolons.ElationTrailblazerEidolons,

  baseATK: 465,
  baseDEF: 630,
  baseHP: 1086,
  baseSPD: 106,
  aggro: 100,
  dupe: 0,

  traces: {
        attack: {
            id: "attack",
            name: "Basic ATK: Make Some Noise",
            type: "basic",
            level: "1/7",
            icon: charIcon("Trailblazer", "BasicATK"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.TrailblazerScaling.attack, i)} of Trailblazer's ATK to one designated enemy.
      `,
        },
        skill: {
            id: "skill",
            name: "Skill: Let the Storm Rage On",
            type: "skill",
            level: "1/12",
            icon: charIcon("Trailblazer", "Skill"),
            description: (i) => `
        Deals Lightning DMG equal to ${scaleValue(S.TrailblazerElationScaling.skill.main, i)} of the Trailblazer's ATK to all enemies and gains ${scaleValue(S.TrailblazerElationScaling.skill.adjacent, i, "")} point(s) of "<u>Certified Banger</u>."
      `,
        },
        ultimate: {
            id: "ultimate",
            name: "Ultimate: May the Trailblaze Fly You Starward",
            type: "ultimate",
            level: "1/12",
            icon: charIcon("Trailblazer", "Ultimate"),
            description: (i) => `
        Gains ${scaleValue(S.TrailblazerElationScaling.ultimate.main, i, "")} <u>Punchline</u> point(s). Increases the CRIT DMG of one designated ally by ${scaleValue(S.TrailblazerElationScaling.ultimate.adjacent, i)} for ${scaleValue(S.TrailblazerElationScaling.ultimate.adjacent2, i, "")} turn(s), and dispels <u>Crowd Control debuffs</u> on them.\\nIf the target has Elation Skill, they additionally gain ${scaleValue(S.TrailblazerElationScaling.ultimate.adjacent3, i, "")} point(s) of "<u>Certified Banger</u>" and immediately use their Elation Skill 1 time, taking into account a fixed amount of ${scaleValue(S.TrailblazerElationScaling.ultimate.adjacent4, i, "")} <u>Punchline</u> point(s). If the enemy target is defeated before the Elation Skill is unleashed, then the Elation Skill is instead launched on a newly entering enemy target.\\nIf the target does not have Elation Skill, their <u>action advances</u> by ${scaleValue(S.TrailblazerElationScaling.ultimate.adjacent5, i)}.
      `,
        },
        talent: {
            id: "talent",
            name: "Talent: That Smile Hits Different",
            type: "talent",
            level: "1/12",
            icon: charIcon("Trailblazer", "Talent"),
            description: (i) => `
        After using an attack, regenerates a fixed amount of ${scaleValue(S.TrailblazerElationScaling.talent.main, i, "")} Energy and gains ${scaleValue(S.TrailblazerElationScaling.talent.adjacent, i, "")} <u>Punchline</u> point(s).\\nWhen the Trailblazer holds "<u>Certified Banger</u>," their Skill additionally deals ${scaleValue(S.TrailblazerElationScaling.talent.adjacent2, i)} Lightning <u>Elation DMG</u> to all enemies. This DMG is calculated using the highest "<u>Certified Banger</u>" value among all allies.
      `,
        },
        technique: {
            id: "technique",
            name: "Technique: We Are So Back!",
            type: "technique",
            level: "1/1",
            icon: charIcon("Trailblazer", "Technique"),
            description: (i) => `
        After using Technique, randomly gains 1 of the following effects:\\nA low chance to gain "Hearty Laughter": Increases Elation by ${scaleValue(S.TrailblazerElationScaling.technique.main, i)}.\\nA high chance to gain "Irrepressible Laughter": Increases Elation by ${scaleValue(S.TrailblazerElationScaling.technique.adjacent, i)}.\\nWhen the next battle begins, increases all allies' Elation stat by the corresponding amount for ${scaleValue(S.TrailblazerElationScaling.technique.adjacent2, i, "")} turn(s).
      `,
        },
        // --- Pasivas ---
        b1: {
            id: "b1",
            name: "I Said \"Elation,\" Did I Stutter?",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "ISaidElationDidIStutter"),
            description: (i) => `
        Deals ${scaleValue(S.TrailblazerElationScaling.b1.main, i, "")} instances of DMG, with each instance dealing ${scaleValue(S.TrailblazerElationScaling.b1.adjacent, i)} Lightning <u>Elation DMG</u> to one random enemy. At last, deals ${scaleValue(S.TrailblazerElationScaling.b1.adjacent2, i)} Lightning <u>Elation DMG</u>, which is split evenly among all enemies.
      `,
        },
        b2: {
            id: "b2",
            name: "On Cloud Nine",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "OnCloudNine"),
            description: (i) => `
        For every ${scaleValue(S.TrailblazerElationScaling.b2.main, i, "")} point(s) of Trailblazer's ATK that exceeds ${scaleValue(S.TrailblazerElationScaling.b2.adjacent, i, "")}, increases this unit's Elation stat by ${scaleValue(S.TrailblazerElationScaling.b2.adjacent2, i)}, up to a maximum increase of ${scaleValue(S.TrailblazerElationScaling.b2.adjacent3, i)}.
      `,
        },
        b3: {
            id: "b3",
            name: "Screw It, We Ball",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "ScrewItWeBall"),
            description: (i) => `
        Increases this unit's CRIT Rate by ${scaleValue(S.TrailblazerElationScaling.b3.main, i)}. After using Ultimate, recovers ${scaleValue(S.TrailblazerElationScaling.b3.adjacent, i, "")} Skill Point(s) for the team.
      `,
        },
        b4: {
            id: "b4",
            name: "Aha, Sic 'Em!",
            type: "bonus",
            level: "1/1",
            icon: charIcon("Trailblazer", "AhaSicEm"),
            description: (i) => `
        After an ally target uses Elation Skill, Trailblazer additionally gains ${scaleValue(S.TrailblazerElationScaling.b4, i, "")} point(s) of "<u>Certified Banger</u>" the next time they use their Skill.
      `,
        },
        // --- Stats Nodes ---
        s1: {
                id: "s1",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s2: {
                id: "s2",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s3: {
                id: "s3",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>4%</u></b>",
            },
        s4: {
                id: "s4",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>2.7%</u></b>",
            },
        s5: {
                id: "s5",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>8%</u></b>",
            },
        s6: {
                id: "s6",
                name: "CRIT Rate Boost",
                type: "stat",
                icon: statIcon("CritRate"),
                description: "CRIT Rate Increases by: <b><u>5.3%</u></b>",
            },
        s7: {
                id: "s7",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>4%</u></b>",
            },
        s8: {
                id: "s8",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>5.3%</u></b>",
            },
        s9: {
                id: "s9",
                name: "ATK Boost",
                type: "stat",
                icon: statIcon("ATK"),
                description: "ATK Increases by: <b><u>6%</u></b>",
            },
        s10: {
                id: "s10",
                name: "CRIT DMG Boost",
                type: "stat",
                icon: statIcon("CritDMG"),
                description: "CRIT DMG Increases by: <b><u>8%</u></b>",
            },
  },
};

Characters.push(TrailblazerElation);