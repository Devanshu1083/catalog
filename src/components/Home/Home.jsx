import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect,useContext } from "react";
import {fetchData} from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const {categories,setCategories,products,setProducts} = useContext(Context);

    const getCategories = ()=>{
        fetchData("/api/categories?populate=*").then((res)=>{
            console.log(res);
            setCategories(res);
        });
    };
    const getProducts = ()=>{
        fetchData("/api/products?populate=*&pagination[start]=0&pagination[limit]=4").then((res)=>{
            console.log(res);
            setProducts(res);
        });
    };
      
    useEffect(()=>{
        getProducts();
        getCategories();
    },[]);

    return (<div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <div id="category-section">
                <Category categories={categories}/>
                </div>
                <Products products={products} headingText="POPULAR PRODUCTS"/>
            </div>
        </div>
        
    </div>);
};

export default Home;
