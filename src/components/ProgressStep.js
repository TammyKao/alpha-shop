import styles from './ProgressStep.module.css'

// Step component
function Step({text, label}) {
  return (
  <span className={styles.progress__group}>
    <span className={styles.progress__icon}>
      <span className={styles.progress__text}>{text}</span>
    </span>
    <span className={styles.progress__label}>{label}</span>
  </span>
  );  
}

// ProgressBar component
function ProgressBar() {
  return (
  <span className={styles.progress__bar}></span>
  );
}

export default function ProgressStep() { 
   return (
   <div>
     <h2 className={styles.register__title}>結帳</h2>
     <section className={styles.progress__container}>
       <Step text="1" label="寄送地址"/>
       <ProgressBar/>
       <Step text="2" label="運送方式"/>
       <ProgressBar/>
       <Step text="3" label="付款資訊"/>
     </section>
   </div>
   );
  }


