import styles from './Hackathon.module.css';
import hackathon_img from '../../assets/images/home/TwoThousandSixteen.png';
import Countdown2 from '../../components/daisyUI/countdown2';
import FAQSection from '../../components/hackathon/FAQ';
import transition from '../../components/Transition/Transition';

function Hackathon() {
  const navigate = (url) => window.open(url, '_blank');
  return (
    <div className={styles.main_container}>
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1 className={styles.hackathon_name}>CodeQuest 2025</h1>
          <p className={styles.hackathon_quote}>Innovate | Code | Conquer</p>
          <p className={styles.hackathon_about}>
            Compete in an electrifying 10-hour coding marathon, where innovation
            meets collaboration. Solve real-world challenges, develop
            groundbreaking solutions, and showcase your coding prowess in front
            of industry experts.
          </p>
          <div className={styles.event_info}>
            <h2>📅 March 8, 2025</h2>
            <h2>⏳ 10 Hours of Innovation</h2>
          </div>
          <button
            className={styles.register_btn}
            onClick={() => {
              navigate('https://forms.gle/7emPk5rkpHjMwfw37');
            }}
          >
            Register Now
          </button>
        </div>
        <div className={styles.hero_image_container}>
          <img
            src={hackathon_img}
            alt="Hackathon"
            className={styles.hackathon_main_image}
          />
        </div>
      </section>

      <section className={styles.countdown_section}>
        <div className={styles.countdown_wrapper}>
          <h2 className={styles.startsin}> STARTS IN:</h2>
          <Countdown2 />
        </div>
      </section>

      <section className={styles.details_section}>
        <div className={styles.detail_card}>
          <h3>💰 Registration Fee</h3>
          <p>
            <span className={styles.regprice}>₹100</span> per participant
          </p>
        </div>
        <div className={styles.detail_card}>
          <h3>📜 Guidelines</h3>
          <ul className={styles.ulstyle}>
            <li>10-hour non-stop coding challenge</li>
            <li> Teams of up to 4 members</li>
            <li> Problem statements revealed on-site</li>
            <li> Participants must bring their own laptops</li>
            <li> Develop a prototype or structured idea</li>
          </ul>
        </div>
        <div className={styles.detail_card}>
          <h3>🏆 Prize Pool</h3>
          <p className={styles.price}>₹10,000+</p>
        </div>
      </section>

      <section className={styles.faq_section}>
        <FAQSection />
      </section>

      <section className={styles.contact_section}>
        <h2 className={styles.contact_title}>📞 Contact Us</h2>
        <div className={styles.contact_details}>
          <p>
            <strong>Sandeep Kumar</strong> - +91 9876543210
          </p>
          <p>
            <strong>Clifin Cletus</strong> - +91 8765432109
          </p>
        </div>
      </section>
    </div>
  );
}

export default transition(Hackathon);
