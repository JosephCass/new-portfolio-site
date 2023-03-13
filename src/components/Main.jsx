import homeBanner from "../assets/home-banner.png";
import "../styles/Main.css";
import arrowMobile from "../assets/arrow-mobile-home.svg";
import gitMobileHome from "../assets/github-mobile-home.svg";
import linkedinMobile from "../assets/linkedin-home-logo.svg";
import backgroundMaskImgMobile from "../assets/mask-background.png";
import jsMobileLogo from "../assets/js-logo.svg";
import cssMobileLogo from "../assets/css-logo.svg";
import htmlMobileLogo from "../assets/html-logo.svg";
import reactMobileLogo from "../assets/react-logo.svg";
import linkIcon from "../assets/arrow-up-right-from-square-solid.svg";

import archStudioImg from "../assets/arch-studio.webp";
import battleShipImg from "../assets/battle-ship.png";
import memoryGameImg from "../assets/memory-game.png";
import propertyManagerImg from "../assets/property-manager.png";
import weatherAppImg from "../assets/weather-app.png";
import homeBannerDesktop from "../assets/home-banner-desktop.png";
import startImg from "../assets/star-img.svg";
import linkedinContact from "../assets/linkedin-awsome.svg";
import emailContact from "../assets/envelope-regular.svg";

