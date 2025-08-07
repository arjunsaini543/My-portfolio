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
    title: "Harigurus",
    subtitle: "(Event Booking)",
    description:
      "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
    image: "./macbook 1.png",
    link: "",
    tags: [
      "#react.js",
      "#express.js",
      "#node.js",
      "#swiper.js",
      "#mongoDB",
      "#mongoose",
      "#css",
      "#javascript",
      "#figma",
    ],
    align: "left",
    color: "cyan",
  },
  {
    title: "Web Dev English",
    subtitle: "(Coaching and Consulting)",
    description:
      "US-based English Coach's website for guiding coaches. Improved existing look and added new features and sections.",
    image: "/macbook 1.png",
    link: "",
    tags: [
      "#react.js",
      "#next.js",
      "#css",
      "#figma",
      "#javascript",
      "#mongoDB",
    ],
    align: "right",
    color: "cyan",
  },
  {
    title: "Web Dev English",
    subtitle: "(Coaching and Consulting)",
    description:
      "US-based English Coach's website for guiding coaches. Improved existing look and added new features and sections.",
    image: "/macbook 1.png",
    link: "",
    tags: [
      "#react.js",
      "#next.js",
      "#css",
      "#figma",
      "#javascript",
      "#mongoDB",
    ],
    align: "left",
    color: "cyan",
  },
  {
    title: "Web Dev English",
    subtitle: "(Coaching and Consulting)",
    description:
      "US-based English Coach's website for guiding coaches. Improved existing look and added new features and sections.",
    image: "/macbook 1.png",
    link: "",
    tags: [
      "#react.js",
      "#next.js",
      "#css",
      "#figma",
      "#javascript",
      "#mongoDB",
    ],
    align: "right",
    color: "cyan",
  },
  // ... other projects (keep same structure) ...
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      // once: false,
      // mirror: true,
      once: false, // set to false to animate every time you scroll
      offset: 50, // how far from the element before triggering (in px)
      delay: 1, // delay in ms before animation starts
      easing: "ease", // easing type
      mirror: true, // whether elements animate out while scrolling past
      anchorPlacement: "top-bottom", // where in viewport the animation should trigger
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
                <div className="project-image-wrap mt-5" data-aos="fade-right">
                  {/* <a href={project.link} target="_blank" rel="noreferrer"> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  {/* </a> */}
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
          <img src="./saatvik.webp" />
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
          <img
            src="./kira.webp"
            // style={{ height: "18rem", width: "20rem" }}
          />
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
          <img src="./Srihari.webp" />
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
