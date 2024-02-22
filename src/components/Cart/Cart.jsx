import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { useNavigate } from "react-router-dom";
const Cart = ({setShowCart}) => {

    const {CartItems,cartSubTotal} = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="cart-panel">
            <div className="opacity-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Your Cart</span>
                    <span className="close-btn" onClick={()=>setShowCart(false)}>
                        <span className="text">close</span>
                        <MdClose/>
                    </span>
                </div>
                { (cartSubTotal===0) && (<div className="cart-empty">
                    <BsCartX/>
                    <span>Your cart is empty.</span>
                    <button className="return-cta"  onClick={()=>{
                        setShowCart(false);
                        navigate("/");
                    }}>RETURN TO SHOP</button>
                </div>)}
                { (cartSubTotal!==0) && (<>
                    <CartItem/>
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal :</span>
                            <span className="text total">&#8377;{cartSubTotal}</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Checkout</button>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default Cart;
