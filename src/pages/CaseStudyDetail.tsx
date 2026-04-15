import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/portfolio';

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cs = caseStudies.find((c) => c.id === id);

  if (!cs) return <Navigate to="/projects" replace />;

  return (
    <main className="pt-16 bg-bg-base min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-hero py-20">
        <div className="container-xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{cs.icon}</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-light mb-1 block">
                Case Study
              </span>
              <p className="text-white/50 text-sm">{cs.clientType}</p>
            </div>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white
                         leading-tight max-w-3xl">
            {cs.title}
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {cs.toolsUsed.map((t) => (
              <span key={t} className="text-xs font-semibold text-white/60 bg-white/10
                                       border border-white/20 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
            <span className="text-xs font-semibold text-white/60 bg-white/10
                             border border-white/20 px-3 py-1 rounded-full">
              ⏱ {cs.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-xl py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {cs.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-heading font-extrabold text-3xl gradient-text">{m.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Problem */}
            <div className="card-base p-8">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                🔴 The Problem
              </h2>
              <p className="text-muted leading-relaxed">{cs.problem}</p>
            </div>

            {/* Solution */}
            <div className="card-base p-8">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-4 flex items-center gap-2">
                🟢 Our Solution
              </h2>
              <p className="text-muted leading-relaxed">{cs.solution}</p>
            </div>

            {/* Features */}
            <div className="card-base p-8">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-5">
                ⚙️ Key Features Built
              </h2>
              <div className="flex flex-wrap gap-3">
                {cs.features.map((f) => (
                  <span key={f} className="text-sm font-semibold text-accent bg-indigo-50
                                           border border-indigo-200 px-4 py-2 rounded-xl">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="card-base p-8">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-5">
                📈 Outcomes
              </h2>
              <ul className="space-y-3">
                {cs.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-xs
                                     flex items-center justify-center flex-shrink-0 font-bold mt-0.5">✓</span>
                    <span className="text-muted text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="card-base p-8 border-l-4 border-accent">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-5">
                💡 Key Learnings
              </h2>
              <ul className="space-y-3">
                {cs.learnings.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent font-bold mt-0.5">→</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Testimonial */}
            <div className="card-base p-7 border-indigo-200 ring-2 ring-indigo-50">
              <div className="text-amber-400 text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                "{cs.testimonial}"
              </p>
              <p className="text-xs font-semibold text-accent">{cs.testimonialAuthor}</p>
            </div>

            {/* Project info */}
            <div className="card-base p-7">
              <h3 className="font-heading font-bold text-navy-800 mb-4">Project Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Duration</dt>
                  <dd className="text-sm text-navy-800 font-medium">{cs.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Client Type</dt>
                  <dd className="text-sm text-navy-800 font-medium">{cs.clientType}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Tech Stack</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {cs.toolsUsed.map((t) => (
                      <span key={t} className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* CTA */}
            <div className="card-base p-7 bg-gradient-hero border-0 text-white">
              <h3 className="font-heading font-bold text-lg mb-2">Want Similar Results?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Let's discuss how we can build something just as impactful for your business.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                Start a Project →
              </Link>
            </div>

            {/* Other case studies */}
            <div className="card-base p-7">
              <h3 className="font-heading font-bold text-navy-800 mb-4 text-sm uppercase tracking-wider">
                More Case Studies
              </h3>
              <div className="space-y-3">
                {caseStudies
                  .filter((c) => c.id !== id)
                  .map((c) => (
                    <Link
                      key={c.id}
                      to={`/case/${c.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-navy-800 group-hover:text-accent transition-colors leading-snug">
                          {c.title.split(' ').slice(0, 5).join(' ')}…
                        </p>
                        <p className="text-xs text-gray-400">{c.duration}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyDetail;
