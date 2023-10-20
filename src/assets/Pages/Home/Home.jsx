// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import Header from "../../Components/Header/Header";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import ProductCategories from "../ProductCategories/ProductCategories";

const Home = () => {
    const products = useLoaderData();
    console.log(products.length);
    return (
        <div>
           <Header/>
           <Brands/>
           <ProductCategories/>
           <PopularProducts products={products}/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;