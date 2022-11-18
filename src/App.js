import './base.module.css';
import ProgressStep from './components/ProgressStep.js'
// 先渲染 Step1畫面，以下Step2 & Step3 將於後續實作換頁時呈現
import Step1 from './components/Step1.js'
// import Step2 from './components/Step2.js'
// import Step3 from './components/Step3.js'
import ProgressControl from './components/ProgressControl.js'

function App() {
  return (
  <>
  <ProgressStep/>
  <Step1/>
  <ProgressControl/>
  </>
  );
}

export default App;
