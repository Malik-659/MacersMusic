import "./App.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

import SideBar from "./components/SideBar/SideBar";
import Login from "./components/account/Login";
import MusicCreate from "./components/musics/MusicCreate";
import MusicList from "./components/musics/MusicList";
import MainRoutes from "./routing/MainRoutes";
function App() {
  return (
    <>
      <SideBar />
      <MainRoutes />
      <MusicPlayer />
      <MusicList />   
    </>
  );
}

export default App;
