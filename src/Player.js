import React from 'react'
import './player.css'
import SideBar from './SideBar'
import Body from './Body'
import Footer from './Footer'
function Player({serviceApi}){
    return(
        <div>
      {/* Player Container */}
      <div className="player__body">
        <SideBar />
        <Body serviceApi={serviceApi}/>             
      </div>  
        <Footer />
    </div>
    )

}


export default Player