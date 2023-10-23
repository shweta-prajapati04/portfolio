import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export const Home = () => {

  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/*<!-- ======= Header ======= */}
      <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
      <a href="#" className="instagram"><i className="bx bxl-github"></i></a>
      <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Shweta Prajapati</a></h1>
            <div className="social-links mt-3 text-center">

              <a target="_blank" href="https://github.com/shweta-prajapati04" className="google-plus"><i
                className="bx bxl-github"></i></a>
              <a target="_blank" href="https://linkedin.com/in/shweta-prajapati-a4598a4b" className="linkedin"><i
                className="bx bxl-linkedin"></i></a>
              <a target="_blank" href="mailto:shwetarprajapati@gmail.com" className="google-plus"><i
                className="bx bxl-gmail"></i></a>
              <a href="/img/cv.pdf" target="_blank"><i
              className="bx bxs-file-pdf"> </i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Skills</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                <span>Portfolio</span></a></li>

              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>{/*<!-- End Header -->*/}

      {/* <!-- ======= Hero Section ======= -->*/}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">

          <h1>Shweta Prajapati</h1>
          <p>I'm <span className="typed">
            <TypeAnimation
              sequence={[
                'Front End Developer',
                2000,
                'React js Developer',
                2000,
                'Designer',
                2000,
                'Freelancer',
                2000
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            /></span>
          </p>
        </div>
      </section>

      <main id="main">

        {/*<!-- ======= About Section ======= -->*/}
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>About</h2>
              <p> A Passionate Front-End REACT JS Developer design and develop websites and web applications by using web tech stacks such as
                HTML, CSS3 - Saas, DOM, and JavaScript ES6 ,React-bootstrap  ,Redux ,Redux-Toolkit that either run on the Open Web Platform or function as compilation input
                for non-web platform environments.</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src="/img/abt.jfif"
                  className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Front End &amp; Web Developer.</h3>
                <p className="fst-italic">
                  I'm a front end developer with five years of experience in web development. As senior web developer i built E-commerce applications
                  with cart and payment gateway,CMSsites,Product listing
                  application,some static SPA using Js , html 5 ,css3 bootstrap
                  jquery & it’s framework .
                  I also create  webservices API for Mobile Applications
                </p>
                <p>
                  I have complete React Js Course and build some small applications like Todo List , Arithmatic operation
                  App,counter App,
                  Product Listing App,and one small cart application using json server ,redux and route ,redux-toolkit
                </p>
                <div className="row">
                  <div className="col-lg-10">

                    <ul>

                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>

                    </ul>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>{/*<!-- End About Section -->*/}

        {/* <!-- ======= Skills Section ======= -->*/}
        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Skills</h2>
              <p>Proficient understanding of web markup, including HTML5, CSS3
                Basic understanding of server-side CSS pre-processing platforms, such SASS
                Proficient understanding of client-side scripting and JavaScript frameworks, including jQuey</p>
            </div>

            <div className="row skills-content">

              <div className="col-lg-6" data-aos="fade-up">

                <div className="progress">
                  <span className="skill">HTML- HTML5 <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "100%" }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">CSS - CSS FRAMWORKS (SAAS)<i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "90%" }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JAVASCRIPT -LIBRARIES & FRAMWORK <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                <div className="progress">
                  <span className="skill">REACT JS <i className="val">95%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">JQUERY - AJAX <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">DataBase Management <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>{/*<!-- End Skills Section -->*/}

        {/* <!-- ======= Resume Section ======= -->*/}
        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
              <p>Honesty, Self confidence, FastDecision making, Leadership,Fluency in speech, Positiveattitude & strong
                Belief in teamwork.</p>
              <p>
                A front-end web developer is responsible for implementing visual and interactive elements that users
                engage with through their web browser when using a web application. They are usually supported by back-end
                web developers, who are responsible for server-side application logic and integration of the work
                front-end
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Shweta Prajapati</h4>
                  <p><em>To work in an interesting and challengingenvironment that provide continuous Learning</em></p>
                  <ul>
                    <li>Surat -395004</li>
                    <li>(+91) 76220 50174</li>
                    <li></li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>React js</h4>
                  <h5>2023</h5>
                  <p><em>Red & white Group Of Institutes</em></p>
                  <p></p>
                </div>
                <div className="resume-item">
                  <h4>Master of computer application</h4>
                  <h5>2014 -2015</h5>
                  <p><em>Indira Gandhi National Open University</em></p>
                  <p></p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of computer application</h4>
                  <h5>2008 - 2011</h5>
                  <p><em>Veer Narmad Soutu Gujarat University</em></p>

                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Website Developer</h4>
                  <h5>2011 - 2016</h5>

                  <ul>
                    <li>Worked as Sr.Web Developer in a softwareCompany-“Quad Softech Pvt. Ltd., Surat”</li>
                    <li>As senior web developer i build E-commerceapplications with cart and payment
                      gateway,CMSsites,Product listing application,some static singlepage applications using Js , html 5
                      ,css3 bootstrapjquery etc.. </li>
                    <li>I also build webservices API for Mobileapplications in order to manage single databasefor web app
                      and mobile app</li>
                    <li>
                      I have complete React Js Course and build some small applications like Todo List , Arithmatic
                      operation App,counter App, Product Listing App,and one small cart application using json server ,redux
                      and route
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>{/*<!-- End Resume Section -->*/}

        <section id="portfolio" class="portfolio section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Portfolio</h2>
            </div>



            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">


                <div className="portfolio-wrap" >

                  <img src="/img/portfolio/liberty1.png" class="img-fluid" alt="" />
                  <div className="portfolio-links text-center">

                    <a href="https://libertyshoes.vercel.app/" target='blank' title="visit libertyshoes">
                      <i className="bx bx-link" > <span style={{ fontSize: "20px", position: "relative" }}>  </span></i>
                    </a>
                  </div>

                </div>


              </div>


            </div>


          </div>
        </section>


        {/*  <!-- ======= Contact Section ======= -->*/}

        <section id="contact" className="contact ">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
            </div>
            <div className="row" data-aos="fade-in">



              <div class="col-lg-12  text-center  contact-info ">
                <div className=''>
                  <h3>Let's talk about everything!</h3>
                  <h5>Don't like forms? Contact me at places mentioned below. 👋</h5>
                  <h6>Email:<a style={{ color: "#173b6c" }} href="mailto:shwetarprajapati@gmail.com">Shwetarprajapati@gmail.com</a></h6>
                </div>
                <div className="d-flex justify-content-center contact-icoon" >
                  <a href="https://github.com/shweta-prajapati04" target="_blank"><img
                    src="/img/github.svg" alt="Github" /></a>
                  <a href="https://linkedin.com/in/shweta-prajapati-a4598a4b" target="_blank"><img
                    src="/img/linkedin.svg" alt="Linkdin" /></a>
                  <a href="mailto:shwetarprajapati@gmail.com" target="_blank"><img src="/img/gmail.svg"
                    alt="Email" /></a>
                  <a href="/img/cv.pdf" target="_blank"><img src="/img/cv.svg"
                    alt="Download CV" /></a>
                </div>
                <h4 className='text-red' style={{ color: "#e67171" }}> <b>THANK YOU !</b></h4>

              </div>

            </div>



          </div>


        </section>{/*<!-- End Contact Section -->*/}

      </main>{/*< !--End #main -- >*/}



      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}
