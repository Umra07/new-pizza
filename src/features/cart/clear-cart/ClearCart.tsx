import { FC } from 'react';
import { IconWrapper } from '../../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../../assets/icons';
import { useAppDispatch, useAppSelector } from '../../../shared/model';
import { cartSliceSelector, clearCart } from '../../../entities/cart';

export const ClearCart: FC = () => {
  const dispatch = useAppDispatch();
  const totalCount = useAppSelector(cartSliceSelector.selectTotalCount);

  const onClickClearCart = () => {
    if (
      totalCount > 0 &&
      window.confirm('Are you really want to remove all items from the cart?')
    ) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart__clear">
      <IconWrapper children={icons[IconName.TRASH]} />
      <span onClick={onClickClearCart}>Clear the cart</span>
    </div>
  );
};
