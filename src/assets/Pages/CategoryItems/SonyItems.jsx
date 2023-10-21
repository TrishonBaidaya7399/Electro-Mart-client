// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';
import Products from '../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const SonyItems = () => {
  const loadedProducts = useLoaderData();
  const products = loadedProducts.filter(product => product.brand === "Sony")
  console.log(products);
    const data = [
        {
          image: "https://i.ibb.co/wgJqCNm/sony-add-banner1.jpg",
       
        },
        {
          image: "https://i.ibb.co/Nnhv8Sq/sony-ad-02.jpg",
       
        },
        {
          image: "https://i.ibb.co/t25Sy2T/sony-ad-03.jpg",
         
        },
        {
          image: "https://i.ibb.co/y8cGt83/sony-add-banner2.jpg",
         
        },
        {
          image: "https://i.ibb.co/xfYkN9t/sony-add-banner3.jpg",
        
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

SonyItems.propTypes = {
    
};

export default SonyItems;