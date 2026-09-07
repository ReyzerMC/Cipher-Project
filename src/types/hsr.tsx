import type { Path, Element, World } from "../items/item/ResourcesLists";

export interface Character {

    // Info
    name: string;
    path: Path;
    element: Element;
    world: World;
    image: string;
    pfp: string;
    eidolons: Eidolon;

    // Stats
    baseATK: number;
    baseDEF: number;
    baseHP: number;
    baseSPD: number;
    aggro: number;
    dupe: number;
    traces: Record<string, TraceNodeData>;
}

export interface LightCone {
    // Info
    name: string;
    path: Path;
    description: (superimposition: number ) => string;
    image: string;

    // Stats
    baseATK: number;
    baseHP: number;
    baseDEF: number;
    dupe: number;
}

export interface Eidolon {
  e1: {
    title: string;
    desc: string;
    image: string;
  };
  e2: {
    title: string;
    desc: string;
    image: string;
  };
  e3: {
    title: string;
    desc: string;
    image: string;
  };
  e4: {
    title: string;
    desc: string;
    image: string;
  };
  e5: {
    title: string;
    desc: string;
    image: string;
  };
  e6: {
    title: string;
    desc: string;
    image: string;
  };
}

export interface Log {
  version: string;
  title: string;
  changes: string[];
}

export interface TraceNodeData {
    id: string;
    name: string;
    type: "basic" | "skill" | "ultimate" | "talent" | "technique" | "bonus" | "stat";
    level?: string;
    icon: string;
    description: string | ((levelIndex: number) => string);
}

export interface NodePosition {
    id: string;
    x: number;
    y: number;
}

export interface Connection {
    from: string;
    to: string;

    arc?: { radius: number, sweep: number };
}

export class NihilityTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 36, y: 48 },
    skill: { x: 64, y: 48 },
    ultimate: { x: 50, y: 44 },
    talent: { x: 50, y: 31 },
    technique: { x: 50, y: 61 },

    // --- PASIVAS MAYORES ---
    b1: { x: 50, y: 17 },
    b2: { x: 23, y: 38 },
    b3: { x: 77, y: 38 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 34, y: 22 },
    s2: { x: 66, y: 22 },
    s3: { x: 14, y: 58 },
    s4: { x: 24, y: 71 },
    s5: { x: 35, y: 84 },
    s6: { x: 50, y: 74 },
    s7: { x: 50, y: 85 },
    s8: { x: 65, y: 84 },
    s9: { x: 76, y: 71 },
    s10: { x: 86, y: 58 },
  };

  static readonly connections = [
    { from: "b1", to: "talent" },
    { from: "ultimate", to: "talent" },
    { from: "ultimate", to: "technique" },
    { from: "attack", to: "b2" },
    { from: "technique", to: "s6" },
    { from: "s6", to: "s7" },
    { from: "ultimate", to: "attack", arc: { radius: 21, sweep: 0 } },
    { from: "ultimate", to: "skill", arc: { radius: 21, sweep: 1 } },
    { from: "skill", to: "b3" },
    { from: "s1", to: "b1", arc: { radius: 33, sweep: 1 } },
    { from: "s2", to: "b1", arc: { radius: 33, sweep: 0 } },
    { from: "b2", to: "s3" },
    { from: "s3", to: "s4" },
    { from: "s4", to: "s5" },
    { from: "b3", to: "s10" },
    { from: "s10", to: "s9" },
    { from: "s9", to: "s8" },
  ];
}

export class DestructionTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 34, y: 48 },
    skill: { x: 66, y: 48 },
    ultimate: { x: 50, y: 48 },
    talent: { x: 50, y: 34 },
    technique: { x: 50, y: 68 },

    // --- PASIVAS MAYORES ---
    b1: { x: 50, y: 21 },
    b2: { x: 33, y: 73 },
    b3: { x: 67, y: 73 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 33, y: 15 },
    s2: { x: 50, y: 11 },
    s3: { x: 67, y: 15 },
    s4: { x: 86, y: 50 },
    s5: { x: 77, y: 62 },
    s6: { x: 77, y: 38 },
    s7: { x: 50, y: 81 },
    s8: { x: 23, y: 62 },
    s9: { x: 23, y: 38 },
    s10: { x: 14, y: 50 },
  };

  static readonly connections: Connection[] = [
    { from: "talent", to: "b1" },
    { from: "ultimate", to: "talent" },
    { from: "ultimate", to: "technique" },
    { from: "technique", to: "s7" },
    { from: "b2", to: "s8" },
    { from: "s8", to: "s10" },
    { from: "s10", to: "s9" },
    { from: "b3", to: "s5" },
    { from: "s5", to: "s4" },
    { from: "s4", to: "s6" },
    { from: "s1", to: "s2", arc: { radius: 33, sweep: 1 } },
    { from: "s2", to: "s3", arc: { radius: 33, sweep: 1 } },
    { from: "b2", to: "technique", arc: { radius: 21, sweep: 1 } },
    { from: "technique", to: "b3", arc: { radius: 21, sweep: 1 } },
    { from: "b1", to: "s2" },
    { from: "ultimate", to: "skill", arc: { radius: 21, sweep: 0 } },
    { from: "ultimate", to: "attack", arc: { radius: 21, sweep: 1 } },
  ];
}

