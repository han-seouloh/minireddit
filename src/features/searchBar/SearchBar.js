import { useDispatch, useSelector } from 'react-redux';
import { selectMenu, toggleMenu } from '../menuBar/menuBarSlice';

//Icons
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi';

//Styles local-scoped
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const {menu} = useSelector(selectMenu);
  const dispatch = useDispatch();

  //Event handlers
  const handleMenuClick = () => {
      dispatch(toggleMenu());
  }

  return (
    <div id='searchbar' className={styles.header}>
      {menu
        ? <BiMenuAltLeft onClick={handleMenuClick} className={styles.menuButton} />
        : <BiMenu onClick={handleMenuClick} className={styles.menuButton} />
      }
      <a href='#top' className={styles.logo}> {/*Remember to fill in href*/}
        <FaReddit className={styles.logoIcon} />
        <span>MINI</span>Reddit
      </a>
      <form className={styles.form}>
        <input type='text' placeholder="Search" className={styles.searchBar}/>
        <button type='submit' className={styles.submit}>
          <HiOutlineSearch />
        </button>
      </form>
    </div>
  )
}