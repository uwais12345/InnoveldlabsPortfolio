import { processSteps } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ProcessStep = ({
  step,
  index,
  isLast,
}: {
  step: typeof processSteps[0];
  index: number;
  isLast: boolean;
}) => {
  const { ref, isVisible } = useScrollReveal(0.3);
  return (
    <div className="relative flex gap-6 items-start">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-indigo-300/60 to-transparent" />
      )}
      {/* Step circle */}
      <div
        ref={ref}
        className={`relative z-10 w-11 h-11 flex-shrink-0 rounded-full border-2 border-accent
                    grid place-items-center font-heading font-extrabold text-xs text-accent
                    transition-all duration-500
                    ${isVisible ? 'bg-accent text-white shadow-accent scale-110' : 'bg-white'}`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {step.step}
      </div>

      {/* Content */}
      <div
        className={`pb-10 transition-all duration-500
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
        style={{ transitionDelay: `${index * 80 + 100}ms` }}
      >
        <div className="text-xl mb-2">{step.icon}</div>
        <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{step.title}</h3>
        <p className="text-sm text-muted leading-relaxed max-w-xl">{step.description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => (
  <section id="process" className="section-pad bg-white">
    <div className="container-xl">
      <SectionHeader
        tag="How We Work"
        title="Our Process —"
        titleHighlight="Simple & Effective"
        subtitle="A structured, transparent workflow that keeps projects on time, on budget, and on target."
      />
      <div className="max-w-2xl mx-auto">
        {processSteps.map((step, i) => (
          <ProcessStep key={step.step} step={step} index={i} isLast={i === processSteps.length - 1} />
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
