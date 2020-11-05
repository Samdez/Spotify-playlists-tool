import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PlaylistsContext } from "./PlaylistsContext";


const User = () => {
  const [userId, setUserId] = useState();
 
  useEffect(() => {
    Axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer BQCfyOEFK-lmE37W_hzDT6Flh431ANTp4QExIXZk2ff3k2h8QTDSGXS7sc0DuK4XypOYbF8T13-2CqN90Wp9eNUuaASfT7-gIYHZT1zO_cMj_cOprplWnnkou5n5WxdJpAE8AgwJev0N3zVFUFN97caA0w',
      }
    })
    .then((response) => {
      setUserId(response.data.id);
    })
  }, []);
  return ( 
    <div>
      <h1>Hello {userId}</h1>
    </div>
   );
}
 
export default User;
