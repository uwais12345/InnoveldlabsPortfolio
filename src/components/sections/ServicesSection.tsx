import { services } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-base p-7 relative overflow-hidden flex flex-col transition-all duration-500
        ${service.featured ? 'border-indigo-300 ring-2 ring-indigo-100' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {service.featured && (
        <span className="absolute top-4 right-4 bg-gradient-accent text-white
                         text-xs font-bold px-3 py-1 rounded-full tracking-wide">
          Most Popular
        </span>
      )}
      <span className="text-xs font-bold tracking-widest text-gray-300 mb-4">{service.number}</span>
      <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl
                      flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-navy-800 mb-3">{service.name}</h3>
      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{service.description}</p>
      <ul className="space-y-1.5 mb-5">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted">
            <span className="text-emerald-500 font-bold mt-0.5">✓</span>
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4 mt-auto">
        {service.deliverables.map((d) => (
          <span key={d} className="deliverable-tag">{d}</span>
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => (
  <section id="services" className="section-pad bg-bg-base">
    <div className="container-xl">
      <SectionHeader
        tag="What We Do"
        title="Services That"
        titleHighlight="Drive Results"
        subtitle="Everything you need to build, launch, and scale your digital product — under one roof."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
