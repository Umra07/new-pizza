import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaSliceState, Product, Status } from '../types';
import { fetchDesserts, fetchDrinks, fetchPizzas, fetchSauces, fetchSnacks } from '../';
import { RootState } from '../../../shared/model';

const initialState: PizzaSliceState = {
  result: [],
  statuses: {
    pizzasResultStatus: Status.LOADING,
    snacksResultStatus: Status.LOADING,
    dessertsResultStatus: Status.LOADING,
    drinksResultStatus: Status.LOADING,
    saucesResultStatus: Status.LOADING,
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.statuses.pizzasResultStatus = Status.LOADING;
        state.result = [...state.result];
      })
      .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.statuses.pizzasResultStatus = Status.SUCCESS;
        state.result = state.result.filter((product) => product.collection !== 'pizzas');
        state.result = [...state.result, ...action.payload];
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.statuses.pizzasResultStatus = Status.ERROR;
        state.result = [...state.result];
      })
      .addCase(fetchSnacks.pending, (state) => {
        state.statuses.snacksResultStatus = Status.LOADING;
        state.result = [...state.result];
      })
      .addCase(fetchSnacks.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.statuses.snacksResultStatus = Status.SUCCESS;
        state.result = [...state.result, ...action.payload];
      })
      .addCase(fetchSnacks.rejected, (state) => {
        state.statuses.snacksResultStatus = Status.ERROR;
        state.result = [...state.result];
      })
      .addCase(fetchDesserts.pending, (state) => {
        state.statuses.dessertsResultStatus = Status.LOADING;
        state.result = [...state.result];
      })
      .addCase(fetchDesserts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.statuses.dessertsResultStatus = Status.SUCCESS;
        state.result = [...state.result, ...action.payload];
      })
      .addCase(fetchDesserts.rejected, (state) => {
        state.statuses.dessertsResultStatus = Status.ERROR;
        state.result = [...state.result];
      })
      .addCase(fetchDrinks.pending, (state) => {
        state.statuses.drinksResultStatus = Status.LOADING;
        state.result = [...state.result];
      })
      .addCase(fetchDrinks.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.statuses.drinksResultStatus = Status.SUCCESS;
        state.result = [...state.result, ...action.payload];
      })
      .addCase(fetchDrinks.rejected, (state) => {
        state.statuses.drinksResultStatus = Status.ERROR;
        state.result = [...state.result];
      })
      .addCase(fetchSauces.pending, (state) => {
        state.statuses.saucesResultStatus = Status.LOADING;
        state.result = [...state.result];
      })
      .addCase(fetchSauces.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.statuses.saucesResultStatus = Status.SUCCESS;
        state.result = [...state.result, ...action.payload];
      })
      .addCase(fetchSauces.rejected, (state) => {
        state.statuses.saucesResultStatus = Status.ERROR;
        state.result = [...state.result];
      });
  },
});

export const productsSliceSelectors = {
  selectProductsResult: (state: RootState) => state.products.result,
  selectFetchingProductsStatuses: (state: RootState) => state.products.statuses,
};
