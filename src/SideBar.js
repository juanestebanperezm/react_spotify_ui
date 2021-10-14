import React,{useStateValue} from "react";
import './sidebar.css'
import nice from './assets/nice.png'
import SideBarOption from "./SideBarOption";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusicOutlined'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import { useDataLayerValue } from "./DataLayer";

function SideBar(){


    const [{playlists},dispatch]=useDataLayerValue()
    console.log(playlists)
    return(
        <div className="sidebar">
            <img className="sidebar__logo" src={nice} alt="" />

            <SideBarOption Icon={HomeIcon} title="Inicio"/>
            <SideBarOption Icon={SearchIcon} title="Busqueda"/>
            <SideBarOption Icon={LibraryMusicIcon} title="Tu libreria"/>
            <br />
            <strong className="sidebar__title">Lista de reproduccion</strong>
            <hr />


            {playlists?.items?.map((playlist) => (
          <SideBarOption title={playlist.name} />
        ))}
           

        </div>
    )
}


export default SideBar