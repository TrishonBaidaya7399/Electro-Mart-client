// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';
import Products from '../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const SamsungItems = () => {
  const loadedProducts = useLoaderData();
  const products = loadedProducts.filter(product => product.brand === "Samsung")
  console.log(products);
    const data = [
        {
          image: "https://i.ibb.co/wdjmx6S/samsung-add-banner-01.jpg",
       
        },
        {
          image: "https://i.ibb.co/CH8NwdQ/samsung-add-banner-02.jpg",
       
        },
        {
          image: "https://i.ibb.co/yn6gQmc/samsung-ad-01.jpg",
         
        },
        {
          image: "https://i.ibb.co/ccSCfgf/samsung-ad-02.jpg",
         
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

SamsungItems.propTypes = {
    
};

export default SamsungItems;