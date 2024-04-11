import { FC } from 'react';

interface HamburgerProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Hamburger: FC<HamburgerProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="hamburger">
      <span
        className={`hamburger__line ${isMenuOpen ? 'hamburger__line--active' : ''}`}
        onClick={toggleMenu}
      />
    </div>
  );
};
