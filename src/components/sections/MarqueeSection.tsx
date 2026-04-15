const skills = [
  'Full-Stack Development', 'Web Applications', 'Mobile Solutions',
  'API Integration', 'UI/UX Design', 'Cloud Deployment',
  'E-Commerce Platforms', 'SaaS Products',
];
// Duplicate for seamless loop
const marqueeItems = [...skills, ...skills];

const MarqueeSection = () => (
  <div className="bg-navy-800 border-y border-white/10 py-4 overflow-hidden">
    <div className="flex gap-8 whitespace-nowrap animate-marquee w-max">
      {marqueeItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">{item}</span>
          <span className="text-accent-light text-xs">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeSection;
