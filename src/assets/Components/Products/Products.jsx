import PropTypes from 'prop-types';

import Product from "../Product/Product";


const Products = ({products}) => {
    return (
        <div className='mx-auto'>
         <h1 className="text-6xl text-center font-bold py-12">Available Products</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-[20px] md:mx-[50px] lg:mx-[100px] '>
        {
            products.map(product => <Product key={product._id} product={product}/>)
        }    
         </div>
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.node,
};

export default Products;