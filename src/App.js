import Nav from './components/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './components/User';
import DropdownPlaylists from './components/DropdownPlaylists';
import { PlaylistsProvider } from './components/PlaylistsContext';
import PlaylistsCards from './components/PlaylistsCards';

function App() {
  return (
    <PlaylistsProvider>
    <div className="App">
      <Nav />
      <User />
      <PlaylistsCards />
    </div>
    </PlaylistsProvider>
  );
}

export default App;
