export type Product = {
  collection?: string;
  id?: string;
  description?: string;
  price?: number;
  image?: string;
  name?: string;
  sizes?: number[];
  types?: number[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  result: Product[];
  statuses: Record<string, Status>;
}

export type FetchPizzasParamsType = {
  category: string;
  sortBy: string;
  order: 'asc' | 'desc';
};

export type FetchProductParamsType = {
  productsCollection: string;
  productId: string;
};
