export default function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-20"
      style={{ backgroundColor: '#FEF8F0' }}
    >
      {/* Image — full width on mobile, left 50% on desktop */}
      <div
        className="relative overflow-hidden w-full md:w-1/2"
        style={{ minHeight: '55vw', backgroundColor: '#E8D9C8' }}
      >
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=1100&fit=crop&auto=format"
          alt="Graphic designer at work with colorful design materials"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(255,85,51,0.08)', mixBlendMode: 'multiply' }}
        />
        <div
          className="absolute bottom-6 left-6 px-4 py-2 text-xs font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: '#FFD166',
            color: '#1A1214',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.12em',
            borderRadius: '100px',
          }}
        >
          Open for work ✦
        </div>
      </div>

      {/* Text — full width on mobile, right 50% on desktop */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:py-20"
        style={{ paddingLeft: 'clamp(1.5rem, 5vw, 4.5rem)', paddingRight: 'clamp(1.5rem, 5vw, 4.5rem)' }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-5"
          style={{ color: '#FF5533', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.18em' }}
        >
          Freelance Graphic Designer
        </p>

        <h1
          className="mb-5 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 5rem)',
            fontWeight: 900,
            color: '#1A1214',
            lineHeight: 1.05,
          }}
        >
          Design that makes people{' '}
          <em style={{ color: '#FF5533', fontStyle: 'italic' }}>feel</em>{' '}
          something.
        </h1>

        <p
          className="mb-3 text-base md:text-lg font-medium"
          style={{ color: '#4A1D96', fontFamily: "'DM Sans', sans-serif" }}
        >
          Visual identity, brand strategy & bold creative direction.
        </p>

        <p
          className="mb-8 leading-relaxed"
          style={{
            color: '#7A6A5A',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            lineHeight: 1.75,
          }}
        >
          I help brands, founders, and studios build visual identities that are
          impossible to ignore. From logo to launch — I bring clarity, character,
          and a lot of color.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: '#FF5533',
              color: '#ffffff',
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: '100px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E03D1E'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FF5533'
            }}
          >
            See my work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: 'transparent',
              color: '#1A1214',
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: '100px',
              border: '1.5px solid #1A1214',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1A1214'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#FEF8F0'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#1A1214'
            }}
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}
