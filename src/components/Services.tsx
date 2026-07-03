const services = [
  {
    icon: '✦',
    sublabel: 'Identity & Strategy',
    title: 'Brand Design',
    body:
      'Full visual identity systems — logo, color, type, and brand guidelines that hold up from business cards to billboards.',
    cta: 'Learn more →',
  },
  {
    icon: '◈',
    sublabel: 'Print & Digital',
    title: 'Editorial Design',
    body:
      'Books, magazines, annual reports, and decks that feel as good as they read. Every spread considered, every grid intentional.',
    cta: 'Learn more →',
  },
  {
    icon: '⬡',
    sublabel: 'Motion & Screen',
    title: 'Digital & Motion',
    body:
      'Social assets, UI kits, and motion design that extend your brand into the digital world with energy and consistency.',
    cta: 'Learn more →',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: '#FEF5E6' }}
    >
      <div className="text-center mb-12 md:mb-16">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#E971C8', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
        >
          What I do
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3vw, 3rem)',
            fontWeight: 900,
            color: '#326371',
            lineHeight: 1.1,
          }}
        >
          Services built for<br />
          <em style={{ color: '#E971C8', fontStyle: 'italic' }}>creative ambition.</em>
        </h2>
      </div>

      <div
        className="grid gap-5 max-w-5xl mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ icon, sublabel, title, body, cta }: (typeof services)[0]) {
  return (
    <div
      className="flex flex-col items-center text-center p-8 md:p-10 transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: '#DAEEE3',
        borderRadius: '1.5rem',
        border: '1px solid #c0deca',
      }}
    >
      {/* Icon tile: pink bg is decorative, teal text on pink = best available */}
      <div
        className="w-14 h-14 flex items-center justify-center text-2xl mb-6"
        style={{ backgroundColor: '#E971C8', color: '#326371', borderRadius: '1rem' }}
      >
        {icon}
      </div>

      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: '#326371', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.16em', opacity: 0.7 }}
      >
        {sublabel}
      </p>

      <h3
        className="mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#326371',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-8 flex-1"
        style={{ color: '#326371', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, opacity: 0.75 }}
      >
        {body}
      </p>

      {/* Button: teal bg + cream text = 6.4:1 ✓ */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1 text-sm font-semibold px-6 py-3 transition-all duration-150"
        style={{
          backgroundColor: '#326371',
          color: '#FEF5E6',
          fontFamily: "'DM Sans', sans-serif",
          borderRadius: '100px',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#254d59'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#326371'
        }}
      >
        {cta}
      </a>
    </div>
  )
}
