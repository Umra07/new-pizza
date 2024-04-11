import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product, Status } from '../../../entities/products';
import Skeleton from './Skeleton';
import { ProductCard } from '../../../shared/ui/product-card/ProductCard';
import './ProductsList.scss';

interface SelectionListProps {
  products: Product[];
  status: Status;
  title?: string;
}

export const ProductsList: FC<SelectionListProps> = ({ products, status, title }) => {
  const skeletons = [1, 2, 3, 4].map((_, i) => <Skeleton className="pizza-block" key={i} />);

  if (status === Status.LOADING) {
    return <ul className="selection-list">{skeletons}</ul>;
  } else if (status === Status.SUCCESS) {
    return (
      <ul className="products-list">
        {products.map((item, i) => (
          <Link key={i} to={`product/${item.id}`}>
            <ProductCard
              image={item.image}
              title={item.name}
              description={item.description}
              price={item.price}
              sizes={item.sizes}
              types={item.types}
            />
          </Link>
        ))}
      </ul>
    );
  } else {
    return (
      <div className="selection__error">
        <h2>
          An error has occurred <span>😕</span>
        </h2>
        <p>Unfortunately, we were unable to find any {title}. Try again in a little while.</p>
      </div>
    );
  }
};
