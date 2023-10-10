import "./App.css";
import MusicCreate from "./components/musics/MusicCreate";
import MusicList from "./components/musics/MusicList";

function App() {
  return (
    <div className="App">
      <MusicCreate />
      <MusicList />
    </div>
  );
}

export default App;
