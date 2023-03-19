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
import profilePic from "../assets/profilepicjob.jpeg";

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
          <a
            href="https://drive.google.com/file/d/1FEoVMR4oOp9pOLTfn9rqcA51pexjLVY5/view?usp=share_link"
            className="home-portfolio-container"
            title="Google drive link to resume"
          >
            <p className="home-portfolio-text">Portfolio</p>
            <img className="home-portfolio-icon" src={arrowMobile} alt="" />
          </a>
          <div className="home-follow-container">
            <p className="home-follow-text">Follow Us:</p>
            <a
              href="https://github.com/JosephCass"
              target="_blank"
              rel="noopener noreferrer"
              title="Joseph Cassinera's github"
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
              title="Joseph Cassinera's linkedin"
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
        <div className="about-photo">
          <img className="about-photo-img" src={profilePic} alt="" />
        </div>
        <div className="about-me">
          <div className="about-info">
            <h2 className="about-title">About me</h2>
            <p className="about-text">
              Hi my name is Joseph, I am a 20 years old currently working as a
              stairlift technician looking to get into the IT world. My interest
              in programming started early from a class I took while in
              highschool at a college learning python. When I graduated high
              school , I decided to start learning programming on my own. I
              began using online resources, coding courses and studying for
              certificates. I have been working to develop my skills in frontend
              development and looking for any opportunities of hands on
              experience.
            </p>
            <a title="Contact section" className="about-btn" href="#contact">
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
            I am skilled in frontend development working with technologies like
            HTML, CSS, JS & React. I also have used other technologies i'm not
            as skilled in but have some experience using like Java, MySql,
            ExpressJS, Bootstrap & MongoDB.
          </p>
          <a title="Projects section" className="skills-btn" href="#projects">
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
              Arch Studio is a advanced level challenge I completed from
              frontendmentor.io where im given a figma design and turn it into a
              working responsive website.
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
                  title="Github"
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
              This is a website version of the boardgame Battleship which was a
              project that was part of the OdinProject course ive done.
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
              This is a weather app where you search the city you want the
              weather of and it will display info about it at the current time.
              I made this using an api from openweathermap.org{" "}
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
              This is a pokemon memory game I made where you cant click the same
              pokemon twice. I couldnt find any apis for pokemon photos so I
              used photos from the poke index on the official site since they're
              numbered in order from 1 - 905.{" "}
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
              This is a project idea I was making for a site thats manages
              propertys for real estate owners. I plan on remaking and
              completing it with react, but what it has so far shows my
              understanding of the Constraint Validation API and ability to work
              on forms.{" "}
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
            Follow Me:{" "}
            <a
              href="https://github.com/JosephCass"
              target="_blank"
              rel="noopener noreferrer"
              title="Joseph Cassinera's Github"
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
              title="Joseph Cassinera's Linkedin"
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
