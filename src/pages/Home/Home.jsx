import AboutUS from '../../components/AboutUS/AboutUS';
import CardExpand from '../../components/CardExpand/CardExpand';
import CardRevel from '../../components/CardRevel/CardRevel';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <AboutUS />
      {/* <CardRevel /> */}
      <CardExpand />
    </div>
  );
}

export default Home;
