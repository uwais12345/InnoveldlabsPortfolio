import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

const serviceOptions = [
  'Full-Stack Web Development',
  'Mobile App Development',
  'SaaS Product Development',
  'E-Commerce Platform',
  'API Development & Integration',
  'UI/UX Design',
  'Other / Not Sure',
];

const channels = [
  { icon: '📧', label: 'Email', value: 'hello@innoveldlabs.com', href: 'mailto:hello@innoveldlabs.com' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/company/innoveldlabs', href: '#' },
  { icon: '𝕏', label: 'Twitter / X', value: '@innoveldlabs', href: '#' },
];

const Contact = () => {
  const { contactFormSubmitted, setContactFormSubmitted } = usePortfolio();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setContactFormSubmitted(true);
    }, 1400);
  };

  return (
    <main className="pt-16 bg-bg-base min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-hero py-20">
        <div className="container-xl text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/60
                          text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Accepting New Projects
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Build<br />
            <span className="gradient-text">Something Great?</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Tell us about your idea. We'll get back within 24 hours with a clear plan — no vague proposals,
            no wasted time.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — channels */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-800 mb-2">
                Let's Talk
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Prefer a direct channel? Reach out via any of the options below.
              </p>
            </div>

            <div className="space-y-3">
              {channels.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100
                             shadow-card hover:border-indigo-200 hover:shadow-card-hover
                             hover:translate-x-1 transition-all duration-200"
                >
                  <div className="text-2xl w-10 text-center flex-shrink-0">{icon}</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-navy-800">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust signals */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Why work with us</p>
              <ul className="space-y-2.5">
                {[
                  '✅ Response within 24 hours — guaranteed',
                  '🚀 MVP delivery in 4–8 weeks',
                  '💬 Weekly progress updates',
                  '🔒 Full IP ownership — always yours',
                  '🤝 Milestone-based billing',
                ].map((item) => (
                  <li key={item} className="text-sm text-navy-800/80 flex items-start gap-2 leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {contactFormSubmitted ? (
              <div className="card-base p-12 text-center border-emerald-200 ring-2 ring-emerald-50">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl font-bold text-navy-800 mb-2">Message Received!</h3>
                <p className="text-muted mb-6">
                  Thank you for reaching out. We'll be in touch within 24 hours with a clear next step.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setContactFormSubmitted(false)}
                    className="btn-ghost text-sm"
                  >
                    Send Another
                  </button>
                  <Link to="/projects" className="btn-primary text-sm">View Our Work →</Link>
                </div>
              </div>
            ) : (
              <div className="card-base p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-6">
                  Tell Us About Your Project
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                   text-navy-800 outline-none focus:border-accent focus:ring-2
                                   focus:ring-indigo-100 transition-all bg-white placeholder-gray-300"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                   text-navy-800 outline-none focus:border-accent focus:ring-2
                                   focus:ring-indigo-100 transition-all bg-white placeholder-gray-300"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Company / Startup Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                 text-navy-800 outline-none focus:border-accent focus:ring-2
                                 focus:ring-indigo-100 transition-all bg-white placeholder-gray-300"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                 text-navy-800 outline-none focus:border-accent focus:ring-2
                                 focus:ring-indigo-100 transition-all bg-white appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Project Brief *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                 text-navy-800 outline-none focus:border-accent focus:ring-2
                                 focus:ring-indigo-100 transition-all bg-white placeholder-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-primary w-full justify-center py-3.5 text-base
                      ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We'll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
