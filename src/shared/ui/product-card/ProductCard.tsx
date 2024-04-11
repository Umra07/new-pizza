import { FC } from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  sizes?: number[];
  types?: number[];
}

export const ProductCard: FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <li className="product">
      <div className="product-card">
        <div className="product-card__top">
          <img className="product-card__image" src={image} alt="Product" />
          <h4 className="product-card__title">{title || 'Product'}</h4>
          <p className="product-card__description">{description || ''}</p>
        </div>
        <div className="product-card__bottom">
          <div className="product-card__price">{price + '$' || 'Unknown'}</div>
          <button className="button button--outline button--add">Select</button>
        </div>
      </div>
    </li>
  );
};
