import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconWrapper } from '../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../assets/icons';

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <IconWrapper children={icons[IconName.LOGO]} />
            <div>
              <h1>Pizza</h1>
              <p className="logo-text">The tastiest pizza in the universe</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
