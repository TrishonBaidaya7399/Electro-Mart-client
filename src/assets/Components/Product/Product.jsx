import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Product = ({product}) => {
    return (
<div className="pb-6">
            <div className="drop-shadow-lg text-center w-fit border-2 border-gray-400 p-4  rounded-md">
            <div className="prod-img w-[200px] h-[200px] mx-auto">
            <img className="h-full rounded-t-lg" src={product.photo} alt="" />
            </div>
            <div className="description p-4">
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <h1 className='text-xl font-semibold'><span>Brand: </span>{product.brand}</h1>
                <p className='text-xl font-semibold'><span>Category: </span>{product.category}</p>
                <p className='text-xl font-semibold'><span>Price: </span>{product.price}</p>
                <div className="rating">
                {Array.from({ length: 5 }).map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name={`rating-${product._id}`}
                  className="mask mask-star-2 bg-orange-400"
                  checked={index < product.rating}
                  readOnly
                />
              ))}
                </div>
            </div>
            <div className="flex gap-4 justify-center">
                <div>
                <NavLink to={`/productdetails/${product._id}`}><button className='btn bg-black hover:bg-gray-700 text-white ho font-semibold' id={product._id}>Details</button></NavLink>
                </div>
                <div>
                <NavLink to={`/updateproduct/${product._id}`}><button className='btn bg-black hover:bg-gray-700 text-white ho font-semibold' id={product._id}>Update</button></NavLink>
                </div>
            </div>
        </div>
</div>
            
    );
};

Product.propTypes = {
    product: PropTypes.node,
};

export default Product;