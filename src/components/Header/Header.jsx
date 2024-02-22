import "./Header.scss";
import { useEffect,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import {Context} from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [isScroll,setIsScroll] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const navigate = useNavigate();
    const {cartCount} = useContext(Context);
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if(offset > 200){
            setIsScroll(true);
        }else{
            setIsScroll(false);
        }
    }
    const scrollToCategory = () => {
            const targetSection = document.getElementById('category-section');
            if (targetSection) {
              const targetOffset = targetSection.offsetTop - 200;
              window.scrollTo({ top: targetOffset, behavior: "smooth" });
            } 
      };

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[]);

    return (
        <>
        <header className={`main-header ${isScroll ? "sticky-header":""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=>navigate("/")}>Home</li>
                <li onClick={()=>scrollToCategory()}>Categories</li>
                <li>About</li>
            </ul>
            <div className="center">GrullStore</div>
            <div className="right">
                <AiOutlineHeart/>
                <span className="cart-icon" onClick={()=>setShowCart(true)}>
                    <CgShoppingCart/>
                    {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
        </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        </>
    );
};

export default Header;
