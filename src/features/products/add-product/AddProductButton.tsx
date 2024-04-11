import { FC } from 'react';
import { CartItem, addItem } from '../../../entities/cart';
import { useAppDispatch } from '../../../shared/model';

interface AddProductButtonProps {
  item: CartItem;
}

export const AddProductButton: FC<AddProductButtonProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addItem(item));
  };

  return (
    <button className="button button--outline button--add" onClick={handleClick}>
      Add for {item.price || ''}$
    </button>
  );
};
