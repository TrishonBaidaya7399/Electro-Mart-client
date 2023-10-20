// import PropTypes from 'prop-types';


const ProductCategories = () => {
    return (
        <div className="mb-12 text-center">
        <h1 className="text-6xl text-center font-bold py-12">Electronic Appliances</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-[50px]">
            <div className=" h-fit p-8 flex flex-col items-center justify-center">
                <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/fFZPdHW/Screenshot-2023-10-18-204318-removebg-preview.png" alt="" />
                <div>
                    <h className="title text-xl font-semibold">Airpod</h>
                </div>
            </div>
            <div className=" h-fit p-8 flex flex-col items-center justify-center">
                <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/5G1TGBg/Screenshot-2023-10-18-204451-removebg-preview.png" alt="" />
                <div>
                    <h className="title text-xl font-semibold">Smart TV</h>
                </div>
            </div>
            <div className=" h-fit p-8 flex flex-col items-center justify-center">
                <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/4Z7HTPm/Screenshot-2023-10-18-204531-removebg-preview.png" alt="" />
                <div>
                    <h className="title text-xl font-semibold">Smart Phones</h>
                </div>
            </div>
            <div className=" h-fit p-8 flex flex-col items-center justify-center">
                <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/4TN73HV/laptop-removebg-preview.png" alt="" />
                <div>
                    <h className="title text-xl font-semibold">Laptop</h>
                </div>
            </div>
            <div className=" h-fit p-8 flex flex-col items-center justify-center">
                <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/bKTH0TF/watches-removebg-preview.png" alt="" />
                <div>
                    <h className="title text-xl font-semibold">Smart Watches</h>
                </div>
            </div>
            <div className=" h-fit p-8 flex flex-col items-center justify-center">
                <img className="w-[150px] h-[150px] mx-auto" src="https://i.ibb.co/F3HgvF8/camera-removebg-preview.png" alt="" />
                <div>
                    <h className="title text-xl font-semibold">Camera</h>
                </div>
            </div>
        </div>
        
    </div>
    );
};

ProductCategories.propTypes = {
    
};

export default ProductCategories;