import React, { useContext } from 'react';
import { AppContext as Context } from './../../context/context';
import './Product.scss';

const Product = (props) => {
  const [store, setStore] = useContext(Context);
  const product = props.product;
  const addToCart = (product) => {
    store.cart.push(product);
    const newStore = Object.assign({}, store);
    setStore(newStore);
  }

  return (
    <div className="product-container">
      <div className={product.type}>
        <div className="product">
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <p className={product.promoPrice ? 'promo-price' : ''}>{product.price} {product.currency}</p>
          {product.promoPrice && <div>
            <p className="promo">{product.promoPrice} {product.currency}</p>
          </div>}
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
