export default function Bio() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32"
      style={{ backgroundColor: '#1A1214' }}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-8"
        style={{ color: '#FF5533', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
      >
        A little about me
      </p>

      <p
        className="leading-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
          fontWeight: 700,
          color: '#FEF8F0',
          maxWidth: '22ch',
          lineHeight: 1.2,
        }}
      >
        I'm Maya — a designer obsessed with{' '}
        <em style={{ color: '#FFD166', fontStyle: 'italic' }}>color, type,</em>{' '}
        and the stories brands tell without words.
      </p>

      <p
        className="mt-8 text-sm md:text-base leading-relaxed"
        style={{
          color: '#A89880',
          fontFamily: "'DM Sans', sans-serif",
          maxWidth: '52ch',
          lineHeight: 1.8,
        }}
      >
        Based in Barcelona. 7 years designing for startups, cultural institutions, and
        independent businesses across Europe and Latin America. I believe good design
        should feel effortless — even when the process wasn't.
      </p>

      {/* Stats row — wraps on very small screens */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {[
          { num: '80+', label: 'Projects delivered' },
          { num: '7', label: 'Years of practice' },
          { num: '3', label: 'Continents, 1 timezone' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center" style={{ minWidth: 100 }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                fontWeight: 900,
                color: '#FFD166',
              }}
            >
              {stat.num}
            </span>
            <span
              className="text-xs mt-1"
              style={{ color: '#7A6A5A', fontFamily: "'DM Sans', sans-serif" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
