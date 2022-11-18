import styles from './ProgressControl.module.css'

function Button({name, text}) {
  return (
    <button class={name}>
      {text}
    </button>
  );
}


export default function ProgressControl() {
  return (
  <section class={styles.progress__control__container}>
    <section class={styles.button__container} data-phase="address">
      <Button name="next" text="下一步"/>
    </section>
    <section class={styles.button__container} data-phase="shipping">
      <Button name="prev" text="上一步"/>
      <Button name="next" text="下一步"/>
    </section>
    <section class={styles.button__container} data-phase="credit-card">
      <Button name="prev" text="上一步"/>
      <Button name="next" text="確認下單"/>
    </section>
  </section>
  ); 
}