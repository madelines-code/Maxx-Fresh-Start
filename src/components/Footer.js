import React from "react"
import NOSTR from "../nostr-logo-white-on-purple.svg"


const Footer = () => {
    return (
        <div className='footer'>
            <div className='grayOverlay'>
            <div className='nostrBox'>
                      <div className='title'>
      <h2 className='contact'>Contact</h2>
      {/* <h4>By Source Node</h4> */}
      </div>
            <a href="https://www.whynostr.com/" target="_blank" rel="noopener noreferrer">

        <img className='nostr' src={NOSTR} alt="decorative flourish"/> 
        </a>
        <p className='nostrText'>npub1jfn4ghffz7uq7urllk6y4rle0yvz26800w4qfmn4dv0sr48rdz9qyzt047</p>
        </div>
            </div>
        </div>

    );
};


export default Footer;