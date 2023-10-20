// import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import { saveAddToCart } from '../../../Utility/localstorage';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const ProductDetails = () => {
    const navigate = useNavigate(); 
    const product = useLoaderData();
    const {user} = useContext(AuthContext)


const handleAddToCart = async (e) => {
  e.preventDefault();

  // Replace 'userId' with the actual user's ID (you need to obtain this from your authentication system)
 const userId= user._id; 
  const productData = {
    productId: product._id,
    userId: userId ,
    // Include any other product data you want to save (e.g., quantity, price, etc.)
  };

  try {
    const response = await fetch('http://localhost:5000/cartitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      Swal.fire({
        title: 'Success!',
        text: 'Product added to cart successfully!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go to cart',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/addtocart');
        }
      });
    } else {
      // Handle error
      console.error('Failed to add the product to the cart');
    }
  } catch (error) {
    // Handle fetch error
    console.error(error);
  }
};

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
        <button onClick={handleAddToCart} className="text-white font-bold text-xl bg-black rounded-full px-6 py-2 w-[20vw] mb-12">Add to cart</button>
        </Link>
        </div>
    </div>
        </div>
    );
};

ProductDetails.propTypes = {
    
};

export default ProductDetails;