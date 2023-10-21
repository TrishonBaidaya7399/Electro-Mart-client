// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';
import Products from '../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const RealmiItems = () => {
  const loadedProducts = useLoaderData();
  const products = loadedProducts.filter(product => product.brand === "Realmi")
  console.log(products);
    const data = [
        {
          image: "https://i.ibb.co/58wwwXQ/realmi-ad-banner1.jpg",
       
        },
        {
          image: "https://i.ibb.co/5rqPD1Q/realmi-ad-banner2.jpg",
       
        },
        {
          image: "https://i.ibb.co/XS5BDv9/realmi-ad-banner3.png",
         
        },
        {
          image: "https://i.ibb.co/Vj33y1k/realmi-ad-banner4.png",
         
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

RealmiItems.propTypes = {
    
};

export default RealmiItems;