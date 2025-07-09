import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      bgColor: '#10b981',
      skills: [
        { name: 'Java', percentage: 90 },
        { name: 'Python', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
      ]
    },
    {
      title: 'Web Development',
      icon: 'fas fa-globe',
      bgColor: '#3b82f6',
      skills: [
        { name: 'HTML/CSS', percentage: 85 },
        { name: 'TailwindCSS', percentage: 80 },
        { name: 'Node.js', percentage: 75 },
      ]
    },
    {
      title: 'Specialized Skills',
      icon: 'fas fa-brain',
      bgColor: '#8b5cf6',
      skills: [
        { name: 'DSA', percentage: 90 },
        { name: 'OpenCV', percentage: 80 },
        { name: 'Public Speaking', percentage: 85 },
      ]
    }
  ];

  return (
    <section id="skills" style={{ 
      padding: '80px 24px', 
      background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.2))' 
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Skills & Expertise</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #10b981, #f59e0b)', margin: '0 auto', marginBottom: '24px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '512px', margin: '0 auto' }}>
            A comprehensive skill set developed through years of learning, practice, and real-world project experience.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px' 
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(16px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px', 
              padding: '24px',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: category.bgColor, 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '16px' 
                }}>
                  <i className={category.icon} style={{ color: 'white', fontSize: '20px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: '#e2e8f0' }}>{skill.name}</span>
                      <span style={{ color: '#10b981', fontWeight: '600' }}>{skill.percentage}%</span>
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '10px', 
                      background: 'rgba(255, 255, 255, 0.1)', 
                      borderRadius: '5px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${skill.percentage}%`,
                        background: 'linear-gradient(90deg, #10b981, #059669)', 
                        borderRadius: '5px',
                        transition: 'width 2s ease'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
