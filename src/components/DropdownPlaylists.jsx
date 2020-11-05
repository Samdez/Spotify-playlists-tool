import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { PlaylistsContext } from "./PlaylistsContext";

const DropdownPlaylists = () => {
  const [playlists, setPlaylists] = useContext(PlaylistsContext);
   
   
      playlists.map(playlist => {
        
          return(
          <p>{playlist.name}</p>
          )
      })
//     <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Select your playlist
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     {playlists.map((playlist, index) => {
//       return <Dropdown.Item href="#/action-1" key={index} >{playlist}</Dropdown.Item>
//     })}
//   </Dropdown.Menu>
// </Dropdown>
  
}
 
export default DropdownPlaylists;