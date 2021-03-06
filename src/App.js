import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from './components/Products/Products';
import CartProvider from "./store/CartProvider";
import classes from './Themes.module.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  function showCartHandler() {
    setShowCart(true);
  }

  function hideCartHandler() {
    setShowCart(false);
  }

  return (
    <div className={classes['main-theme']}>
      <CartProvider>
        {showCart && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} />
        <main>
          <Products />
        </main>
      </CartProvider>
    </div>
    
  );
}

export default App;
