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
    link: "https://tastyeburgers.netlify.app/",
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
    title: "FoodCenter",
    subtitle: "(Food)",
    description:
      "Here you can order food at 45% discount or delievery within 15 minuts.",
    image: "./public/Projects/tomato.png",
    link: "https://foodcenters.netlify.app/",
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
    link: "https://shopingcenter.netlify.app/",
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
    title: "Elito",
    subtitle: "(informative )",
    description:
      "This website is a dummy from elito. i make this website for practice.",
    image: "./public/Projects/Elito.png",
    link: "https://elitos.netlify.app/",
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
    title: "Gradient Color",
    subtitle: "(Make your own gradient color)",
    description:
      "In this website you can make your own favourite gradient color in just 1 minuts.",
    image: "./public/Projects/gradient-color.png",
    link: "https://makegradientcolor.netlify.app/",
    tags: ["#HTML", "#Css", "#Java script", "#Figma"],
    align: "left",
    color: "cyan",
  },
  {
    title: "Weather",
    subtitle: "(Weather forcast )",
    description:
      "on this website you can know the weather condition in your state or any location.",
    image: "./public/Projects/Weather.png",
    link: "https://weatherforcastes.netlify.app/",
    tags: ["#HTML", "#Css", "#Java script", "#Figma"],
    align: "right",
    color: "cyan",
  },
];

const Projects = () => {
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
                    Details are available on the side.
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
                  <a className="sitelink" target="_blank" href={project.link}>
                    <i class="fa-solid fa-link"></i> {project.link}
                  </a>
                  <ul className="project-tags pt-3">
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
