export type CartItem = {
  id?: string;
  title?: string;
  price?: number;
  image?: string;
  type?: number;
  size?: number;
  count?: number;
};

export type CartSliceState = {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
};
