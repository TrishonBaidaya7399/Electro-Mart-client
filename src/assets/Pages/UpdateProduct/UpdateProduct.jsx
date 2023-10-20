// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import PropTypes from 'prop-types';
const bgStyle = {
    // backgroundImage: `url(${backgroundImage01})`,
    backGroundSize: 'cover'
}
const UpdateProduct = () => {
    const loadedProduct = useLoaderData() 
    const [category, setCategory] = useState(loadedProduct.category);
    const [brand, setBrand] = useState(loadedProduct.brand);
    const [rating, setRating] = useState(loadedProduct.rating);
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    const handleRating = (e) => {
        setRating(e.target.value);
    };
    
    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };
    const handleUpdate = e =>{
        e.preventDefault();
        console.log('add button clicked!');
        const form = e.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const brand = form.brand.value;
            const category = form.category.value;
            const price = form.price.value;
            const description = form.description.value;
            const rating = form.rating.value;
            const updatedProduct = {name, photo, brand, category, price, description, rating}
            
            console.log('Name: ' + name);
            console.log('Photo URL: ' + photo);
            console.log('Brand: ' + brand);
            console.log('Category: ' + category);
            console.log('Price: ' + price);
            console.log('Description: ' + description);
            console.log('Rating: ' + rating);

                // send data to the server
                console.log(`id: ${loadedProduct._id}`);
        fetch(`http://localhost:5000/product/${loadedProduct._id}`,{
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'close'
                  })
                form.reset();
            }
        })
    }
   
    return (
    <div style={bgStyle} className="py-[20px] md:py-[70px]">
        <div className="bg-gray-200 w-[80%] mx-auto mt-[50px] py-[20px] md:py-[70px]">
            <h1 className="text-center text-[45px] text-[#374151]">Update Product</h1>
            <form onSubmit={handleUpdate} className="w-[80%] mx-auto">
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Photo URL</h1>
                    <input defaultValue={loadedProduct.photo} type="text" name="photo" id="photo" required placeholder="Enter Product's Photo URL" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Name</h1>
                    <input defaultValue={loadedProduct.name} type="text" name="name" id="name" required placeholder="Enter Product's Name" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Price</h1>
                    <input defaultValue={loadedProduct.price} type="number" name="price" id="price" required placeholder="Enter Product's Price" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Description</h1>
                    <input defaultValue={loadedProduct.description} type="text" name="description" id="description" required placeholder="Enter Product's Description" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Rating</h1>
                    <div className="flex gap-2">
                    <label>
                            <input type="radio" name="rating" value="1" checked={rating === '1'}  onChange={handleRating} />
                        </label>
                        <label>
                            <input type="radio" name="rating" value="2"  checked={rating === '2'}  onChange={handleRating} />
                           
                        </label>
                        <label>
                            <input type="radio" name="rating" value="3" checked={rating === '3'}  onChange={handleRating} />
                          
                        </label>
                        <label>
                            <input type="radio" name="rating" value="4" checked={rating === '4'}  onChange={handleRating} />
                      
                        </label>
                        <label>
                            <input type="radio" name="rating" value="5" checked={rating === '5'}  onChange={handleRating} />
                        </label>
                    </div>
                </div>
                <div className="mt-6 flex flex-col md:flex-row">
                    <div className="w-1/2">
                        <h1 className="text-gray-600 text-xl font-semibold">Category</h1>
                        <label>
                            <input type="radio" name="category" value="Computer"  checked={category === 'Computer'} onChange={handleCategoryChange} />
                           Computer
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="category" value="Mobile"  checked={category === 'Mobile'} onChange={handleCategoryChange} />
                           Mobile
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="category" value="Computer Accessories" checked={category === 'Computer Accessories'} onChange={handleCategoryChange} />
                           Computer Accessories
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="category" value="Mobile Accessories"  checked={category === 'Mobile Accessories'} onChange={handleCategoryChange} />
                           Mobile Accessories
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="category" value="Headphone" checked={category === 'Headphone'} onChange={handleCategoryChange} />
                           Headphone
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="category" value="Software" checked={category === 'Software'} onChange={handleCategoryChange} />
                           Software
                        </label>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-gray-600 text-xl font-semibold">Brand</h1>
                        <label>
                            <input type="radio" name="brand" value="Samsung"  checked={brand === 'Samsung'} onChange={handleBrandChange} />
                            Samsung
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="brand" value="Apple" checked={brand === 'Apple'} onChange={handleBrandChange} />
                            Apple
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="brand" value="Google" checked={brand === 'Google'} onChange={handleBrandChange} />
                            Google
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="brand" value="Sony" checked={brand === 'Sony'} onChange={handleBrandChange} />
                            Sony
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="brand" value="Intel" checked={brand === 'Intel'} onChange={handleBrandChange} />
                            Intel
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="brand" value="Realmi"  checked={brand === 'Realmi'} onChange={handleBrandChange} />
                            Realmi
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="w-full mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md py-4 text-center text-[#331A15] font-bold" />
            </form>
        </div>
    </div>
    );
};

UpdateProduct.propTypes = {
    
};

export default UpdateProduct;