export default function Main() {
  return (
    <div className="main">
      <div id="home" className="home">
        <p className="home-hello-text">Hello</p>
        <p className="home-name-text">
          I'm <span className="purple-text"> Joseph Cassinera</span>
        </p>
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/png"
            srcSet={homeBanner}
          />
          <source
            media="(min-width: 768px)"
            type="image/png"
            srcSet={homeBannerDesktop}
          />
          <img
            alt="Html, css and javascript banner icons"
            className="home-banner"
            src={homeBannerDesktop}
          />
        </picture>
        <div className="home-links">
          <a href="#" className="home-portfolio-container">
            <p className="home-portfolio-text">Portfolio</p>
            <img className="home-portfolio-icon" src={arrowMobile} alt="" />
          </a>
          <div className="home-follow-container">
            <p className="home-follow-text">Follow Us:</p>
            <a
              href="https://github.com/JosephCass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="home-follow-git"
                src={gitMobileHome}
                alt="Github logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-cassinera-a4878b22b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="home-follow-linkedin"
                src={linkedinMobile}
                alt="Linkedin logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="about">
        <div className="about-photo"></div>
        <div className="about-me">
          <div className="about-info">
            <h2 className="about-title">About me</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut omnis
              quibusdam ratione necessitatibus, sequi iure ea itaque ipsum
              voluptatem ab, rerum labore? Atque odit ad sequi nesciunt odio
              illum omnis! Tempora error, harum, suscipit velit omnis minima
              ipsum fugit magnam voluptates aperiam maiores molestiae officiis
              illo? Omnis sequi fugiat maiores beatae odit voluptatum nostrum,
              harum possimus tempora dolor, repellendus eum.
            </p>
            <a className="about-btn" href="#contact">
              Get In Touch
            </a>
          </div>
          <img
            className="about-info-mask"
            src={backgroundMaskImgMobile}
            alt=""
          />
        </div>
      </div>
      <div id="skills" className="skills">
        <div className="skills-info">
          <h2 className="skills-title">Skills & Info</h2>
          <p className="skills-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            velit laudantium. Ullam dicta quaerat vero natus! Modi nulla
            praesentium voluptas labore aut aliquam nam, minus pariatur optio
            ipsa quae voluptatibus.
          </p>
          <a className="skills-btn" href="#projects">
            Learn More
          </a>
        </div>
        <div className="skills-progress">
          <div className="skill-section">
            <img className="skill-logo" src={jsMobileLogo} alt="" />
            <div className="skill-progress-container">
              <div className="skill-progress-info">
                <p className="skill-progress-text">JS</p>
                <p className="skill-progress-text">80%</p>
              </div>
              <progress className="skill-progress-bar" value="80" max="100">
                80%
              </progress>
            </div>
          </div>
          <div className="skill-section">
            <img className="skill-logo" src={cssMobileLogo} alt="" />
            <div className="skill-progress-container">
              <div className="skill-progress-info">
                <p className="skill-progress-text">CSS</p>
                <p className="skill-progress-text">80%</p>
              </div>
              <progress className="skill-progress-bar" value="80" max="100">
                80%
              </progress>
            </div>
          </div>
          <div className="skill-section">
            <img className="skill-logo" src={htmlMobileLogo} alt="" />
            <div className="skill-progress-container">
              <div className="skill-progress-info">
                <p className="skill-progress-text">HTML</p>
                <p className="skill-progress-text">90%</p>
              </div>
              <progress className="skill-progress-bar" value="90" max="100">
                90%
              </progress>
            </div>
          </div>
          <div className="skill-section">
            <img className="skill-logo" src={reactMobileLogo} alt="" />
            <div className="skill-progress-container">
              <div className="skill-progress-info">
                <p className="skill-progress-text">React</p>
                <p className="skill-progress-text">70%</p>
              </div>
              <progress className="skill-progress-bar" value="70" max="100">
                70%
              </progress>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        <h2 className="projects-section-title">Projects</h2>
        <div className="projects-container">
          <div className="project-container">
            <div className="project-img-container">
              <img
                className="project-img"
                src={archStudioImg}
                alt="Arch studio website preview"
              />
              <div className="project-links-container desktop">
                <a
                  title="Github"
                  className="project-link"
                  href="https://github.com/JosephCass/arch-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                </a>
                <a
                  className="project-link"
                  href="https://fastidious-eclair-b0dcb7.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live site"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                </a>
              </div>
            </div>
            <h3 className="project-title">
              Arch Studio
              <div className="project-links-container mobile">
                <a
                  className="project-link  mobile-project-link"
                  href="https://github.com/JosephCass/arch-studio"
                >
                  <img
                    title="Github"
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                  Github
                </a>
                <a
                  className="project-link  mobile-project-link"
                  href="https://fastidious-eclair-b0dcb7.netlify.app/"
                >
                  <img
                    title="Live site"
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                  Site
                </a>
              </div>
            </h3>
            <p className="project-info">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ratione beatae repellat voluptates dignissimos! Saepe repellat
              itaque animi dolores iure natus vitae minima?{" "}
            </p>
            <div className="tech-container">
              <p className="project-tech">HTML, CSS, JS, REACT</p>
            </div>
          </div>
          <div className="project-container">
            <div className="project-img-container">
              <img
                className="project-img"
                src={battleShipImg}
                alt="Battleship website preview"
              />
              <div className="project-links-container desktop">
                <a
                  className="project-link"
                  href="https://github.com/JosephCass/battleship-vanilla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                </a>
                <a
                  title="Live site"
                  className="project-link"
                  href="https://battleship-app-joseph-vanilla.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                </a>
              </div>
            </div>
            <h3 className="project-title">
              Battleship
              <div className="project-links-container mobile">
                <a
                  title="Github"
                  className="project-link mobile-project-link"
                  href="https://github.com/JosephCass/battleship-vanilla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                  Github
                </a>
                <a
                  title="Live site"
                  className="project-link mobile-project-link"
                  href="https://battleship-app-joseph-vanilla.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                  Site
                </a>
              </div>
            </h3>
            <p className="project-info">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ratione beatae repellat voluptates dignissimos! Saepe repellat
              itaque animi dolores iure natus vitae minima?{" "}
            </p>
            <div className="tech-container">
              <p className="project-tech">HTML, CSS, JS</p>
            </div>
          </div>
          <div className="project-container">
            <div className="project-img-container">
              <img
                className="project-img"
                src={weatherAppImg}
                alt="Battleship website preview"
              />
              <div className="project-links-container desktop">
                <a
                  title="Github"
                  className="project-link"
                  href="https://github.com/JosephCass/weatherapp-vanilla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                </a>
                <a
                  title="Live site"
                  className="project-link"
                  href="https://weather-app-joseph.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                </a>
              </div>
            </div>
            <h3 className="project-title">
              Weather App
              <div className="project-links-container mobile">
                <a
                  title="Github"
                  className="project-link mobile-project-link"
                  href="https://github.com/JosephCass/weatherapp-vanilla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                  Github
                </a>
                <a
                  title="Live site"
                  className="project-link mobile-project-link"
                  href="https://weather-app-joseph.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                  Site
                </a>
              </div>
            </h3>
            <p className="project-info">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ratione beatae repellat voluptates dignissimos! Saepe repellat
              itaque animi dolores iure natus vitae minima?{" "}
            </p>
            <div className="tech-container">
              <p className="project-tech">HTML, CSS, JS, API</p>
            </div>
          </div>
          <div className="project-container">
            <div className="project-img-container">
              <img
                className="project-img"
                src={memoryGameImg}
                alt="Battleship website preview"
              />
              <div className="project-links-container desktop">
                <a
                  title="Github"
                  className="project-link"
                  href="https://github.com/JosephCass/pokemon-memory-game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                </a>
                <a
                  title="Live site"
                  className="project-link"
                  href="https://nimble-choux-d503da.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                </a>
              </div>
            </div>
            <h3 className="project-title">
              Pokemon Memory Game
              <div className="project-links-container mobile">
                <a
                  title="Github"
                  className="project-link mobile-project-link"
                  href="https://github.com/JosephCass/pokemon-memory-game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                  Github
                </a>
                <a
                  title="Live site"
                  className="project-link mobile-project-link"
                  href="https://nimble-choux-d503da.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                  Site
                </a>
              </div>
            </h3>
            <p className="project-info">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ratione beatae repellat voluptates dignissimos! Saepe repellat
              itaque animi dolores iure natus vitae minima?{" "}
            </p>
            <div className="tech-container">
              <p className="project-tech">HTML, CSS, JS, REACT</p>
            </div>
          </div>
          <div className="project-container">
            <div className="project-img-container">
              <img
                className="project-img"
                src={propertyManagerImg}
                alt="Battleship website preview"
              />
              <div className="project-links-container desktop">
                <a
                  title="Github"
                  className="project-link"
                  href="https://github.com/JosephCass/property-manager-vite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                </a>
                <a
                  title="Live site"
                  className="project-link"
                  href="https://inspiring-travesseiro-f30f6a.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                </a>
              </div>
            </div>
            <h3 className="project-title">
              Property Manager
              <span className="long-project-title"> *Not Finished*</span>
              <div className="project-links-container mobile">
                <a
                  className="project-link mobile-project-link"
                  href="https://github.com/JosephCass/property-manager-vite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon"
                    src={gitMobileHome}
                    alt="Gtihub icon"
                  />
                  Github
                </a>
                <a
                  title="Live site"
                  className="project-link mobile-project-link"
                  href="https://inspiring-travesseiro-f30f6a.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-link-icon smaller-icon"
                    src={linkIcon}
                    alt="Arrow link icon"
                  />
                  Site
                </a>
              </div>
            </h3>
            <p className="project-info">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              ratione beatae repellat voluptates dignissimos! Saepe repellat
              itaque animi dolores iure natus vitae minima?{" "}
            </p>
            <div className="tech-container">
              <p className="project-tech">HTML, CSS, JS</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact">
        <div className="contact-header">
          <h3 className="contact-title">
            <img
              src={startImg}
              className="contact-title-logo"
              alt="Star logo"
            />
            Joseph <span className="contact-bold-title">Cassinera</span>
          </h3>
          <div className="contact-follow">
            Follow Us:{" "}
            <a
              href="https://github.com/JosephCass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-follow-logo"
                src={gitMobileHome}
                alt="Github logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-cassinera-a4878b22b/
            "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-follow-logo"
                src={linkedinMobile}
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
        <div className="contact-quick">
          <div className="quick-links">
            <h4 className="quick-title">Quick link</h4>
            <a className="quick-link" href="#home">
              Home
            </a>
            <a className="quick-link" href="#about">
              About
            </a>
            <a className="quick-link" href="#skills">
              Skills
            </a>
            <a className="quick-link" href="#projects">
              Projects
            </a>
          </div>
          <div className="contact-info">
            <h4 className="quick-title">Contact info</h4>
            <div className="quick-info-container">
              <img
                className="quick-contact-icon"
                src={emailContact}
                alt="Email icon"
              />
              <div className="">
                <p className="quick-contact-type">Email</p>
                <p className="quick-contact-info">
                  Joseph.a.cassinera@gmail.com
                </p>
              </div>
            </div>
            <div className="linkedin-info">
              <div className="quick-info-container">
                <img
                  className="quick-contact-icon"
                  src={linkedinContact}
                  alt="Linkedin icon"
                />
                <div className="">
                  <p className="quick-contact-type">Linkedin</p>
                  <p className="quick-contact-info">Joseph Cassinera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="footer">
        <p className="footer-text">2023 © Copyright - Portfolio</p>
      </footer>
    </div>
  );
}
