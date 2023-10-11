import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Login from "./components/account/Login";
import MusicCreate from "./components/musics/MusicCreate";
import MainRoutes from "./routing/MainRoutes";
function App() {
  return (
    <>
      <SideBar />
      <MainRoutes />
    </>
  );
}

export default App;
