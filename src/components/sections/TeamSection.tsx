import { teamMembers } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const TeamSection = () => (
  <section id="team" className="section-pad bg-white">
    <div className="container-xl">
      <SectionHeader
        tag="The Team"
        title="People Behind"
        titleHighlight="the Work"
        subtitle="A focused team of builders, designers, and strategists — united by one goal: your growth."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => {
          const { ref, isVisible } = useScrollReveal();
          return (
            <div
              key={member.id}
              ref={ref}
              className={`card-base p-7 text-center transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradientClass}
                               grid place-items-center text-white font-heading font-extrabold text-lg`}
                >
                  {member.initials}
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full
                                border-2 border-white" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-accent mb-4">{member.role}</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TeamSection;
