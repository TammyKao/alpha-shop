import styles from './Progress.module.css'

import { useState } from 'react'
import ProgressStep from './ProgressStep.js'
import StepForm from './StepForm.js'
import ProgressControl from './ProgressControl.js'

function Progress() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleClickNext() {
    if (currentStep < 3) {
     setCurrentStep(currentStep + 1) 
    }
  }

  function handleClickPrev() {
    if (currentStep > 1) {
     setCurrentStep(currentStep - 1) 
    }
  }

  return (
  <div className={styles.progress__container}>
  <ProgressStep 
   currentStep = {currentStep}/>
  <StepForm currentStep = {currentStep} />
  <ProgressControl 
   currentStep = {currentStep}
   handleClickNext = {handleClickNext}
   handleClickPrev = {handleClickPrev}
   />
  </div>
  );
}

export default Progress;