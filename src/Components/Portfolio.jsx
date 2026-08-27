import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Navbar,
  Nav,
} from "react-bootstrap";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./Portfolio.css";

const Portfolio = () => {
  // ================= SKILLS =================

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "React Router",
    "Redux",
  ];

  const backendSkills = ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"];

  const toolsSkills = ["Git", "GitHub", "Axios", "VS Code", "Postman"];

  // ================= SOCIAL LINKS =================

  const githubUrl = "https://github.com/Anupam-2004";

  const linkedinUrl = "https://www.linkedin.com/in/anupam-kumari-5983ab306";

  const email = "yourmail@gmail.com";

  return (
    <div className="portfolio-page">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar expand="lg" className="portfolio-navbar sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <span>&lt;</span> Anupam <span>/&gt;</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="portfolio-nav" />

          <Navbar.Collapse id="portfolio-nav">
            <Nav className="ms-auto portfolio-nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100 py-5">
            {/* ================= LEFT CONTENT ================= */}
            <Col lg={7} className="hero-content">
              <div className="availability-badge">
                <span className="availability-dot"></span>

                <span className="availability-text">
                  Available for Opportunities
                </span>

                <span className="availability-arrow">↗</span>
              </div>

              <p className="hero-small-text">Hello, I'm</p>

              <h1 className="hero-name">Anupam</h1>

              <h2 className="hero-title">
                Full Stack <span>Developer</span>
              </h2>

              <p className="hero-description">
                I build modern, responsive and user-friendly web applications
                using <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
                <strong>Express.js</strong> and <strong>MongoDB</strong>.
              </p>

              {/* ================= TECH STACK ================= */}

              <div className="hero-tech">
                <span className="hero-tech-item">
                  <FaReact />
                  <span>React.js</span>
                </span>

                <span className="hero-tech-item">
                  <FaNodeJs />
                  <span>Node.js</span>
                </span>

                <span className="hero-tech-item">
                  <FaDatabase />
                  <span>MongoDB</span>
                </span>
              </div>

              {/* ================= BUTTONS ================= */}

              <div className="hero-buttons">
                <a href="#projects" className="primary-btn hero-btn">
                  <span>View Projects</span>
                  <FaArrowRight />
                </a>

                <a
                  href="/Anupam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-btn hero-btn"
                >
                  <span>View Resume</span>
                </a>

                <a
                  href="/Anupam_Resume.pdf"
                  download="Anupam_Resume.pdf"
                  className="outline-btn hero-btn"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </a>
              </div>

              {/* ================= SOCIAL LINKS ================= */}

              <div className="hero-social-wrapper">
                <span className="connect-text">Connect with me</span>

                <div className="social-links">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>

                  <a href={`mailto:${email}`} aria-label="Email" title="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </Col>

            {/* ================= RIGHT PROFILE ================= */}

            <Col lg={5} className="hero-profile-column">
              <div className="profile-wrapper">
                {/* Background glow */}
                <div className="profile-glow"></div>

                {/* Decorative circles */}
                <div className="profile-ring ring-one"></div>
                <div className="profile-ring ring-two"></div>

                {/* Profile image */}
                <div className="profile-circle">
                  <img src="/Anupam.png" alt="Anupam - Full Stack Developer" />
                </div>

                {/* ================= FLOATING CARD 1 ================= */}

                <div className="floating-card card-one">
                  <div className="floating-icon react-icon">
                    <FaReact />
                  </div>

                  <div className="floating-content">
                    <strong>React.js</strong>
                    <small>Frontend</small>
                  </div>
                </div>

                {/* ================= FLOATING CARD 2 ================= */}

                <div className="floating-card card-two">
                  <div className="floating-icon node-icon">
                    <FaNodeJs />
                  </div>

                  <div className="floating-content">
                    <strong>Node.js</strong>
                    <small>Backend</small>
                  </div>
                </div>

                {/* ================= FLOATING CARD 3 ================= */}

                <div className="floating-card card-three">
                  <div className="floating-icon mongo-icon">
                    <FaDatabase />
                  </div>

                  <div className="floating-content">
                    <strong>MongoDB</strong>
                    <small>Database</small>
                  </div>
                </div>

                {/* Small decorative dots */}
                <span className="profile-dot dot-one"></span>
                <span className="profile-dot dot-two"></span>
                <span className="profile-dot dot-three"></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}

      <section id="about" className="section-padding about-section">
        <Container>
          <div className="section-heading">
            <span>01.</span>
            <h2>About Me</h2>
          </div>

          <p className="section-description about-intro">
            A passionate developer focused on building meaningful digital
            experiences with modern technologies.
          </p>

          <Row className="align-items-center g-5">
            {/* LEFT CONTENT */}

            <Col lg={7}>
              <div className="about-content">
                <div className="about-greeting">
                  <span className="about-line"></span>
                  <span>GET TO KNOW ME</span>
                </div>

                <h3>
                  Turning ideas into
                  <span> real-world applications.</span>
                </h3>

                <p className="about-text">
                  I am a passionate Full Stack Developer who enjoys creating
                  modern, responsive and user-friendly web applications. I love
                  transforming ideas into functional digital experiences.
                </p>

                <p className="about-text">
                  My primary focus is frontend development with{" "}
                  <strong>React.js</strong> and backend development using{" "}
                  <strong>Node.js, Express.js and MongoDB</strong>. I enjoy
                  building complete applications from user interfaces to backend
                  APIs and database integration.
                </p>

                <p className="about-text">
                  I am continuously learning new technologies, improving my
                  problem-solving skills and working on practical projects that
                  solve real-world problems.
                </p>

                {/* HIGHLIGHTS */}

                <div className="about-info">
                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <FaCode />
                    </div>

                    <div>
                      <strong>Clean Code</strong>
                      <span>Readable & Maintainable</span>
                    </div>
                  </div>

                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <FaLaptopCode />
                    </div>

                    <div>
                      <strong>Responsive UI</strong>
                      <span>Mobile Friendly</span>
                    </div>
                  </div>

                  <div className="about-info-item">
                    <div className="about-info-icon">
                      <FaServer />
                    </div>

                    <div>
                      <strong>REST APIs</strong>
                      <span>Scalable Backend</span>
                    </div>
                  </div>
                </div>

                {/* STATS */}

                <div className="about-stats">
                  <div>
                    <h4>02+</h4>
                    <span>Major Projects</span>
                  </div>

                  <div>
                    <h4>10+</h4>
                    <span>Technologies</span>
                  </div>

                  <div>
                    <h4>100%</h4>
                    <span>Learning Mindset</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* RIGHT CARD */}

            <Col lg={5}>
              <div className="about-profile-card">
                <div className="about-card-glow"></div>

                <div className="about-card-header">
                  <span className="about-card-label">MY DEVELOPMENT STACK</span>

                  <div className="about-card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* FRONTEND */}

                <div className="about-stack-item">
                  <div className="about-stack-icon frontend-icon">
                    <FaReact />
                  </div>

                  <div className="about-stack-content">
                    <div className="about-stack-title">
                      <h4>Frontend Development</h4>
                      <span>01</span>
                    </div>

                    <p>React.js · JavaScript · Bootstrap · Redux</p>

                    <div className="stack-bar">
                      <span style={{ width: "90%" }}></span>
                    </div>
                  </div>
                </div>

                {/* BACKEND */}

                <div className="about-stack-item">
                  <div className="about-stack-icon backend-icon">
                    <FaServer />
                  </div>

                  <div className="about-stack-content">
                    <div className="about-stack-title">
                      <h4>Backend Development</h4>
                      <span>02</span>
                    </div>

                    <p>Node.js · Express.js · REST API · JWT</p>

                    <div className="stack-bar">
                      <span style={{ width: "85%" }}></span>
                    </div>
                  </div>
                </div>

                {/* DATABASE */}

                <div className="about-stack-item">
                  <div className="about-stack-icon database-icon">
                    <FaDatabase />
                  </div>

                  <div className="about-stack-content">
                    <div className="about-stack-title">
                      <h4>Database</h4>
                      <span>03</span>
                    </div>

                    <p>MongoDB · Mongoose · CRUD Operations</p>

                    <div className="stack-bar">
                      <span style={{ width: "82%" }}></span>
                    </div>
                  </div>
                </div>

                {/* FOOTER */}

                <div className="about-card-footer">
                  <span>
                    <i></i>
                    Currently Learning
                  </span>

                  <strong>Full Stack Development</strong>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          SKILLS SECTION
      ====================================================== */}

      <section id="skills" className="skills-section section-padding">
        <Container>
          <div className="section-heading">
            <span>02.</span>
            <h2>My Skills</h2>
          </div>

          <p className="section-description skills-intro">
            Technologies and tools I use to design, develop and build modern
            full-stack web applications.
          </p>

          <Row className="g-4 skills-grid">
            {/* FRONTEND */}

            <Col lg={4} md={6}>
              <div className="skill-card frontend-skill-card">
                <div className="skill-card-header">
                  <div className="skill-main-icon">
                    <FaReact />
                  </div>

                  <div>
                    <span className="skill-label">01 / FRONTEND</span>

                    <h3>Frontend Development</h3>
                  </div>
                </div>

                <p className="skill-card-description">
                  Creating responsive, interactive and user-friendly interfaces
                  with modern frontend technologies.
                </p>

                <div className="skill-progress-list">
                  {/* React */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>React.js</span>
                      <span>90%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill react-progress"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  {/* JavaScript */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill js-progress"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  {/* HTML CSS */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>HTML / CSS</span>
                      <span>90%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill html-progress"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Bootstrap */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>Bootstrap</span>
                      <span>88%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill bootstrap-progress"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="skill-tags">
                  {frontendSkills.map((skill, index) => (
                    <Badge key={`${skill}-${index}`} className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>

            {/* BACKEND */}

            <Col lg={4} md={6}>
              <div className="skill-card backend-skill-card">
                <div className="skill-card-header">
                  <div className="skill-main-icon">
                    <FaNodeJs />
                  </div>

                  <div>
                    <span className="skill-label">02 / BACKEND</span>

                    <h3>Backend Development</h3>
                  </div>
                </div>

                <p className="skill-card-description">
                  Developing REST APIs, authentication systems and scalable
                  server-side applications.
                </p>

                <div className="skill-progress-list">
                  {/* Node */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>Node.js</span>
                      <span>85%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill node-progress"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Express */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>Express.js</span>
                      <span>85%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill express-progress"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  {/* REST API */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>REST API</span>
                      <span>88%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill api-progress"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>

                  {/* JWT */}

                  <div className="skill-progress-item">
                    <div className="skill-progress-info">
                      <span>JWT Authentication</span>
                      <span>78%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill jwt-progress"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="skill-tags">
                  {backendSkills.map((skill, index) => (
                    <Badge key={`${skill}-${index}`} className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>

            {/* TOOLS */}

            <Col lg={4} md={6}>
              <div className="skill-card tools-skill-card">
                <div className="skill-card-header">
                  <div className="skill-main-icon">
                    <FaGithub />
                  </div>

                  <div>
                    <span className="skill-label">03 / TOOLS</span>

                    <h3>Development Tools</h3>
                  </div>
                </div>

                <p className="skill-card-description">
                  Using modern development tools for coding, API testing,
                  version control and project development.
                </p>

                <div className="tool-grid">
                  <div className="tool-item">
                    <FaGithub />
                    <span>GitHub</span>
                  </div>

                  <div className="tool-item">
                    <FaGitAlt />
                    <span>Git</span>
                  </div>

                  <div className="tool-item">
                    <FaCode />
                    <span>VS Code</span>
                  </div>

                  <div className="tool-item">
                    <FaServer />
                    <span>Postman</span>
                  </div>
                </div>

                <div className="skill-tags">
                  {toolsSkills.map((skill, index) => (
                    <Badge key={`${skill}-${index}`} className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* TECHNOLOGY STACK */}

          <div className="tech-stack-section">
            <div className="tech-stack-heading">
              <span>MY TOOLKIT</span>
              <h3>Technologies I Work With</h3>
              <p>
                Modern technologies I use to build fast, scalable and
                user-friendly web applications.
              </p>
            </div>

            <div className="technology-icons">
              {/* HTML */}
              <div className="tech-item html-tech">
                <div className="tech-number">01</div>
                <div className="tech-icon">
                  <FaHtml5 />
                </div>
                <div className="tech-info">
                  <h4>HTML5</h4>
                  <span>Structure & Markup</span>
                </div>
              </div>

              {/* CSS */}
              <div className="tech-item css-tech">
                <div className="tech-number">02</div>
                <div className="tech-icon">
                  <FaCss3Alt />
                </div>
                <div className="tech-info">
                  <h4>CSS3</h4>
                  <span>Styling & Design</span>
                </div>
              </div>

              {/* JavaScript */}
              <div className="tech-item js-tech">
                <div className="tech-number">03</div>
                <div className="tech-icon">
                  <FaJs />
                </div>
                <div className="tech-info">
                  <h4>JavaScript</h4>
                  <span>Logic & Interaction</span>
                </div>
              </div>

              {/* React */}
              <div className="tech-item react-tech">
                <div className="tech-number">04</div>
                <div className="tech-icon">
                  <FaReact />
                </div>
                <div className="tech-info">
                  <h4>React.js</h4>
                  <span>Frontend Development</span>
                </div>
              </div>

              {/* Bootstrap */}
              <div className="tech-item bootstrap-tech">
                <div className="tech-number">05</div>
                <div className="tech-icon">
                  <FaBootstrap />
                </div>
                <div className="tech-info">
                  <h4>Bootstrap</h4>
                  <span>Responsive UI</span>
                </div>
              </div>

              {/* Node */}
              <div className="tech-item node-tech">
                <div className="tech-number">06</div>
                <div className="tech-icon">
                  <FaNodeJs />
                </div>
                <div className="tech-info">
                  <h4>Node.js</h4>
                  <span>Backend Development</span>
                </div>
              </div>

              {/* MongoDB */}
              <div className="tech-item mongo-tech">
                <div className="tech-number">07</div>
                <div className="tech-icon">
                  <FaDatabase />
                </div>
                <div className="tech-info">
                  <h4>MongoDB</h4>
                  <span>Database</span>
                </div>
              </div>

              {/* Git */}
              <div className="tech-item git-tech">
                <div className="tech-number">08</div>
                <div className="tech-icon">
                  <FaGitAlt />
                </div>
                <div className="tech-info">
                  <h4>Git</h4>
                  <span>Version Control</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}

      <section id="services" className="section-padding services-section">
        <Container>
          <div className="section-heading">
            <span>03.</span>
            <h2>What I Do</h2>
          </div>

          <p className="section-description services-description">
            I transform ideas into modern, scalable and user-friendly web
            applications using the latest web technologies.
          </p>

          <Row className="g-4 services-row">
            {/* FRONTEND SERVICE */}

            <Col lg={4} md={6}>
              <div className="service-card service-card-blue">
                <div className="service-top">
                  <span className="service-number">01</span>

                  <div className="service-icon">
                    <FaReact />
                  </div>
                </div>

                <div className="service-content">
                  <h3>Frontend Development</h3>

                  <p>
                    I create modern, responsive and interactive user interfaces
                    with clean design and smooth user experience.
                  </p>

                  <div className="service-tags">
                    <span>React.js</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>Redux</span>
                  </div>
                </div>

                <div className="service-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </Col>

            {/* BACKEND SERVICE */}

            <Col lg={4} md={6}>
              <div className="service-card service-card-green">
                <div className="service-top">
                  <span className="service-number">02</span>

                  <div className="service-icon">
                    <FaServer />
                  </div>
                </div>

                <div className="service-content">
                  <h3>Backend Development</h3>

                  <p>
                    I develop secure and scalable backend systems with REST
                    APIs, authentication and efficient server-side architecture.
                  </p>

                  <div className="service-tags">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>REST API</span>
                    <span>JWT</span>
                  </div>
                </div>

                <div className="service-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </Col>

            {/* DATABASE SERVICE */}

            <Col lg={4} md={6}>
              <div className="service-card service-card-purple">
                <div className="service-top">
                  <span className="service-number">03</span>

                  <div className="service-icon">
                    <FaDatabase />
                  </div>
                </div>

                <div className="service-content">
                  <h3>Database & API Integration</h3>

                  <p>
                    I design and integrate databases with backend APIs to build
                    reliable and scalable full-stack applications.
                  </p>

                  <div className="service-tags">
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Axios</span>
                    <span>CRUD</span>
                  </div>
                </div>

                <div className="service-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          PROJECTS SECTION
      ====================================================== */}

      <section id="projects" className="section-padding projects-section">
        <Container>
          <div className="section-heading">
            <span>04.</span>
            <h2>Featured Projects</h2>
          </div>

          <p className="project-intro">
            Some of the projects I have built using modern web technologies.
          </p>

          <Row className="g-4">
            {/* FOOD DELIVERY PROJECT */}

            <Col lg={12}>
              <Card className="project-card featured-project">
                <div className="project-image fullstack-project">
                  <div className="project-image-icon">
                    <FaLaptopCode />
                  </div>

                  <div>
                    <span>FULL STACK PROJECT</span>
                    <h3>Food Delivery Platform</h3>
                  </div>
                </div>

                <Card.Body>
                  <div className="project-label">
                    FULL STACK WEB APPLICATION
                  </div>

                  <Card.Title>Food Delivery Website</Card.Title>

                  <Card.Text>
                    A complete food delivery platform where users can browse
                    restaurants, explore food categories, add products to cart,
                    place orders and track their orders. The application also
                    includes restaurant-side order management and backend APIs.
                  </Card.Text>

                  {/* FEATURES */}

                  <div className="project-features">
                    <span>✓ Restaurant Listing</span>
                    <span>✓ Food Categories</span>
                    <span>✓ Shopping Cart</span>
                    <span>✓ User Authentication</span>
                    <span>✓ Order Management</span>
                    <span>✓ Order Tracking</span>
                    <span>✓ Restaurant Dashboard</span>
                    <span>✓ Responsive UI</span>
                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="technology-list">
                    <Badge>React.js</Badge>
                    <Badge>Bootstrap</Badge>
                    <Badge>Redux</Badge>
                    <Badge>Axios</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Express.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>JWT</Badge>
                  </div>

                  {/* PROJECT BUTTONS */}

                  <div className="project-buttons">
                    <Button
                      href="https://github.com/Anupam-2004/restrauntRepo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      <FaGithub />
                      Frontend
                    </Button>

                    <Button
                      href="https://github.com/Anupam-2004/food_delivery_repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      <FaGithub />
                      Backend
                    </Button>

                    {/* Add live URL here after deployment */}

                    <Button
                      className="project-live-btn"
                      disabled
                      title="Live demo will be available after deployment"
                    >
                      Live Demo <FaExternalLinkAlt />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          EDUCATION SECTION
      ====================================================== */}

      <section id="education" className="education-section section-padding">
        <Container>
          <div className="section-heading">
            <span>05.</span>
            <h2>Education</h2>
          </div>

          <Row className="g-4 justify-content-center">
            {/* DIPLOMA */}

            <Col lg={6}>
              <div className="education-card">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <span className="education-year">2021 - 2024</span>

                  <h3>Diploma in Computer Science</h3>

                  <h4>Government Women's Polytechnic, Muzaffarpur</h4>

                  <p>Computer Science & Engineering</p>
                </div>
              </div>
            </Col>

            {/* BACHELOR */}

            <Col lg={6}>
              <div className="education-card">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <span className="education-year">2024 - 2027</span>

                  <h3>Bachelor's Degree</h3>

                  <h4>ARKA Jain University, Jamshedpur</h4>

                  <p>Computer Science & Engineering</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section id="contact" className="contact-section section-padding">
        <Container>
          <div className="contact-content">
            <span className="contact-number">06. What's Next?</span>

            <h2>Let's Work Together</h2>

            <p>
              I'm currently looking for opportunities to work on interesting
              projects, contribute to real-world applications and grow as a Full
              Stack Developer.
            </p>

            <div className="contact-details">
              {/* EMAIL */}

              <div>
                <FaEnvelope />
                <span>{email}</span>
              </div>

              {/* LOCATION */}

              <div>
                <FaMapMarkerAlt />
                <span>Jamshedpur, Jharkhand, India</span>
              </div>
            </div>

            <Button href={`mailto:${email}`} className="contact-btn">
              <FaEnvelope />
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="portfolio-footer">
        <Container>
          <div className="footer-main">
            {/* BRAND */}
            <div className="footer-brand">
              <h3>
                Anupam<span>.</span>
              </h3>

              <p>
                Full Stack Developer building modern, responsive and
                user-friendly web applications.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-links">
              <span>QUICK LINKS</span>

              <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="footer-connect">
              <span>LET'S CONNECT</span>

              <div className="footer-social">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a href={`mailto:${email}`} aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="footer-divider"></div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>
              Designed & Built with <span>♥</span> by <strong>Anupam</strong>
            </p>

            <small>
              © {new Date().getFullYear()} Anupam. All rights reserved.
            </small>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;
