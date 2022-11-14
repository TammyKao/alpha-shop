import './App.css';
import ProgressStep from './components/ProgressStep.js'
import Step1 from './components/Step1.js'
import Step2 from './components/Step2.js'
import Step3 from './components/Step3.js'
import ProgressControl from './components/ProgressControl.js'

function App() {
  return (
  <>
  <ProgressStep/>
  <Step1/>
  <Step2/>
  <Step3/>
  <ProgressControl/>
  </>
  );
}

export default App;
