import { useEffect } from 'react';
import {
  fetchDesserts,
  fetchDrinks,
  fetchPizzas,
  fetchSauces,
  fetchSnacks,
  productsSliceSelectors,
} from '../../../entities/products';
import { useAppDispatch, useAppSelector } from '../../../shared/model';
import { filtersSliceSelector } from '../../../entities/filters';

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(filtersSliceSelector.selectedCategory);
  const sort = useAppSelector(filtersSliceSelector.selectedSort);

  const {
    pizzasResultStatus,
    snacksResultStatus,
    dessertsResultStatus,
    drinksResultStatus,
    saucesResultStatus,
  } = useAppSelector(productsSliceSelectors.selectFetchingProductsStatuses);
  const products = useAppSelector(productsSliceSelectors.selectProductsResult);
  const sortType = sort.sortProperty;

  useEffect(() => {
    const sortBy = sortType.replace('-', '');
    const order: 'asc' | 'desc' = sortType.includes('-') ? 'desc' : 'asc';

    dispatch(fetchPizzas({ category, sortBy, order }));
  }, [category, sort.sortProperty, sortType, dispatch]);

  // prevent additional requests
  useEffect(() => {
    dispatch(fetchSnacks());
    dispatch(fetchDesserts());
    dispatch(fetchDrinks());
    dispatch(fetchSauces());
  }, [dispatch]);

  const groupedProducts = [
    {
      collection: 'pizzas',
      products: products.filter((item) => item.collection === 'pizzas'),
      status: pizzasResultStatus,
    },
    {
      collection: 'snacks',
      products: products.filter((item) => item.collection === 'snacks'),
      status: snacksResultStatus,
    },
    {
      collection: 'desserts',
      products: products.filter((item) => item.collection === 'desserts'),
      status: dessertsResultStatus,
    },
    {
      collection: 'drinks',
      products: products.filter((item) => item.collection === 'drinks'),
      status: drinksResultStatus,
    },
    {
      collection: 'sauces',
      products: products.filter((item) => item.collection === 'sauces'),
      status: saucesResultStatus,
    },
  ];

  return { category, sort, groupedProducts };
};
