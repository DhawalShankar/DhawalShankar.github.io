export default function TestSections() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b, #0f172a)', color: 'white' }}>
      <div style={{ padding: '80px 24px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>Test Sections</h1>
        
        {/* About Section Test */}
        <section style={{ 
          background: 'rgba(255, 255, 255, 0.08)', 
          backdropFilter: 'blur(16px)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>About Me</h2>
          <p style={{ color: '#cbd5e1' }}>I'm a pre-final year engineering student passionate about software development.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <span style={{ 
              background: 'rgba(16, 185, 129, 0.2)', 
              color: '#10b981', 
              padding: '4px 12px', 
              borderRadius: '9999px', 
              fontSize: '14px' 
            }}>Java</span>
            <span style={{ 
              background: 'rgba(16, 185, 129, 0.2)', 
              color: '#10b981', 
              padding: '4px 12px', 
              borderRadius: '9999px', 
              fontSize: '14px' 
            }}>Python</span>
          </div>
        </section>

        {/* Skills Section Test */}
        <section style={{ 
          background: 'rgba(255, 255, 255, 0.08)', 
          backdropFilter: 'blur(16px)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Skills</h2>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#e2e8f0' }}>Java</span>
              <span style={{ color: '#10b981', fontWeight: '600' }}>90%</span>
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
                width: '90%',
                background: 'linear-gradient(90deg, #10b981, #059669)', 
                borderRadius: '5px'
              }}></div>
            </div>
          </div>
        </section>

        {/* Projects Section Test */}
        <section style={{ 
          background: 'rgba(255, 255, 255, 0.08)', 
          backdropFilter: 'blur(16px)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '32px'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Projects</h2>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: '12px', 
            padding: '24px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981', marginBottom: '12px' }}>SignScribe</h3>
            <p style={{ color: '#cbd5e1', marginBottom: '16px' }}>Real-time sign language detection and translation using computer vision.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ 
                background: 'rgba(59, 130, 246, 0.2)', 
                color: '#60a5fa', 
                border: '1px solid rgba(59, 130, 246, 0.3)',
                padding: '4px 12px', 
                borderRadius: '9999px', 
                fontSize: '14px' 
              }}>Python</span>
              <span style={{ 
                background: 'rgba(34, 197, 94, 0.2)', 
                color: '#4ade80', 
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '4px 12px', 
                borderRadius: '9999px', 
                fontSize: '14px' 
              }}>OpenCV</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}