import { useState } from 'react';
import Swal from 'sweetalert2'

const bgStyle = {
    // backgroundImage: `url(${backgroundImage01})`,
    backGroundSize: 'cover'
};

const AddProducts = () => {
    const [category, setCategory] = useState(''); // State for category selection
    const [brand, setBrand] = useState(''); // State for brand selection
    const [rating, setRating] = useState(''); // State for brand selection

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    const handleRating = (e) => {
        setRating(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = {photo, name, price, description, rating, category, brand}
        console.log('Name: ' + name);
        console.log('Photo URL: ' + photo);
        console.log('Brand: ' + brand);
        console.log('Category: ' + category);
        console.log('Price: ' + price);
        console.log('Description: ' + description);
        console.log('Rating: ' + rating);
        console.log('Added New product details:' , newProduct);


        // send data to the server
        fetch('http://localhost:5000/product',{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'close'
                  })
                form.reset();
            }
        })
    };

    return (
        <div style={bgStyle} className="py-[20px] md:py-[70px]">
            <div className="bg-gray-200 w-[80%] mx-auto mt-[50px] py-[20px] md:py-[70px]">
                <h1 className="text-center text-[45px] text-[#374151]">Add New Product</h1>
                <form onSubmit={handleAdd} className="w-[80%] mx-auto">
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Photo URL</h1>
                        <input type="text" name="photo" id="photo" required placeholder="Enter Product's Photo URL" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Name</h1>
                        <input type="text" name="name" id="name" required placeholder="Enter Product's Name" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Price</h1>
                        <input type="number" name="price" id="price" required placeholder="Enter Product's Price" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Description</h1>
                        <input type="text" name="description" id="description" required placeholder="Enter Product's Description" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rounded-md duration-200" />
                    </div>
                    <div className="mt-6">
                        <h1 className="text-gray-600 text-xl font-semibold">Rating</h1>
                        <div className="flex gap-2">
                        <label>
                                <input type="radio" name="rating" value="1" checked={rating === '1'}  onChange={handleRating} />
                            </label>
                            <label>
                                <input type="radio" name="rating" value="2" checked={rating === '2'}  onChange={handleRating} />
                               
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
                                <input type="radio" name="category" value="Computer" checked={category === 'Computer'} onChange={handleCategoryChange} />
                               Computer
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="category" value="Mobile" checked={category === 'Mobile'} onChange={handleCategoryChange} />
                               Mobile
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="category" value="    Computer Accessories" checked={category === '    Computer Accessories'} onChange={handleCategoryChange} />
                               Computer Accessories
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="category" value="Mobile Accessories" checked={category === 'Mobile Accessories'} onChange={handleCategoryChange} />
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
                                <input type="radio" name="brand" value="Samsung" checked={brand === 'Samsung'} onChange={handleBrandChange} />
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
                                <input type="radio" name="brand" value="Realmi" checked={brand === 'Realmi'} onChange={handleBrandChange} />
                                Realmi
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="w-full mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md py-4 text-center text-[#331A15] font-bold" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
