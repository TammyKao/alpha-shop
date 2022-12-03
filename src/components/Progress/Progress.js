import styles from './Progress.module.css'
import ProgressStep from './ProgressStep.js'
import Step1 from './Step1.js'
import ProgressControl from './ProgressControl.js'

function Progress() {
  return (
  <div className={styles.progress__container}>
  <ProgressStep/>
  <Step1/>
  <ProgressControl/>
  </div>
  );
}

export default Progress;