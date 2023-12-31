import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddToCart = () => {
    const products = useLoaderData();
    const [addedProduct, setAddedProduct] = useState([]);
    const {user} = useContext(AuthContext)
    const currentUser = { _id: user._id }; 

    useEffect(() => {
        fetch('https://electro-mart-server-ten.vercel.app/cartitems') // Update the URL to match your server endpoint
            .then((response) => response.json())
            .then((cartItems) => {
                const itemsAdded = cartItems.filter((item) => item.userId === currentUser._id);

                // Get product details for the added items
                const addedProducts = itemsAdded.map((item) => {
                    const product = products.find((p) => p._id === item.productId);
                    return {
                        ...product,
                        quantity: item.quantity, // You may have a quantity field in your cart item
                    };
                });

                setAddedProduct(addedProducts);
            })
            .catch((error) => {
                console.error("Error fetching cart items:", error);
            });
    }, [currentUser, products]);

    const handleBuyNow = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This feature will be added very soon...",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    const handleDelete = (productId) => {
        console.log(productId);                             
        fetch(`https://electro-mart-server-ten.vercel.app/cartitems/${productId}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product deleted from the card successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
       
    }
    

    return (
        <div>
            {addedProduct.length > 0 ? (
                <ul className="lg:px-[200px]">
                    {addedProduct.map((product, index) => (
                        <div key={index}>
                            <div className="border-2 rounded-xl border-gray-300 w-full flex p-6 my-6 items-center">
                                <div className=" flex items-center w-[100px]  md:w-[180px] justify-center rounded-lg mr-8">
                                    <img src={product.photo} alt="" className="h-[170px] rounded-lg" />
                                </div>
                                <div>
                                    <h1 className="text-[18px] lg:text-[24px] font-bold">{product.name}</h1>
                                    <h1 className="text-[16px] lg:text-[20px] font-semibold text-gray-500 pb-[15px]">{product.brand}</h1>
                                    <div className="flex gap-4 pb-4">
                                        <div className="text-xl text-[#9873FF] rounded-lg">
                                            {product.category}
                                        </div>
                                        <div className="text-xl text-[#9873FF] rounded-lg">${product.price}</div>
                                    </div>
                                </div>
                                <div className="flex ml-auto items-center flex-col">

                                        <NavLink className="bg-none rounded-lg">
                                            <button onClick={()=>handleDelete(product._id)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-[14px] md:text-[18px] md:py-[10px] md:px-[18px]">
                                                DELETE
                                            </button>
                                        </NavLink>
                                        <NavLink className="bg-none rounded-lg">
                                            <button onClick={handleBuyNow} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-[14px] md:text-[18px] md:py-[10px] md:px-[18px]">
                                                Buy
                                            </button>
                                        </NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="w-full flex flex-col items-center py-8 md:py-12 ">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Empty Cart !</h1>
                    <img src="https://i.ibb.co/7QgbJtW/empty-cart-removebg-preview.png" alt="" />
                </div>
            )}
        </div>
    );
};

export default AddToCart;
