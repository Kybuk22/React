import React, { useState, useContext } from 'react';
import { AppContext as Context } from './../../context/context';
import './Cart.scss';
import cartIcon from './shopping-cart-solid.svg';

const Cart = () => {
  const [store, setStore] = useContext(Context);
  const cart = store.cart;
  const [showCartState, setShowCartState] = useState(false);
  const showCart = () => {
    if (showCartState) {
      setShowCartState(false);
      return;
    }
    setShowCartState(true);
  }
  const remove  = (product) => {
    var licz=0
    store.cart = store.cart.filter(fun)
    function fun(el){
      if (el !== product){
        
        return el
      }else{
        
        if (licz===1){
          return el
        }
        licz+=1

      }
     
    }
    const newstore =Object.assign({},store)
    
    setStore(newstore);
  }
  
  var cenaall=0
  return (
    <div className="cart-container">      
      <div className="cart" onClick={showCart}>
        <img src={cartIcon} alt="icon cart"></img>
        <p className='cartnumber'>{cart.length}</p>
      </div>
      {showCartState && <div className="cart-content">
        <h2>Cart:</h2>
        {cart.map((product, index) => {
          if (product.promoPrice ===null){
            var productprice=product.price
            cenaall += productprice
          }else{
            // eslint-disable-next-line
            var productprice=product.promoPrice
            cenaall+=productprice
          }
          return <p key={index}>{product.type}:{product.name} {productprice} {product.currency} 
          <button onClick = {() => remove(product)}>X</button></p>
        })}
        <p className='Cenaall'>{cenaall} PLN</p>
        <p className='Cenaall'>{Math.round(cenaall/4.61)} EUR</p>
        <p className='Cenaall'>{Math.round(cenaall*6.64)} UAH</p>
      </div>}
    </div>
  );
};

export default Cart;
