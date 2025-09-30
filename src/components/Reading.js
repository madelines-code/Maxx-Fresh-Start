import React from "react";
import BitcoinMag from "../bitcoin-mag-logo.png"


const Reading = () => {

  return (
    <div className='pageSection2'>
      <div className='title'>
      <h2>Written Word</h2>
      </div>
    <div className='podcasts'>
    
    <a href="https://bitcoinmagazine.com/authors/source-node" target="_blank" rel="noreferrer">
   <div className='overlay'>
   <img className='logo' src={BitcoinMag} alt="Bitcoin Magazine Logo"/>

 </div></a>



        </div>
       
    </div>

  );
};

export default Reading;