export class ElationTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 36, y: 22 },
    skill: { x: 64, y: 22 },
    ultimate: { x: 50, y: 35 },
    talent: { x: 50, y: 52 },
    technique: { x: 50, y: 69 },

    // --- PASIVAS MAYORES ---
    b1: { x: 50, y: 15 },
    b2: { x: 50, y: 86 },
    b3: { x: 20, y: 32 },
    b4: { x: 77, y: 32 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 35, y: 64 },
    s2: { x: 29, y: 50 },
    s3: { x: 18, y: 58 },
    s4: { x: 66, y: 64 },
    s5: { x: 71, y: 50 },
    s6: { x: 82, y: 58 },
    s7: { x: 38, y: 86 },
    s8: { x: 62, y: 86 },
    s9: { x: 17, y: 44 },
    s10: { x: 83, y: 45 },
  };

  static readonly connections: Connection[] = [
    { from: "ultimate", to: "talent" },
    { from: "talent", to: "technique" },
    { from: "technique", to: "b2" },
    { from: "ultimate", to: "attack" },
    { from: "ultimate", to: "skill" },
    { from: "b3", to: "attack", arc: { radius: 33, sweep: 1 } },
    { from: "skill", to: "b4", arc: { radius: 33, sweep: 1 } },
    { from: "b3", to: "s9", arc: { radius: 33, sweep: 0 } },
    { from: "s9", to: "s3", arc: { radius: 33, sweep: 0 } },
    { from: "s3", to: "s2" },
    { from: "technique", to: "s1", arc: { radius: 33, sweep: 1 } },
    { from: "technique", to: "s4", arc: { radius: 33, sweep: 0 } },
    { from: "b4", to: "s10", arc: { radius: 33, sweep: 1 } },
    { from: "s10", to: "s6", arc: { radius: 33, sweep: 1 } },
    { from: "s6", to: "s5" },
    { from: "b2", to: "s7" },
    { from: "b2", to: "s8" },
  ];
}

export class HarmonyTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 36, y: 47 },
    skill: { x: 64, y: 47 },
    ultimate: { x: 50, y: 59 },
    talent: { x: 50, y: 43 },
    technique: { x: 50, y: 73 },

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 26 },
    b2: { x: 19, y: 55 },
    b3: { x: 81, y: 55 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 35, y: 16 },
    s2: { x: 50, y: 12 },
    s3: { x: 65, y: 16 },
    s4: { x: 24, y: 34 },
    s5: { x: 11, y: 42 },
    s6: { x: 61, y: 62 },
    s7: { x: 74, y: 68 },
    s8: { x: 50, y: 86 },
    s9: { x: 34, y: 83 },
    s10: { x: 66, y: 83 },
  };

  static readonly connections: Connection[] = [
    { from: "s2", to: "s1" },
    { from: "s2", to: "s3" },
    { from: "s2", to: "b1" },
    { from: "b2", to: "s5" },
    { from: "s5", to: "s4" },
    { from: "talent", to: "b1" },
    { from: "talent", to: "attack", arc: { radius: 33, sweep: 0 } },
    { from: "talent", to: "skill", arc: { radius: 33, sweep: 1 } },
    { from: "attack", to: "b2", arc: { radius: 60, sweep: 0 } },
    { from: "skill", to: "b3", arc: { radius: 60, sweep: 1 } },
    { from: "talent", to: "ultimate" },
    { from: "ultimate", to: "technique" },
    { from: "b3", to: "s7" },
    { from: "s7", to: "s6" },
    { from: "technique", to: "s8" },
    { from: "s8", to: "s9" },
    { from: "s8", to: "s10" }
  ];
}

