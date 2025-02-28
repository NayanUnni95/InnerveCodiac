import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';

const ImageCarousel = ({ imgSet, dir }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        speed={1500}
        loop={true}
        dir={dir}
      >
        {imgSet.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
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
  );
};

export default ImageCarousel;
