import { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioSite() {
  const contactEmail = "aanupam2004@gmail.com";

  const projects = [
    {
      title: "AI Study Companion",
      desc: "AI-powered platform for students with note summarization, quiz generation, voice explanations, and study planner.",
      tech: ["React", "FastAPI", "OpenAI", "MongoDB"],
      liveDemoUrl: "https://ai-study-companion-swart.vercel.app/",
      githubUrl: "https://github.com/ADITYA02-coder/ai_study_companion",
    },
    {
      title: "E-commerce platform",
      desc: "Modern e-commerce solution with product management, shopping cart, and secure checkout.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API","Express.js"],
      liveDemoUrl: "https://e-commerce-eosin-psi-28.vercel.app/",
      githubUrl: "https://github.com/ADITYA02-coder/e_commerce",
    },
    {
      title: "AI time table generator",
      desc: "AI-powered time table generator that creates optimized schedules based on user preferences and constraints.",
      tech: ["React", "Django", "OpenAI", "PostgreSQL"],
      liveDemoUrl: "https://timetable-alpha-orpin.vercel.app/",
      githubUrl: "https://github.com/ADITYA02-coder/timetable",
    },
    {
      title: "Real-time Chat App",
      desc: "A real-time chat application with user authentication, private messaging, and group chats.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveDemoUrl: "https://chat-rho-liard.vercel.app/",
      githubUrl: "https://github.com/ADITYA02-coder/chat",
    },
    {
      title : "Weather application",
      desc : "A weather application that provides real-time weather updates, forecasts, and alerts for any location worldwide.",
      tech : ["React", "OpenWeatherMap API", "Tailwind CSS"],
      liveDemoUrl: "https://weather-murex-pi.vercel.app/",
      githubUrl: "https://github.com/ADITYA02-coder/Weather",
    },
    {
      title: "Resume Builder",
      desc: "A modern resume builder with a clean design and easy-to-use interface.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveDemoUrl: "https://resume-one-eta-87.vercel.app/",
      githubUrl: "https://github.com/ADITYA02-coder/resume_maker",
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript", "vite"],
    backend: ["Node.js", "Express.js", "FastAPI", "Django"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "Docker", "Vercel", "Render", "Postman"],
    "ai-tools": ["ChatGPT", "Codex", "Whisper", "Claude"],
    ai: ["OpenAI API", "RAG", "Vector Databases"],
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${contactForm.name}`
    );
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          Anupam<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-16 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-16"
      >
        <div className="max-w-3xl">
          <p className="text-cyan-400 font-semibold mb-4 tracking-widest uppercase">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building Modern <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Web Experiences
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            Passionate full stack developer focused on building scalable,
            modern, and AI-powered applications with beautiful user
            experiences and high-performance backend systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="/Anupam_Resume.pdf"
              download="Anupam_Resume.pdf"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 transition text-white"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 blur-2xl opacity-40 rounded-3xl" />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 w-[320px]"
          >
            <img
              src="/Anupam.png"
              alt="Anupam Kumari"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-cyan-400/40"
            />

            <h2 className="text-2xl font-bold text-center mb-2">
              Anupam Kumari
            </h2>

            <p className="text-center text-gray-400 mb-6">
              Full Stack & AI Developer
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-purple-400">3+</h3>
                <p className="text-sm text-gray-400">Hackathons</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About */}
      <section id="about" className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              I am a passionate full stack developer who enjoys creating
              modern web applications, AI tools, and scalable backend systems.
              I love combining clean UI design with efficient backend logic to
              build impactful products.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Currently focused on React, backend APIs, AI integrations, and
              cloud deployment technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-cyan-400 text-3xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-400">
                Beautiful responsive interfaces with smooth UX.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-purple-400 text-3xl font-bold mb-2">Backend</h3>
              <p className="text-gray-400">
                Scalable APIs, databases, and authentication systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-pink-400 text-3xl font-bold mb-2">AI</h3>
              <p className="text-gray-400">
                OpenAI, LangChain, vector databases, and automation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-green-400 text-3xl font-bold mb-2">Cloud</h3>
              <p className="text-gray-400">
                Deployment using Vercel, Render, Docker, and GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold capitalize mb-6 text-cyan-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition-all duration-300 backdrop-blur-xl hover:-translate-y-3"
              >
                <div className="h-52 bg-linear-to-br from-cyan-500/20 to-purple-500/20" />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold text-center"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 rounded-2xl border border-white/10 hover:border-cyan-400 transition text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something <span className="text-cyan-400">Amazing</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12">
            Open for freelance work, collaborations, internships, and exciting projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Email</h3>
              <a
                href={`mailto:${contactEmail}`}
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                {contactEmail}
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">GitHub</h3>
              <a
                href="https://github.com/Anupam-2004"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                https://github.com/Anupam-2004
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-2 text-cyan-400">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/anupam-kumari-5983ab306"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
              https://www.linkedin.com/in/anupam-kumari-5983ab306
              </a>
            </div>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-left"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleContactChange}
                required
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleContactChange}
                required
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={contactForm.message}
              onChange={handleContactChange}
              required
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none mb-6"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-500 font-bold text-black hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500">
        © 2026 Anupam Kumari • Full Stack Developer Portfolio
      </footer>
    </div>
  );
}