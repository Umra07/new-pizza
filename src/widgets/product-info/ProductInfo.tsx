import { FC, useState } from 'react';
import { Product } from '../../entities/products';
import { CartItem } from '../../entities/cart';
import { AddProductButton } from '../../features/products/add-product/AddProductButton';

interface ProductInfoProps {
  selectedProduct?: Product;
}

export const ProductInfo: FC<ProductInfoProps> = ({ selectedProduct }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const item: CartItem = {
    id: selectedProduct?.id,
    image: selectedProduct?.image,
    title: selectedProduct?.name,
    price: selectedProduct?.price,
    size: selectedProduct?.sizes ? selectedProduct?.sizes[activeSize] : undefined,
    type: selectedProduct?.types ? selectedProduct?.types[activeType] : undefined,
    count: 1,
  };

  return (
    <div className="product-modal__info">
      <h3 className="product-modal__title">{selectedProduct?.name}</h3>
      <p className="product-modal__description">{selectedProduct?.description}</p>
      {selectedProduct?.sizes && selectedProduct?.types ? (
        <div className="product-modal__selector">
          <ul>
            {selectedProduct?.types &&
              selectedProduct?.types.map((type: number, i: number) => (
                <li
                  key={type}
                  onClick={() => setActiveType(i)}
                  className={activeType === i ? 'active' : ''}>
                  {type}
                </li>
              ))}
          </ul>
          <ul>
            {selectedProduct?.sizes &&
              selectedProduct?.sizes.map((size: number, i: number) => (
                <li
                  key={size}
                  onClick={() => setActiveSize(i)}
                  className={activeSize === i ? 'active' : ''}>
                  {size} cm
                </li>
              ))}
          </ul>
        </div>
      ) : (
        ''
      )}
      <AddProductButton item={item} />
    </div>
  );
};
