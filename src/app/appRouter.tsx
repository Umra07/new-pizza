import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../shared/ui/layout/Layout';
import { Product } from '../pages/product/Product';
import { Header } from '../widgets/header/Header';
import { Home } from '../pages/home/Home';
import { Cart } from '../pages/cart/Cart';
import { NotFound } from '../pages/not-found/NotFound';

export const appRouter = createBrowserRouter([
  {
    element: <Layout headerSlot={<Header />} />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'product/:productId',
            element: <Product />,
          },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);
