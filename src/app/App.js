import './App.css';
import { SearchBar } from '../features/searchBar/SearchBar';

function App() {

  const hideSearch = (e) => {
    const searchBar = document.getElementById('searchbar')
    
    if (e.deltaY > 0) {
      searchBar.classList.remove('returnSearchBar');
      searchBar.classList.add('hideSearchBar');
    } else {
      searchBar.classList.remove('hideSearchBar');
      searchBar.classList.add('returnSearchBar');
    }
    
  }

  return (
    <div className="App" onWheel={hideSearch}>
      <SearchBar/>
    </div>
  );
}

export default App;