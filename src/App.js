import "./App.css";
import Welcome from "./components/Welcome";
import Excuse from "./components/Excuse";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Excuse />
      <Menu />
    </div>
  );
}

export default App;
