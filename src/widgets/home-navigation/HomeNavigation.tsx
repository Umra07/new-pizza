import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { cartSliceSelector } from '../../entities/cart/model/slice';
import { useAppSelector } from '../../shared/model';
import { PizzaLogo } from '../../shared/ui/pizza-logo/PizzaLogo';
import { Hamburger } from '../../shared/ui/hamburger/Hamburger';
import { CartButton } from '../../shared/ui/cart-button/CartButton';
import './HomeNavigation.scss';

interface NavigationProps {
  styleClass: string;
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}

export const HomeNavigation: FC<NavigationProps> = ({ activeId, setActiveId, styleClass }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = useAppSelector(cartSliceSelector.selectItems);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const isLogoVisible = styleClass.includes('active');

  const navigation = ['pizzas', 'snacks', 'desserts', 'drinks', 'sauces'];

  const handleButtonClick = (id: string) => {
    scrollToSection(id);
    setActiveId(id);
  };

  return (
    <nav className={styleClass}>
      <div className="main-navigation__container">
        {isLogoVisible ? <PizzaLogo styles="main-navigation__logo" /> : ''}
        <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <ul
          className={
            isMenuOpen
              ? 'main-navigation__list main-navigation__list--active'
              : 'main-navigation__list'
          }>
          {navigation.map((item, i) => (
            <li key={i} className="main-navigation__item">
              <button
                className={
                  activeId === item
                    ? 'main-navigation__btn main-navigation__btn--active'
                    : 'main-navigation__btn'
                }
                onClick={() => handleButtonClick(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <CartButton />
    </nav>
  );
};
