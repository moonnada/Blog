import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Setting />
    </div>
  );
}

export default App;
