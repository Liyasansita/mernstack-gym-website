import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session" style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '4rem 2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    }}>
      {/* Left Column - Image Section */}
      <div className="wrapper" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        height: '100%'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          lineHeight: 1.2,
          marginBottom: '0.5rem'
        }}>
          ELITE TRAINING SESSIONS
        </h1>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.85)'
        }}>
          <span style={{ color: '#ff4d4d', fontWeight: 600 }}>Muscle growth demands patience</span>, but the iron never lies—your effort transforms weakness into strength, one rep at a time.
        </p>

        <div style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
          flexGrow: 1,
          display: 'flex'
        }}>
          <img 
            src="/workout-hero.jpg" 
            alt="Professional workout session" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              minHeight: '400px'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
            padding: '2rem',
            color: 'white'
          }}>
            <h3 style={{ 
              margin: 0, 
              fontSize: '1.5rem',
              fontWeight: 700
            }}>
              Transform Your Body
            </h3>
            <p style={{ 
              margin: '0.5rem 0 0', 
              opacity: 0.9,
              fontSize: '1.1rem'
            }}>
              Join our elite training program today
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Bootcamps */}
      <div className="wrapper" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          lineHeight: 1.2,
          marginBottom: '0.5rem'
        }}>
          FEATURED BOOTCAMPS
        </h1>
        
        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.85)'
        }}>
          <span style={{ color: '#ff4d4d', fontWeight: 600 }}>Sweat drips, muscles burn</span>, but the squad pushes harder—no rep left undone, no weakness uncrushed.
        </p>

        <div className="bootcamps" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {bootcampData.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(30, 41, 59, 0.7)',
              padding: '1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid #ff4d4d'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#ff4d4d'
              }}>{item.icon}</div>
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '0.8rem',
                lineHeight: 1.3
              }}>{item.title}</h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.7)'
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const bootcampData = [
  {
    title: "The barbell never lies",
    desc: "Pain builds discipline, sweat earns respect. No quit, no mercy – only results.",
    icon: "🏋️"
  },
  {
    title: "Abs aren't made in the kitchen",
    desc: "Six-packs are carved in the gym, not the fridge – hold that plank until your sweat puts out the flames.",
    icon: "🔥"
  },
  {
    title: "Squats don't care about excuses",
    desc: "The arena doesn't care about your meal prep – only if you can take a gut punch and keep fighting.",
    icon: "🦵"
  },
  {
    title: "Bench press is truth serum",
    desc: "Your core isn't just muscles - it's the foundation of every movement, the anchor of your power.",
    icon: "💪"
  }
];

export default WorkoutSessions;
