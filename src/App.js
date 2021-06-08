
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Menubar from "./component/Menubar.js"
import Searchbar from "./component/Searchbar.js"
import ListItem from "./component/ListItem.js"
function App() {
  return (
    <div className="app">
      <Menubar/>
      <Searchbar/>
      <ListItem/>
    </div>
  );
}

export default App;
