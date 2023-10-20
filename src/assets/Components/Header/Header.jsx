// import PropTypes from 'prop-types';
import { Carousel } from 'react-carousel-minimal';

const Header = () => {
    const data = [
        {
          image: "https://i.ibb.co/g66Z98r/samsung-ad-01.jpg",
       
        },
        {
          image: "https://i.ibb.co/PM5tgg0/sony-ad-03.jpg",
       
        },
        {
          image: "https://i.ibb.co/nbbqqGr/ad1.jpg",
         
        },
        {
          image: "https://i.ibb.co/mqkLtqc/samsung-ad-03.jpg",
         
        },
        {
          image: "https://i.ibb.co/0XQwTBS/sony-ad-01.jpg",
        
        },
      ];
    
     

      return (
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div>
              <Carousel
                data={data}
                time={2000}
                width="100%"
                height="100vh"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                style={{
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </div>
      );
    }

Header.propTypes = {
    
};

export default Header;