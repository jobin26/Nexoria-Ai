import React, { useEffect, useState } from 'react';
import { Brain, Globe2, Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import bgImage from '../assets/lady.jpeg';
import bgImagesecond from '../assets/leftsidero.png';
import brainimage from '../assets/br.png';
// @ts-ignore
import FloatingParticles from "./floatingParticles.jsx"; // Adjust path as needed
// @ts-ignore
import JellyText from "./jellyText.jsx";


function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-[2px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0">{text}</span>
      <span className="absolute top-0 left-[-2px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0">{text}</span>
    </span>
  );
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-4 py-2"
    >
      {children}
    </a>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-white/10 to-black backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold"> <JellyText text="Nexoria AI" /></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#works">Works</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#works">Works</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        
        <FloatingParticles />
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Here and Now-
                <GlitchText text=" FUTURE" />
              </h1>

              <p className="text-gray-400 text-lg mb-8">
                Pioneering the next generation of AI and technology solutions
              </p>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full flex items-center group transition-all duration-300">
                Let's Go
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative backdrop-blur-md bg-white/0 border border-white/20 rounded-xl shadow-lg p-6 overflow-hidden">
              <div className="relative z-10">
              
                <p className="text-sm md:text-base text-white leading-relaxed">
                  
                  An AI robot is a machine equipped with artificial intelligence that
                  allows it to think, learn, and make decisions like a human. These robots are
                  designed to perform tasks autonomously, using sensors, cameras, and advanced
                  algorithms to understand their surroundings. From simple movements to complex
                  problem-solving, AI robots can adapt and improve their performance over time
                  through machine learning.
                  <br /><br />
                  They are used in various fields, including healthcare, manufacturing,
                  space exploration, and customer service. For example, in hospitals,
                  AI robots assist in surgeries or help patients with daily needs. In factories,
                  they streamline production with precision and efficiency. Some even serve as companions,
                  capable of understanding emotions and holding conversations.
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-500/20 rounded-lg z-0"></div>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
              <p className="text-white"><GlitchText text=" Smart machine with human-like intelligence"></GlitchText></p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen inset-0 bg-cover bg-center opacity-100 bg-black/50 py-32"
        style={{
          backgroundImage: `url(${brainimage})`,
        }}
      >
        <div
          className="block lg:hidden absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImagesecond})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400">Who We Are</h3>
              <p className="text-gray-400">
                We are pioneers in AI and technology innovation, pushing the boundaries
                of what's possible in the digital age.
              </p>
              <div className="relative">
                <Globe2 className="h-10 w-10 md:h-48 md:w-48 text-gray-50 animate-spin-slow opacity-70" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300 backdrop-blur-md bg-white/0 border-white/20  shadow-lg  overflow-hidden">
                <h4 className="text-xl font-bold mb-4"> <JellyText text="Our Vision" /></h4>
                <p className="text-gray-100">
                
                  To shape a future where technology enhances human potential and
                  creates sustainable solutions for global challenges.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-colors duration-300 backdrop-blur-md bg-white/0 border-white/20  shadow-lg overflow-hidden">
                <h4 className="text-xl font-bold mb-4"><JellyText text="Our Mission" /></h4>
                <p className="text-gray-100">
                  Delivering cutting-edge AI solutions that transform industries and
                  improve lives through innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-black/30 py-32 inset-0 bg-no-repeat bg-left md:bg-cover bg-[length:auto_100%]  transition-all" style={{ backgroundImage: `url(${bgImagesecond})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-cyan-400" />
                <span>contact@nexusai.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <span>123 Innovation Street, Tech City</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="backdrop-blur-md  border-white/20  shadow-lg p-6 overflow-hidden w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="backdrop-blur-md  border-white/20 shadow-lg p-6 overflow-hidden w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="backdrop-blur-md border-white/20 shadow-lg p-6 overflow-hidden w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition-colors"
                ></textarea>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full w-full transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;