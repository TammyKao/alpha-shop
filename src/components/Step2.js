//  <!-- shipping phase -->

function RadioGroup ({price, id, type, name, text, period}) {
  return (
  <label className="radio-group col col-12" data-price={price}>
    <input id={id} type={type} name={name}  checked/>
    <div className="radio-info">
      <div className="col col-12">
        <div className="text">{text}</div>
        <div className="price"></div>
      </div>
      <div className="period col col-12">{period}</div>
    </div>
    <div className="radio-box-border"></div>
  </label>
  );
}


export default function Step2() {
  return (
    <form class="col col-12" data-phase="shipping">
    <div>
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        <RadioGroup 
          id="shipping-standard" 
          type="radio" 
          name="shipping" 
          price="0" 
          text="標準運送"  
          period="約 3~7 個工作天"
         />
        <RadioGroup 
          id="shipping-dhl" 
          type="radio" 
          name="shipping" 
          price="500" 
          text="DHL 貨運"  
          period="48 小時內送達"
         />
      </section>
    </div>
    </form>
  ); 
}
