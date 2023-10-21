// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';
import Products from '../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const IntelItems = () => {
  const loadedProducts = useLoaderData();
  const products = loadedProducts.filter(product => product.brand === "Intel")
  console.log(products);
    const data = [
        {
          image: "https://i.ibb.co/tq0qhrb/intel-ad-banner1.jpg",
       
        },
        {
          image: "https://i.ibb.co/rQNF8xG/intel-ad-banner2.jpg",
       
        },
        {
          image: "https://i.ibb.co/pbSmFPH/intel-ad-banner3.jpg",
         
        },
        {
          image: "https://i.ibb.co/Fz4S1sM/intel-ad-banner4.jpg",
         
        },
        {
          image: "https://i.ibb.co/0XQwTBS/sony-ad-01.jpg",
        
        },
      ];
    
     
      return (
    <>
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div className=''>
              <Carousel
                data={data}
                time={2000}
                width="100%"
                height="110vh"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="fit"
                style={{
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </div>
        <Products products={products}/>
    </>
      );
};

IntelItems.propTypes = {
    
};

export default IntelItems;