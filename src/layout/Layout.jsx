import Navbar from '../components/Navbar/Navbar';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
    </div>
  );
}

export default Layout;
