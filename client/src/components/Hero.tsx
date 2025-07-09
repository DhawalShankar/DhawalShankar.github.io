import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { smoothScrollTo } from '@/lib/animations';

export default function Hero() {
  const texts = [
    "3rd Year B.Tech Student",
    "Software Developer",
    "Java DSA Enthusiast",
    "Web Developer",
    "Python Programmer",
    "Tech Innovator"
  ];

  const typingText = useTypingAnimation(texts);
  const heroRef = useIntersectionObserver();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating">
        <div className="w-4 h-4 bg-emerald-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-10 floating" style={{ animationDelay: '-2s' }}>
        <div className="w-6 h-6 bg-amber-400 rounded-full opacity-40"></div>
      </div>
      <div className="absolute top-40 right-20 floating" style={{ animationDelay: '-4s' }}>
        <div className="w-3 h-3 bg-violet-400 rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 floating" style={{ animationDelay: '-1s' }}>
        <div className="w-2 h-2 bg-white rounded-full opacity-30"></div>
      </div>

      <div ref={heroRef} className="max-w-6xl mx-auto text-center relative z-10 observer-element">
        <div className="stagger-1">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm <span className="text-emerald-400">Dhawal Shukla</span>
          </h1>
        </div>
        <div className="stagger-2">
          <p className="text-2xl md:text-3xl mb-8 typing-cursor">
            {typingText}
          </p>
        </div>
        <div className="stagger-3">
          <p className="text-lg md:text-xl mb-12 text-primary-300 max-w-4xl mx-auto leading-relaxed">
            3rd year B.Tech student in Electronics and Communication at JIIT Noida, passionate about software development and real-world tech applications. 
            Specializing in Java DSA, Python OpenCV, and modern web technologies with experience in gesture recognition and web development projects.
          </p>
        </div>
        <div className="stagger-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => smoothScrollTo('projects')}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-lg"
            >
              <i className="fas fa-rocket mr-2"></i>View My Projects
            </button>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg"
            >
              <i className="fas fa-envelope mr-2"></i>Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="glass px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/DhawalShankar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link w-14 h-14 rounded-full glass flex items-center justify-center text-xl hover:text-emerald-400"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://leetcode.com/u/dhawalshankar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link w-14 h-14 rounded-full glass flex items-center justify-center text-xl hover:text-amber-400"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dhawalshukl"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link w-14 h-14 rounded-full glass flex items-center justify-center text-xl hover:text-blue-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:dhawalmannu@gmail.com"
              className="social-link w-14 h-14 rounded-full glass flex items-center justify-center text-xl hover:text-violet-400"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
