import { DocumentData } from 'firebase/firestore/lite';
import { Product } from '../types';

export const copyAsyncResult = (result: DocumentData[]): Product[] => {
  const copiedList: Product[] = [];

  for (let i = 0; i < result.length; i++) {
    copiedList.push(result[i]);
  }
  return copiedList;
};
