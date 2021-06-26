import Login from './Components/Login';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getTokenFromResponse } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';
import Player from './Components/Player'

const spotify = new SpotifyWebApi();

function App() {

  // const [token,setToken] = useState(null);
  //Run code based on given condition
  // useEffect();

  const [{user,token},dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;
    // console.log(_token);
    if(_token){
      // setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        // console.log(user)
        //Dispatching action when we get the user
        dispatch({
          type:"SET_USER",
          user:user
        })
      })

      console.log(spotify.getUserPlaylists())

      spotify.getUserPlaylists().then((playlists)=>{
        console.log("INSIDE APP.JS SPOTIFY>GETPLAYLIST",playlists)
        dispatch({
          type:"SET_PLAYLIST",
          playlists:playlists
        })
      })

      spotify.getPlaylist("37i9dQZEVXcDn5ATDdk9B5").then((response) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      })

    }
    // console.log("I have a token",token);
    
  },[]);

  console.log("I am the user after dispatch",user)
  console.log("I am the token after dispatch",token)

  return (
    <div className="App">
      {
        token?<Player spotify={spotify}/>:<Login/>
      }       
    </div>
  );
}

export default App;
