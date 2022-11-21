import './base.module.css';
import styles from './App.module.css';
import ProgressStep from './components/Progress/ProgressStep.js'
import Step1 from './components/Progress/Step1.js'
import Cart from './components/Cart/Cart.js'

// 此階段先渲染 Step1畫面，以下Step2 & Step3 將於後續實作換頁時呈現
// import Step2 from './components/Step2.js'
// import Step3 from './components/Step3.js'

import ProgressControl from './components/Progress/ProgressControl.js'

function App() {
  return (
  <div className={styles.main__container}>
  <ProgressStep/>
  <Step1/>
  <ProgressControl/>
  <Cart />
  </div>
  );
}

export default App;
