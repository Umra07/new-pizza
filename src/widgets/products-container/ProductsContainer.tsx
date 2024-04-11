import { FC } from 'react';
import './ProductsContainer.scss';
import { Product, Status } from '../../entities/products';
import { ProductsList } from './products-list/ProductsList';
import { PizzaCategory, Sort } from '../../entities/filters';
import Categories from '../categories/Categories';
import SortPopup from '../sort/Sort';

interface ProductsContainerProps {
  id: string;
  title?: string;
  status: Status;
  products: Product[];
  category: PizzaCategory;
  sort: Sort;
}

export const ProductsContainer: FC<ProductsContainerProps> = ({
  id,
  title,
  products,
  sort,
  status,
}) => {
  return (
    <section className="products" id={id}>
      {title === 'pizzas' ? (
        <div className="content__top">
          <Categories />
          <SortPopup sort={sort} />
        </div>
      ) : (
        ''
      )}
      <h2 className="products__title">{title || ''}</h2>
      <div className="products__block">
        <ProductsList products={products} status={status} title={title} />
      </div>
    </section>
  );
};
