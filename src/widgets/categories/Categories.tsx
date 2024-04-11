import { FC } from 'react';
import { PizzaCategory } from '../../entities/filters';
import { Category } from '../../features/filters/change-category/types';
import { CategoryItem } from '../../features/filters/change-category/CategoryItem';

const Categories: FC = () => {
  const categories: Category[] = [
    { name: 'all', value: PizzaCategory.ALL },
    { name: 'meat', value: PizzaCategory.MEAT },
    { name: 'vegeterian', value: PizzaCategory.VEGE },
    { name: 'grill', value: PizzaCategory.GRILL },
    { name: 'spicy', value: PizzaCategory.SPICY },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <CategoryItem key={category.value} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
