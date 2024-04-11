import { FC, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/model';
import { PizzaCategory, filtersSliceSelector, setCategory } from '../../../entities/filters';
import { Category } from './types';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(filtersSliceSelector.selectedCategory);

  const handleCategoryClick = useCallback(
    (category: PizzaCategory) => {
      dispatch(setCategory(category));
    },
    [dispatch],
  );

  return (
    <li
      key={category.value}
      onClick={() => {
        handleCategoryClick(category.value);
      }}
      className={selectedCategory === category.value ? 'active' : ''}>
      {category.name}
    </li>
  );
};
