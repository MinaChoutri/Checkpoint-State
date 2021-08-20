import logo from "./logo.svg";
import "./App.css";
// import { Header } from "./Components/job/Header";
// import { Job } from "./Components/job/Job";
//import { Banque } from "./Components/Banque/Banque";
import CheckpointState from "./Components/CheckpointState/CheckpointState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckpointState />
      </header>
    </div>
  );
}

export default App;
