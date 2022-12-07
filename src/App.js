import './base.module.css';
import styles from './App.module.css';
import Progress from './components/Progress/Progress.js'
import Cart from './components/Cart/Cart.js'
import { useState } from 'react'; 
import { CartContext, initialProducts} from './components/CartContext.js'
import { CreditCardContext, creditCardDefault} from './components/CreditCardContext.js'



function App() {
  const [products, setProducts] = useState(initialProducts);
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardDefault);
  
  return (
  <div className={styles.main__container}>
    <CreditCardContext.Provider value={{creditCardInfo, setCreditCardInfo}}>
      <CartContext.Provider value={{products, setProducts}}>
        <Progress />
        <Cart />
      </CartContext.Provider>
    </CreditCardContext.Provider> 
  </div>
  );
}

export default App;
