import profile from "./assets/Meme.jpeg";

export default function App()  {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Kamal<span className="text-cyan-400">Dev</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight z-10">
          Hi, I'm <span className="text-cyan-400">Abdullahi</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg z-10">
          Frontend Developer passionate about building beautiful,
          responsive and interactive web experiences using HTML, CSS,
          JavaScript and React.
        </p>

        <div className="mt-10 flex gap-4 z-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-xl font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={profile}
              alt="Profile"
              className="rounded-3xl shadow-2xl border border-gray-800 w-full max-w-md mx-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              I'm a self-taught frontend developer focused on creating modern,
              animated and responsive websites. I enjoy turning ideas into
              real-world interactive experiences with clean UI and smooth
              animations.
            </p>

            <p className="text-gray-400 leading-8">
              I specialize in HTML, CSS, JavaScript and React .
              My goal is to continue growing as a developer and build projects
              that stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            My <span className="text-cyan-400">Skills</span>
          </h2>



            <div className="flex flex-wrap justify-center gap-8">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Responsive Design",
          ].map((skill) => (
            <div
              key={skill}
              className="w-64 h-32 flex items-center justify-center bg-zinc-900 border border-gray-800 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                title: "Portfolio Website",
                desc: "A clean animated personal portfolio website with dark theme.",
              },
              {
                title: "E-Commerce UI",
                desc: "Modern shopping website design with smooth interactions.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="w-full `md:w-95` bg-black border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 group"
              >
                <div className="h-56 bg-linear-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-cyan-300">
                  {project.title}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7">{project.desc}</p>

                  <button className=" w-full `md:w-95` mt-6 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium">
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mb-12">
            Interested in working together or have a project idea? Let's talk.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-gray-800 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-gray-800 focus:outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-gray-800 focus:outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-2xl font-semibold transition shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Abdullahi Portfolio. Built with React.
      </footer>
    </div>
  );
}
