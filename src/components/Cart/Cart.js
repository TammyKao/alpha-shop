// Cart

import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus} from '../../icons/plus.svg'

function CartInfo ({name, text, price}) {
  return (
   <section class="styles__cart__info" name ={name}>
      <div class="text">{text}</div>
      <div class="price">{price}</div>
   </section>
  );
}


export default function Cart () {
return (
  <section class="cart-container">
   
   <h3 class="cart-title">購物籃</h3>

   <section class="product-list" data-total-price="0">
     <div class="product-container col col-12" data-count="0" data-price="3999">
       <img class="img-container" src="../../../image/product-1.jpg" />
       <div class="product-info">
           <div class="product-name">破壞補丁修身牛仔褲</div>
           <div class="product-control-container">
              <div class="product-control">
               <Minus />
               <span class="product-count">1</span>
               <Plus />
              </div>
            </div>
          <div class="price">$3999</div>
       </div>
      </div>
   </section>

  <CartInfo name="shipping" text="運費" price="免費" />
  <CartInfo name="total" text="小計" price="$5298" />
  </section>
  );
}