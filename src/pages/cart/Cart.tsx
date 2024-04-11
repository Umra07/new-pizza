import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CartEmpty } from './CartEmpty';
import { ClearCart } from '../../features/cart/clear-cart/ClearCart';
import { useAppSelector } from '../../shared/model';
import { cartSliceSelector } from '../../entities/cart';
import { IconWrapper } from '../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../assets/icons';
import { CartItem } from '../../widgets/cart-item/CartItem';

export const Cart: FC = () => {
  const items = useAppSelector(cartSliceSelector.selectItems);
  const totalPrice = useAppSelector(cartSliceSelector.selectTotalPrice);
  const totalCount = useAppSelector(cartSliceSelector.selectTotalCount);

  if (!totalCount) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <IconWrapper children={icons[IconName.CART]} />
            Cart
          </h2>
          <ClearCart />
        </div>
        <div className="content__items">
          {items.map((item, i) => (
            <CartItem key={i} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {' '}
              Total pizzas: <b>{totalCount} </b>{' '}
            </span>
            <span>
              {' '}
              Order amount: <b>{totalPrice.toFixed(2)} $</b>{' '}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <IconWrapper children={icons[IconName.BACKARROW]} />
              <span>Go back</span>
            </Link>
            <div className="button pay-btn">
              <span>Pay Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
