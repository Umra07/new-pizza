import { FC } from 'react';
import { useAppDispatch } from '../../../shared/model';
import { IconWrapper } from '../../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../../assets/icons';
import { removeItem } from '../../../entities/cart';
import { CustomButton } from '../../../shared/ui/custom-button/CustomButton';

interface RemoveProductProps {
  id?: string;
}

export const RemoveProduct: FC<RemoveProductProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (id) {
      dispatch(removeItem(id));
    }
  };
  return (
    <CustomButton onClickButton={onClickRemove} styles="button button--outline button--circle">
      <IconWrapper styles="icon--center">{icons[IconName.REMOVE]}</IconWrapper>
    </CustomButton>
  );
};
