import './Header.scss';

import Cart from './../cart';

const Header = () => {
  return (
    <div className="header-container">
      <h2>MyShop</h2>
      <Cart></Cart>
    </div>
    
  );
};

export default Header;
