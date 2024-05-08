export interface Game {
  title: string;
  MonetaryMultiplierBuildings: MonetaryBuilding[];
  MonetaryIncomeBuildings: MonetaryBuilding[];
  KnowledgeMultiplierBuildings: KnowledgeBuilding[];
  KnowledgeIncomeBuildings: KnowledgeBuilding[];
  cash: number;
  knowledge: number;
  knowledgeMult: number;
  cashMult: number;
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
