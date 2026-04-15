import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/portfolio';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  const scrollTo = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-navy-800/95 backdrop-blur-md shadow-lg'
          : 'bg-navy-800'
        }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="font-heading font-extrabold text-white text-sm tracking-tight">IL</span>
            </div>
            <span className="font-heading font-bold text-white text-base tracking-tight">
              Innoveld Labs
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/#') ? (
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white
                               rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white
                               rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-navy-800 border-t border-white/10 overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}
      >
        <div className="container-xl flex flex-col gap-1">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                className="w-full text-left px-4 py-3 text-sm font-medium text-white/70
                           hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-3 text-sm font-medium text-white/70
                           hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            className="btn-primary text-sm mt-2 justify-center"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
