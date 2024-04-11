import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import '../../scss/app.scss';

interface LayoutProps {
  headerSlot: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ headerSlot }) => {
  return (
    <div className="App">
      <div className="wrapper">
        {headerSlot}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
