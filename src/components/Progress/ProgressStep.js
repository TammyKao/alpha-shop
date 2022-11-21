import styles from './ProgressStep.module.css'

// Step component
function Step({phase, text, label}) {
  return (
  <span className={styles.progress__group}>
    <span className={styles.progress__icon} phase={phase}>
      <span className={styles.progress__text}>{text}</span>
    </span>
    <span className={styles.progress__label}>{label}</span>
  </span>
  );  
}

// ProgressBar component
function ProgressBar({className}) {
  return (
  <span className={className}></span>
  );
}

export default function ProgressStep() { 
   return (
   <div>
     <h2 className={styles.progress__title}>結帳</h2>
     <section className={styles.progress__container}>
       <Step 
         text="1" 
         label="寄送地址" 
         phase="done"
       />
       <ProgressBar className={styles.progress__bar} />
       <Step 
         text="2" 
         label="運送方式" 
         phase="undone"
         />
       <ProgressBar className={styles.progress__bar__undone} />
       <Step 
         text="3" 
         label="付款資訊" 
         phase="undone"
         />
     </section>
   </div>
   );
  }


