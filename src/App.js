import './App.css';
import Login from './Login'
import React,{useEffect,useState} from 'react';
import { getTokenFromUrl } from './Musikx';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer';

const serviceApi=new SpotifyWebApi();

function App({}) {

  //const [token,setToken]=useState(null)

  //Extraccion de datos de dataLayer values
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Correr el codigo bajo una condicion dada

  useEffect( ()=>{
    const hash=getTokenFromUrl()
    
    window.location.hash="";
    
    const _token=hash.access_token;
    
    if(_token){

      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })

      //setToken(_token)

      serviceApi.setAccessToken(_token)

      serviceApi.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user:user
        })
      });

      serviceApi.getUserPlaylists().then((playlists) => {
        dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
        });
      });


      serviceApi.getPlaylist('37i9dQZF1DX8SQSF0c2W7v').then(response=>{
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:response
        })
      })




    }


  },[] );


  return (
    <div className="App">
      {
        token?(<Player serviceApi={serviceApi}/>):(<Login/>)
      }
      
    </div>
  );
}

export default App;
