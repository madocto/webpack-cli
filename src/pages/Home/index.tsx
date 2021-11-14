import styles from './index.less';
import Icon from '@/components/Icon';

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Icon name="logo" className={styles.logo} color="#fca300" />
    </div>
  );
};

export default Home;
