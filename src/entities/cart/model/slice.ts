import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';
import { RootState } from '../../../shared/model';

const initialState: CartSliceState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem?.count) {
        findItem.count++;
      } else {
        state.items.push(action.payload);
      }

      state.totalCount++;
      state.totalPrice = state.items.reduce((sum, item) => {
        if (item.price && item.count) {
          return sum + item.price * item.count;
        }

        return 0;
      }, 0);
    },
    plusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem && findItem.count) {
        findItem.count++;
      }

      state.totalCount++;
      state.totalPrice = state.items.reduce((sum, item) => {
        if (item.price && item.count) {
          return sum + item.price * item.count;
        }

        return 0;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string | undefined>) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem?.count === 1) {
        state.items.filter((item) => item.id !== findItem.id);
      }

      if (findItem && findItem.count && findItem.price) {
        findItem.count--;
        state.totalPrice = state.totalPrice - findItem.price;
        state.totalCount--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem?.price && findItem.count) {
        state.totalCount = state.totalCount - findItem?.count;
        state.totalPrice = state.totalPrice - findItem.price * findItem.count;
      }

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartSliceSelector = {
  selectItems: (state: RootState) => state.cart.items,
  selectTotalCount: (state: RootState) => state.cart.totalCount,
  selectTotalPrice: (state: RootState) => state.cart.totalPrice,
};

export const { addItem, plusItem, minusItem, removeItem, clearCart } = cartSlice.actions;
