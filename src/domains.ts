<<<<<<< Updated upstream
export interface Game {
  title: string;
  MonetaryMultiplierBuildings: MonetaryBuilding[];
  MonetaryIncomeBuildings: MonetaryBuilding[];
  KnowledgeMultiplierBuildings: KnowledgeBuilding[];
  KnowledgeIncomeBuildings: KnowledgeBuilding[];
  cash: number;
  knowledge: number;
  cashMult: number;
  knowledgeMult: number
}

export interface MonetaryBuilding {
  name: string;
  income: number;
  price: number;
  active: boolean;
}

export interface KnowledgeBuilding {
  name: string;
  income: number;
  price: number;
  active: boolean;
}

export interface BuildingProps {
  x: number;
  y: number;
  width: number;
  height: number;
  hasBeenBought?: boolean;
  src: string;
}
=======
export interface Game {
  title: string;
  tools: Tool[];
  cookies: number;
}

export interface Tool {
  id: number;
  multiplicator: number;
  price: number;
  active: boolean;
}
>>>>>>> Stashed changes
