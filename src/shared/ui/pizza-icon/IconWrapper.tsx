import { FC } from 'react';
import './IconWrapper.scss';

interface IconWrapperProps {
  styles?: string;
  children: JSX.Element;
}

export const IconWrapper: FC<IconWrapperProps> = ({ styles, children }) => {
  return <div className={styles ? `icon ${styles}` : 'icon'}>{children}</div>;
};
