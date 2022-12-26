import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../menuBar/menuBarSlice';

//Icons
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';

//Styles local-scoped
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const [visibility, setVisibility] = useState(true);
  const [scrollDir, setScrollDir] = useState("down");
  const dispatch = useDispatch();

  /*useEffect Hook*/
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
      if (scrollDir === 'up') {
        setVisibility(true);
      } else if (scrollDir === 'down') {
        setVisibility(false);
      };
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  /*Event Handlers*/
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  }

  return (
    <div id='searchbar' className={`${styles.searchBarContainer} ${visibility ? styles.returnSearchBar : styles.hideSearchBar }`}>
      <BiMenu onClick={handleMenuClick} className={styles.menuButton}/>
      <a href='#top' className={styles.logo}> {/*Remember to fill in href*/}
        <FaReddit className={styles.logoIcon} />
        <span>MINI</span>reddit
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