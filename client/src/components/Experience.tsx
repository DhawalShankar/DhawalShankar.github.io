import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Experience() {
  const experienceRef = useIntersectionObserver();

  const timelineItems = [
    {
      year: '2023 - Present',
      title: 'B.Tech Electronics and Communication',
      description: 'Currently pursuing Bachelor\'s degree in Electronics and Communication at JIIT Noida with focus on software development and real-world tech applications. Maintaining strong academic performance with current CGPA of 7.6.',
      technologies: ['Electronics', 'Communication Systems', 'Software Development'],
      icon: 'fas fa-graduation-cap',
      bgColor: 'bg-blue-500'
    },
    {
      year: '2023',
      title: 'Senior Secondary (10+2) PCM + CS',
      description: 'Completed senior secondary education from The Chintels School with 92.25% marks. Participated consistently in Debates and organised various Events during school years.',
      technologies: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      icon: 'fas fa-school',
      bgColor: 'bg-emerald-500'
    },
    {
      year: '2018',
      title: 'Programming Journey Begins',
      description: 'Started learning Java programming in 6th grade, marking the beginning of my passion for software development. This early exposure laid the foundation for my strong programming skills.',
      technologies: ['Java', 'Object-Oriented Programming', 'Problem Solving'],
      icon: 'fas fa-code',
      bgColor: 'bg-violet-500'
    }
  ];

  return (
    <section id="experience" style={{ 
      padding: '80px 24px', 
      background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.2), transparent)' 
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Experience & Education</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #10b981, #f59e0b)', margin: '0 auto', marginBottom: '24px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '512px', margin: '0 auto' }}>
            My educational journey and practical experience in software development and emerging technologies.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '16px', 
            top: '0', 
            width: '4px', 
            height: '100%', 
            background: 'linear-gradient(to bottom, #10b981, #059669, transparent)'
          }}></div>

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {timelineItems.map((item, index) => (
              <div key={index} style={{ 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  left: '0', 
                  top: '0',
                  width: '32px', 
                  height: '32px', 
                  background: '#10b981', 
                  borderRadius: '50%', 
                  border: '4px solid #0f172a', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <i className={item.icon} style={{ color: 'white', fontSize: '14px' }}></i>
                </div>
                <div style={{ 
                  marginLeft: '48px',
                  width: '100%',
                  maxWidth: '600px'
                }}>
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.08)', 
                    backdropFilter: 'blur(16px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px', 
                    padding: '24px',
                    transition: 'transform 0.3s ease'
                  }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)', 
                      color: '#0f172a', 
                      padding: '4px 12px', 
                      borderRadius: '9999px', 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      display: 'inline-block', 
                      marginBottom: '12px' 
                    }}>
                      {item.year}
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>{item.title}</h3>
                    <p style={{ color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{ 
                          background: 'rgba(16, 185, 129, 0.2)', 
                          color: '#10b981', 
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          padding: '4px 8px', 
                          borderRadius: '4px', 
                          fontSize: '12px' 
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
