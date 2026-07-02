import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(254,248,240,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E8D9C8',
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        {/* Logo / name — always visible */}
        <div
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1214', letterSpacing: '0.15em' }}
        >
          Maya Reyes
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: active === link.label ? '#FF5533' : '#1A1214',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                if (active !== link.label)
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FF5533'
              }}
              onMouseLeave={(e) => {
                if (active !== link.label)
                  (e.currentTarget as HTMLAnchorElement).style.color = '#1A1214'
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{
              backgroundColor: '#1A1214',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{
              backgroundColor: '#1A1214',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{
              backgroundColor: '#1A1214',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="md:hidden flex flex-col px-6 pb-6 gap-5"
          style={{ borderTop: '1px solid #E8D9C8' }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActive(link.label); setMenuOpen(false) }}
              className="text-base font-medium py-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: active === link.label ? '#FF5533' : '#1A1214',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
