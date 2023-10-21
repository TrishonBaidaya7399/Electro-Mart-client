// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';
import Products from '../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const AppleItems = () => {
  const loadedProducts = useLoaderData();
  const products = loadedProducts.filter(product => product.brand === "Apple")
  console.log(products);
    const data = [
        {
          image: "https://i.ibb.co/3Rvb1rN/apple-ad-banner1.jpg",
       
        },
        {
          image: "https://i.ibb.co/sVqj8bm/apple-ad-banner2.jpg",
       
        },
        {
          image: "https://i.ibb.co/gtCZxfL/apple-ad-banner3.jpg",
         
        },
        {
          image: "https://i.ibb.co/wJPTyf7/apple-ad-banner4.jpg",
         
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

AppleItems.propTypes = {
    
};

export default AppleItems;