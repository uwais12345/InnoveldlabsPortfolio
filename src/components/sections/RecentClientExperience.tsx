import { Link } from 'react-router-dom';
import { clientExperiences } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: typeof clientExperiences[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-base overflow-hidden flex flex-col transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-7 pt-6 pb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent border border-indigo-200 bg-indigo-50 px-3 py-1 rounded-full">
          {exp.industry}
        </span>
        <span className="text-xs text-gray-400 font-medium">{exp.duration}</span>
      </div>

      <div className="px-7 pb-7 flex flex-col flex-1">
        <div className="text-4xl mb-3">{exp.icon}</div>
        <h3 className="font-heading text-xl font-bold text-navy-800 mb-1">{exp.clientName}</h3>
        <p className="text-xs font-semibold text-accent mb-3">{exp.projectType}</p>
        <p className="text-sm text-muted leading-relaxed mb-5">{exp.summary}</p>

        {/* Problem / Solution */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { label: 'Problem', text: exp.problem },
            { label: 'Solution', text: exp.solution },
          ].map(({ label, text }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
              <p className="text-xs text-gray-500 leading-snug">{text}</p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex gap-2 mb-5">
          {exp.metrics.map((m) => (
            <div key={m.label} className="metric-chip">
              <p className="font-heading font-extrabold text-xl gradient-text leading-none">{m.value}</p>
              <p className="text-xs text-gray-400 mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4 mt-auto">
          {exp.toolsUsed.map((t) => (
            <span key={t} className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentClientExperience = () => (
  <section id="experience" className="section-pad bg-white">
    <div className="container-xl">
      <SectionHeader
        tag="Recent Work"
        title="Client Experience"
        titleHighlight="That Speaks"
        subtitle="Real projects. Measurable outcomes. Partnerships that go beyond code."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientExperiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/projects" className="btn-primary">
          View All Case Studies →
        </Link>
      </div>
    </div>
  </section>
);

export default RecentClientExperience;
