// Aos
import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Css/Feedback.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../Css/Projects.css";

const projects = [
  {
    title: "Burger",
    subtitle: "(Food)",
    description:
      "This provides all type of burger thatb you can order online. they have best reviews and they delevery on time.",
    image: "./public/Projects/Burger.png",
    link: "",
    tags: [
      "#HTML",
      "#Css",
      "#Bootstrap",
      "#Java script",
      "#react.js",
      "#Figma",
    ],
    align: "left",
    color: "cyan",
  },
  {
    title: "Technical Store",
    subtitle: "(Produts)",
    description:
      "Here you can buy any product like smart phone , laptops , earphones and etc. at 45% discount.",
    image: "./public/Projects/Laptop.png",
    link: "",
    tags: [
      "#HTML",
      "#Css",
      "#Bootstrap",
      "#Java script",
      "#react.js",
      "#Figma",
    ],
    align: "right",
    color: "cyan",
  },
  {
    title: "Cloths Center",
    subtitle: "(Cloths)",
    description:
      "Here you can buy cloths we have many brand cloths like zara , H&M , gucci etc. ",
    image: "./public/Projects/Cloths.png",
    link: "",
    tags: [
      "#HTML",
      "#Css",
      "#Bootstrap",
      "#Java script",
      "#react.js",
      "#Figma",
    ],
    align: "left",
    color: "cyan",
  },
  {
    title: "Edusity",
    subtitle: "(Educational and Coaching )",
    description:
      "US-based English Coach's website for guiding coaches. Improved existing look and added new features and sections.",
    image: "./public/Projects/Edusity.png",
    link: "",
    tags: [
      "#HTML",
      "#Css",
      "#Bootstrap",
      "#Java script",
      "#react.js",
      "#Figma",
    ],
    align: "right",
    color: "cyan",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 50,
      delay: 1,
      easing: "ease",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <section className="latest-work-container">
        <h2 className="client-text" data-aos="zoom-in">
          Projects
        </h2>
        <div className="timeline-wrapper">
          <div className="vertical-line "></div>

          {projects.map((project, idx) => {
            const isLeft = project.align === "left";
            return (
              <div
                key={idx}
                className={`project-block ${isLeft ? "" : "reverse"}`}
              >
                {/* Image */}
                <div
                  className="project-image-wrap mt-5 tooltip-container"
                  data-aos="fade-right"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="tooltip-text">
                    Details are available to the side.
                  </div>
                </div>

                {/* Connector */}
                <div className="connector">
                  <div className={`dot dot-${project.color}`}></div>
                  <div
                    className={`line line-${project.color} ${
                      isLeft ? "left" : "right"
                    }`}
                  ></div>
                </div>

                {/* Text Content */}
                <div className="project-content" data-aos="fade-up-left">
                  <h3 className={`project-title title-${project.color} `}>
                    {project.title}
                  </h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag, i) => (
                      <li key={i} className="tag-item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <div>
            <h1 className="client-text" data-aos="zoom-in">
              What my clients are saying.
            </h1>
          </div>
        </div>
      </section>
      <Swiper
        data-aos="flip-down"
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
          <img src="./Feedback/saatvik.webp" />
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

export default Projects;