export class AbundanceTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 34, y: 45 },
    skill: { x: 66, y: 45 },
    ultimate: { x: 50, y: 48 },
    talent: { x: 50, y: 31 },
    technique: { x: 50, y: 68 },

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 10 },
    b2: { x: 27, y: 72 },
    b3: { x: 73, y: 72 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 31, y: 15 },
    s2: { x: 69, y: 15 },
    s3: { x: 20, y: 60 },
    s4: { x: 13, y: 47 },
    s5: { x: 24, y: 36 },
    s6: { x: 80, y: 60 },
    s7: { x: 86, y: 47 },
    s8: { x: 75, y: 36 },
    s9: { x: 41, y: 83 },
    s10: { x: 59, y: 83 },
  };

  static readonly connections: Connection[] = [
    { from: "b1", to: "s1", arc: { radius: 45, sweep: 0 } },
    { from: "b1", to: "s2", arc: { radius: 45, sweep: 1 } },
    { from: "b1", to: "talent" },
    { from: "talent", to: "ultimate" },
    { from: "ultimate", to: "attack", arc: { radius: 33, sweep: 1 } },
    { from: "ultimate", to: "skill", arc: { radius: 33, sweep: 0 } },
    { from: "ultimate", to: "technique" },
    { from: "technique", to: "b2", arc: { radius: 45, sweep: 0 } },
    { from: "technique", to: "b3", arc: { radius: 45, sweep: 1 } },
    { from: "b2", to: "s3" },
    { from: "s3", to: "s4" },
    { from: "s4", to: "s5" },
    { from: "b3", to: "s6" },
    { from: "s6", to: "s7" },
    { from: "s7", to: "s8" },
    { from: "s10", to: "s9" },

  ];
}

export class RemembranceTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 38, y: 63 },
    skill: { x: 66, y: 63 },
    ultimate: { x: 52, y: 69 },
    talent: { x: 74, y: 47 },
    technique: { x: 29, y: 47 },

    // Habilidades Memosprite
    b4: { x: 52, y: 26 },
    b5: { x: 52, y: 45 },

    // --- PASIVAS MAYORES (B1 a B5) ---
    b1: { x: 38, y: 30 },
    b2: { x: 87, y: 47 },
    b3: { x: 52, y: 84 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 44, y: 12 },
    s2: { x: 59.5, y: 12.50 },
    s3: { x: 29, y: 18 },
    s4: { x: 18, y: 32 },
    s5: { x: 13, y: 47 },
    s6: { x: 16, y: 63 },
    s7: { x: 82, y: 32 },
    s8: { x: 84, y: 64 },
    s9: { x: 39, y: 80 },
    s10: { x: 65, y: 80 },
  };

  static readonly connections: Connection[] = [
    { from: "b4", to: "b5" },

    { from: "talent", to: "b2" },
    { from: "talent", to: "skill", arc: { radius: 20, sweep: 1} },
    { from: "skill", to: "ultimate", arc: { radius: 20, sweep: 1} },
    { from: "ultimate", to: "attack", arc: { radius: 20, sweep: 1} },
    { from: "ultimate", to: "b3" },
    { from: "attack", to: "technique", arc: { radius: 20, sweep: 1} },
    { from: "technique", to: "s5" },
    { from: "technique", to: "b1", arc: { radius: 20, sweep: 1} },
    { from: "b1", to: "s3" },

    { from: "s3", to: "s1", arc: { radius: 33, sweep: 1} },
    { from: "s1", to: "s2", arc: { radius: 53, sweep: 1} },

    { from: "b2", to: "s7", arc: { radius: 33, sweep: 0} },
    { from: "b2", to: "s8", arc: { radius: 33, sweep: 1} },

    { from: "s5", to: "s4", arc: { radius: 33, sweep: 1} },
    { from: "s5", to: "s6", arc: { radius: 33, sweep: 0} },

    { from: "b3", to: "s9", arc: { radius: 33, sweep: 1} },
    { from: "b3", to: "s10", arc: { radius: 33, sweep: 0} },
  ];
}

export class HuntTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    talent: { x: 50, y: 31 },
    attack: { x: 34, y: 44 },
    ultimate: { x: 50, y: 52 },
    skill: { x: 66, y: 44 },
    technique: { x: 50, y: 66 },

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 17 },
    b2: { x: 31, y: 68 },
    b3: { x: 69, y: 68 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 34, y: 11 },
    s2: { x: 50, y: 7 },
    s3: { x: 66, y: 11 },

    s4: { x: 21, y: 28 }, 

    s5: { x: 12, y: 44 },
    s6: { x: 21, y: 56 },

    s7: { x: 79, y: 28 },

    s8: { x: 88, y: 44 },
    s9: { x: 79, y: 56 },

    s10: { x: 50, y: 85 },
  };

  static readonly connections: Connection[] = [
    { from: "b1", to: "talent" },
    { from: "ultimate", to: "skill" },
    { from: "ultimate", to: "technique" },
    { from: "technique", to: "s10" },
    { from: "b2", to: "technique", arc: { radius: 45, sweep: 1 } },
    { from: "technique", to: "b3", arc: { radius: 45, sweep: 1 } },

    { from: "attack", to: "ultimate", arc: { radius: 21, sweep: 0 } },
    { from: "talent", to: "ultimate" },

    { from: "s1", to: "s2", arc: { radius: 33, sweep: 1 } },
    { from: "s2", to: "s3", arc: { radius: 33, sweep: 1 } },
    { from: "b1", to: "s2" },


    { from: "attack", to: "s4" },
    { from: "s5", to: "s6" },
    { from: "s6", to: "b2" },

    { from: "skill", to: "s7" },
    { from: "s8", to: "s9" },
    { from: "s9", to: "b3" },
  ];
}

