import './App.css';
import { SearchBar } from '../features/searchBar/SearchBar';
import { MenuBar } from '../features/menuBar/MenuBar';
import { Posts } from '../features/posts/Posts';

function App() {

  return (
    <div className="App" >
      <header>
        <SearchBar />
      </header>
      <aside>
        <MenuBar />
      </aside>
      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;