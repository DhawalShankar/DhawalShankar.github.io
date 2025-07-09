import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animateCounter } from '@/lib/animations';
import { useEffect } from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>About Me</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #10b981, #f59e0b)', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(16px)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px', 
            padding: '32px',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: '#10b981', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: '16px' 
              }}>
                <i className="fas fa-user-graduate" style={{ color: 'white', fontSize: '20px' }}></i>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>My Journey</h3>
            </div>
            <p style={{ color: '#cbd5e1', marginBottom: '24px', lineHeight: '1.6' }}>
              I'm a 3rd year B.Tech student in Electronics and Communication at JIIT Noida, passionate about software development and real-world tech applications. 
              Introduced to Java in 6th grade, I've since built a strong foundation in Data Structures and Algorithms, 
              especially Linked Lists and Trees. I've cleared CDAC Noida's UAV Bootcamp examination and worked on gesture recognition and web development projects.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Java', 'Python', 'JavaScript', 'DSA', 'OpenCV', 'TailwindCSS', 'NodeJS'].map((tech, index) => (
                <span key={index} style={{ 
                  background: 'rgba(16, 185, 129, 0.2)', 
                  color: '#10b981', 
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '4px 12px', 
                  borderRadius: '9999px', 
                  fontSize: '14px' 
                }}>{tech}</span>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(16px)', 
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px', 
            padding: '32px',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: '#f59e0b', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: '16px' 
              }}>
                <i className="fas fa-chart-line" style={{ color: 'white', fontSize: '20px' }}></i>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Academic Excellence</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#cbd5e1' }}>Current CGPA</span>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>7.6</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#cbd5e1' }}>12th Grade</span>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>92.25%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#cbd5e1' }}>LeetCode Problems</span>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#8b5cf6' }}>100+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#cbd5e1' }}>Years of Programming</span>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>7+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
