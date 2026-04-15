import { Link } from 'react-router-dom';
import { caseStudies, clientExperiences } from '../data/portfolio';
import SectionHeader from '../components/ui/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectCard = ({
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
      className={`card-base overflow-hidden flex flex-col transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top colored strip */}
      <div className="h-1.5 bg-gradient-accent" />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{cs.icon}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-accent bg-indigo-50
                           border border-indigo-200 px-3 py-1 rounded-full">
            {cs.clientType.split('—')[0].trim()}
          </span>
        </div>

        <h3 className="font-heading font-bold text-xl text-navy-800 mb-2 leading-snug">{cs.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{cs.problem}</p>

        {/* Metrics row */}
        <div className="flex gap-3 mb-5">
          {cs.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="flex-1 bg-indigo-50 rounded-xl p-3 text-center">
              <p className="font-heading font-extrabold text-lg gradient-text leading-none">{m.value}</p>
              <p className="text-xs text-gray-400 mt-1 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-5 border-t border-gray-100 pt-4">
          {cs.toolsUsed.map((t) => (
            <span key={t} className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <Link
          to={`/case/${cs.id}`}
          className="btn-primary text-sm justify-center"
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp, i }: { exp: typeof clientExperiences[0]; i: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-base p-6 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <div className="text-3xl mb-3">{exp.icon}</div>
      <h3 className="font-heading font-bold text-lg text-navy-800 mb-1">{exp.clientName}</h3>
      <p className="text-xs text-accent font-semibold mb-3">{exp.projectType}</p>
      <p className="text-sm text-muted leading-relaxed mb-4">{exp.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {exp.toolsUsed.map((t) => (
          <span key={t} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => (
  <main className="pt-16">
    {/* Page hero */}
    <div className="bg-gradient-hero py-20 text-center">
      <div className="container-xl">
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/60
                        text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          Our Portfolio
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
          Work That <span className="gradient-text">Speaks for Itself</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          From food-tech platforms to SaaS procurement tools — real products built for real businesses.
        </p>
      </div>
    </div>

    {/* Stats bar */}
    <div className="bg-white border-b border-gray-100 py-8">
      <div className="container-xl flex flex-wrap justify-center gap-12">
        {[
          { value: '20+', label: 'Projects Delivered' },
          { value: '15+', label: 'Satisfied Clients' },
          { value: '3×', label: 'Avg Engagement Lift' },
          { value: '4–8 wks', label: 'Typical MVP Timeline' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading font-extrabold text-3xl gradient-text">{s.value}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Case studies grid */}
    <section className="section-pad bg-bg-base">
      <div className="container-xl">
        <SectionHeader
          tag="Case Studies"
          title="Featured"
          titleHighlight="Projects"
          subtitle="Deep dives into how we work, decide, and deliver measurable outcomes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <ProjectCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Client experience quick list */}
    <section className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeader
          tag="All Engagements"
          title="Recent Client"
          titleHighlight="Experience"
          subtitle="Every engagement — big or small — we bring the same level of focus and craftsmanship."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {clientExperiences.map((exp, i) => (
             <ExperienceCard key={exp.id} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-hero py-16 text-center">
      <div className="container-xl">
        <h2 className="font-heading text-3xl font-bold text-white mb-4">
          Ready to be our next <span className="gradient-text">success story?</span>
        </h2>
        <p className="text-white/60 mb-8">Let's talk about your project — no commitment required.</p>
        <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
      </div>
    </section>
  </main>
);

export default Projects;
