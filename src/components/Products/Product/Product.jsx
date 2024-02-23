import "./Product.scss";
import { useNavigate } from "react-router-dom";
import prod1 from "../../../assets/products/earbuds-prod-3.webp";
const Product = ({key,id,data}) => {

    const navigate = useNavigate();
    return <div className="product-card" onClick={()=>navigate("/product/"+id)}>
        <div className="thumbnail">
            <img src={data.image.data.attributes.url} alt="" />
        </div>
        <div className="product-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
        </div>
        </div>;
};

export default Product;
