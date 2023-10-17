import "./App.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import SideBar from "./components/SideBar/SideBar";
import MainRoutes from "./routing/MainRoutes";


function App() {
  return <div className="App">
    <SideBar className = "max-md:hidden"/>
    <MainRoutes/>
    <MusicPlayer/>
  </div>;
}

export default App;
