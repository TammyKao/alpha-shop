import styles from './ProgressControl.module.css'

import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../icons/right-arrow.svg'

function Button({name, text}) {
  return (
    <button id={name}>
      <LeftArrow className={styles.left__arrow}/>
      {text}
      <RightArrow className={styles.right__arrow}/>
    </button>
  );
 }


export default function ProgressControl() {
  return (
  <section class={styles.progress__control__container}>
    <section class={styles.button__container} data-phase="address">
      <Button name="next" text="下一步"/>
    </section>

    {/* 以下換頁畫面暫不渲染，將於後續進行換頁畫面時實作 */}

    {/* <section class={styles.button__container} data-phase="shipping">
      <Button name="prev" text="上一步"/>
      <Button name="next" text="下一步"/>
    </section>
    <section class={styles.button__container} data-phase="credit-card">
      <Button name="prev" text="上一步"/>
      <Button name="confirm" text="確認下單"/>
    </section> */}
  </section>
  ); 
}

