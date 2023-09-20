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
