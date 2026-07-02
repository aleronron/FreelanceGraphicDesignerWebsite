const services = [
  {
    icon: '✦',
    iconBg: '#FF5533',
    iconColor: '#ffffff',
    sublabel: 'Identity & Strategy',
    title: 'Brand Design',
    body:
      'Full visual identity systems — logo, color, type, and brand guidelines that hold up from business cards to billboards.',
    cta: 'Learn more →',
    cardBg: '#FFF5EA',
    ctaColor: '#FF5533',
  },
  {
    icon: '◈',
    iconBg: '#FFD166',
    iconColor: '#1A1214',
    sublabel: 'Print & Digital',
    title: 'Editorial Design',
    body:
      'Books, magazines, annual reports, and decks that feel as good as they read. Every spread considered, every grid intentional.',
    cta: 'Learn more →',
    cardBg: '#FEF8F0',
    ctaColor: '#FF5533',
  },
  {
    icon: '⬡',
    iconBg: '#4A1D96',
    iconColor: '#ffffff',
    sublabel: 'Motion & Screen',
    title: 'Digital & Motion',
    body:
      'Social assets, UI kits, and motion design that extend your brand into the digital world with energy and consistency.',
    cta: 'Learn more →',
    cardBg: '#F0E8FF',
    ctaColor: '#4A1D96',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: '#FEF8F0' }}
    >
      <div className="text-center mb-12 md:mb-16">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#FF5533', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.2em' }}
        >
          What I do
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3vw, 3rem)',
            fontWeight: 900,
            color: '#1A1214',
            lineHeight: 1.1,
          }}
        >
          Services built for<br />
          <em style={{ color: '#FF5533', fontStyle: 'italic' }}>creative ambition.</em>
        </h2>
      </div>

      {/* 1-col on mobile → 3-col on desktop */}
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

function ServiceCard({
  icon,
  iconBg,
  iconColor,
  sublabel,
  title,
  body,
  cta,
  cardBg,
  ctaColor,
}: (typeof services)[0]) {
  return (
    <div
      className="flex flex-col items-center text-center p-8 md:p-10 transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: cardBg,
        borderRadius: '1.5rem',
        border: '1px solid #E8D9C8',
      }}
    >
      <div
        className="w-14 h-14 flex items-center justify-center text-2xl mb-6"
        style={{ backgroundColor: iconBg, color: iconColor, borderRadius: '1rem' }}
      >
        {icon}
      </div>

      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: '#7A6A5A', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.16em' }}
      >
        {sublabel}
      </p>

      <h3
        className="mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1A1214',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-8 flex-1"
        style={{ color: '#7A6A5A', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
      >
        {body}
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-1 text-sm font-semibold px-6 py-3 transition-opacity duration-150 hover:opacity-80"
        style={{
          color: ctaColor,
          fontFamily: "'DM Sans', sans-serif",
          border: `1.5px solid ${ctaColor}`,
          borderRadius: '100px',
          textDecoration: 'none',
        }}
      >
        {cta}
      </a>
    </div>
  )
}
