import { SortPropertyEnum } from '../../entities/filters';

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortList: SortItem[] = [
  { name: 'popularity ↑', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'popularity ↓', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'price ↑', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'price ↓', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'alphabet(A - Z)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'alphabet(Z - A)', sortProperty: SortPropertyEnum.TITLE_ASC },
];
