import './base.module.css';
import styles from './App.module.css';
import Progress from './components/Progress/Progress.js'
import Cart from './components/Cart/Cart.js'



function App() {
  return (
  <div className={styles.main__container}>
  <Progress />
  <Cart />
  </div>
  );
}

export default App;
