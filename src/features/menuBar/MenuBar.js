import { useSelector, useDispatch } from 'react-redux';
import { selectMenu, toggleMenu } from './menuBarSlice';
import { Subreddit } from '../subreddit/Subreddit';

//Import icon
import { RiArrowLeftSLine } from 'react-icons/ri';

//Styles local-scoped
import styles from './MenuBar.module.css';

//Default subreddits
const subreddits = [
  'all',
  'askreddit',
  'worldnews',
  'explainlikeimfive',
  'outoftheloop',
  'todayilearned',
  'nottheonion',
  'showerthoughts',
  'relationship_advice'
];

export const MenuBar = () => {
  const {menu} = useSelector(selectMenu);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div id='menubar' className={`${styles.menuBar} ${menu ? styles['returnMenuBar'] : styles['hideMenuBar']}`}>
      <div className={styles['hide-menu']} >
        <RiArrowLeftSLine className={styles.arrowIcon} onClick={handleMenuClick} />
      </div>
      <div className={styles['subreddit-menu']} >
        {subreddits.map(sub => <Subreddit subname={sub} />)}
      </div>
    </div>
  );
};