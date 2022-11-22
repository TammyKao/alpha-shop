
import { products } from './InitialData.js'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus} from '../../icons/plus.svg'
import styles from './Cart.module.css'


function CartInfo ({name, text, amount}) {
   return (
   <section class={styles.cart__info} name={name}>
      <div class={styles.text}>{text}</div>
      <div class={styles.amount}>{amount}</div>
   </section>
  );
}

export default function Cart () {
   const listItems = products.map( product => 
      <div class={styles.product__container} key={product.id}>
         <img class={styles.img__container} src={product.img} alt={product.name} />
         <div class={styles.product__info}>
            <div class={styles.product__name}>{product.name}</div>
            <div class={styles.product__control__container}>
               <div class={styles.product__control}>
                  <Minus class={styles.minus} />
                  <span class={styles.product__count}>{product.quantity}</span>
                  <Plus class={styles.plus} />
               </div>
            </div>
            <div class={styles.price}>${product.price}</div>
         </div>
      </div>
      );

   return (
   <section class={styles.cart__container}>
      <h3 class={styles.cart__title}>購物籃</h3>
      <section class={styles.product__list}>{listItems}</section>
      <CartInfo name="shipping" text="運費" amount="免費" />
      <CartInfo name="total" text="小計" amount="$400" />
   </section>
   );
}