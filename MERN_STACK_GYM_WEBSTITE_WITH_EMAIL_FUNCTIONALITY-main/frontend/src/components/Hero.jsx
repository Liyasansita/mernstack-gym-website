import React from "react";

const Hero = () => {
  return (
    <section style={{
      background: '#e05555',
      color: 'white',
      padding: '6rem 1rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(0,0,0,0.2)'
    }}>
      
      {/* Glazing black overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
        zIndex: 1
      }}></div>
      
      {/* Conversion-focused content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Social proof badge */}
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '50px',
          display: 'inline-block',
          marginBottom: '2rem',
          fontSize: '0.9rem',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          🏆 15,000+ Transformations and Counting
        </div>

        {/* Main headline with value proposition */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          margin: '0 auto 1.5rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          maxWidth: '800px',
          letterSpacing: '-0.5px'
        }}>
          Your Body <span style={{ 
            background: 'linear-gradient(to right, #fff, #ffeb3b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Transformed</span> in 30 Days
        </h1>

        {/* Subheadline with specific benefit */}
        <p style={{
          fontSize: '1.5rem',
          lineHeight: 1.5,
          margin: '0 auto 3rem',
          maxWidth: '700px',
          color: 'rgba(255,255,255,0.95)',
          fontWeight: 300,
          textShadow: '0 1px 3px rgba(0,0,0,0.3)'
        }}>
          Scientifically proven to deliver <strong>3X faster results</strong> than traditional workouts
        </p>

        {/* Visual proof element */}
        <div style={{
          background: 'rgba(0,0,0,0.25)',
          padding: '1.5rem',
          borderRadius: '16px',
          margin: '0 auto 3rem',
          maxWidth: '600px',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>30<span style={{ fontSize: '1.5rem' }}>lbs</span></div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Average Fat Loss</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>97<span style={{ fontSize: '1.5rem' }}>%</span></div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Success Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>12<span style={{ fontSize: '1.5rem' }}>min</span></div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Daily Workout</div>
            </div>
          </div>
          
          {/* Scrolling testimonials placeholder */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '1rem',
            borderRadius: '8px',
            fontStyle: 'italic',
            position: 'relative'
          }}>
            <p style={{ margin: 0 }}>"I dropped 28lbs in 4 weeks - never felt better!"</p>
            <div style={{
              position: 'absolute',
              right: '1rem',
              bottom: '-0.5rem',
              fontSize: '0.8rem',
              background: 'rgba(0,0,0,0.7)',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px'
            }}>— Sarah K.</div>
          </div>
        </div>

        {/* Risk reversal */}
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          padding: '1.25rem',
          borderRadius: '12px',
          display: 'inline-block',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ 
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '1.1rem'
          }}>
            <span style={{
              background: '#4ECDC4',
              color: 'black',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0
            }}>✓</span>
            <span>Guaranteed results or your money back</span>
          </p>
        </div>

        {/* Trust indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '4rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {['Forbes', "Men's Health", 'ESPN', 'GQ'].map((brand) => (
            <div key={brand} style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              backdropFilter: 'blur(5px)'
            }}>
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(5px)'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(8px)'
      }}></div>
    </section>
  );
};

export default Hero;