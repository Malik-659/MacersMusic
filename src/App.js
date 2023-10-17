import "./App.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import SideBar from "./components/SideBar/SideBar";
import MainRoutes from "./routing/MainRoutes";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainRoutes />
      <MusicPlayer />
    </div>
  );
}

export default App;
