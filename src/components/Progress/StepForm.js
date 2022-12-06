import Step1 from "./StepForm/Step1"
import Step2 from "./StepForm/Step2"
import Step3 from "./StepForm/Step3"



export default function StepForm({currentStep}) {
  return (
    <>
    {currentStep === 1 && <Step1 />}
    {currentStep === 2 && <Step2 />}
    {currentStep === 3 && <Step3 />}
    </>
  )
}