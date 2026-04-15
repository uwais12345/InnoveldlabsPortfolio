import { testimonials, teamMembers } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="testimonials" className="section-pad bg-bg-base">
      <div className="container-xl">
        <SectionHeader
          tag="Social Proof"
          title="What Our"
          titleHighlight="Clients Say"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const { ref, isVisible } = useScrollReveal();
            return (
              <div
                key={t.id}
                ref={ref}
                className={`card-base p-8 flex flex-col transition-all duration-500
                  ${t.featured ? 'border-indigo-300 ring-2 ring-indigo-100 md:-translate-y-2' : ''}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-amber-400 text-base tracking-widest mb-4">★★★★★</div>
                <p className="text-sm text-gray-600 leading-relaxed italic flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-accent grid place-items-center
                                   text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
