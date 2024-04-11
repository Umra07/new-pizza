import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersSliceState, PizzaCategory, Sort, SortPropertyEnum } from './types';
import { RootState } from '../../../shared/model';

const initialState: FiltersSliceState = {
  selectedCategory: PizzaCategory.ALL,
  sort: { name: 'popularity', sortProperty: SortPropertyEnum.RATING_DESC },
  currentPage: 1,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<PizzaCategory>) {
      state.selectedCategory = action.payload;
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FiltersSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const filtersSliceSelector = {
  selectedCategory: (state: RootState) => state.filters.selectedCategory,
  selectedSort: (state: RootState) => state.filters.sort,
};

export const { setCategory, setSortType, setCurrentPage, setFilters } = filtersSlice.actions;
