// import PropTypes from 'prop-types';

import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData()
    return (
        <div className="">
        <div className="drop-shadow-lg bg-gray-200 mx-[300px] my-[50px] ">
        <div className="prod-img mx-auto">
        <img className="w-[100%] rounded-t-lg mx-auto" src={product.photo} alt="" />
        </div>
        <div className="description p-4 text-center">
            <h1>Name: {product.name}</h1>
            <h1>Brand Name: {product.brand}</h1>
            <p>Type: {product.category}</p>
            <p>Price: ${product.price}</p>
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
        <div className=" flex items-center justify-center">
        <Link className="">
        <button className="text-white font-bold text-xl bg-black rounded-full px-6 py-2 w-[20vw] mb-12">Add to cart</button>
        </Link>
        </div>
    </div>
        </div>
    );
};

ProductDetails.propTypes = {
    
};

export default ProductDetails;