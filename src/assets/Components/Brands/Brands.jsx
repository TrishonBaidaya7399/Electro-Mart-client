// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import samsungLogo from "../../images/logo/samsung logo.jpg"
import appleLogo from "../../images/logo/apple logo.jpg"
import googleLogo from "../../images/logo/google logo.jpg"
import intelLogo from "../../images/logo/intel logo.jpg"
import realmiLogo from "../../images/logo/realmi logo.jpg"
import sonyLogo from "../../images/logo/sony logo.jpg"
const Brands = () => {
    return (
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl text-center font-bold py-12">Our Brands</h1>
            <div className="grid grid-cols-1 w-fit md:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center gap-8">
                <div  className=" bg-gray-200 text-center rounded-lg">
                    <img className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] p-2 rounded-2xl" src={samsungLogo} alt="Samsung Logo" />
                    <div className="text-description py-4">
                    <h1 className="text-4xl font-bold text-blue-800">Samsung</h1>
                    <p className="text-[16px] font-bold text-blue-600 py-2">Shop all latest offers and innovations</p>
                    <Link to="/samsungitems"><button className="btn bg-blue-700 text-white text-[16px] hover:bg-white hover:text-blue-700 border-2 border-blue-700 hover:border-blue-700 font-semibold mt-2">Visit Brand</button></Link>
                    </div>
                </div>
                <div  className=" bg-gray-200 text-center rounded-lg">
                    <img className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] p-2 rounded-2xl" src={appleLogo} alt="Samsung Logo" />
                    <div className="text-description py-4">
                    <h1 className="text-4xl font-bold text-black">Apple</h1>
                    <p className="text-[16px] font-bold text-black py-2">Impressively Big, impossibly thin</p>
                    <Link to="/appleitems"><button className="btn bg-black text-white text-[16px] hover:bg-white hover:text-blue-700 border-2 border-black hover:border-blue-700 font-semibold mt-2">Visit Brand</button></Link>
                    </div>
                </div>
                <div  className=" bg-gray-200 text-center rounded-lg">
                    <img className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] p-2 rounded-2xl" src={googleLogo} alt="Samsung Logo" />
                    <div className="text-description py-4">
                    <h1 className="text-4xl font-bold text-blue-800">
                        <span className="text-blue-600">G</span>
                        <span className="text-red-600">o</span>
                        <span className="text-yellow-400">o</span>
                        <span className="text-blue-600">g</span>
                        <span className="text-green-600">l</span>
                        <span className="text-red-600">e</span>
                        </h1>
                    <p className="text-[16px] font-bold text-blue-600 py-2">
                    <span className="text-blue-600">{`Don't`} </span>
                        <span className="text-red-600">be </span>
                        <span className="text-yellow-400">evil </span>
                    </p>
                    <Link to="/googleitems"><button className="btn bg-yellow-400 text-black text-[16px] hover:bg-white hover:text-blue-700 border-2 border-yellow-400 hover:border-blue-700 font-semibold mt-2">Visit Brand</button></Link>
                    </div>
                </div>
                <div  className=" bg-gray-200 text-center rounded-lg">
                    <img className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] p-2 rounded-2xl" src={intelLogo} alt="Samsung Logo" />
                    <div className="text-description py-4">
                    <h1 className="text-4xl font-bold text-blue-800">Intel</h1>
                    <p className="text-[16px] font-bold text-blue-600 py-2">{`Don't be encumbered by history`}</p>
                    <Link to="/intelitems"><button className="btn bg-blue-700 text-white text-[16px] hover:bg-white hover:text-blue-700 border-2 border-blue-700 hover:border-blue-700 font-semibold mt-2">Visit Brand</button></Link>
                    </div>
                </div>
                <div  className=" bg-gray-200 text-center rounded-lg">
                    <img className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] p-2 rounded-2xl" src={realmiLogo} alt="Samsung Logo" />
                    <div className="text-description py-4">
                    <h1 className="text-4xl font-bold text-yellow-400">Realmi</h1>
                    <p className="text-[16px] font-bold text-black py-2">Dare to Leap</p>
                    <Link to="/realmiitems"><button className="btn bg-yellow-400 text-black text-[16px] hover:bg-white hover:text-blue-700 border-2 border-yellow-400 hover:border-blue-700 font-semibold mt-2">Visit Brand</button></Link>
                    </div>
                </div>
                <div  className=" bg-gray-200 text-center rounded-lg">
                    <img className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] p-2 rounded-2xl" src={sonyLogo} alt="Samsung Logo" />
                    <div className="text-description py-4">
                    <h1 className="text-4xl font-bold text-black">Sony</h1>
                    <p className="text-[16px] font-bold text-black py-2">Shop all latest offers and innovations</p>
                    <Link to="/sonyitems"><button className="btn bg-black text-white text-[16px] hover:bg-white hover:text-blue-700 border-2 border-black hover:border-blue-700 font-semibold mt-2">Visit Brand</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Brands.propTypes = {
    
};

export default Brands;