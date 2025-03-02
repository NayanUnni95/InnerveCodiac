import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import GradientText from '../../components/GradientText/GradientText';
import styles from './Brochure.module.css';
import './Brochure.css';

function Brochure() {
  const [width, setWidth] = useState(window.screen.width);
  const driveLink = `https://drive.google.com/file/d/16Cy6UNWaaD8A-EZ-v7EcOZGrnrMa-2Jl/view`;
  const imageSet = [
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922588/WhatsApp_Image_2025-03-02_at_6.48.18_PM_gk9zgt.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922588/WhatsApp_Image_2025-03-02_at_6.48.18_PM_1_hx8xwf.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922589/WhatsApp_Image_2025-03-02_at_6.48.19_PM_1_famigm.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922588/WhatsApp_Image_2025-03-02_at_6.48.17_PM_tpnqvq.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922588/WhatsApp_Image_2025-03-02_at_6.50.13_PM_jynplf.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922589/WhatsApp_Image_2025-03-02_at_6.48.19_PM_qselbk.jpg',
    'https://res.cloudinary.com/dvcavdo7y/image/upload/v1740922589/WhatsApp_Image_2025-03-02_at_6.47.40_PM_pvhacx.jpg',
  ];
  const navigate = (url) => window.open(url, '_blank');
  window.addEventListener('resize', () => setWidth(window.screen.width));
  return (
    <div className={styles.brochureOuterContainer}>
      <div className={styles.brochureInnerContainer}>
        <div className={styles.lableSection}>
          <span className={styles.festName}>
            <GradientText
              colors={['red', 'white', 'red', 'white', 'red']}
              animationSpeed={20}
              showBorder={false}
              className="custom-festName"
            >
              Innerve'25
            </GradientText>
          </span>
          <span className={styles.brochureLabel}>
            <GradientText
              colors={['red', 'white', 'red', 'white', 'red']}
              animationSpeed={20}
              showBorder={false}
              className="custom-brochureLabel"
            >
              Brochure
            </GradientText>
          </span>
        </div>
        <div className={styles.imageSection}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="custom-swiper"
            spaceBetween={10}
            slidesPerView={
              width <= 425 ? 1 : width > 425 && width <= 768 ? 2 : 3
            }
            speed={1500}
            autoplay={{ delay: 8000 }}
            navigation={width > 425 && true}
            pagination={{ clickable: true }}
          >
            {imageSet.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Ppage ${index}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.accessContainer}>
          <button
            className={styles.downloadBtn}
            onClick={() => {
              navigate(driveLink);
            }}
          >
            Download
            <IoCloudDownloadOutline color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
