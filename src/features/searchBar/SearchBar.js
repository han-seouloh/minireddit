import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.header}>
      <a href='#top' className={styles.logo}>
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