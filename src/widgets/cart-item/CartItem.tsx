import { FC } from 'react';
import { PlusProduct } from '../../features/cart/plus-product/PlusProduct';
import { MinusProduct } from '../../features/cart/minus-product/MinusProduct';
import { RemoveProduct } from '../../features/cart/remove-product/RemoveProduct';

type CartItemProps = {
  id?: string;
  image?: string;
  title?: string;
  price?: number;
  size?: number;
  type?: number;
  count?: number;
};

export const CartItem: FC<CartItemProps> = ({ id, image, title, price, size, type, count }) => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={image} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type} dough, {size} cm.
        </p>
      </div>
      <div className="cart__item-count">
        <MinusProduct id={id} count={count} />
        <b>{count}</b>
        <PlusProduct id={id} />
      </div>
      <div className="cart__item-price">
        <b>{price && count ? (price * count).toFixed(2) + ' $' : ''}</b>
      </div>
      <div className="cart__item-remove">
        <RemoveProduct id={id} />
      </div>
    </div>
  );
};
