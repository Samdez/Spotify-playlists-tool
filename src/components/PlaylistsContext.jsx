import { createContext, useState } from "react";

export const PlaylistsContext = createContext();

export const PlaylistsProvider = (props) => {
  const [playlists, setPlaylists] = useState([]);
  return (  
    <PlaylistsContext.Provider value={[playlists, setPlaylists]}>
      {props.children}
    </PlaylistsContext.Provider>
  );
}
 
