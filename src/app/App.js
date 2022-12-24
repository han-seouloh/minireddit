import './App.css';
import { SearchBar } from '../features/searchBar/SearchBar';
import { MenuBar } from '../features/menuBar/MenuBar';

function App() {

  return (
    <div className="App" >
      <SearchBar />
      <main>

      </main>
      <aside>
        <MenuBar />
      </aside>
    </div>
  );
}

export default App;