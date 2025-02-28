/*import './Hackathon.css';
import styles from './Hackathon.module.css';
import hackathon_img from '../../assets/images/TwoThousandSixteen.png';
import Countdown  from '../../components/daisyUI/Countdown'
import FAQSection from '../../components/hackathon/FAQ'
import Timeline from '../../components/daisyUI/Timeline'

function Hackathon() {
  return (
    <div className={styles.main_container}>
      <div className={styles.homediv}>
        <img
          src={hackathon_img}
          alt="hackathon-img"
          className={styles.hackathon_main_image}
        />

        <h1 className={styles.hackathon_name}>CodeQuest</h1>
        <p className={styles.hackathon_quote}>Build | Develop | Innovate</p>
        <p className={styles.hackathon_about}>
          Welcome to CodeQuest, a premier innovation-driven event designed to
          bring together developers, designers and problem-solvers to
          collaborate on groundbreaking solutions. Whether you are an experienced
          professional or an aspiring innovator, this hackathon provides a
          platform to test your skills, push the boundaries of technology, and
          create impactful project.
        </p>
        <h1 className={styles.hacktime}> 7,8 March</h1> 
        <h1 className={styles.hacktime1}> 24 Hours</h1> 
      </div>
      <p className={styles.startsin}> Starts in:</p>
      <div className={styles.countdown}>
          <Countdown/>
      </div>

      <div className={styles.workflow}></div>
      <div className={styles.details}>
        <div className={styles.details_inside}>
          <p className={`${styles.regfee} ${styles.text}`}> Registration Fee</p>
          <h1 className={styles.text}>
            {' '}
            <span className={styles.regprice}> 250 </span>per head
          </h1>
        </div>

        <div className={styles.details_inside}>
          <h1 className={styles.text}> Guidelines</h1>
          <ul className={`${styles.guidelines_ul} ${styles.text}`}>
            <li className={styles.guidelines_list}> 24 Hour hackathon</li>
            <li className={styles.guidelines_list}>
              {' '}
              A Team of maximum 4 members can participate
            </li>
            <li className={styles.guidelines_list}>
              {' '}
              Problem statements will be provided in the venue
            </li>
            <li className={styles.guidelines_list}>
              Participants should bring there own electronic equipment if needed
            </li>
          </ul>
        </div>

        <div className={styles.details_inside}>
          <p className={`${styles.prizepool} ${styles.text}`}> Prize Pool</p>
          <h1 className={styles.price}> 15k+</h1>
        </div>
      </div>
      
      <div className={styles.bgtransparent}>
        <Timeline/>
      </div>

      <div>
        <FAQSection/>
      </div>

      <div className={styles.register}>
        <h1 className={`${styles.text} ${styles.welcome}`}>
          {' '}
          WELCOMING YOU TO PARTICIPATE
        </h1>
        <div className={styles.registerbtn}>
          <button className={styles.register_btn}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;

*/

/*
import "./Hackathon.css";
import styles from "./Hackathon.module.css";
import hackathon_img from "../../assets/images/TwoThousandSixteen.png";
import Countdown from "../../components/daisyUI/Countdown";
import FAQSection from "../../components/hackathon/FAQ";
import Timeline from "../../components/daisyUI/Timeline";

function Hackathon() {
  return (
    <div className={styles.main_container}>
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1 className={styles.hackathon_name}>CodeQuest 2025</h1>
          <p className={styles.hackathon_quote}>Build | Develop | Innovate</p>
          <p className={styles.hackathon_about}>
            CodeQuest is a 10-hour coding marathon where innovation meets collaboration. Compete with top developers, solve real-world challenges, and bring your ideas to life in an electrifying environment.
          </p>
          <div className={styles.event_info}>
            <h2 className={styles.hacktime}>March 8, 2025</h2>
            <h2 className={styles.hacktime1}>10 Hours of Innovation</h2>
          </div>
          <button className={styles.register_btn}>Register Now</button>
        </div>
        <img src={hackathon_img} alt="Hackathon" className={styles.hackathon_main_image} />
      </section>

      <section className={styles.countdown_section}>
        <h2 className={styles.startsin}>Starts in:</h2>
        <Countdown />
      </section>

      <section className={styles.details_section}>
        <div className={styles.detail_card}>
          <h3>Registration Fee</h3>
          <p><span className={styles.regprice}>₹200</span> per participant</p>
        </div>
        <div className={styles.detail_card}>
          <h3>Guidelines</h3>
          <ul>
            <li>10-hour coding challenge</li>
            <li>Teams of up to 4 members</li>
            <li>Problem statements provided at the venue</li>
            <li>Participants must bring their own equipment</li>
            <li>Develop a working prototype within 10 hours or present a structured idea</li>
          </ul>
        </div>
        <div className={styles.detail_card}>
          <h3>Prize Pool</h3>
          <p className={styles.price}>₹10,000+</p>
        </div>
      </section>

      <section className={styles.bgtransparent}>
        <Timeline />
      </section>

      <section className={styles.faq_section}>
        <FAQSection />
      </section>

      <section className={styles.contact_section}>
        <h2 className={styles.contact_title}>Contact Us</h2>
        <div className={styles.contact_details}>
          <p><strong>Sandeep Kumar</strong> - +91 9876543210</p>
          <p><strong>Clifin Cletus</strong> - +91 8765432109</p>
        </div>
      </section>
    </div>
  );
}

export default Hackathon;

*/


import styles from "./Hackathon.module.css";
import hackathon_img from "../../assets/images/home/TwoThousandSixteen.png";
import Countdown2 from "../../components/daisyUI/Countdown2";
import FAQSection from "../../components/hackathon/FAQ";
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
            Compete in an electrifying 10-hour coding marathon, where innovation meets collaboration. 
            Solve real-world challenges, develop groundbreaking solutions, and showcase your coding 
            prowess in front of industry experts. 
          </p>
          <div className={styles.event_info}>
            <h2>📅 March 8, 2025</h2>
            <h2>⏳ 10 Hours of Innovation</h2>
          </div>
          <button className={styles.register_btn} onClick={()=> {
            navigate('https://forms.gle/7emPk5rkpHjMwfw37')
          }}>Register Now</button>
        </div>
        <div className={styles.hero_image_container}>
          <img src={hackathon_img} alt="Hackathon" className={styles.hackathon_main_image} />
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
          <p><span className={styles.regprice}>₹100</span> per participant</p>
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
          <p><strong>Sandeep Kumar</strong> - +91 9876543210</p>
          <p><strong>Clifin Cletus</strong> - +91 8765432109</p>
        </div>
      </section>
      
    </div>
  );
}

export default transition(Hackathon);
