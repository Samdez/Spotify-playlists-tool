import Axios from "axios";
import { useContext, useEffect } from "react";
import PlaylistCard from "./PlaylistCard";
import { PlaylistsContext } from "./PlaylistsContext";

const PlaylistsCards = () => {
  const [playlists, setPlaylists] = useContext(PlaylistsContext);
  useEffect(() => {
    Axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: 'Bearer BQCfyOEFK-lmE37W_hzDT6Flh431ANTp4QExIXZk2ff3k2h8QTDSGXS7sc0DuK4XypOYbF8T13-2CqN90Wp9eNUuaASfT7-gIYHZT1zO_cMj_cOprplWnnkou5n5WxdJpAE8AgwJev0N3zVFUFN97caA0w',
      }
    })
    .then((response) => {
      setPlaylists(response.data.items);
      console.log(playlists);
    })
  }, []);
  return ( 
    <div>
      {playlists.map((playlist) => {
        return <PlaylistCard name={playlist.name} img={playlist.images[0].url} />
      })}
     {/* <p>{playlists.items[0].name}</p> */}
      </div>
   );
}
 
export default PlaylistsCards;