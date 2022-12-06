import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus} from '../../icons/plus.svg'
import { useContext } from 'react'; 
import { CartContext } from '../CartContext.js'

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
  const {products, setProducts} = useContext(CartContext)
  // 增加 item 按鈕  
  function handleIncreaseClick(productId) {
       let nextProducts = products.map(product => {
         if(product.id === productId) {
            return {
               ...product,
               quantity: product.quantity + 1
            }
         } else {
            return product
         }
      })
      nextProducts = nextProducts.filter( p =>
         p.quantity > 0
         );
      setProducts(nextProducts)
   }

   // 減少 item 按鈕
   function handleDecreaseClick(productId) {
      let nextProducts = products.map(product => {
         if(product.id === productId) {
            return {
               ...product,
               quantity: product.quantity - 1
            }
         } else {
            return product
         }
      })
      nextProducts = nextProducts.filter( p =>
         p.quantity > 0
         );
      setProducts(nextProducts)
   }

   // 購物車 items
   const listItems = products.map(product => 
      <div class={styles.product__container} key={product.id}>
         <img class={styles.img__container} src={product.img} alt={product.name} />
         <div class={styles.product__info}>
            <div class={styles.product__name}>{product.name}</div>
            <div class={styles.product__control__container}>
            <div class={styles.product__control}>
            <Minus className={styles.minus} onClick={()=> handleDecreaseClick(product.id)}/>
            <span class={styles.product__count}>{product.quantity}</span>
            <Plus className={styles.plus} onClick={()=> handleIncreaseClick(product.id)} />
            </div>
            </div>
            <div class={styles.price}>${product.price}</div>
         </div>
      </div>
   );

   // 金額小計
   function TotalPrice(products) {
      let total=0
      products.forEach( product => {
         total += product.price * product.quantity
      })
      return total       
   }
      
   return (
   <section class={styles.cart__container}>
      <h3 class={styles.cart__title}>購物籃</h3>
      <section class={styles.product__list}>{listItems}</section>
      <CartInfo name="shipping" text="運費" amount="免費" />
      <CartInfo name="total" text="小計" amount={'$'+TotalPrice(products)} />
   </section>
   );
}
