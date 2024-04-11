import { FC, useRef } from 'react';

import { useProducts } from './lib/useProducts';
import { useActiveNavigationButton } from './lib/useActiveNavigationButton';
import { useFixedBlock } from '../../shared/lib/useFixedBlock';

import { Outlet } from 'react-router-dom';
import background from '../../assets/pizza.jpg';
import { HomeNavigation } from '../../widgets/home-navigation/HomeNavigation';
import { ProductsContainer } from '../../widgets/products-container/ProductsContainer';

export const Home: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const [activeId, setActiveId] = useActiveNavigationButton();
  const isFixed = useFixedBlock(imageRef.current?.offsetTop);
  const { category, sort, groupedProducts } = useProducts();
  console.log(activeId);
  return (
    <div className="container">
      <HomeNavigation
        activeId={activeId}
        setActiveId={setActiveId}
        //isFixed ? 'main-navigation main-navigation--active' : `main-navigation`
        styleClass={`main-navigation`}
      />
      {isFixed ? (
        <HomeNavigation
          activeId={activeId}
          setActiveId={setActiveId}
          styleClass="main-navigation main-navigation--active"
        />
      ) : (
        ''
      )}
      <img className="pizza-img" ref={imageRef} src={background} alt="tastiest pizzas" />
      {groupedProducts.map((group) => (
        <ProductsContainer
          key={group.collection}
          id={group.collection}
          title={group.collection}
          products={group.products}
          status={group.status}
          category={category}
          sort={sort}
        />
      ))}
      <Outlet />
    </div>
  );
};
