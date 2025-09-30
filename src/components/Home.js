import React  from "react";
import { useState } from "react";
import Intro from "./Intro";
import Podcasts from "./Podcasts";
import Reading from "./Reading";
import Logo from "../Logo.JPG"
import Transition from "../transition.png"
import Footer from "./Footer";
import Listening from "./Listening";



const Home = () => {

  const [showHomepage, setShowHomepage] = useState(false);



  const handleContinueClick = () => {
    setShowHomepage(true);
  };




  return (
    <div >
    {showHomepage ? (
      <div data-aos="fade" className="homepage" >
        <div className='pageSection4'> 
        <img className='logo-main' src={Logo} alt="Source Node Logo"/>
        </div>

        
        <Intro />
        
        <img className='divider' src={Transition} alt="decorative flourish"/>
        <div className='links'>
        <Reading/>

        <Listening/>
        </div>

        <Podcasts/>

        <Footer/>
      </div>
    ) : (
      <div className="matrix-video app">
          <video
            src={
           'https://res.cloudinary.com/dkkwdvec2/video/upload/v1692113828/My_Movie_1_tknfcn.mov'
            }
            loop
            autoPlay
            muted
            style={{
              height: '100vh',
              width: '100vw',
              position: 'absolute',
              objectFit: 'cover',
              /* support for plugin https://github.com/bfred-it/object-fit-images */
              fontFamily: 'object-fit: cover',
              top: 0,
              left: 0,
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
    
        
        <div className="popup">
       
          <button class='glowing-btn' onClick={handleContinueClick}><span class='glowing-txt exitFont'>EXIT</span></button>
        </div>
      </div>
    )}
</div>

  );
};

export default Home;