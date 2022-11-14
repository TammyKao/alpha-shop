import './App.css';
import StepProgress from './components/StepProgress.js'
import Step1 from './components/Step1.js'
import Step2 from './components/Step2.js'
import Step3 from './components/Step3.js'
import ProgressControl from './components/ProgressControl.js'

function App() {
  return (
  <>
  <StepProgress/>
  <Step1/>
  <Step2/>
  <Step3/>
  <ProgressControl/>
  </>
  );
}

export default App;
