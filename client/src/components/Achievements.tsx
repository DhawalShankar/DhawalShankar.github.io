import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Achievements() {
  const achievementsRef = useIntersectionObserver();

  const achievements = [
    {
      title: 'Academic Excellence',
      value: '92.25%',
      subtitle: '12th Grade Board Examination Score',
      icon: 'fas fa-trophy',
      bgColor: 'bg-emerald-500'
    },
    {
      title: 'LeetCode Progress',
      value: '100+',
      subtitle: 'Problems Solved Successfully',
      icon: 'fas fa-code',
      bgColor: 'bg-violet-500'
    },
    {
      title: 'UAV Certification',
      value: 'CDAC Noida',
      subtitle: 'Drone Technology Boot Camp',
      icon: 'fas fa-certificate',
      bgColor: 'bg-amber-500'
    },
    {
      title: 'Public Speaking',
      value: 'Expert Level',
      subtitle: 'Strong Communication Skills',
      icon: 'fas fa-microphone',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Project Portfolio',
      value: '10+',
      subtitle: 'Technical Project Repositories',
      icon: 'fas fa-project-diagram',
      bgColor: 'bg-red-500'
    },
    {
      title: 'Experience',
      value: '6+',
      subtitle: 'Years of Programming',
      icon: 'fas fa-clock',
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <section id="achievements" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Achievements & Recognition</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #10b981, #f59e0b)', margin: '0 auto', marginBottom: '24px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '512px', margin: '0 auto' }}>
            Milestones and accomplishments that showcase my dedication to excellence and continuous learning.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {achievements.map((achievement, index) => (
            <div key={index} style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(16px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px', 
              padding: '24px',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: achievement.bgColor.includes('emerald') ? '#10b981' :
                  achievement.bgColor.includes('violet') ? '#8b5cf6' :
                  achievement.bgColor.includes('amber') ? '#f59e0b' :
                  achievement.bgColor.includes('blue') ? '#3b82f6' :
                  achievement.bgColor.includes('red') ? '#ef4444' :
                  '#22c55e',
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 16px' 
              }}>
                <i className={achievement.icon} style={{ color: 'white', fontSize: '24px' }}></i>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>{achievement.title}</h3>
              <p style={{ 
                fontSize: '32px', 
                fontWeight: 'bold', 
                marginBottom: '8px',
                color: achievement.bgColor.includes('emerald') ? '#10b981' :
                  achievement.bgColor.includes('violet') ? '#8b5cf6' :
                  achievement.bgColor.includes('amber') ? '#f59e0b' :
                  achievement.bgColor.includes('blue') ? '#3b82f6' :
                  achievement.bgColor.includes('red') ? '#ef4444' :
                  '#22c55e'
              }}>
                {achievement.value}
              </p>
              <p style={{ color: '#cbd5e1', fontSize: '14px' }}>{achievement.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
