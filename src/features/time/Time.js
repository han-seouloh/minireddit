import { setTime } from '../../store/postsSlice';
import { useDispatch } from 'react-redux';
import styles from './Time.module.css';

export const Time = () => {
  const dispatch = useDispatch();
  const handleChange = ({target}) => {
    dispatch(setTime(target.value));
  }

  return (
    <select name='time' className={styles['dropdown']} onChange={handleChange}>
      <option value='hour'>Now</option>
      <option value='day'>Day</option>
      <option value='month'>Month</option>
      <option value='year'>Year</option>
      <option value='all'>All Time</option>
    </select>
  );
}