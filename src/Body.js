import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DurationIcon from '@material-ui/icons/AccessTimeSharp';
import SongRow from './SongRow'

function Body({serviceApi}) {

    const [{discover_weekly},dispatch]=useDataLayerValue()

    return (
        <div className="body">
           <Header serviceApi={serviceApi}></Header>

           <div className="body__info">
               <img src={discover_weekly?.images[0].url} alt="" />
               <div className="body__infoText">
                <strong>Lista de reproduccion</strong>
                <h2>Lista semanal</h2>
                <p>{discover_weekly?.description}</p>
               </div>
               
           </div>
           <div className="body__songs">
               <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
                    <FavoriteIcon className="large"></FavoriteIcon>
                    <MoreHorizIcon></MoreHorizIcon>
               </div>

               {discover_weekly?.tracks.items.map(item=>(
                   <SongRow track={item.track}/>
               ))}
           </div>
        </div>
    )
}

export default Body
