export const Paths = {
    Nihility: "Nihility",
    Harmony: "Harmony",
    Destruction: "Destruction",
    Preservation: "Preservation",
    Abundance: "Abundance",
    Hunt: "Hunt",
    Erudition: "Erudition",
    Remembrance: "Remembrance",
    Elation: "Elation"
} as const;

export type Path = typeof Paths[keyof typeof Paths];



export const Elements = {
    Ice: "Ice",
    Wind: "Wind",
    Fire: "Fire",
    Imaginary: "Imaginary",
    Lightning: "Lightning",
    Quantum: "Quantum",
    Physical: "Physical"
} as const;

export type Element = typeof Elements[keyof typeof Elements];

export const Worlds = {
    AstralExpress: "Astral Express",
    AnotherWorld: "Another World",
    MaskedFools: "Masked Fools",
    TheXianzhouYuque: "The Xianzhou Yuque",
    Belobog: "Belobog",
    Amphoreus: "Amphoreus",
    Planacardia: "Planacardia",
    TheCremator: "The Cremator",
    StellaronHunters: "Stellaron Hunters",
    TheXianzhouLuofu: "The Xianzhou Luofu",
    HertaSpaceStation: "Herta Space Station",
    SelfAnnihilator: "Self-Annihilator",
    GardenOfRecollection: "Garden Of Recollection",
    InterastralPeaceCorporation: "Interastral Peace Corporation",
    GalaxyRanger: "Galaxy Ranger",
    TheXianzhouZhuming: "The Xianzhou Zhuming",
    Penacony: "Penacony",
    IntelligentsiaGuild: "Intelligentsia Guild",
    TheXianzhouYaoqing: "The Xianzhou Yaoqing",
    TheKnightsOfBeauty: "The Knights of Beauty",
} as const;

export type World = typeof Worlds[keyof typeof Worlds];

