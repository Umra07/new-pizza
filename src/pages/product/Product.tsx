import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductInfo } from '../../widgets/product-info/ProductInfo';
import { useAppSelector } from '../../shared/model';
import { productsSliceSelectors } from '../../entities/products';
import { IconWrapper } from '../../shared/ui/pizza-icon/IconWrapper';
import { IconName, icons } from '../../assets/icons';
import './Product.scss';

export const Product: FC = () => {
  const { productId } = useParams();
  const products = useAppSelector(productsSliceSelectors.selectProductsResult);
  const selectedProduct = products.find((item) => item.id === productId);

  return (
    <div className="product-modal__overlay" onClick={() => console.log('navigate to root')}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <img src={selectedProduct?.image} alt="" className="product-modal__img" />
        <ProductInfo selectedProduct={selectedProduct} />
      </div>
      <Link to="/">
        <button className="product-modal__close-btn">
          <IconWrapper styles="product-modal__close-icon">{icons[IconName.REMOVE]}</IconWrapper>
        </button>
      </Link>
    </div>
  );
};
