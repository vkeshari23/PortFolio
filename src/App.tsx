import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Job At Mail",
      description: "A job portal built using Django and Bootstrap, allowing users to find and apply for jobs.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "Django", "Bootstrap"],
      github: "https://github.com/yourusername/job-at-mail",
      live: "https://yourdeploymentlink.com"
    },
    {
      title: "Coffee Shop Website",
    description: "A stylish and responsive coffee shop website built with HTML and CSS.",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800",
    tech: ["HTML", "CSS"],
    github: "https://github.com/yourusername/coffee-shop",
    live: "https://yourdeploymentlink.com"
    },
    {
      title: "Personal Finance Tracker - MoneyMap",
    description: "A full-stack finance tracking app with income and expense management.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/moneymap",
    live: "https://yourdeploymentlink.com"
    }
  ];

  const navItems = ['Home', 'Skills', 'Projects', 'Resume', 'Education', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-indigo-600">Vinay Keshari</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-indigo-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Vinay Keshari</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Full Stack Developer specializing in modern web applications
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
          <img 
  src="/images/vinayKeshari.jpg" 
  alt="Profile" 
  className="rounded-full w-64 h-64 object-cover shadow-xl"
/>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Frontend</h3>
              <div className="space-y-2">
                {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "ChakraUI"].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
      
            {/* Backend */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Backend</h3>
              <div className="space-y-2">
                {["Node.js", "Express", "Django", "MongoDB"].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
      
            {/* Tools */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Tools</h3>
              <div className="space-y-2">
                {["Git", "GitHub", "VS Code", "Postman", "Firebase"].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resume</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <a 
              href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=67800d99565a02c8ebc98589" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science</h3>
              <p className="text-gray-600">BN College Of Engineering and Technology, Lucknow</p>
              <p className="text-gray-500">2019 - 2023</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/vkeshari23/" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vinay-keshari-301125240/" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vinaykeshari076@gmail.com" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
              <Mail size={24} />
            </a>
          </div>
          <a href="mailto:vinaykeshari076@gmail.com" 
             className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
  Send me an email
</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>© Vinay Keshari.</p>
      </footer>
    </div>
  );
}

export default App;