// credit-card phase
import { InputGroup } from "./Step1";
import styles from "./Step3.module.css";


export default function Step3() {
  return (
  <form className={styles.form__container} data-phase="credit-card">
    <h3 className={styles.form__title}>付款資訊</h3>
    <section className={styles.form__body}>
      <div className={styles.input__container}>
        <InputGroup 
          id='card__holder'
          label='持卡人姓名' 
          placeholder='John Doe' 
        />
      </div>
      <div className={styles.input__container}>
        <InputGroup 
          id='card__number'
          label='卡號' 
          placeholder='1111 2222 3333 4444'
         />
      </div>
      <div className={styles.input__container}>
        <InputGroup 
          id ='expire__date'
          label='有效期限' 
          placeholder='MM/YY'
         />
        <InputGroup
          id ='cvc' 
          label='CVC / CCV' 
          placeholder='123'
         />
      </div>
    </section>
  </form>  
  ); 
}
