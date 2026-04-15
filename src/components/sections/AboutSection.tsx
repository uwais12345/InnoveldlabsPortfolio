import { useScrollReveal } from '../../hooks/useScrollReveal';

const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  const cards = [
    { icon: '🏗️', title: 'End-to-End Delivery', desc: 'From wireframes to deployment and beyond', color: 'border-t-indigo-500' },
    { icon: '🎯', title: 'Outcome-Driven', desc: 'Every decision tied to your business metrics', color: 'border-t-violet-500' },
    { icon: '🤝', title: 'Partner Mindset', desc: 'We think like co-founders, not contractors', color: 'border-t-cyan-500' },
    { icon: '🛡️', title: 'Transparent Process', desc: 'Clear timelines, honest comms, no surprises', color: 'border-t-emerald-500' },
  ];

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="badge mb-4">About Us</div>
            <h2 className="section-title mb-6">
              Built for Builders.<br />
              <span className="gradient-text">Designed for Growth.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Innoveld Labs is an early-stage software development startup helping businesses
              transform ideas into scalable digital realities. We partner with startups and SMEs
              across India to deliver full-stack web and mobile solutions that are fast, functional,
              and future-ready.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our team combines technical depth with a startup mindset — we move fast, iterate
              smart, and build products that actually work in the real world.
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: '🚀',
                  title: 'Vision',
                  text: 'To be the go-to digital partner for ambitious startups and SMEs across India, enabling sustainable tech-led growth.',
                },
                {
                  icon: '⚡',
                  title: 'Unique Strength',
                  text: 'We deliver startup-grade speed with enterprise-grade quality — agile execution, clean code, measurable results.',
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="font-semibold text-navy-800 mb-1">{title}</p>
                    <p className="text-sm text-muted leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — card grid */}
          <div
            ref={rightRef}
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200
              ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {cards.map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className={`card-base p-6 border-t-2 ${color}`}
              >
                <div className="text-3xl mb-3">{icon}</div>
                <p className="font-semibold text-navy-800 text-sm mb-1">{title}</p>
                <p className="text-xs text-muted leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
