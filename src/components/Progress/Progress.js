import styles from './Progress.module.css'

import { useContext, useState } from 'react'
import { CartContext } from '../../components/CartContext.js'
import { CreditCardContext } from '../../components/CreditCardContext.js'
import ProgressStep from './ProgressStep.js'
import StepForm from './StepForm.js'
import ProgressControl from './ProgressControl.js'

function Progress() {
  const [currentStep, setCurrentStep] = useState(1)
  const {products} = useContext(CartContext)
  const {creditCardInfo} = useContext(CreditCardContext)

  
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

  // 購物車金額小計功能
  function Total(products) {
    let total=0
    products.forEach( product => {
      total += product.price * product.quantity
    })
    return total
  }
  
  // 確認下單印出信用卡資訊及購物車小計金額
  function handleClickConfirm() {
    console.log({creditCardInfo})
    console.log(`Total Price is: $${Total(products)}`)
    }
  
  
  return (
  <div className={styles.progress__container}>
    <ProgressStep currentStep = {currentStep}/>
    <StepForm currentStep = {currentStep} />
    <ProgressControl
     currentStep = {currentStep}
     handleClickNext = {handleClickNext}
     handleClickPrev = {handleClickPrev}
     handleClickConfirm = {handleClickConfirm}
     />
  </div>
  );
}

export default Progress;