export class PreservationTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    talent: { x: 50, y: 36 },
    attack: { x: 34, y: 55 },
    ultimate: { x: 50, y: 53 },
    skill: { x: 66, y: 55 },
    technique: { x: 50, y: 69 },

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 23 },
    b2: { x: 33, y: 83 },
    b3: { x: 67, y: 83 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 32, y: 14 },
    s2: { x: 50, y: 10 },
    s3: { x: 68, y: 14 },

    s4: { x: 22, y: 39 },
    s5: { x: 8, y: 52 },
    s6: { x: 19, y: 66 },

    s7: { x: 78, y: 39 },
    s8: { x: 92, y: 52 },
    s9: { x: 82, y: 67 },

    s10: { x: 50, y: 82 },
  };

  static readonly connections: Connection[] = [
    { from: "ultimate", to: "talent" },
    { from: "ultimate", to: "attack", arc: { radius: 55, sweep: 0 } },
    { from: "ultimate", to: "skill", arc: { radius: 55, sweep: 1 } },
    { from: "ultimate", to: "technique" },
    { from: "attack", to: "s4" },
    { from: "skill", to: "s7" },
    { from: "b1", to: "talent" },
    { from: "b1", to: "s2" },
    { from: "s2", to: "s1", arc: { radius: 55, sweep: 0 } },
    { from: "s2", to: "s3", arc: { radius: 55, sweep: 1 } },
    { from: "technique", to: "s10" },
    { from: "s10", to: "b2", arc: { radius: 65, sweep: 0 } },
    { from: "s10", to: "b3", arc: { radius: 65, sweep: 1 } },
    { from: "b2", to: "s6" },
    { from: "s6", to: "s5" },
    { from: "b3", to: "s9" },
    { from: "s9", to: "s8" },
  ];
};

export class EruditionTreeLayout {
  static readonly positions: Record<string, { x: number; y: number }> = {
    // --- NODOS CENTRALES ---
    attack: { x: 35, y: 50 },
    skill: { x: 65, y: 50 },
    ultimate: { x: 50, y: 50 },
    talent: { x: 50, y: 33 },
    technique: { x: 50, y: 77 },

    // --- PASIVAS MAYORES (B1, B2, B3) ---
    b1: { x: 50, y: 13 },
    b2: { x: 23, y: 50 },
    b3: { x: 77, y: 50 },

    // --- ANILLO EXTERIOR Y STAT BONUS (s1 a s10) ---
    s1: { x: 31, y: 16},
    s2: { x: 69, y: 16},
    s3: { x: 14, y: 35 },
    s4: { x: 85, y: 35 },
    s5: { x: 11, y: 50 },
    s6: { x: 88, y: 50 },
    s7: { x: 14, y: 65 },
    s8: { x: 85, y: 65 },
    s9: { x: 35, y: 74 },
    s10: { x: 65, y: 74 },
  };

  static readonly connections: Connection[] = [
    { from: "s1", to: "b1", arc: { radius: 35, sweep: 1 } },
    { from: "s2", to: "b1", arc: { radius: 35, sweep: 0 } },
    { from: "b1", to: "talent" },
    { from: "talent", to: "ultimate" },
    { from: "attack", to: "ultimate" },
    { from: "b2", to: "attack" },
    { from: "s5", to: "b2" },
    { from: "s5", to: "s3", arc: { radius: 35, sweep: 1 } },
    { from: "s5", to: "s7", arc: { radius: 35, sweep: 0 } },
    { from: "b3", to: "skill" },
    { from: "skill", to: "ultimate" },
    { from: "s6", to: "b3" },
    { from: "s6", to: "s4", arc: { radius: 35, sweep: 0 } },
    { from: "s6", to: "s8", arc: { radius: 35, sweep: 1 } },

    { from: "technique", to: "ultimate" },
    { from: "s9", to: "technique", arc: { radius: 35, sweep: 0 }  },
    { from: "s10", to: "technique", arc: { radius: 35, sweep: 1 }  },


  ];
}