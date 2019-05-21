export interface Item {
  chips: Chip[];
  title: string;
  description?: string;
  id: string;
}

export interface Chip {
  id: string;
  label: string;
  isPro: boolean;
}
