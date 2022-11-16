// credit-card phase
import { InputGroup } from "./Step1";

 <InputGroup label='卡號' type='text' placeholder='1111 2222 3333 4444' />

export default function Step3() {
  return (
  <form className="col col-12" data-phase="credit-card">
    <h3 className="form-title">付款資訊</h3>
    <section className="form-body col col-12">
      <div className="col col-12">
        <InputGroup 
          label='持卡人姓名' 
          type='text' 
          placeholder='John Doe' 
        />
      </div>
      <div className="col col-12">
        <InputGroup 
          label='卡號' 
          type='text' 
          placeholder='1111 2222 3333 4444'
         />
      </div>
      <div className="col col-12">
        <InputGroup 
          label='有效期限' 
          type='text' 
          placeholder='MM/YY'
         />
        <InputGroup 
          label='CVC / CCV' 
          type='text' 
          placeholder='123'
         />
      </div>
    </section>
  </form>  
  ); 
}
