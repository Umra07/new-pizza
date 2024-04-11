import { FC } from 'react';
import { IconWrapper } from '../pizza-icon/IconWrapper';
import { IconName, icons } from '../../../assets/icons';

interface PizzaLogoProps {
  styles?: string;
}

export const PizzaLogo: FC<PizzaLogoProps> = ({ styles }) => {
  return <IconWrapper styles={styles} children={icons[IconName.LOGO]} />;
};
