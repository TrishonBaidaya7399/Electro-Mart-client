// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';
import Products from '../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const GoogleItems = () => {
  const loadedProducts = useLoaderData();
  const products = loadedProducts.filter(product => product.brand === "Google")
  console.log(products);
    const data = [
        {
          image: "https://i.ibb.co/7vf04Nm/google-ad-banner1.png",
       
        },
        {
          image: "https://i.ibb.co/0rdbYcG/google-ad-banner2.jpg",
       
        },
        {
          image: "https://i.ibb.co/3sqSGmG/google-ad-banner3.webp",
         
        },
        {
          image: "https://i.ibb.co/9W2gL1Q/google-ad-banner4.png",
         
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

GoogleItems.propTypes = {
    
};

export default GoogleItems;