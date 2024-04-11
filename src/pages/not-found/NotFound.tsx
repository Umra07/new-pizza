import { FC } from 'react';
import './NotFound.scss';
import { CustomButton } from '../../shared/ui/custom-button/CustomButton';
import { useNavigate } from 'react-router-dom';
import { IconWrapper } from '../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../assets/icons';

export const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="root">
      <h1>
        <span>😕</span>
        <br />
        Page is not Found
      </h1>
      <p className="description">Unfortunately, this page is not available in our store</p>
      <div className="not-found__buttons-block">
        <CustomButton
          styles="button button--outline"
          title="Back"
          onClickButton={() => navigate(-1)}>
          <IconWrapper children={icons[IconName.BACKARROW]} />
        </CustomButton>

        <CustomButton
          styles="button button--outline"
          title="Home"
          onClickButton={() => navigate('/')}>
          <IconWrapper>{icons[IconName.HOME]}</IconWrapper>
        </CustomButton>
      </div>
    </div>
  );
};
