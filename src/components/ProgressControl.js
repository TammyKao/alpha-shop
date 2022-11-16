function Button({name, text}) {
  return (
    <button class={name}>
      {text}
    </button>
  );
}


export default function ProgressControl() {
  return (
  <section class="progress-control-container col col-lg-6 col-sm-12">
    <section class="button-group col col-12" data-phase="address">
      <Button name="next" text="下一步"/>
    </section>
    <section class="button-group col col-12" data-phase="shipping">
      <Button name="prev" text="上一步"/>
      <Button name="next" text="下一步"/>
    </section>
    <section class="button-group col col-12" data-phase="credit-card">
      <Button name="prev" text="上一步"/>
      <Button name="next" text="確認下單"/>
    </section>
  </section>
  ); 
}