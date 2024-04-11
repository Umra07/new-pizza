import { FC } from 'react';

interface CustomButtonProps {
  children?: JSX.Element;
  styles?: string;
  title?: string;
  onClickButton?: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({ styles, onClickButton, title, children }) => {
  return (
    <button onClick={onClickButton} className={styles}>
      {children ? children : ''}
      {title}
    </button>
  );
};
