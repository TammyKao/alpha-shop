import styles from './ProgressControl.module.css'

import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../icons/right-arrow.svg'

function Button({name, text, onClick}) {
  return (
    <button id={name} onClick={onClick}>
      <LeftArrow className={styles.left__arrow}/>
      {text}
      <RightArrow className={styles.right__arrow}/>
    </button>
  );
 }


export default function ProgressControl({currentStep, handleClickPrev, handleClickNext, handleClickConfirm}) {
  return (
  <section class={styles.progress__control__container}>
    <section class={styles.button__container} currentStep={currentStep}>
      { currentStep === 1 && 
      <Button name="next" text="下一步" onClick={handleClickNext} />}
      { currentStep === 2 && 
      <>
      <Button name="prev" text="上一步" onClick={handleClickPrev} />
      <Button name="next" text="下一步" onClick={handleClickNext} />
      </>}
      { currentStep === 3 && 
      <>
      <Button name="prev" text="上一步" onClick={handleClickPrev} />
      <Button name="confirm" text="確認下單" onClick={handleClickConfirm}/>
      </>}
    </section>
  </section>
  ); 
}

