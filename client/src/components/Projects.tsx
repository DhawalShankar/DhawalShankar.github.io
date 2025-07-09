import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Projects() {
  const projectsRef = useIntersectionObserver();

  const featuredProjects = [
    {
      title: 'SignScribe - Gesture to Text Translator',
      description: 'Built a real-time hand gesture-to-text tool for the deaf community. Uses MediaPipe for accurate hand landmark detection with live webcam UI and gesture translation display.',
      technologies: [
        { name: 'Python', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
        { name: 'OpenCV', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
        { name: 'MediaPipe', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
        { name: 'Streamlit', color: 'bg-red-500/20 text-red-400 border-red-500/30' }
      ],
      icon: 'fas fa-hand-paper',
      gradient: 'from-emerald-500 to-blue-600',
      liveDemo: 'https://github.com/DhawalShankar/SignScribe',
      github: 'https://github.com/DhawalShankar/SignScribe'
    },
    {
      title: 'Cape Comorin School Website',
      description: 'Official website for Cape Comorin Children School with payment portal, homepage, gallery, about/contact pages, and activities section. Features responsive design and modern UI/UX.',
      technologies: [
        { name: 'HTML', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
        { name: 'CSS', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
        { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
        { name: 'GitHub Pages', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
      ],
      icon: 'fas fa-school',
      gradient: 'from-amber-500 to-orange-600',
      liveDemo: 'https://capecomorin-hub.github.io',
      github: 'https://github.com/DhawalShankar/Capecomorin-hub.github.io'
    }
  ];

  const certifications = [
    {
      title: 'CDAC Noida UAV Bootcamp',
      description: 'Cleared CDAC, Noida UAV Bootcamp Examination - certification in Unmanned Aerial Vehicle technology and applications.',
      technologies: ['UAV Technology', 'Drone Systems'],
      icon: 'fas fa-certificate',
      bgColor: 'bg-emerald-500'
    },
    {
      title: 'Google Cloud Study Jams',
      description: 'Gained Google Cloud Study Jams Certification, demonstrating proficiency in cloud computing and Google Cloud Platform services.',
      technologies: ['Google Cloud', 'Cloud Computing'],
      icon: 'fab fa-google',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'OSCI Contributor',
      description: 'Active contributor at OSCI, helped ISKCON-EASY with website workflows and open source development.',
      technologies: ['Open Source', 'Web Development'],
      icon: 'fas fa-code-branch',
      bgColor: 'bg-violet-500'
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>GitHub Projects</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #10b981, #f59e0b)', margin: '0 auto', marginBottom: '24px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '512px', margin: '0 auto' }}>
            My GitHub repositories showcase real programming projects and contributions. Here are my featured projects and additional repositories from my GitHub profile.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          {featuredProjects.map((project, index) => (
            <div key={index} style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(16px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px', 
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ 
                height: '192px', 
                background: project.gradient === 'from-emerald-500 to-blue-600' ? 'linear-gradient(135deg, #10b981, #2563eb)' :
                  project.gradient === 'from-green-500 to-blue-600' ? 'linear-gradient(135deg, #22c55e, #2563eb)' :
                  project.gradient === 'from-purple-500 to-pink-600' ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' :
                  'linear-gradient(135deg, #f59e0b, #ea580c)',
                position: 'relative', 
                overflow: 'hidden' 
              }}>
                <div style={{ position: 'absolute', inset: '0', background: 'rgba(0, 0, 0, 0.2)' }}></div>
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <i className={project.icon} style={{ color: 'white', fontSize: '32px' }}></i>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '16px', 
                  right: '16px', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '18px' 
                }}>
                  {project.title.split(' - ')[0]}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#10b981' }}>{project.title}</h3>
                <p style={{ color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{ 
                        background: tech.color.includes('blue') ? 'rgba(59, 130, 246, 0.2)' :
                          tech.color.includes('green') ? 'rgba(34, 197, 94, 0.2)' :
                          tech.color.includes('purple') ? 'rgba(139, 92, 246, 0.2)' :
                          tech.color.includes('red') ? 'rgba(239, 68, 68, 0.2)' :
                          tech.color.includes('orange') ? 'rgba(249, 115, 22, 0.2)' :
                          tech.color.includes('yellow') ? 'rgba(234, 179, 8, 0.2)' :
                          'rgba(107, 114, 128, 0.2)',
                        color: tech.color.includes('blue') ? '#60a5fa' :
                          tech.color.includes('green') ? '#4ade80' :
                          tech.color.includes('purple') ? '#a78bfa' :
                          tech.color.includes('red') ? '#f87171' :
                          tech.color.includes('orange') ? '#fb923c' :
                          tech.color.includes('yellow') ? '#facc15' :
                          '#9ca3af',
                        border: tech.color.includes('blue') ? '1px solid rgba(59, 130, 246, 0.3)' :
                          tech.color.includes('green') ? '1px solid rgba(34, 197, 94, 0.3)' :
                          tech.color.includes('purple') ? '1px solid rgba(139, 92, 246, 0.3)' :
                          tech.color.includes('red') ? '1px solid rgba(239, 68, 68, 0.3)' :
                          tech.color.includes('orange') ? '1px solid rgba(249, 115, 22, 0.3)' :
                          tech.color.includes('yellow') ? '1px solid rgba(234, 179, 8, 0.3)' :
                          '1px solid rgba(107, 114, 128, 0.3)',
                        padding: '4px 12px', 
                        borderRadius: '9999px', 
                        fontSize: '14px' 
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      padding: '8px 16px', 
                      borderRadius: '8px', 
                      fontWeight: '600', 
                      fontSize: '14px', 
                      display: 'flex', 
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      border: '2px solid #10b981',
                      color: '#10b981',
                      background: 'transparent',
                      padding: '8px 16px', 
                      borderRadius: '8px', 
                      fontWeight: '600', 
                      fontSize: '14px', 
                      display: 'flex', 
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className="fab fa-github" style={{ marginRight: '8px' }}></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional GitHub Repositories */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: 'white', textAlign: 'center' }}>More GitHub Repositories</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[
              { name: 'WeCare', description: 'Virtual HealthCare Assistant coded in C language for healthcare guidance', language: 'C' },
              { name: 'Kuber', description: 'Investment Platform - "Invest Right! Live Bright!" with smart algorithms', language: 'C++' },
              { name: 'bizarre-bazaar', description: 'Community-aware commerce ecosystem challenging online shopping norms', language: 'Web Tech' },
              { name: 'DhawalShankar.github.io', description: 'Personal portfolio website and GitHub Pages', language: 'HTML' },
              { name: 'DhawalShankar', description: 'GitHub profile README configuration with stats and bio', language: 'Markdown' }
            ].map((repo, index) => (
              <a
                key={index}
                href={`https://github.com/DhawalShankar/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '16px',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <i className="fab fa-github" style={{ marginRight: '8px', color: '#10b981' }}></i>
                  <h4 style={{ fontWeight: '600', fontSize: '14px' }}>{repo.name}</h4>
                </div>
                <p style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '8px' }}>{repo.description}</p>
                <span style={{ 
                  fontSize: '10px', 
                  color: '#10b981', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  padding: '2px 6px', 
                  borderRadius: '4px' 
                }}>{repo.language}</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://github.com/DhawalShankar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid #10b981',
                color: '#10b981',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#10b981';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                e.currentTarget.style.color = '#10b981';
              }}
            >
              <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
              View All Repositories on GitHub
            </a>
          </div>
        </div>

        {/* Certifications & Experience */}
        <div>
          <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px', color: 'white', textAlign: 'center' }}>Certifications & Experience</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {certifications.map((project, index) => (
            <div key={index} style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(16px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px', 
              padding: '24px',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: project.bgColor === 'bg-emerald-500' ? '#10b981' :
                    project.bgColor === 'bg-blue-500' ? '#3b82f6' :
                    project.bgColor === 'bg-violet-500' ? '#8b5cf6' :
                    '#f59e0b',
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px' 
                }}>
                  <i className={project.icon} style={{ color: 'white' }}></i>
                </div>
                <h4 style={{ fontWeight: 'bold', color: 'white' }}>{project.title}</h4>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '16px' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{ 
                      background: 'rgba(16, 185, 129, 0.2)', 
                      color: '#10b981', 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '12px' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button style={{ 
                color: '#10b981', 
                fontSize: '14px', 
                fontWeight: '600', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer' 
              }}>
                Learn More →
              </button>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
