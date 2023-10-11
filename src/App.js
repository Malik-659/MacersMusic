import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Register from "./components/account/Register";
import MusicCreate from "./components/musics/MusicCreate";
import MusicList from "./components/musics/MusicList";

function App() {
  return (
    <>
      <SideBar />
      <MusicCreate />
      <MusicList />
      <Register />
    </>
  );
}

export default App;
