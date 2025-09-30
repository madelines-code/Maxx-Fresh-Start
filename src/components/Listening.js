import React from "react";
import Spotify from "../Spotify_icon.png"
import Fountain from "../fountain-app-icon.png"


const Listening = () => {

  return (
    <div className='pageSection2'>
      <div className='title'>
      <h2>Spoken Word</h2>
      {/* <h4>By Source Node</h4> */}
      </div>
    <div className='podcasts'>
    
  <a href="https://fountain.fm/show/CFEwKT6KYgMfH21plkku" target="_blank" rel="noreferrer">
     <div className='overlay'>
     <img className='logo' src={Fountain} alt="Fountain Logo"/>
    {/* <p className='subtitle font'>Listen On Fountain</p> */}
   {/* <button className='devButton'>Listen on Fountain</button> */}
   </div></a>


     <a href="https://open.spotify.com/show/5peOhK15XYH9RAbItVmxac?si=DALaTfC8RZS0ArQiTSzqOw" target="_blank" rel="noreferrer">
     <div className='overlay'>
        <img className='logo' src={Spotify} alt="Spotify Logo"/>
    {/* <p className='subtitle font'>Listen On Spofity</p> */}
   {/* <button className='devButton'>Listen on Spotify</button> */}
   </div></a>



        </div>

    </div>

  );
};

export default Listening;