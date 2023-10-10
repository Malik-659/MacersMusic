import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import MusicCreate from "./components/musics/MusicCreate";
import MusicList from "./components/musics/MusicList";

function App() {
  return (
    <>
      <SideBar />
      <MusicCreate />
      <MusicList />
    </>
  );
}

export default App;
