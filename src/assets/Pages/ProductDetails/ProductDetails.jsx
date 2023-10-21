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


const handleAddToCart = async (productId) => {
 const userId= user._id; 
 console.log(productId);
  const productData = {
    productId: productId,
    userId: userId ,
  };

  try {
    const response = await fetch('https://electro-mart-server-ten.vercel.app/cartitems', {
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
        <div className="drop-shadow-lg bg-gray-200 mx-[20px] md:mx-[100px] lg:mx-[300px] my-[50px] ">
        <div className="prod-img mx-auto">
        <img className="w-[100%] pt-[20px] md:pt-[30px] rounded-t-lg mx-auto" src={product.photo} alt="" />
        </div>
        <div className="description p-4 text-center">
            <h1 className='text-3xl font-bold'>{product.name}</h1>
            <h1 className='text-xl font-semibold'>Brand: {product.brand}</h1>
            <p className='text-xl font-semibold'>Type: {product.category}</p>
            <p className='text-xl font-semibold'>Price: ${product.price}</p>
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
        <button onClick={()=>handleAddToCart(product._id)} className="text-white font-bold text-xl bg-black rounded-full px-6 py-2  mb-12">Add to cart</button>
        </Link>
        </div>
    </div>
        </div>
    );
};

ProductDetails.propTypes = {
    
};

export default ProductDetails;