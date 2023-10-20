import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PopularProducts = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  
  const loadMore = () => {
    setVisibleProducts(visibleProducts + 6);
  };

  const loadLess = () => {
    setVisibleProducts(6);
  };

  return (
    <div className="mb-12 text-center">
      <h1 className="text-6xl text-center font-bold py-12">Just For You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[100px]">
        {
        products.slice(0, visibleProducts).map((product) => (
          <div key={product._id} className="bg-gray-200 rounded-xl p-8">
            <img className="h-[200px] mx-auto rounded-lg" src={product.photo} alt="" />
            <div className='pt-6'>
              <h className="title text-xl font-semibold">{product.name}</h>
              <div className="">
                <p className="text-blue-600">Save $100</p>
                <p>{`From ${product.price}`}</p>
              </div>
              <Link to={`/productdetails/${product._id}`}>
                <button className="rounded-full mt-2 px-6 py-2 bg-black hover.bg-white border-2 border-black font-semibold duration-200 text-white hover.text-black">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length ? (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="rounded-full px-6 py-2 bg-blue-500 text-white font-semibold duration-200 hover:bg-blue-700"
          >
            See More
          </button>
        </div>
      ) : (
        <div className="text-center mt-4">
          <button
            onClick={loadLess}
            className="rounded-full px-6 py-2 bg-black text-white font-semibold duration-200 hover:bg-gray-700"
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

PopularProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default PopularProducts;
