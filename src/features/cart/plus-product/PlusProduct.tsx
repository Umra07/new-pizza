import { FC } from 'react';
import { useAppDispatch } from '../../../shared/model';
import { IconWrapper } from '../../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../../assets/icons';
import { plusItem } from '../../../entities/cart/model/slice';
import { CustomButton } from '../../../shared/ui/custom-button/CustomButton';

interface PlusProductProps {
  id?: string;
}

export const PlusProduct: FC<PlusProductProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    if (id) {
      dispatch(plusItem(id));
    }
  };

  return (
    <CustomButton
      onClickButton={onClickPlus}
      styles="button button--outline button--circle cart__item-count-plus">
      <IconWrapper children={icons[IconName.PLUS]} />
    </CustomButton>
  );
};
