import { FC } from 'react';
import { useAppDispatch } from '../../../shared/model';
import { minusItem, removeItem } from '../../../entities/cart';
import { IconWrapper } from '../../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../../assets/icons';
import { CustomButton } from '../../../shared/ui/custom-button/CustomButton';

interface MinusProductProps {
  id?: string;
  count?: number;
}

export const MinusProduct: FC<MinusProductProps> = ({ id, count }) => {
  const dispatch = useAppDispatch();

  const onClickMinus = () => {
    if (window.confirm('Are you really want to remove the item from the cart?')) {
      if (count === 1 && id) {
        dispatch(removeItem(id));
      } else {
        dispatch(minusItem(id));
      }
    }
  };
  return (
    <CustomButton
      onClickButton={onClickMinus}
      styles="button button--outline button--circle cart__item-count-minus">
      <IconWrapper children={icons[IconName.MINUS]} />
    </CustomButton>
  );
};
