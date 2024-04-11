export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'name',
  TITLE_ASC = '-name',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export enum PizzaCategory {
  ALL = 'all',
  MEAT = 'meat',
  VEGE = 'vegeterian',
  GRILL = 'grill',
  SPICY = 'spicy',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FiltersSliceState {
  selectedCategory: PizzaCategory;
  sort: Sort;
  currentPage: number;
}