export const Texts = {

    ArrowsTextENG: (rank: number): string => {
        const critRateValues = [12, 15, 18, 21, 24];
        const critRate2Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `At the start of the battle, the wearer's CRIT Rate increases by ${critRate}% for ${critRate2} turn(s).`;
    },

    CornucopiaTextENG: (rank: number): string => {
        const value1Values = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `When the wearer uses their Skill or Ultimate, their Outgoing Healing increases by ${value1}%.`;
    },

    CollapsingSkyTextENG: (rank: number): string => {
        const atkValues = [20, 25, 30, 35, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];

        return `The wearer's Basic ATK and Skill deal ${atk}% more DMG.`;
    },

    AmberTextENG: (rank: number): string => {
        const defenseValues = [16, 20, 24, 28, 32];
        const defense2Values = [50, 50, 50, 50, 50];
        const defense3Values = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];
        const defense3 = defense3Values[index];

        return `Increases the wearer's DEF by ${defense}%. If the wearer's current HP percentage is lower than ${defense2}%, increases their DEF by a further ${defense3}%.`;
    },

    VoidTextENG: (rank: number): string => {
        const effectHitRateValues = [20, 25, 30, 35, 40];
        const effectHitRate2Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const effectHitRate2 = effectHitRate2Values[index];

        return `At the start of the battle, the wearer's Effect Hit Rate increases by ${effectHitRate}% for ${effectHitRate2} turn(s).`;
    },

    ChorusTextENG: (rank: number): string => {
        const atkValues = [8, 9, 10, 11, 12];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];

        return `After entering battle, increases the ATK of all allies by ${atk}%. Abilities of the same type cannot stack.`;
    },

    DataBankTextENG: (rank: number): string => {
        const value1Values = [28, 35, 42, 49, 56];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `Increases DMG dealt by the wearer's Ultimate by ${value1}%.`;
    },

    DartingArrowTextENG: (rank: number): string => {
        const atkValues = [24, 30, 36, 42, 48];
        const atk2Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `When the wearer defeats an enemy, increases ATK by ${atk}% for ${atk2} turn(s).`;
    },

    FineFruitTextENG: (rank: number): string => {
        const value1Values = [6, 7.5, 9, 10.5, 12];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `At the start of the battle, immediately regenerates ${value1} Energy for all allies.`;
    },

    ShatteredHomeTextENG: (rank: number): string => {
        const value2Values = [20, 25, 30, 35, 40];
        const hpValues = [50, 50, 50, 50, 50];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value2 = value2Values[index];
        const hp = hpValues[index];

        return `The wearer deals ${value2}% more DMG to enemy targets whose HP percentage is greater than ${hp}%.`;
    },

    DefenseTextENG: (rank: number): string => {
        const hpValues = [18, 21, 24, 27, 30];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const hp = hpValues[index];

        return `When the wearer unleashes their Ultimate, they restore HP by ${hp}% of their Max HP.`;
    },

    LoopTextENG: (rank: number): string => {
        const value1Values = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `Increases DMG dealt from its wearer to Slowed enemies by ${value1}%.`;
    },

    MeshingCogsTextENG: (rank: number): string => {
        const attackValues = [4, 5, 6, 7, 8];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const attack = attackValues[index];

        return `After the wearer uses attacks or gets hit, additionally regenerates ${attack} Energy. This effect cannot be repeatedly triggered in a single turn.`;
    },

    PasskeyTextENG: (rank: number): string => {
        const value1Values = [8, 9, 10, 11, 12];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `After the wearer uses their Skill, additionally regenerates ${value1} Energy. This effect cannot be repeatedly triggered in a single turn.`;
    },

    AdversarialTextENG: (rank: number): string => {
        const defenseValues = [10, 12, 14, 16, 18];
        const defense2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];

        return `When the wearer defeats an enemy, increases SPD by ${defense}% for ${defense2} turn(s).`;
    },

    MultiplicationTextENG: (rank: number): string => {
        const atkValues = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];

        return `After the wearer uses their Basic ATK, their next action will be Advanced Forward by ${atk}%.`;
    },

    MutualDemiseTextENG: (rank: number): string => {
        const hpValues = [80, 80, 80, 80, 80];
        const critRateValues = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const hp = hpValues[index];
        const critRate = critRateValues[index];

        return `If the wearer's current HP percentage is lower than ${hp}%, CRIT Rate increases by ${critRate}%.`;
    },

    PioneeringTextENG: (rank: number): string => {
        const hpValues = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const hp = hpValues[index];

        return `When the wearer Breaks an enemy's Weakness, the wearer restores HP by ${hp}% of their Max HP.`;
    },

    HiddenShadowTextENG: (rank: number): string => {
        const atkValues = [60, 75, 90, 105, 120];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];

        return `After using Skill, the wearer's next Basic ATK deals Additional DMG equal to ${atk}% of ATK to the target enemy.`;
    },

    MediationTextENG: (rank: number): string => {
        const spdValues = [12, 14, 16, 18, 20];
        const spd2Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const spd2 = spd2Values[index];

        return `Upon entering battle, increases SPD of all allies by ${spd} points for ${spd2} turn(s).`;
    },

    SagacityTextENG: (rank: number): string => {
        const atkValues = [24, 30, 36, 42, 48];
        const atk2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `When the wearer uses their Ultimate, increases ATK by ${atk}% for ${atk2} turn(s).`;
    },

    ShadowburnTextENG: (rank: number): string => {
        const value1Values = [1, 1, 1, 1, 1];
        const value2Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const value2 = value2Values[index];

        return `When the wearer summons memosprite for the first time, recovers ${value1} Skill Point(s) and regenerates ${value2} Energy for this unit.`;
    },

    ReminiscenceTextENG: (rank: number): string => {
        const stacksValues = [8, 9, 10, 11, 12];
        const stacks2Values = [4, 4, 4, 4, 4];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const stacks = stacksValues[index];
        const stacks2 = stacks2Values[index];

        return `When memosprite's turn starts, the wearer and memosprite each gain 1 stack of "Commemoration." Each stack increases DMG dealt by ${stacks}%, stacking up to ${stacks2} time(s). When memosprite disappears, removes "Commemoration" from the wearer and memosprite.`;
    },

    SneeringTextENG: (rank: number): string => {
        const value1Values = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `When Aha Instant is activated, the wearer's Elation increases by ${value1}%, lasting until Aha Instant ends.`;
    },

    LingeringTearTextENG: (rank: number): string => {
        const value1Values = [10, 10, 10, 10, 10];
        const critDmgValues = [20, 25, 30, 35, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const critDmg = critDmgValues[index];

        return `When the Punchline held is ${value1} or more, the wearer's CRIT DMG increases by ${critDmg}%.`;
    },

    PostOpConversationTextENG: (rank: number): string => {
        const energyValues = [8, 10, 12, 14, 16];
        const energy2Values = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const energy = energyValues[index];
        const energy2 = energy2Values[index];

        return `Increases the wearer's Energy Regeneration Rate by ${energy}% and increases Outgoing Healing when they use their Ultimate by ${energy2}%.`;
    },

    GoodNightandSleepWellTextENG: (rank: number): string => {
        const value1Values = [12, 15, 18, 21, 24];
        const stacksValues = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const stacks = stacksValues[index];

        return `For every debuff the target enemy has, the DMG dealt by the wearer increases by ${value1}%, stacking up to ${stacks} time(s). This effect also applies to DoT.`;
    },

    DayOneofMyNewLifeTextENG: (rank: number): string => {
        const defenseValues = [16, 18, 20, 22, 24];
        const defense2Values = [8, 9, 10, 11, 12];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];

        return `Increases the wearer's DEF by ${defense}%. After entering battle, increases All-Type RES of all allies by ${defense2}%. Abilities of the same type cannot stack.`;
    },

    OnlySilenceRemainsTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const critRateValues = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critRate = critRateValues[index];

        return `Increases the wearer's ATK by ${atk}%. If there are 2 or fewer enemies on the field, increases wearer's CRIT Rate by ${critRate}%.`;
    },

    MemoriesofthePastTextENG: (rank: number): string => {
        const breakEffectValues = [28, 35, 42, 49, 56];
        const breakEffect2Values = [4, 5, 6, 7, 8];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When the wearer attacks, additionally regenerates ${breakEffect2} Energy. This effect cannot be repeatedly triggered in a single turn.`;
    },

    TheMolesWelcomeYouTextENG: (rank: number): string => {
        const attackValues = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const attack = attackValues[index];

        return `When the wearer uses Basic ATK, Skill, or Ultimate to attack enemies, the wearer gains one stack of Mischievous. Each stack increases the wearer's ATK by ${attack}%.`;
    },

    TheBirthoftheSelfTextENG: (rank: number): string => {
        const atkValues = [24, 30, 36, 42, 48];
        const atk2Values = [50, 50, 50, 50, 50];
        const atk3Values = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases DMG dealt by the wearer's Follow-Up ATKs by ${atk}%. If the current HP percentage of the enemy target is below or equal to ${atk2}%, increases DMG dealt by Follow-Up ATKs by an extra ${atk3}%.`;
    },

    SharedFeelingTextENG: (rank: number): string => {
        const value1Values = [10, 12.5, 15, 17.5, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `Increases the wearer's Outgoing Healing by ${value1}%. When using Skill, regenerates #2[f1] Energy for all allies.`;
    },

    EyesofthePreyTextENG: (rank: number): string => {
        const effectHitRateValues = [20, 25, 30, 35, 40];
        const effectHitRate2Values = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const effectHitRate2 = effectHitRate2Values[index];

        return `Increases the wearer's Effect Hit Rate by ${effectHitRate}% and increases DoT by ${effectHitRate2}%.`;
    },

    LandausChoiceTextENG: (rank: number): string => {
        const attackValues = [16, 18, 20, 22, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const attack = attackValues[index];

        return `The wearer is more likely to be attacked, and DMG taken is reduced by ${attack}%.`;
    },

    SwordplayTextENG: (rank: number): string => {
        const value1Values = [8, 10, 12, 14, 16];
        const stacksValues = [5, 5, 5, 5, 5];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const stacks = stacksValues[index];

        return `For each time the wearer hits the same target, DMG dealt increases by ${value1}%, stacking up to ${stacks} time(s). This effect will be dispelled when the wearer changes targets.`;
    },

    PlanetaryRendezvousTextENG: (rank: number): string => {
        const value1Values = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `After entering battle, if an ally deals the same DMG Type as the wearer, DMG dealt increases by ${value1}%.`;
    },

    ASecretVowTextENG: (rank: number): string => {
        const value1Values = [20, 25, 30, 35, 40];
        const value2Values = [20, 25, 30, 35, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const value2 = value2Values[index];

        return `Increases DMG dealt by the wearer by ${value1}%. The wearer also deals an extra ${value2}% of DMG to enemies whose current HP percentage is equal to or higher than the wearer's current HP percentage.`;
    },

    MaketheWorldClamorTextENG: (rank: number): string => {
        const value2Values = [20, 23, 26, 29, 32];
        const energyValues = [32, 40, 48, 56, 64];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value2 = value2Values[index];
        const energy = energyValues[index];

        return `The wearer regenerates ${value2} Energy immediately upon entering battle, and increases DMG dealt by the wearer's Ultimate by ${energy}%.`;
    },

    PerfectTimingTextENG: (rank: number): string => {
        const effectResValues = [16, 20, 24, 28, 32];
        const effectRes2Values = [33, 36, 39, 42, 45];
        const effectRes3Values = [15, 18, 21, 24, 27];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectRes = effectResValues[index];
        const effectRes2 = effectRes2Values[index];
        const effectRes3 = effectRes3Values[index];

        return `Increases the wearer's Effect RES by ${effectRes}% and increases Outgoing Healing by an amount that is equal to ${effectRes2}% of Effect RES. Outgoing Healing can be increased this way by up to ${effectRes3}%.`;
    },

    ResolutionShinesAsPearlsofSweatTextENG: (rank: number): string => {
        const value1Values = [60, 70, 80, 90, 100];
        const defenseValues = [12, 13, 14, 15, 16];
        const defense2Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];

        return `When the wearer hits an enemy and if the hit enemy is not already "Ensnared," then there is a ${value1}% base chance to "Ensnare" the hit enemy. "Ensnared" enemies' DEF decreases by ${defense}% for ${defense2} turn(s).`;
    },

    TrendoftheUniversalMarketTextENG: (rank: number): string => {
        const defenseValues = [16, 20, 24, 28, 32];
        const attackValues = [100, 105, 110, 115, 120];
        const turnsValues = [40, 50, 60, 70, 80];
        const defense2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const attack = attackValues[index];
        const turns = turnsValues[index];
        const defense2 = defense2Values[index];

        return `Increases the wearer's DEF by ${defense}%. When the wearer is attacked, there is a ${attack}% base chance to Burn the enemy. For each turn, the wearer deals DoT that is equal to ${turns}% of the wearer's DEF for ${defense2} turn(s).`;
    },

    SubscribeforMoreTextENG: (rank: number): string => {
        const atkValues = [24, 30, 36, 42, 48];
        const atk2Values = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `The wearer's Basic ATK and Skill deals ${atk}% more DMG. This effect increases by an extra ${atk2}% when the wearer's current Energy reaches its max level.`;
    },

    DanceDanceDanceTextENG: (rank: number): string => {
        const actionValues = [16, 18, 20, 22, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const action = actionValues[index];

        return `When the wearer uses their Ultimate, all allies' actions are Advanced Forward by ${action}%.`;
    },

    UndertheBlueSkyTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const critRateValues = [12, 15, 18, 21, 24];
        const critRate2Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `Increases the wearer's ATK by ${atk}%. When the wearer defeats an enemy, the wearer's CRIT Rate increases by ${critRate}% for ${critRate2} turn(s).`;
    },

    GeniusesReposeTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const critDmgValues = [24, 30, 36, 42, 48];
        const critDmg2Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's ATK by ${atk}%. When the wearer defeats an enemy, the wearer's CRIT DMG increases by ${critDmg}% for ${critDmg2} turn(s).`;
    },

    QuidProQuoTextENG: (rank: number): string => {
        const turnsValues = [8, 10, 12, 14, 16];
        const energyValues = [50, 50, 50, 50, 50];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const turns = turnsValues[index];
        const energy = energyValues[index];

        return `At the start of the wearer's turn, regenerates ${turns} Energy for a randomly chosen ally (excluding the wearer) whose current Energy is lower than ${energy}%.`;
    },

    FermataTextENG: (rank: number): string => {
        const breakEffectValues = [16, 20, 24, 28, 32];
        const breakEffect2Values = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%, and increases their DMG to enemies afflicted with Shock or Wind Shear by ${breakEffect2}%. This also applies to DoT.`;
    },

    WeAreWildfireTextENG: (rank: number): string => {
        const value2Values = [8, 10, 12, 14, 16];
        const value3Values = [5, 5, 5, 5, 5];
        const hpValues = [30, 35, 40, 45, 50];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value2 = value2Values[index];
        const value3 = value3Values[index];
        const hp = hpValues[index];

        return `At the start of the battle, the DMG dealt to all allies decreases by ${value2}% for ${value3} turn(s). At the same time, immediately restores HP to all allies equal to ${hp}% of the respective HP difference between the characters' Max HP and current HP.`;
    },

    RiverFlowsinSpringTextENG: (rank: number): string => {
        const spdValues = [8, 9, 10, 11, 12];
        const spd2Values = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const spd2 = spd2Values[index];

        return `After entering battle, increases the wearer's SPD by ${spd}% and DMG by ${spd2}%. When the wearer takes DMG, this effect will disappear. This effect will resume after the end of the wearer's next turn.`;
    },

    PastandFutureTextENG: (rank: number): string => {
        const actionValues = [16, 20, 24, 28, 32];
        const action2Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const action = actionValues[index];
        const action2 = action2Values[index];

        return `When the wearer uses their Skill, the next ally taking action (except the wearer) deals ${action}% increased DMG for ${action2} turn(s).`;
    },

    WoofWalkTimeTextENG: (rank: number): string => {
        const atkValues = [10, 12.5, 15, 17.5, 20];
        const atk2Values = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `Increases the wearer's ATK by ${atk}%, and increases their DMG to enemies afflicted with Burn or Bleed by ${atk2}%. This also applies to DoT.`;
    },

    TheSeriousnessofBreakfastTextENG: (rank: number): string => {
        const value1Values = [12, 15, 18, 21, 24];
        const atkValues = [4, 5, 6, 7, 8];
        const atk2Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `Increases the wearer's DMG by ${value1}%. For every enemy defeated by the wearer, the wearer's ATK increases by ${atk}%, stacking up to ${atk2} time(s).`;
    },

    WarmthShortensColdNightsTextENG: (rank: number): string => {
        const maxHpValues = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];

        return `Increases the wearer's Max HP by ${maxHp}%. When using Basic ATK or Skill, restores all allies' HP by an amount equal to #2[f1]% of their respective Max HP.`;
    },

    WeWillMeetAgainTextENG: (rank: number): string => {
        const atkValues = [48, 60, 72, 84, 96];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];

        return `After the wearer uses Basic ATK or Skill, deals Additional DMG equal to ${atk}% of the wearer's ATK to a random enemy that has been attacked.`;
    },

    ThisIsMeTextENG: (rank: number): string => {
        const defenseValues = [16, 20, 24, 28, 32];
        const defense2Values = [60, 75, 90, 105, 120];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];

        return `Increases the wearer's DEF by ${defense}%. Increases the DMG of the wearer when they use their Ultimate by ${defense2}% of the wearer's DEF. This effect only applies 1 time per enemy target during each use of the wearer's Ultimate.`;
    },

    ReturntoDarknessTextENG: (rank: number): string => {
        const critRateValues = [12, 15, 18, 21, 24];
        const critRate2Values = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. After a CRIT Hit, there is a ${critRate2}% fixed chance to dispel 1 buff on the target enemy. This effect can only trigger 1 time per attack.`;
    },

    CarvetheMoonWeavetheCloudsTextENG: (rank: number): string => {
        const atkValues = [10, 12.5, 15, 17.5, 20];
        const critDmgValues = [12, 15, 18, 21, 24];
        const critDmg2Values = [6, 7.5, 9, 10.5, 12];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `At the start of the battle and whenever the wearer's turn begins, one of the following effects is applied randomly: All allies' ATK increases by ${atk}%, all allies' CRIT DMG increases by ${critDmg}%, or all allies' Energy Regeneration Rate increases by ${critDmg2}%. The applied effect cannot be identical to the last effect applied, and will replace the previous effect. The applied effect will be removed when the wearer has been knocked down. Effects of the same type cannot be stacked.`;
    },

    NowheretoRunTextENG: (rank: number): string => {
        const atkValues = [24, 30, 36, 42, 48];
        const atk2Values = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `Increases the wearer's ATK by ${atk}%. Whenever the wearer defeats an enemy, they restore HP equal to ${atk2}% of their ATK.`;
    },

    TodayIsAnotherPeacefulDayTextENG: (rank: number): string => {
        const energyValues = [160, 160, 160, 160, 160];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const energy = energyValues[index];

        return `After entering battle, increases the wearer's DMG based on their Max Energy. Each point of Energy increases DMG by #1[f2]%. A max of ${energy} Energy will be taken into account for this.`;
    },

    WhatIsRealTextENG: (rank: number): string => {
        const breakEffectValues = [24, 30, 36, 42, 48];
        const maxHpValues = [800, 800, 800, 800, 800];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const maxHp = maxHpValues[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. After using Basic ATK, restores HP for the wearer by an amount equal to #2[f1]% of Max HP plus ${maxHp}.`;
    },

    DreamvilleAdventureTextENG: (rank: number): string => {
        const value1Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `After the wearer uses a certain type of ability such as Basic ATK, Skill, or Ultimate, all allies gain Childishness, which increases allies' DMG for the same type of ability as used by the wearer by ${value1}%. Childishness only takes effect for the most recent type of ability the wearer used and cannot be stacked.`;
    },

    FinalVictorTextENG: (rank: number): string => {
        const atkValues = [12, 14, 16, 18, 20];
        const stacksValues = [4, 4, 4, 4, 4];
        const critDmgValues = [8, 9, 10, 11, 12];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const stacks = stacksValues[index];
        const critDmg = critDmgValues[index];

        return `Increases the wearer's ATK by ${atk}%. When the wearer lands a CRIT hit on enemies, gains 1 stack of Good Fortune. This can stack up to ${stacks} time(s). Every stack of Good Fortune increases the wearer's CRIT DMG by ${critDmg}%. Good Fortune will be removed at the end of the wearer's turn.`;
    },

    FlamesAfarTextENG: (rank: number): string => {
        const attackValues = [25, 25, 25, 25, 25];
        const maxHpValues = [25, 25, 25, 25, 25];
        const maxHp2Values = [15, 15, 15, 15, 15];
        const maxHp3Values = [25, 31.25, 37.5, 43.75, 50];
        const maxHp4Values = [2, 2, 2, 2, 2];
        const turnsValues = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const attack = attackValues[index];
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const maxHp3 = maxHp3Values[index];
        const maxHp4 = maxHp4Values[index];
        const turns = turnsValues[index];

        return `When the wearer's cumulative HP loss during one attack exceeds ${attack}% of their Max HP, or if the amount of their own HP consumed at one time is greater than ${maxHp}% of their Max HP, immediately heals the wearer for ${maxHp2}% of their Max HP, and at the same time, increases the DMG they deal by ${maxHp3}% for ${maxHp4} turn(s). This effect can only be triggered once every ${turns} turn(s).`;
    },

    DestinysThreadsForewovenTextENG: (rank: number): string => {
        const effectResValues = [12, 14, 16, 18, 20];
        const effectRes2Values = [100, 100, 100, 100, 100];
        const defenseValues = [32, 36, 40, 44, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectRes = effectResValues[index];
        const effectRes2 = effectRes2Values[index];
        const defense = defenseValues[index];

        return `Increases the wearer's Effect RES by ${effectRes}%. For every ${effectRes2} of DEF the wearer has, increases the wearer's DMG dealt by #3[f1]%, up to a maximum DMG increase of ${defense}%.`;
    },

    TheDayTheCosmosFellTextENG: (rank: number): string => {
        const atkValues = [16, 18, 20, 22, 24];
        const critDmgValues = [20, 25, 30, 35, 40];
        const critDmg2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's ATK by ${atk}%. When the wearer uses an attack and at least 2 attacked enemies have the corresponding Weakness, the wearer's CRIT DMG increases by ${critDmg}%, lasting for ${critDmg2} turn(s).`;
    },

    ItsShowtimeTextENG: (rank: number): string => {
        const stacksValues = [6, 7, 8, 9, 10];
        const stacks2Values = [3, 3, 3, 3, 3];
        const stacks3Values = [1, 1, 1, 1, 1];
        const effectHitRateValues = [80, 80, 80, 80, 80];
        const effectHitRate2Values = [20, 24, 28, 32, 36];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const stacks = stacksValues[index];
        const stacks2 = stacks2Values[index];
        const stacks3 = stacks3Values[index];
        const effectHitRate = effectHitRateValues[index];
        const effectHitRate2 = effectHitRate2Values[index];

        return `When the wearer inflicts a debuff on an enemy, gains a stack of Trick. Every stack of Trick increases the wearer's DMG dealt by ${stacks}%, stacking up to ${stacks2} time(s). This effect lasts for ${stacks3} turn(s). When the wearer's Effect Hit Rate is ${effectHitRate}% or higher, increases ATK by ${effectHitRate2}%.`;
    },

    IndeliblePromiseTextENG: (rank: number): string => {
        const breakEffectValues = [28, 35, 42, 49, 56];
        const critRateValues = [15, 18.75, 22.5, 26.25, 30];
        const critRate2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When the wearer uses their Ultimate, increases CRIT Rate by ${critRate}%, lasting for ${critRate2} turn(s).`;
    },

    ConcertforTwoTextENG: (rank: number): string => {
        const defenseValues = [16, 20, 24, 28, 32];
        const value2Values = [4, 5, 6, 7, 8];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const value2 = value2Values[index];

        return `Increases the wearer's DEF by ${defense}%. For every on-field character that has a Shield, the DMG dealt by the wearer increases by ${value2}%.`;
    },

    BoundlessChoreoTextENG: (rank: number): string => {
        const critRateValues = [8, 10, 12, 14, 16];
        const critRate2Values = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `Increase the wearer's CRIT Rate by ${critRate}%. The wearer deals ${critRate2}% more CRIT DMG to enemies that are currently Slowed or have reduced DEF.`;
    },

    AftertheCharmonyFallTextENG: (rank: number): string => {
        const breakEffectValues = [28, 35, 42, 49, 56];
        const breakEffect2Values = [8, 10, 12, 14, 16];
        const breakEffect3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];
        const breakEffect3 = breakEffect3Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. After the wearer uses Ultimate, increases SPD by ${breakEffect2}%, lasting for ${breakEffect3} turn(s).`;
    },

    PoisedtoBloomTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const critDmgValues = [16, 20, 24, 28, 32];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];

        return `Increases the wearer's ATK by ${atk}%. Upon entering battle, if two or more characters follow the same Path, then these characters' CRIT DMG increases by ${critDmg}%. Abilities of the same type cannot stack.`;
    },

    ShadowedbyNightTextENG: (rank: number): string => {
        const breakEffectValues = [28, 35, 42, 49, 56];
        const breakEffect2Values = [8, 9, 10, 11, 12];
        const spdValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];
        const spd = spdValues[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When entering battle or after dealing Break DMG, increases SPD by ${breakEffect2}%, lasting for ${spd} turn(s). This effect can only trigger once per turn.`;
    },

    DreamsMontageTextENG: (rank: number): string => {
        const spdValues = [8, 9, 10, 11, 12];
        const energyValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const energy = energyValues[index];

        return `Increases the wearer's SPD by ${spd}%. After attacking enemy targets that are Weakness Broken, regenerates #2[f1] Energy. This effect can trigger up to ${energy} time(s) per turn.`;
    },

    VictoryInaBlinkTextENG: (rank: number): string => {
        const critDmgValues = [12, 15, 18, 21, 24];
        const value2Values = [8, 10, 12, 14, 16];
        const value3Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const value2 = value2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When the wearer's memosprite uses an ability on an ally target, increases the DMG dealt by all ally targets by ${value2}%, lasting for ${value3} turn(s).`;
    },

    GeniusesGreetingsTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const atk2Values = [20, 25, 30, 35, 40];
        const atk3Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's ATK by ${atk}%. After the wearer uses Ultimate, increases the Basic ATK DMG dealt by the wearer and their memosprite by ${atk2}%, lasting for ${atk3} turn(s).`;
    },

    SweatNowCryLessTextENG: (rank: number): string => {
        const critRateValues = [12, 14, 16, 18, 20];
        const value2Values = [24, 27, 30, 33, 36];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const value2 = value2Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When the wearer's memosprite is on the field, increases the DMG dealt by the wearer and their memosprite by ${value2}%.`;
    },

    JourneyForeverPeacefulTextENG: (rank: number): string => {
        const value1Values = [12, 15, 18, 21, 24];
        const value2Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const value2 = value2Values[index];

        return `Increases the wearer's provided Shield Effect by ${value1}%. While an ally target has a Shield, their DMG dealt increases by ${value2}%.`;
    },

    TheStorysNextPageTextENG: (rank: number): string => {
        const maxHpValues = [16, 20, 24, 28, 32];
        const attackValues = [12, 15, 18, 21, 24];
        const attack2Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const attack = attackValues[index];
        const attack2 = attack2Values[index];

        return `Increases the wearer's Max HP by ${maxHp}%. After the wearer's memosprite attacks, the Outgoing Healing of the wearer and their memosprite increases by ${attack}%, lasting for ${attack2} turn(s).`;
    },

    UntoTomorrowsMorrowTextENG: (rank: number): string => {
        const value1Values = [12, 15, 18, 21, 24];
        const hpValues = [50, 50, 50, 50, 50];
        const hp2Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const hp = hpValues[index];
        const hp2 = hp2Values[index];

        return `Increases the wearer's Outgoing Healing by ${value1}%. When an ally target's current HP percentage is greater than or equal to ${hp}%, increases the DMG dealt by ${hp2}%.`;
    },

    InPursuitoftheWindTextENG: (rank: number): string => {
        const value1Values = [16, 18, 20, 22, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];

        return `After entering combat, increases all allies' Break DMG dealt by ${value1}%. Abilities of the same type cannot stack.`;
    },

    TheFlowerRemembersTextENG: (rank: number): string => {
        const critDmgValues = [24, 28, 32, 36, 40];
        const critDmg2Values = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. The CRIT DMG dealt by the wearer's memosprite increases by ${critDmg2}%.`;
    },

    ATrailofBygoneBloodTextENG: (rank: number): string => {
        const critRateValues = [12, 14, 16, 18, 20];
        const critRate2Values = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. The Skill DMG and Ultimate DMG dealt by the wearer increase by ${critRate2}%.`;
    },

    ADreamScentedinWheatTextENG: (rank: number): string => {
        const critRateValues = [12, 14, 16, 18, 20];
        const critRate2Values = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. The Ultimate DMG and Follow-Up ATK DMG dealt by the wearer increase by ${critRate2}%.`;
    },

    HolidayThermaeEscapadeTextENG: (rank: number): string => {
        const value1Values = [16, 20, 24, 28, 32];
        const attackValues = [100, 100, 100, 100, 100];
        const attack2Values = [10, 11.5, 13, 14.5, 16];
        const attack3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const attack = attackValues[index];
        const attack2 = attack2Values[index];
        const attack3 = attack3Values[index];

        return `Increases the wearer's DMG dealt by ${value1}%. After the wearer attacks, there is a ${attack}% base chance to inflict the attacked target with Vulnerability, increasing the DMG they receive by ${attack2}% for ${attack3} turn(s). Effects of the same type cannot stack.`;
    },

    SeeYouattheEndTextENG: (rank: number): string => {
        const critDmgValues = [24, 28, 32, 36, 40];
        const critDmg2Values = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. The Skill DMG and Follow-Up ATK DMG dealt by the wearer increase by ${critDmg2}%.`;
    },

    MushyShroomysAdventuresTextENG: (rank: number): string => {
        const value1Values = [12, 14, 16, 18, 20];
        const value2Values = [6, 7, 8, 9, 10];
        const value3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const value2 = value2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's Elation by ${value1}%. When the wearer uses an Elation Skill, increases Elation DMG taken by all enemies by ${value2}% for ${value3} turn(s).`;
    },

    TodaysGoodLuckTextENG: (rank: number): string => {
        const critRateValues = [12, 14, 16, 18, 20];
        const critRate2Values = [12, 14, 16, 18, 20];
        const stacksValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const stacks = stacksValues[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When the wearer uses an Elation Skill, increases Elation by ${critRate2}%, stacking up to ${stacks} times.`;
    },

    ALittleGetawayTextENG: (rank: number): string => {
        const value1Values = [20, 25, 30, 35, 40];
        const resValues = [8, 10, 12, 14, 16];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const res = resValues[index];

        return `Increases the wearer's Elation by ${value1}%. During the use of Elation Skill by the wearer, ignores ${res}% of the target's DEF.`;
    },

    BeforetheTutorialMissionStartsTextENG: (rank: number): string => {
        const effectHitRateValues = [20, 25, 30, 35, 40];
        const effectHitRate2Values = [4, 5, 6, 7, 8];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const effectHitRate2 = effectHitRate2Values[index];

        return `Increases the wearer's Effect Hit Rate by ${effectHitRate}%. When the wearer attacks DEF-reduced enemies, regenerates ${effectHitRate2} Energy.`;
    },

    HeyOverHereTextENG: (rank: number): string => {
        const maxHpValues = [8, 9, 10, 11, 12];
        const maxHp2Values = [16, 19, 22, 25, 28];
        const hpValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const hp = hpValues[index];

        return `Increases the wearer's Max HP by ${maxHp}%. When the wearer uses their Skill, increases Outgoing Healing by ${maxHp2}%, lasting for ${hp} turn(s).`;
    },

    ForTomorrowsJourneyTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const atk2Values = [18, 21, 24, 27, 30];
        const value3Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's ATK by ${atk}%. After the wearer uses their Ultimate, increases their DMG dealt by ${atk2}%, lasting for ${value3} turn(s).`;
    },

    NinjaRecordSoundHuntTextENG: (rank: number): string => {
        const maxHpValues = [12, 15, 18, 21, 24];
        const critDmgValues = [18, 22.5, 27, 31.5, 36];
        const critDmg2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's Max HP by ${maxHp}%. When losing or restoring this unit's HP, increases CRIT DMG by ${critDmg}%, lasting for ${critDmg2} turn(s). This effect can only trigger once per turn.`;
    },

    TheGreatCosmicEnterpriseTextENG: (rank: number): string => {
        const atkValues = [8, 10, 12, 14, 16];
        const value2Values = [4, 5, 6, 7, 8];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const value2 = value2Values[index];

        return `Increases the wearer's ATK by ${atk}%. For every 1 different Weakness Type an enemy target has, increases the DMG dealt to it by the wearer by ${value2}%. Up to a max of 7 Weakness Types can be taken into account for this effect.`;
    },

    TheForeverVictualTextENG: (rank: number): string => {
        const atkValues = [16, 20, 24, 28, 32];
        const atk2Values = [8, 10, 12, 14, 16];
        const atk3Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's ATK by ${atk}%. After the wearer uses Skill, increases ATK by ${atk2}%, stacking up to ${atk3} times.`;
    },

    FlyIntoaPinkTomorrowTextENG: (rank: number): string => {
        const critDmgValues = [12, 15, 18, 21, 24];
        const value2Values = [8, 10, 12, 14, 16];
        const atkValues = [60, 70, 80, 90, 100];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const value2 = value2Values[index];
        const atk = atkValues[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When equipped by Trailblazer (Remembrance), increases all ally targets' DMG dealt by ${value2}% and increases the DMG dealt by the Enhanced Basic ATK "Together, We Script Tomorrow!" by ${atk}%.`;
    },

    TomorrowTogetherTextENG: (rank: number): string => {
        const critDmgValues = [12, 15, 18, 21, 24];
        const critDmg2Values = [8, 9, 10, 11, 12];
        const value3Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. After the wearer uses their Ultimate, increases all allies' Elation by ${critDmg2}%, lasting for ${value3} turn(s).`;
    },

    RacetotheHorizonTextENG: (rank: number): string => {
        const atkValues = [12, 15, 18, 21, 24];
        const critDmgValues = [2, 2, 2, 2, 2];
        const critDmg2Values = [10, 10, 10, 10, 10];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's ATK by ${atk}%. After the wearer uses Follow-Up ATK, increases their CRIT DMG by #2[f1]% for ${critDmg} turn(s). This effect can stack up to ${critDmg2} times.`;
    },

    NightontheMilkyWayTextENG: (rank: number): string => {
        const stacksValues = [30, 35, 40, 45, 50];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const stacks = stacksValues[index];

        return `For every enemy on the field, increases the wearer's ATK by #2[f1]%, up to 5 stacks. When an enemy is inflicted with Weakness Break, the DMG dealt by the wearer increases by ${stacks}% for 1 turn.`;
    },

    IntheNightTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const critRate2Values = [10, 10, 10, 10, 10];
        const atkValues = [6, 7, 8, 9, 10];
        const critDmgValues = [12, 14, 16, 18, 20];
        const critDmg2Values = [6, 6, 6, 6, 6];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. While the wearer is in battle, for every ${critRate2} SPD that exceeds 100, increases DMG dealt by Basic ATK and Skill by ${atk}%. At the same time, increases the CRIT DMG of Ultimate by ${critDmg}%. This effect can stack up to ${critDmg2} time(s).`;
    },

    SomethingIrreplaceableTextENG: (rank: number): string => {
        const atkValues = [24, 28, 32, 36, 40];
        const atk2Values = [8, 9, 10, 11, 12];
        const atk3Values = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's ATK by ${atk}%. When the wearer defeats an enemy or is hit, immediately restores HP equal to ${atk2}% of the wearer's ATK. At the same time, the wearer's DMG is increased by ${atk3}% until the end of their next turn. This effect cannot stack and can only trigger 1 time per turn.`;
    },

    ButtheBattleIsntOverTextENG: (rank: number): string => {
        const energyValues = [10, 12, 14, 16, 18];
        const actionValues = [30, 35, 40, 45, 50];
        const action2Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const energy = energyValues[index];
        const action = actionValues[index];
        const action2 = action2Values[index];

        return `Increases the wearer's Energy Regeneration Rate by ${energy}% and regenerates 1 Skill Point when the wearer uses their Ultimate on an ally. This effect can be triggered once after every 2 uses of the wearer's Ultimate. When the wearer uses their Skill, the next ally taking action (except the wearer) deals ${action}% more DMG for ${action2} turn(s).`;
    },

    IntheNameoftheWorldTextENG: (rank: number): string => {
        const value1Values = [24, 28, 32, 36, 40];
        const effectHitRateValues = [18, 21, 24, 27, 30];
        const effectHitRate2Values = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value1 = value1Values[index];
        const effectHitRate = effectHitRateValues[index];
        const effectHitRate2 = effectHitRate2Values[index];

        return `Increases the wearer's DMG to debuffed enemies by ${value1}%. When the wearer uses their Skill, the Effect Hit Rate for this attack increases by ${effectHitRate}%, and ATK increases by ${effectHitRate2}%.`;
    },

    MomentofVictoryTextENG: (rank: number): string => {
        const defenseValues = [24, 28, 32, 36, 40];
        const effectHitRateValues = [24, 28, 32, 36, 40];
        const attackValues = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const effectHitRate = effectHitRateValues[index];
        const attack = attackValues[index];

        return `Increases the wearer's DEF by ${defense}% and Effect Hit Rate by ${effectHitRate}%. Increases the chance for the wearer to be attacked by enemies. When the wearer is attacked, increase their DEF by an extra ${attack}% until the end of the wearer's turn.`;
    },

    PatienceIsAllYouNeedTextENG: (rank: number): string => {
        const value2Values = [24, 28, 32, 36, 40];
        const attackValues = [3, 3, 3, 3, 3];
        const turnsValues = [60, 70, 80, 90, 100];
        const atkValues = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const value2 = value2Values[index];
        const attack = attackValues[index];
        const turns = turnsValues[index];
        const atk = atkValues[index];

        return `Increases DMG dealt by the wearer by ${value2}%. After every attack launched by wearer, their SPD increases by #3[f1]%, stacking up to ${attack} times. If the wearer hits an enemy target that is not afflicted by Erode, there is a 100% base chance to inflict Erode to the target. Enemies afflicted with Erode are also considered to be Shocked and will receive Lightning DoT at the start of each turn equal to ${turns}% of the wearer's ATK, lasting for ${atk} turn(s).`;
    },

    IncessantRainTextENG: (rank: number): string => {
        const effectHitRateValues = [24, 28, 32, 36, 40];
        const effectHitRate2Values = [3, 3, 3, 3, 3];
        const critRateValues = [12, 14, 16, 18, 20];
        const critRate2Values = [100, 100, 100, 100, 100];
        const value3Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const effectHitRate2 = effectHitRate2Values[index];
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's Effect Hit Rate by ${effectHitRate}%. When the wearer deals DMG to an enemy that currently has ${effectHitRate2} or more debuffs, increases the wearer's CRIT Rate by ${critRate}%. After the wearer uses their Basic ATK, Skill, or Ultimate, there is a ${critRate2}% base chance to implant Aether Code on a random hit target that does not yet have it. Targets with Aether Code receive ${value3}% increased DMG for 1 turn.`;
    },

    EchoesoftheCoffinTextENG: (rank: number): string => {
        const atkValues = [24, 28, 32, 36, 40];
        const attackValues = [3, 3, 3, 3, 3];
        const energyValues = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const attack = attackValues[index];
        const energy = energyValues[index];

        return `Increases the wearer's ATK by ${atk}%. After the wearer uses an attack, for each different enemy target the wearer hits, regenerates #3[f1] Energy. Each attack can regenerate Energy up to ${attack} time(s) this way. After the wearer uses their Ultimate, all allies gain ${energy} SPD for 1 turn.`;
    },

    TheUnreachableSideTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const critRate2Values = [18, 21, 24, 27, 30];
        const maxHpValues = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const maxHp = maxHpValues[index];

        return `Increases the wearer's CRIT Rate by ${critRate}% and increases their Max HP by ${critRate2}%. When the wearer is attacked or consumes their own HP, their DMG increases by ${maxHp}%. This effect is removed after the wearer uses an attack.`;
    },

    BeforeDawnTextENG: (rank: number): string => {
        const critDmgValues = [36, 42, 48, 54, 60];
        const critDmg2Values = [18, 21, 24, 27, 30];
        const atkValues = [48, 56, 64, 72, 80];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const atk = atkValues[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. Increases DMG dealt by the wearer's Skill and Ultimate by ${critDmg2}%. After the wearer uses Skill or Ultimate, gains "Somnus Corpus." Upon triggering a Follow-Up ATK, consumes "Somnus Corpus," and increases DMG dealt by Follow-Up ATK by ${atk}%.`;
    },

    SheAlreadyShutHerEyesTextENG: (rank: number): string => {
        const maxHpValues = [24, 28, 32, 36, 40];
        const maxHp2Values = [12, 14, 16, 18, 20];
        const hpValues = [2, 2, 2, 2, 2];
        const hp2Values = [80, 85, 90, 95, 100];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const hp = hpValues[index];
        const hp2 = hp2Values[index];

        return `Increases the wearer's Max HP by ${maxHp}% and Energy Regeneration Rate by ${maxHp2}%. When the wearer's HP is reduced, all allies' DMG dealt increases by #2[f1]%, lasting for ${hp} turn(s). At the start of every wave, restores HP to all allies by an amount equal to ${hp2}% of their respective lost HP.`;
    },

    SleepLiketheDeadTextENG: (rank: number): string => {
        const critDmgValues = [30, 35, 40, 45, 50];
        const critRateValues = [36, 42, 48, 54, 60];
        const critRate2Values = [1, 1, 1, 1, 1];
        const critRate3Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const critRate3 = critRate3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When the wearer's Basic ATK or Skill DMG does not result in a CRIT Hit, increases their CRIT Rate by ${critRate}%, lasting for ${critRate2} turn(s). This effect can only trigger once every ${critRate3} turn(s).`;
    },

    TimeWaitsforNoOneTextENG: (rank: number): string => {
        const maxHpValues = [18, 21, 24, 27, 30];
        const maxHp2Values = [12, 14, 16, 18, 20];
        const attackValues = [36, 42, 48, 54, 60];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const attack = attackValues[index];

        return `Increases the wearer's Max HP by ${maxHp}% and Outgoing Healing by ${maxHp2}%. When the wearer heals allies, record the amount of Outgoing Healing. When any ally launches an attack, a random attacked enemy takes Additional DMG equal to ${attack}% of the recorded Outgoing Healing value. The type of this Additional DMG is of the same Type as the wearer's. This Additional DMG is not affected by other buffs, and can only occur 1 time per turn.`;
    },

    IShallBeMyOwnSwordTextENG: (rank: number): string => {
        const critDmgValues = [20, 23, 26, 29, 32];
        const attackValues = [3, 3, 3, 3, 3];
        const attack2Values = [3, 3, 3, 3, 3];
        const attack3Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const attack = attackValues[index];
        const attack2 = attack2Values[index];
        const attack3 = attack3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When a teammate gets attacked or loses HP, the wearer gains 1 stack of Eclipse, up to a max of ${attack} stack(s). Each stack of Eclipse increases the DMG of the wearer's next attack by #3[f1]%. When ${attack2} stack(s) are reached, additionally enables that attack to ignore ${attack3}% of the enemy's DEF. This effect will be removed after the wearer uses an attack.`;
    },

    BrighterThantheSunTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const atkValues = [2, 2, 2, 2, 2];
        const atk2Values = [18, 21, 24, 27, 30];
        const atk3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When the wearer uses their Basic ATK, they will gain 1 stack of Dragon's Call, lasting for ${atk} turns. Each stack of Dragon's Call increases the wearer's ATK by ${atk2}% and Energy Regeneration Rate by #5[f1]%. Dragon's Call can be stacked up to ${atk3} times.`;
    },

    WorrisomeBlissfulTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const critRate2Values = [30, 35, 40, 45, 50];
        const atkValues = [2, 2, 2, 2, 2];
        const critDmgValues = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const atk = atkValues[index];
        const critDmg = critDmgValues[index];

        return `Increase the wearer's CRIT Rate by ${critRate}% and increases DMG dealt by Follow-Up ATK by ${critRate2}%. After the wearer uses a Follow-Up ATK, inflicts the target with the "Tame" state, stacking up to ${atk} time(s). When allies hit enemy targets under the "Tame" state, each "Tame" stack increases the CRIT DMG dealt by ${critDmg}%.`;
    },

    NightofFrightTextENG: (rank: number): string => {
        const energyValues = [12, 14, 16, 18, 20];
        const hpValues = [10, 11, 12, 13, 14];
        const atkValues = [5, 5, 5, 5, 5];
        const atk2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const energy = energyValues[index];
        const hp = hpValues[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `Increases the wearer's Energy Regeneration Rate by ${energy}%. When any ally uses their Ultimate, the wearer restores HP for the ally currently with the lowest HP percentage by an amount equal to ${hp}% of the healed ally's Max HP. When the wearer provides healing for an ally, increases the healed ally's ATK by #3[f1]%. This effect can stack up to ${atk} times and lasts for ${atk2} turn(s).`;
    },

    AnInstantBeforeAGazeTextENG: (rank: number): string => {
        const critDmgValues = [36, 42, 48, 54, 60];
        const energyValues = [180, 180, 180, 180, 180];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const energy = energyValues[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When the wearer uses Ultimate, increases DMG dealt by the wearer's Ultimate based on their Max Energy. Each point of Energy increases DMG dealt by Ultimate by #2[f2]%. A max of ${energy} points of Energy will be taken into account for this.`;
    },

    PastSelfinMirrorTextENG: (rank: number): string => {
        const breakEffectValues = [60, 70, 80, 90, 100];
        const breakEffect2Values = [24, 28, 32, 36, 40];
        const value3Values = [3, 3, 3, 3, 3];
        const breakEffect3Values = [150, 150, 150, 150, 150];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];
        const value3 = value3Values[index];
        const breakEffect3 = breakEffect3Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When the wearer uses their Ultimate, increases all allies' DMG by ${breakEffect2}%, lasting for ${value3} turn(s). If the wearer's Break Effect exceeds or equals ${breakEffect3}%, 1 Skill Point will be recovered. At the start of each wave, all allies regenerate #5[f1] Energy immediately. Abilities of the same type cannot stack.`;
    },

    BaptismofPureThoughtTextENG: (rank: number): string => {
        const critDmgValues = [20, 23, 26, 29, 32];
        const critDmg2Values = [8, 9, 10, 11, 12];
        const critDmg3Values = [3, 3, 3, 3, 3];
        const attackValues = [36, 42, 48, 54, 60];
        const atkValues = [24, 28, 32, 36, 40];
        const atk2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const critDmg3 = critDmg3Values[index];
        const attack = attackValues[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. For every debuff on the enemy target, the wearer's CRIT DMG dealt against this target additionally increases by ${critDmg2}%, stacking up to ${critDmg3} times. When using Ultimate to attack the enemy target, the wearer receives the "Disputation" effect, which increases DMG dealt by ${attack}% and enables their Follow-Up ATKs to ignore ${atk}% of the target's DEF. This effect lasts for ${atk2} turns.`;
    },

    EarthlyEscapadeTextENG: (rank: number): string => {
        const critDmgValues = [32, 39, 46, 53, 60];
        const critDmg2Values = [3, 3, 3, 3, 3];
        const critRateValues = [10, 11, 12, 13, 14];
        const critRate2Values = [28, 35, 42, 49, 56];
        const stacksValues = [4, 4, 4, 4, 4];
        const stacks2Values = [4, 4, 4, 4, 4];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const stacks = stacksValues[index];
        const stacks2 = stacks2Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. At the start of the battle, the wearer gains Mask, lasting for ${critDmg2} turn(s). While the wearer has Mask, the wearer's teammates have their CRIT Rate increased by ${critRate}% and their CRIT DMG increased by ${critRate2}%. For every 1 Skill Point the wearer recovers (including Skill Points that exceed the limit), they gain 1 stack of Radiant Flame. And when the wearer has ${stacks} stacks of Radiant Flame, all the stacks are removed, and they gain Mask, lasting for ${stacks2} turn(s).`;
    },

    ReforgedRemembranceTextENG: (rank: number): string => {
        const effectHitRateValues = [40, 45, 50, 55, 60];
        const stacksValues = [4, 4, 4, 4, 4];
        const atkValues = [5, 6, 7, 8, 9];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const stacks = stacksValues[index];
        const atk = atkValues[index];

        return `Increases the wearer's Effect Hit Rate by ${effectHitRate}%. When the wearer deals DMG to an enemy inflicted with Wind Shear, Burn, Shock, or Bleed, each respectively grants 1 stack of Prophet, stacking up to ${stacks} time(s). In a single battle, only 1 stack of Prophet can be granted for each type of DoT. Every stack of Prophet increases wearer's ATK by ${atk}% and enables the DoT dealt to ignore #3[f1]% of the target's DEF.`;
    },

    InherentlyUnjustDestinyTextENG: (rank: number): string => {
        const defenseValues = [40, 46, 52, 58, 64];
        const critDmgValues = [40, 46, 52, 58, 64];
        const critDmg2Values = [2, 2, 2, 2, 2];
        const atkValues = [100, 115, 130, 145, 160];
        const attackValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const defense = defenseValues[index];
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const atk = atkValues[index];
        const attack = attackValues[index];

        return `Increases the wearer's DEF by ${defense}%. When the wearer provides a Shield to an ally, the wearer's CRIT DMG increases by ${critDmg}%, lasting for ${critDmg2} turn(s). When the wearer's Follow-Up ATK hits an enemy target, there is a ${atk}% base chance to increase the DMG taken by the attacked enemy target by #5[f1]%, lasting for ${attack} turn(s).`;
    },

    AlongthePassingShoreTextENG: (rank: number): string => {
        const critDmgValues = [36, 42, 48, 54, 60];
        const attackValues = [24, 28, 32, 36, 40];
        const value3Values = [24, 28, 32, 36, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const attack = attackValues[index];
        const value3 = value3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When the wearer hits an enemy target, inflicts Mirage Fizzle on the enemy, lasting for 1 turn. Each time the wearer attacks, this effect can only trigger 1 time on each target. The wearer deals ${attack}% increased DMG to targets afflicted with Mirage Fizzle, and the DMG dealt by Ultimate additionally increases by ${value3}%.`;
    },

    WhereaboutsShouldDreamsRestTextENG: (rank: number): string => {
        const breakEffectValues = [60, 70, 80, 90, 100];
        const value4Values = [2, 2, 2, 2, 2];
        const spdValues = [20, 20, 20, 20, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const value4 = value4Values[index];
        const spd = spdValues[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When the wearer deals Break DMG to an enemy target, inflicts Routed on the enemy, lasting for ${value4} turn(s). Targets afflicted with Routed receive #2[f1]% increased Break DMG from the wearer, and their SPD is lowered by ${spd}%. Effects of the same type cannot be stacked.`;
    },

    FlowingNightglowTextENG: (rank: number): string => {
        const energyValues = [5, 5, 5, 5, 5];
        const atkValues = [48, 60, 72, 84, 96];
        const atk2Values = [24, 28, 32, 36, 40];
        const atk3Values = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const energy = energyValues[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Every time an ally attacks, the wearer gains 1 stack of Cantillation. Each stack of Cantillation increases the wearer's Energy Regeneration Rate by #1[f1]%, stacking up to ${energy} time(s). When the wearer uses their Ultimate, removes Cantillation and gains Cadenza. Cadenza increases the Wearer's ATK by ${atk}% and increases all allies' DMG dealt by ${atk2}%, lasting for ${atk3} turn(s).`;
    },

    SailingTowardsaSecondLifeTextENG: (rank: number): string => {
        const breakEffectValues = [60, 70, 80, 90, 100];
        const breakEffect2Values = [20, 23, 26, 29, 32];
        const breakEffect3Values = [150, 150, 150, 150, 150];
        const breakEffect4Values = [12, 14, 16, 18, 20];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];
        const breakEffect3 = breakEffect3Values[index];
        const breakEffect4 = breakEffect4Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. The Break DMG dealt by the wearer ignores ${breakEffect2}% of the target's DEF. When the wearer's Break Effect in battle is at ${breakEffect3}% or greater, increases their SPD by ${breakEffect4}%.`;
    },

    YetHopeIsPricelessTextENG: (rank: number): string => {
        const critRateValues = [16, 19, 22, 25, 28];
        const critRate2Values = [20, 20, 20, 20, 20];
        const critRate3Values = [120, 120, 120, 120, 120];
        const critDmgValues = [12, 14, 16, 18, 20];
        const atkValues = [4, 4, 4, 4, 4];
        const atk2Values = [20, 24, 28, 32, 36];
        const atk3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const critRate3 = critRate3Values[index];
        const critDmg = critDmgValues[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. While the wearer is in battle, for every ${critRate2}% CRIT DMG that exceeds ${critRate3}%, the DMG dealt by Follow-Up ATK increases by ${critDmg}%. This effect can stack up to ${atk} time(s). When the battle starts or after the wearer uses their Basic ATK, enables the DMG dealt by Ultimate or Follow-Up ATK to ignore ${atk2}% of the target's DEF, lasting for ${atk3} turn(s).`;
    },

    ThoseManySpringsTextENG: (rank: number): string => {
        const effectHitRateValues = [60, 70, 80, 90, 100];
        const attackValues = [60, 60, 60, 60, 60];
        const value3Values = [10, 12, 14, 16, 18];
        const value4Values = [2, 2, 2, 2, 2];
        const turnsValues = [60, 60, 60, 60, 60];
        const value6Values = [14, 16, 18, 20, 22];
        const value42Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const attack = attackValues[index];
        const value3 = value3Values[index];
        const value4 = value4Values[index];
        const turns = turnsValues[index];
        const value6 = value6Values[index];
        const value42 = value42Values[index];

        return `Increases the wearer's Effect Hit Rate by ${effectHitRate}%. After the wearer uses Basic ATK, Skill, or Ultimate to attack an enemy target, there is a ${attack}% base chance to inflict "Unarmored" on the target. While in the Unarmored state, the enemy target receives ${value3}% increased DMG, lasting for ${value4} turn(s). If the target is under a DoT state inflicted by the wearer, there is a ${turns}% base chance to upgrade the "Unarmored" state inflicted by the wearer to the "Cornered" state, which additionally increases the DMG the enemy target receives by ${value6}%, lasting for ${value42} turn(s). During this period, the wearer cannot inflict "Unarmored" on the target.`;
    },

    DanceatSunsetTextENG: (rank: number): string => {
        const critDmgValues = [36, 42, 48, 54, 60];
        const turnsValues = [2, 2, 2, 2, 2];
        const atkValues = [36, 42, 48, 54, 60];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const turns = turnsValues[index];
        const atk = atkValues[index];

        return `Greatly increases the wearer's chance of getting attacked and increases CRIT DMG by ${critDmg}%. After the wearer uses Ultimate, receives 1 stack of "Firedance," lasting for 2 turns and stacking up to ${turns} time(s). Each stack of "Firedance" increases the DMG dealt by the wearer's Follow-Up ATK by ${atk}%.`;
    },

    IVentureForthtoHuntTextENG: (rank: number): string => {
        const atkValues = [2, 2, 2, 2, 2];
        const stacksValues = [27, 30, 33, 36, 39];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const stacks = stacksValues[index];

        return `Increases the wearer's CRIT Rate by #1[f1]%. When the wearer launches a Follow-Up ATK, gains 1 stack of "Luminflux," stacking up to ${atk} time(s). Each stack of "Luminflux" enables the Ultimate DMG dealt by the wearer to ignore ${stacks}% of the target's DEF. When the wearer's turn ends, removes 1 stack of "Luminflux."`;
    },

    ScentAloneStaysTrueTextENG: (rank: number): string => {
        const breakEffectValues = [60, 70, 80, 90, 100];
        const attackValues = [2, 2, 2, 2, 2];
        const turnsValues = [10, 12, 14, 16, 18];
        const value4Values = [8, 10, 12, 14, 16];
        const breakEffect2Values = [150, 150, 150, 150, 150];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const attack = attackValues[index];
        const turns = turnsValues[index];
        const value4 = value4Values[index];
        const breakEffect2 = breakEffect2Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. After the wearer uses Ultimate to attack enemy targets, inflicts the targets with the "Woefree" state, lasting for ${attack} turn(s). While in "Woefree," enemy targets take ${turns}% increased DMG. The effect of increasing DMG taken is additionally boosted by ${value4}% if the wearer's current Break Effect is ${breakEffect2}% or higher.`;
    },

    NinjutsuInscriptionDazzlingEvilbreakerTextENG: (rank: number): string => {
        const breakEffectValues = [60, 70, 80, 90, 100];
        const atkValues = [50, 55, 60, 65, 70];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const atk = atkValues[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When entering battle, immediately regenerates #2[f1] Energy. After the wearer uses Ultimate, obtains "Raiton." After using 2 Basic ATKs, advances the wearer's action by ${atk}% and removes "Raiton." After the wearer uses Ultimate, resets "Raiton."`;
    },

    AGroundedAscentTextENG: (rank: number): string => {
        const energyValues = [3, 3, 3, 3, 3];
        const energy2Values = [3, 3, 3, 3, 3];
        const turnsValues = [15, 17.25, 19.5, 21.75, 24];
        const stacksValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const energy = energyValues[index];
        const energy2 = energy2Values[index];
        const turns = turnsValues[index];
        const stacks = stacksValues[index];

        return `After the wearer uses Skill or Ultimate on one ally character, the wearer regenerates #1[f1] Energy and the ability's target receives 1 stack of "Hymn" for ${energy} turn(s), stacking up to ${energy2} time(s). Each stack of "Hymn" increases its holder's DMG dealt by ${turns}%. After every ${stacks} instance(s) of Skill or Ultimate the wearer uses on one ally character, recovers 1 Skill Point.`;
    },

    LongRoadLeadsHomeTextENG: (rank: number): string => {
        const breakEffectValues = [60, 70, 80, 90, 100];
        const breakEffect2Values = [100, 100, 100, 100, 100];
        const chanceValues = [18, 21, 24, 27, 30];
        const value4Values = [2, 2, 2, 2, 2];
        const turnsValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];
        const chance = chanceValues[index];
        const value4 = value4Values[index];
        const turns = turnsValues[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When an enemy target's Weakness gets broken, there is a ${breakEffect2}% base chance to inflict the "Charring" state on it, which increases its Break DMG taken by ${chance}%, lasting for ${value4} turn(s). This effect can stack ${turns} time(s).`;
    },

    TimeWovenIntoGoldTextENG: (rank: number): string => {
        const spdValues = [12, 14, 16, 18, 20];
        const critDmgValues = [6, 6, 6, 6, 6];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const critDmg = critDmgValues[index];

        return `Increases the wearer's base SPD by ${spd}. After the wearer and the wearer's memosprite attacks, the wearer gains 1 stack of "Brocade." Each stack of "Brocade" increases the wearer's and their memosprite's CRIT DMG by #4[f1]%, stacking up to ${critDmg} time(s). When reaching maximum stacks, each "Brocade" stack additionally increases Basic ATK DMG dealt by #3[f1]%.`;
    },

    IntotheUnreachableVeilTextENG: (rank: number): string => {
        const critRateValues = [12, 14, 16, 18, 20];
        const value4Values = [60, 70, 80, 90, 100];
        const value5Values = [3, 3, 3, 3, 3];
        const turnsValues = [140, 140, 140, 140, 140];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const value4 = value4Values[index];
        const value5 = value5Values[index];
        const turns = turnsValues[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When the wearer uses their Ultimate, increases the wearer's Skill DMG and Ultimate DMG dealt by ${value4}%, lasting for ${value5} turn(s). After the wearer uses their Ultimate, if this Ultimate consumed ${turns} or more Energy, recovers 1 Skill Point.`;
    },

    IfTimeWereaFlowerTextENG: (rank: number): string => {
        const critDmgValues = [36, 42, 48, 54, 60];
        const critDmg2Values = [12, 12, 12, 12, 12];
        const atkValues = [2, 2, 2, 2, 2];
        const critDmg3Values = [48, 60, 72, 84, 96];
        const critDmg4Values = [21, 21, 21, 21, 21];
        const energyValues = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const atk = atkValues[index];
        const critDmg3 = critDmg3Values[index];
        const critDmg4 = critDmg4Values[index];
        const energy = energyValues[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. After the wearer launches Follow-Up ATK, additionally regenerates ${critDmg2} Energy and gains "Presage," lasting for ${atk} turn(s). While the wearer has "Presage," all ally targets' CRIT DMG increases by ${critDmg3}%. When entering battle, the wearer regenerates ${critDmg4} Energy and gains "Presage," lasting for ${energy} turn(s).`;
    },

    FlameofBloodBlazeMyPathTextENG: (rank: number): string => {
        const maxHpValues = [18, 21, 24, 27, 30];
        const maxHp2Values = [20, 25, 30, 35, 40];
        const maxHp3Values = [30, 35, 40, 45, 50];
        const attackValues = [500, 500, 500, 500, 500];
        const hpValues = [30, 35, 40, 45, 50];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const maxHp3 = maxHp3Values[index];
        const attack = attackValues[index];
        const hp = hpValues[index];

        return `Increases the wearer's Max HP by ${maxHp}% and Incoming Healing by ${maxHp2}%. When using Skill or Ultimate, consumes HP equal to #2[f1]% of the wearer's Max HP and increases the DMG dealt by this attack by ${maxHp3}%. If this effect's consumed HP is greater than ${attack}, the DMG additionally increases by ${hp}%. If the current HP is not sufficient, this effect reduces the wearer's current HP down to 1.`;
    },

    MakeFarewellsMoreBeautifulTextENG: (rank: number): string => {
        const maxHpValues = [30, 37.5, 45, 52.5, 60];
        const value2Values = [30, 35, 40, 45, 50];
        const defenseValues = [2, 2, 2, 2, 2];
        const actionValues = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const value2 = value2Values[index];
        const defense = defenseValues[index];
        const action = actionValues[index];

        return `Increases the wearer's Max HP by ${maxHp}%. When the wearer or their memosprite loses HP during their own turn, the wearer gains "Death Flower." "Death Flower" allows the wearer and their memosprite to ignore ${value2}% of the target's DEF when dealing DMG, lasting for ${defense} turn(s). When the wearer's memosprite disappears, advances the wearer's action by ${action}%. This effect can only trigger up to 1 time, and the trigger count resets every time the wearer uses Ultimate.`;
    },

    LifeShouldBeCasttoFlamesTextENG: (rank: number): string => {
        const turnsValues = [10, 10, 10, 10, 10];
        const value3Values = [60, 70, 80, 90, 100];
        const attackValues = [12, 15, 18, 21, 24];
        const attack2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const turns = turnsValues[index];
        const value3 = value3Values[index];
        const attack = attackValues[index];
        const attack2 = attack2Values[index];

        return `When the wearer's turn starts, regenerates ${turns} Energy. If the enemy target has a Weakness implanted by the wearer, increases the wearer's DMG dealt to it by ${value3}%. When an enemy target gets attacked by the wearer, the wearer decreases the target's DEF by ${attack}%, lasting for ${attack2} turn(s). The same types of effects cannot stack.`;
    },

    LongMayRainbowsAdorntheSkyTextENG: (rank: number): string => {
        const spdValues = [18, 21, 24, 27, 30];
        const value5Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const value5 = value5Values[index];

        return `Increases the wearer's SPD by ${spd}%. When the wearer uses Basic ATK, Skill, or Ultimate, consumes all allies' HP equal to #2[f1]% of their current HP, and after the next attack of the wearer's memosprite, enables it to additionally deal 1 instance of Additional DMG equal to #6[f1]% of the total consumed HP to the attacked target, with the damage type based on the memosprite's type. Then, the total consumed HP is reset. When the wearer's memosprite uses Memosprite Skill, increases the DMG taken by all enemies by #4[f1]%, lasting for ${value5} turn(s). Effects of the same type cannot stack.`;
    },

    LiesDanceontheBreezeTextENG: (rank: number): string => {
        const spdValues = [18, 21, 24, 27, 30];
        const attackValues = [120, 120, 120, 120, 120];
        const defenseValues = [16, 18, 20, 22, 24];
        const defense2Values = [2, 2, 2, 2, 2];
        const defense3Values = [170, 170, 170, 170, 170];
        const spd2Values = [120, 120, 120, 120, 120];
        const defense4Values = [8, 9, 10, 11, 12];
        const defense5Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const attack = attackValues[index];
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];
        const defense3 = defense3Values[index];
        const spd2 = spd2Values[index];
        const defense4 = defense4Values[index];
        const defense5 = defense5Values[index];

        return `Increases the wearer's SPD by ${spd}%. After the wearer uses an attack, there is a ${attack}% base chance to inflict the "Bamboozle" state on every enemy target. While under the "Bamboozle" state, enemy targets have their DEF decreased by ${defense}% for ${defense2} turn(s). If the wearer's SPD is higher than or equal to ${defense3}, there is a ${spd2}% base chance to inflict the "Theft" state on every enemy target. While under the "Theft" state, enemy targets have their DEF decreased by ${defense4}% for ${defense5} turn(s). When "Bamboozle" or "Theft" is repeatedly inflicted, only the most recently inflicted instance takes effect.`;
    },

    ThusBurnstheDawnTextENG: (rank: number): string => {
        const spdValues = [12, 14, 16, 18, 20];
        const spd2Values = [18, 22.5, 27, 31.5, 36];
        const turnsValues = [60, 78, 96, 114, 132];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const spd2 = spd2Values[index];
        const turns = turnsValues[index];

        return `The wearer's base SPD increases by ${spd}. When dealing DMG, ignores ${spd2}% of the target's DEF. After the wearer uses Ultimate, gains "Blazing Sun," which is removed at the start of the turn. While holding "Blazing Sun," increases the wearer's DMG dealt by ${turns}%.`;
    },

    AThanklessCoronationTextENG: (rank: number): string => {
        const critDmgValues = [36, 45, 54, 63, 72];
        const critDmg2Values = [40, 50, 60, 70, 80];
        const atkValues = [300, 300, 300, 300, 300];
        const energyValues = [10, 10, 10, 10, 10];
        const atk2Values = [40, 50, 60, 70, 80];
        const atk3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const critDmg2 = critDmg2Values[index];
        const atk = atkValues[index];
        const energy = energyValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. When using Ultimate, increases the wearer's ATK by ${critDmg2}%, and if the wearer's Max Energy is greater than or equal to ${atk}, regenerates a fixed amount of Energy equal to ${energy}% of the wearer's Max Energy and once again increases the wearer's ATK by ${atk2}%, lasting for ${atk3} turns.`;
    },

    TheHellWhereIdealsBurnTextENG: (rank: number): string => {
        const critRateValues = [16, 20, 24, 28, 32];
        const critRate2Values = [6, 6, 6, 6, 6];
        const atkValues = [40, 50, 60, 70, 80];
        const atk2Values = [10, 12.5, 15, 17.5, 20];
        const atk3Values = [4, 4, 4, 4, 4];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When entering combat, if the allies' Skill Points limit is ${critRate2} or higher, increases the wearer's ATK by ${atk}%. After each use of the wearer's Skill, increases the wearer's ATK by ${atk2}%, stacking up to ${atk3} time(s).`;
    },

    WhyDoestheOceanSingTextENG: (rank: number): string => {
        const effectHitRateValues = [40, 45, 50, 55, 60];
        const value2Values = [80, 80, 80, 80, 80];
        const chanceValues = [3, 3, 3, 3, 3];
        const stacksValues = [6, 6, 6, 6, 6];
        const attackValues = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectHitRate = effectHitRateValues[index];
        const value2 = value2Values[index];
        const chance = chanceValues[index];
        const stacks = stacksValues[index];
        const attack = attackValues[index];

        return `Increases the wearer's Effect Hit Rate by ${effectHitRate}%. When an enemy target gets inflicted with a debuff by the wearer, there is a ${value2}% base chance for them to enter "Enthrallment," lasting for ${chance} turn(s). Effects of the same type cannot stack. While the target is in "Enthrallment," for every 1 debuff applied by the wearer on the target, increases the target's received DoT by #4[f1]%, stacking up to ${stacks} time(s). When the target gets attacked by an ally, increases the attacker's SPD by #6[f1]% for ${attack} turn(s). When the wearer gets knocked down, removes all "Enthrallment."`;
    },

    EpochEtchedinGoldenBloodTextENG: (rank: number): string => {
        const atkValues = [64, 80, 96, 112, 128];
        const attackValues = [1, 1, 1, 1, 1];
        const value5Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const attack = attackValues[index];
        const value5 = value5Values[index];

        return `Increases the wearer's ATK by ${atk}%. After using Ultimate to attack, recovers ${attack} Skill Point(s). After the wearer uses their Skill on one ally character, increases the Skill DMG dealt by the target by #4[f1]% for ${value5} turn(s).`;
    },

    ToEvernightsStarsTextENG: (rank: number): string => {
        const maxHpValues = [30, 37.5, 45, 52.5, 60];
        const resValues = [20, 22.5, 25, 27.5, 30];
        const defenseValues = [30, 37.5, 45, 52.5, 60];
        const value4Values = [8, 10, 12, 14, 16];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const res = resValues[index];
        const defense = defenseValues[index];
        const value4 = value4Values[index];

        return `Increases the wearer's Max HP by ${maxHp}%. When the wearer's memosprite uses an ability, the wearer gains "Noctis." While the wearer has "Noctis," the DMG dealt by all ally memosprites ignores ${res}% of the targets' DEF. Increases the DMG dealt by the wearer and their memosprite by ${defense}%. When the wearer's memosprite disappears, the wearer recovers ${value4} Energy. Effects of the same type cannot stack.`;
    },

    NeverForgetHerFlameTextENG: (rank: number): string => {
        const breakEffectValues = [60, 75, 90, 105, 120];
        const value2Values = [32, 42, 52, 62, 72];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const value2 = value2Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When entering combat, increases Break DMG dealt by the wearer and another teammate who triggered combat by ${value2}%. If there is no teammate who triggered combat, applies this effect to the wearer and the teammate with the highest Break Effect. Effects of the same type cannot be stacked. When the wearer applies Weakness to an enemy target, recovers 1 Skill Point. This effect can only trigger once. And resets this trigger count when using Ultimate.`;
    },

    ThoughWorldsApartTextENG: (rank: number): string => {
        const atkValues = [64, 80, 96, 112, 128];
        const atk2Values = [10, 12.5, 15, 17.5, 20];
        const atk3Values = [10, 12.5, 15, 17.5, 20];
        const atk4Values = [3, 3, 3, 3, 3];
        const hpValues = [24, 30, 36, 42, 48];
        const turnsValues = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];
        const atk4 = atk4Values[index];
        const hp = hpValues[index];
        const turns = turnsValues[index];

        return `Increases the wearer's ATK by ${atk}%. When the wearer uses Ultimate, restores HP equal to ${atk2}% of the wearer's ATK for all allies, and additionally restores HP equal to ${atk3}% of the wearer's ATK for the character with the lowest current HP, and grants "Redoubt" to all allies for ${atk4} turn(s). Targets with "Redoubt" deal ${hp}% increased DMG, which further increases by ${turns}% if the targets have summons.`;
    },

    ThisLoveForeverTextENG: (rank: number): string => {
        const spdValues = [18, 21, 24, 27, 30];
        const value3Values = [10, 12, 14, 16, 18];
        const critDmgValues = [16, 19, 22, 25, 28];
        const value4Values = [60, 65, 70, 75, 80];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const value3 = value3Values[index];
        const critDmg = critDmgValues[index];
        const value4 = value4Values[index];

        return `Increases the wearer's SPD by ${spd}%. When the wearer's memosprite uses Memosprite Skill on one ally, gains "Blank," which increases DMG taken by all enemies by ${value3}%. When the wearer's memosprite uses Memosprite Skill on an enemy, gains "Verse," which increases CRIT DMG of all allies by ${critDmg}%. When the wearer's memosprite has both "Blank" and "Verse," increases the effects of both "Blank" and "Verse" by ${value4}%.`;
    },

    DazzledbyaFloweryWorldTextENG: (rank: number): string => {
        const critDmgValues = [48, 56, 64, 72, 80];
        const value2Values = [1, 1, 1, 1, 1];
        const value3Values = [3, 3, 3, 3, 3];
        const defenseValues = [4, 4, 4, 4, 4];
        const defense2Values = [4, 4, 4, 4, 4];
        const turnsValues = [20, 24, 28, 32, 36];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const value2 = value2Values[index];
        const value3 = value3Values[index];
        const defense = defenseValues[index];
        const defense2 = defense2Values[index];
        const turns = turnsValues[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}%. While the wearer is on the field, for every 1 Elation character in the team, increases the Skill Point upper limit by ${value2}, up to a max increase of ${value3}. For every 1 Skill Point the wearer consumes, enables the Elation DMG dealt by this unit to ignore #6[f1]% of enemy targets' DEF, stacking up to ${defense} times. If ${defense2} or more Skill Points are consumed in the same turn, the wearer gains "Stream Promo," which increases all allies' Elation by ${turns}%. Light Cone effects of the same type cannot stack.`;
    },

    WhenSheDecidedtoSeeTextENG: (rank: number): string => {
        const spdValues = [18, 21, 24, 27, 30];
        const value4Values = [3, 3, 3, 3, 3];
        const critRateValues = [10, 11, 12, 13, 14];
        const critRate2Values = [30, 37.5, 45, 52.5, 60];
        const critDmgValues = [12, 14, 16, 18, 20];
        const value6Values = [15, 15, 15, 15, 15];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const value4 = value4Values[index];
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const critDmg = critDmgValues[index];
        const value6 = value6Values[index];

        return `Increases the wearer's SPD by ${spd}%. When the wearer enters combat or uses Ultimate on an ally target, the wearer gains "Great Fortune" for ${value4} turn(s). While the wearer holds "Great Fortune," all allies' CRIT Rate increases by ${critRate}%, CRIT DMG increases by ${critRate2}%, and the wearer's Energy Regeneration Rate increases by ${critDmg}%. At the start of each wave, the wearer regenerates a fixed amount of ${value6} Energy.`;
    },

    TheFinaleofaLieTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const critRate2Values = [4, 4, 4, 4, 4];
        const atkValues = [3, 3, 3, 3, 3];
        const atk2Values = [40, 50, 60, 70, 80];
        const atk3Values = [20, 22.5, 25, 27.5, 30];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];
        const atk3 = atk3Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. At the start of battle or for every ${critRate2} instance(s) of Follow-Up ATK the wearer uses, the wearer gains "Umbra Devourer," lasting for ${atk} turn(s). While the wearer holds "Umbra Devourer," increases ATK by ${atk2}% and increases the DMG taken by all enemies by ${atk3}%. Effects of the same type cannot stack.`;
    },

    WelcometotheCosmicCityTextENG: (rank: number): string => {
        const spdValues = [18, 21, 24, 27, 30];
        const spd2Values = [20, 24, 28, 32, 36];
        const defenseValues = [20, 25, 30, 35, 40];
        const atkValues = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const spd2 = spd2Values[index];
        const defense = defenseValues[index];
        const atk = atkValues[index];

        return `Increases the wearer's SPD by ${spd}%. The Elation DMG dealt ignores ${spd2}% of the target's DEF. When the wearer uses Ultimate on themselves, gains ${defense} point(s) of "Punchline." This effect can be triggered up to 1 time. And resets this trigger count after using Basic ATK ${atk} time(s).`;
    },

    UntiltheFlowersBloomAgainTextENG: (rank: number): string => {
        const critDmgValues = [60, 75, 90, 105, 120];
        const energyValues = [120, 120, 120, 120, 120];
        const energy2Values = [360, 360, 360, 360, 360];
        const value3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critDmg = critDmgValues[index];
        const energy = energyValues[index];
        const energy2 = energy2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's CRIT DMG by ${critDmg}% and Energy Regeneration Rate by #4[f1]%. When the wearer's Max Energy is greater than ${energy}, for every 10 points of Max Energy that exceeds this amount, further increases Energy Regeneration Rate by #6[f1]%. Up to a maximum of ${energy2} points of excess Max Energy can be taken into account. When the wearer uses Elation Skill, increases the DMG received by all enemies by #2[f1]% for ${value3} turn(s). Effects of the same type cannot stack.`;
    },

    ReforgedinHellfireTextENG: (rank: number): string => {
        const maxHpValues = [30, 37.5, 45, 52.5, 60];
        const maxHp2Values = [20, 20, 20, 20, 20];
        const attackValues = [2, 2, 2, 2, 2];
        const turnsValues = [30, 37.5, 45, 52.5, 60];
        const critDmgValues = [30, 37.5, 45, 52.5, 60];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const attack = attackValues[index];
        const turns = turnsValues[index];
        const critDmg = critDmgValues[index];

        return `Increases the wearer's Max HP by ${maxHp}%. At the start of the wearer's turn, regenerates a fixed amount of ${maxHp2} Energy. This effect can trigger 1 time each wave. After the wearer uses Skill to attack, inflicts the target with the "Purgatory" state, lasting for ${attack} turn(s). While in the "Purgatory" state, the target receives ${turns}% increased CRIT DMG and ${critDmg}% additionally increased CRIT DMG from the wearer.`;
    },

    AStarThatLightstheNightTextENG: (rank: number): string => {
        const resValues = [32, 36, 40, 44, 48];
        const defenseValues = [6, 6, 6, 6, 6];
        const energyValues = [3, 3, 3, 3, 3];
        const turnsValues = [20, 25, 30, 35, 40];
        const stacksValues = [3, 3, 3, 3, 3];
        const stacks2Values = [20, 25, 30, 35, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const res = resValues[index];
        const defense = defenseValues[index];
        const energy = energyValues[index];
        const turns = turnsValues[index];
        const stacks = stacksValues[index];
        const stacks2 = stacks2Values[index];

        return `The wearer ignores ${res}% of the target's DEF when dealing DMG. When the wearer uses Assist Skill, they regenerate ${defense} Energy and gain "Sail," lasting for 2 turns and stacking up to ${energy} time(s). Each stack of "Sail" increases Assist Skill DMG by ${turns}%. When "Sail" reaches ${stacks} stacks, each stack of "Sail" increases Ultimate DMG by ${stacks2}%.`;
    },

    FlickeringStarsTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const critRate2Values = [4, 4, 4, 4, 4];
        const turnsValues = [3, 3, 3, 3, 3];
        const turns2Values = [20, 24, 28, 32, 36];
        const defenseValues = [72, 84, 96, 108, 120];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const turns = turnsValues[index];
        const turns2 = turns2Values[index];
        const defense = defenseValues[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When any ally character consumes a total of ${critRate2} or more Skill Points in a single turn, the wearer gains "Radiant Crown," lasting for ${turns} turn(s). While the wearer holds "Radiant Crown," all allies' DMG dealt ignores ${turns2}% of the target's DEF, and the Skill DMG dealt by the wearer increases by ${defense}%. Effects of the same type cannot stack.`;
    },

    IAmAsYouBeholdTextENG: (rank: number): string => {
        const atkValues = [18, 21, 24, 27, 30];
        const energyValues = [72, 90, 108, 126, 144];
        const value4Values = [3, 3, 3, 3, 3];
        const critDmgValues = [24, 30, 36, 42, 48];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const energy = energyValues[index];
        const value4 = value4Values[index];
        const critDmg = critDmgValues[index];

        return `Increases the wearer's ATK by ${atk}% and Energy Regeneration Rate by #2[f1]%. When the wearer uses Ultimate, for every 1 Energy consumed, increases the Ultimate DMG dealt this time by #3[f2]%, up to a max increase of ${energy}%. When the wearer enters combat or uses Ultimate, the wearer gains "King's Entertainment," lasting for ${value4} turn(s). While the wearer holds "King's Entertainment," increases all allies' CRIT DMG by ${critDmg}%. Effects of the same type cannot stack.`;
    },

    RiseandSingTextENG: (rank: number): string => {
        const maxHpValues = [30, 37.5, 45, 52.5, 60];
        const actionValues = [30, 32.5, 35, 37.5, 40];
        const action2Values = [2, 2, 2, 2, 2];
        const spdValues = [20, 25, 30, 35, 40];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const maxHp = maxHpValues[index];
        const action = actionValues[index];
        const action2 = action2Values[index];
        const spd = spdValues[index];

        return `Increases the wearer's Max HP by ${maxHp}%. After the wearer uses Ultimate, recovers 1 Skill Point for allies. When entering combat, advances the wearer's action by ${action}% and grants the wearer "New Melody," lasting for ${action2} turn(s). While the wearer holds "New Melody," all allies' SPD increases by ${spd}%.`;
    },

    SummerRidestheSurfTextENG: (rank: number): string => {
        const critRateValues = [18, 21, 24, 27, 30];
        const spdValues = [24, 28, 32, 36, 40];
        const value3Values = [40, 55, 70, 85, 100];
        const value4Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const spd = spdValues[index];
        const value3 = value3Values[index];
        const value4 = value4Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%. When the wearer uses Elation Skill, gains "Updraft," which increases the wearer's SPD by ${spd}%. If the Elation Skill used is different from the one used last time, additionally gains "Uptrend," which increases the wearer's Elation by ${value3}%. When every wave starts or after the wearer uses Elation Skill ${value4} time(s), recovers 1 Skill Point.`;
    },

    OntheFallofanAeonTextENG: (rank: number): string => {
        const attackValues = [8, 10, 12, 14, 16];
        const attack2Values = [4, 4, 4, 4, 4];
        const stacksValues = [12, 15, 18, 21, 24];
        const value4Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const attack = attackValues[index];
        const attack2 = attack2Values[index];
        const stacks = stacksValues[index];
        const value4 = value4Values[index];

        return `When the wearer attacks, increases their ATK by ${attack}% in this battle. This effect can stack up to ${attack2} time(s). After the wearer breaks an enemy's Weakness, increases DMG dealt by ${stacks}%, lasting for ${value4} turn(s).`;
    },

    CruisingintheStellarSeaTextENG: (rank: number): string => {
        const critRateValues = [8, 10, 12, 14, 16];
        const critRate2Values = [50, 50, 50, 50, 50];
        const critRate3Values = [8, 10, 12, 14, 16];
        const atkValues = [20, 25, 30, 35, 40];
        const atk2Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const critRate = critRateValues[index];
        const critRate2 = critRate2Values[index];
        const critRate3 = critRate3Values[index];
        const atk = atkValues[index];
        const atk2 = atk2Values[index];

        return `Increases the wearer's CRIT Rate by ${critRate}%, and increases their CRIT Rate against enemies with HP percentage ${critRate2}% or less by an extra ${critRate3}%. When the wearer defeats an enemy, their ATK is increased by ${atk}% for ${atk2} turn(s).`;
    },

    TextureofMemoriesTextENG: (rank: number): string => {
        const effectResValues = [8, 10, 12, 14, 16];
        const effectRes2Values = [16, 20, 24, 28, 32];
        const maxHpValues = [2, 2, 2, 2, 2];
        const maxHp2Values = [3, 3, 3, 3, 3];
        const attackValues = [12, 15, 18, 21, 24];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const effectRes = effectResValues[index];
        const effectRes2 = effectRes2Values[index];
        const maxHp = maxHpValues[index];
        const maxHp2 = maxHp2Values[index];
        const attack = attackValues[index];

        return `Increases the wearer's Effect RES by ${effectRes}%. If the wearer is attacked and has no Shield, they gain a Shield equal to ${effectRes2}% of their Max HP for ${maxHp} turn(s). This effect can only be triggered once every ${maxHp2} turn(s). If the wearer has a Shield when attacked, the DMG they receive decreases by ${attack}%.`;
    },

    SolitaryHealingTextENG: (rank: number): string => {
        const breakEffectValues = [20, 25, 30, 35, 40];
        const breakEffect2Values = [24, 30, 36, 42, 48];
        const value3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const breakEffect = breakEffectValues[index];
        const breakEffect2 = breakEffect2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's Break Effect by ${breakEffect}%. When the wearer uses their Ultimate, increases DoT dealt by the wearer by ${breakEffect2}%, lasting for ${value3} turn(s). When a target enemy suffering from DoT imposed by the wearer is defeated, regenerates #4[f1] Energy for the wearer.`;
    },

    EternalCalculusTextENG: (rank: number): string => {
        const atkValues = [8, 9, 10, 11, 12];
        const attackValues = [4, 5, 6, 7, 8];
        const attack2Values = [3, 3, 3, 3, 3];
        const attack3Values = [8, 10, 12, 14, 16];
        const spdValues = [1, 1, 1, 1, 1];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const attack = attackValues[index];
        const attack2 = attack2Values[index];
        const attack3 = attack3Values[index];
        const spd = spdValues[index];

        return `Increases the wearer's ATK by ${atk}%. After using an attack, for each enemy target hit, additionally increases ATK by ${attack}%. This effect can stack up to 5 times and last until the next attack. If there are ${attack2} or more enemy targets hit, this unit's SPD increases by ${attack3}%, lasting for ${spd} turn(s).`;
    },

    MemorysCurtainNeverFallsTextENG: (rank: number): string => {
        const spdValues = [8, 10, 12, 14, 16];
        const value3Values = [3, 3, 3, 3, 3];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const spd = spdValues[index];
        const value3 = value3Values[index];

        return `Increases the wearer's SPD by #1[f1]%. After the wearer uses Skill, increases the DMG dealt by all allies by ${spd}%, lasting for ${value3} turn(s).`;
    },

    ElationBrimmingWithBlessingsTextENG: (rank: number): string => {
        const atkValues = [20, 25, 30, 35, 40];
        const value2Values = [12, 15, 18, 21, 24];
        const value3Values = [2, 2, 2, 2, 2];

        const index = Math.max(0, Math.min(rank - 1, 4));
        const atk = atkValues[index];
        const value2 = value2Values[index];
        const value3 = value3Values[index];

        return `Increases the wearer's ATK by ${atk}%. After the wearer uses Skill or Ultimate on one ally character, increases the target's Elation stat by ${value2}% for ${value3} turn(s).`;
    },

    ColorsforTomorrowENG: (rank: number): string => {

        const index = Math.max(0, Math.min(rank - 1, 4));

        return `<h3><b>Ligth Cone in beta</b></h3>`;
    },

} as const;

export type Text = typeof Texts[keyof typeof Texts];
