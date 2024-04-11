import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconWrapper } from '../pizza-icon/IconWrapper';
import { IconName, icons } from '../../../assets/icons';
import { useAppSelector } from '../../model';
import { cartSliceSelector } from '../../../entities/cart/model/slice';

export const CartButton: FC = () => {
  const totalPrice = useAppSelector(cartSliceSelector.selectTotalPrice);
  const totalCount = useAppSelector(cartSliceSelector.selectTotalCount);

  return (
    <div className="header__cart">
      <Link to="/cart" className="button button--cart">
        <span>{totalPrice.toFixed(2)} $</span>
        <div className="button__delimiter"></div>
        <IconWrapper children={icons[IconName.CART]} />
        <span>{totalCount}</span>
      </Link>
    </div>
  );
};
