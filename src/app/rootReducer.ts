import { combineReducers } from '@reduxjs/toolkit';
import { cartSlice } from '../entities/cart';
import { filtersSlice } from '../entities/filters';
import { productsSlice } from '../entities/products';

export const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
});
