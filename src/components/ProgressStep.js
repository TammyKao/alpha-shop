
// Step component
function Step({text, label}) {
  return (
  <span className="progress-group">
    <span className="progress-icon">
      <span className="text">{text}</span>
    </span>
    <span className="progress-label">{label}</span>
  </span>
  );  
}

// ProgressBar component
function ProgressBar() {
  return (
  <span className="progress-bar"></span>
  );
}

export default function ProgressStep() { 
   return (
   <div className="register-container">
     <h2>結帳</h2>
     <div className="progress-container">
       <Step text="1" label="寄送地址"/>
       <ProgressBar/>
       <Step text="2" label="運送方式"/>
       <ProgressBar/>
       <Step text="3" label="付款資訊"/>
     </div>
   </div>
   );
  }


