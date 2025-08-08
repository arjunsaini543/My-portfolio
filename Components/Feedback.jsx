// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Css/Feedback.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Feedback = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* slider  1 */}
        <SwiperSlide>
          <img src="./public/Feedback/saatvik.webp" />
          <h2 className="swiper-h2">Rakesh sharma</h2>
          <h6 className="swiper-h6">
            Arjun was a wonderful developer to work with! He anticipated
            everything I need to consider for my website. He also went the extra
            mile and added details that I hadn't considered! He is helping my
            business grow, and I will definitely work with him again!”
          </h6>
        </SwiperSlide>

        {/* slider  2 */}
        <SwiperSlide>
          <img src="./Feedback/kira.webp" />
          <h2 className="swiper-h2">Emily Williams</h2>
          <h6 className="swiper-h6">
            Arjun was a wonderful developer to work with! He anticipated
            everything I need to consider for my website. He also went the extra
            mile and added details that I hadn't considered! He is helping my
            business grow, and I will definitely work with him again!”
          </h6>
        </SwiperSlide>

        {/* slider  3 */}
        <SwiperSlide>
          <img src="./Feedback/Srihari.webp" />
          <h2 className="swiper-h2">Mohit pandit</h2>
          <h6 className="swiper-h6">
            Arjun was a wonderful developer to work with! He anticipated
            everything I need to consider for my website. He also went the extra
            mile and added details that I hadn't considered! He is helping my
            business grow, and I will definitely work with him again!”
          </h6>
        </SwiperSlide>

        {/* slider  4 */}
        <SwiperSlide>
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile 4"
          />

          <h2 className="swiper-h2">Jasica willson</h2>
          <h6 className="swiper-h6">
            Arjun was a wonderful developer to work with! He anticipated
            everything I need to consider for my website. He also went the extra
            mile and added details that I hadn't considered! He is helping my
            business grow, and I will definitely work with him again!”
          </h6>
        </SwiperSlide>

        {/* slider  5 */}
        <SwiperSlide>
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Profile 3"
          />
          <h2 className="swiper-h2">Mickey Tyson</h2>
          <h6 className="swiper-h6">
            Arjun was a wonderful developer to work with! He anticipated
            everything I need to consider for my website. He also went the extra
            mile and added details that I hadn't considered! He is helping my
            business grow, and I will definitely work with him again!”
          </h6>
        </SwiperSlide>

        {/* slider  6 */}
        <SwiperSlide>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile 1"
          />
          <h2 className="swiper-h2">Alex wilson</h2>
          <h6 className="swiper-h6">
            Arjun was a wonderful developer to work with! He anticipated
            everything I need to consider for my website. He also went the extra
            mile and added details that I hadn't considered! He is helping my
            business grow, and I will definitely work with him again!”
          </h6>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Feedback;
