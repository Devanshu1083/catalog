import {MdClose} from 'react-icons/md'
import { useContext, useEffect } from 'react';
import { Context } from '../../../utils/context';
import "./CartItem.scss";
import prod from "../../../assets/products/headphone-prod-1.webp"

const CartItem = () => {
    const {cartItems,handleCartProductQuantity,handleRemoveFromCart} = useContext(Context);


    return (
    <div className='cart-products'>
        {cartItems?.map((item) => (

            <div key={item.id} className="cart-product">
               <div className="img-container">
                   <img src={item.attributes.image.data.attributes.url} alt="" />
               </div>
                <div className="prod-details">
                     <span className="name">{item.attributes.title}</span>
                     <MdClose className='close-btn' onClick={()=>handleRemoveFromCart(item)}/>
                     <div className="quantity-buttons">
                            <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
                     </div>
                  <div className="text">
                    <span>&#8377;{item.attributes.price * item.attributes.quantity}</span>
                  </div>
                </div>
            </div>
        ))}
    </div>);
};

export default CartItem;
