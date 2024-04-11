import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, query, getDocs, orderBy, where } from 'firebase/firestore/lite';
import { firestore } from '../../../shared/api/firebase.config';
import { copyAsyncResult } from '../lib/copyAsyncResult';
import { FetchPizzasParamsType, Product } from '../types';

export const fetchPizzas = createAsyncThunk<Product[], FetchPizzasParamsType>(
  'products/fetchPizzas',
  async (params) => {
    const { category, sortBy, order } = params;
    const pizzasCol = collection(firestore, 'pizzas');
    const q = query(
      pizzasCol,
      where('category', 'array-contains', category),
      orderBy(sortBy, order),
    );
    const pizzasSnapshot = await getDocs(q);

    const result = pizzasSnapshot.docs.map((doc) => doc.data());

    // copyAsyncResult exists for changing result array types. DocumentData[] has type [string]: any
    const pizzasList = copyAsyncResult(result);

    return pizzasList;
  },
);

export const fetchSnacks = createAsyncThunk<Product[]>('products/fetchSnacks', async () => {
  const snacksCol = collection(firestore, 'snacks');
  const snacksSnapshot = await getDocs(snacksCol);
  const result = snacksSnapshot.docs.map((doc) => doc.data());

  const snacksList = copyAsyncResult(result);
  return snacksList;
});

export const fetchDesserts = createAsyncThunk<Product[]>('products/fetchDesserts', async () => {
  const dessertsCol = collection(firestore, 'desserts');
  const dessertsSnapshot = await getDocs(dessertsCol);
  const result = dessertsSnapshot.docs.map((doc) => doc.data());

  const dessertsList = copyAsyncResult(result);

  return dessertsList;
});

export const fetchDrinks = createAsyncThunk<Product[]>('products/fetchDrinks', async () => {
  const drinksCol = collection(firestore, 'drinks');
  const drinksSnapshot = await getDocs(drinksCol);
  const result = drinksSnapshot.docs.map((doc) => doc.data());

  const drinksList = copyAsyncResult(result);

  return drinksList;
});

export const fetchSauces = createAsyncThunk<Product[]>('products/fetchSauces', async () => {
  const saucesCol = collection(firestore, 'sauces');
  const saucesSnapshot = await getDocs(saucesCol);
  const result = saucesSnapshot.docs.map((doc) => doc.data());

  const saucesList = copyAsyncResult(result);

  return saucesList;
});
