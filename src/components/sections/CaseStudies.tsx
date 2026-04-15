import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CaseStudyCard = ({
  cs,
  index,
}: {
  cs: typeof caseStudies[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-base overflow-hidden flex flex-col md:flex-row gap-0 transition-all duration-600
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Left */}
      <div className="flex-1 p-8 md:p-10">
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
          Case Study 0{index + 1}
        </span>
        <div className="text-3xl mb-3">{cs.icon}</div>
        <h3 className="font-heading text-2xl font-bold text-navy-800 mb-2 leading-snug">
          {cs.title}
        </h3>
        <p className="text-xs text-gray-400 mb-6">{cs.clientType}</p>

        <div className="space-y-4 mb-6">
          {[
            { label: '🔴 Problem', text: cs.problem },
            { label: '🟢 Solution', text: cs.solution },
          ].map(({ label, text }) => (
            <div key={label}>
              <p className="text-sm font-bold text-navy-700 mb-1">{label}</p>
              <p className="text-sm text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {cs.features.map((f) => (
            <span key={f} className="text-xs font-semibold text-accent bg-indigo-50
                                     border border-indigo-200 px-3 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key Learnings</p>
          <ul className="space-y-1.5">
            {cs.learnings.map((l) => (
              <li key={l} className="flex items-start gap-2 text-xs text-gray-500">
                <span className="text-accent font-bold mt-0.5">→</span>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right */}
      <div className="md:w-64 lg:w-72 bg-gray-50 p-8 flex flex-col gap-5 border-t md:border-t-0 md:border-l border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          {cs.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-heading font-extrabold text-2xl gradient-text leading-none">{m.value}</p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-indigo-100 p-5 shadow-sm mt-auto">
          <p className="text-sm text-gray-600 italic leading-relaxed mb-3">"{cs.testimonial}"</p>
          <p className="text-xs font-semibold text-accent">{cs.testimonialAuthor}</p>
        </div>

        <Link
          to={`/case/${cs.id}`}
          className="btn-primary text-sm justify-center"
        >
          Read Full Case Study →
        </Link>
      </div>
    </div>
  );
};

const CaseStudies = () => (
  <section id="case-studies" className="section-pad bg-bg-base">
    <div className="container-xl">
      <SectionHeader
        tag="Deep Dives"
        title="Case Studies in"
        titleHighlight="Impact"
        subtitle="A closer look at how we approach complex problems and deliver meaningful solutions."
      />
      <div className="flex flex-col gap-6">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
