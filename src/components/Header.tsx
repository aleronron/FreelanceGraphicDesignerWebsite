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
        backgroundColor: 'rgba(254,245,230,0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #d9c9b8',
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <div
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", color: '#326371', letterSpacing: '0.15em' }}
        >
          ALESSIA RONCA
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
                color: active === link.label ? '#E971C8' : '#326371',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                if (active !== link.label)
                  (e.currentTarget as HTMLAnchorElement).style.color = '#E971C8'
              }}
              onMouseLeave={(e) => {
                if (active !== link.label)
                  (e.currentTarget as HTMLAnchorElement).style.color = '#326371'
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
          {[
            menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            null,
            menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
          ].map((transform, i) =>
            transform === null ? (
              <span
                key={i}
                className="block h-0.5 w-6 transition-all duration-200"
                style={{ backgroundColor: '#326371', opacity: menuOpen ? 0 : 1 }}
              />
            ) : (
              <span
                key={i}
                className="block h-0.5 w-6 transition-all duration-200"
                style={{ backgroundColor: '#326371', transform }}
              />
            )
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden flex flex-col px-6 pb-6 gap-5"
          style={{ borderTop: '1px solid #d9c9b8' }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActive(link.label); setMenuOpen(false) }}
              className="text-base font-medium py-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: active === link.label ? '#E971C8' : '#326371',
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
