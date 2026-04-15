import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-navy-800 text-white">
    <div className="container-xl py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-gradient-accent rounded-lg grid place-items-center flex-shrink-0">
              <span className="font-heading font-extrabold text-white text-sm">IL</span>
            </div>
            <span className="font-heading font-bold text-white">Innoveld Labs</span>
          </Link>
          <p className="text-base font-semibold bg-gradient-accent bg-clip-text text-transparent mb-2">
            Design. Build. Scale.
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Helping startups and SMEs grow through scalable digital solutions — built in India,
            for the world.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Navigation</p>
          <ul className="space-y-2">
            {['About', 'Services', 'Experience', 'Process', 'Team'].map((item) => (
              <li key={item}>
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-accent-light transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Services</p>
          <ul className="space-y-2">
            {[
              'Full-Stack Development',
              'Mobile Apps',
              'SaaS Products',
              'E-Commerce',
              'API Development',
              'UI/UX Design',
            ].map((s) => (
              <li key={s}>
                <a
                  href="/#services"
                  className="text-sm text-white/60 hover:text-accent-light transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Get in Touch</p>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Ready to build something that drives real business impact?
          </p>
          <Link to="/contact" className="btn-primary text-sm justify-center w-full">
            Contact Us
          </Link>
          <div className="flex gap-3 mt-5">
            {['in', '𝕏', '⌨'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg
                           grid place-items-center text-white/50 hover:bg-accent/20
                           hover:border-accent/40 hover:text-accent-light transition-all text-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-xl py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/30">© 2026 Innoveld Labs. All rights reserved. · Built with ❤️ in India</p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service'].map((l) => (
            <a key={l} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
