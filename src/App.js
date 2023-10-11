import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import MusicCreate from "./components/musics/MusicCreate";
import MainRoutes from "./routing/MainRoutes";
function App() {
  return (
    <>
      <SideBar />
      <MainRoutes />
      <MusicCreate />
    </>
  );
}

export default App;
