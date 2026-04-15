import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const words = ['Scalable', 'Impactful', 'Reliable', 'Future-Ready'];

const HeroSection = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === word) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setDisplayed((prev) =>
            deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
          ),
        deleting ? 55 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl animate-float" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full bg-violet-500/15 blur-3xl animate-float [animation-delay:2.5s]" />

      <div className="container-xl relative z-10 pt-28 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm
                        text-white/70 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8
                        animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          Early-Stage Startup · India
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight
                       tracking-tight mb-6 animate-fade-up [animation-delay:0.1s]">
          We Build{' '}
          <span className="gradient-text min-w-[240px] inline-block">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
          <br />Digital Products
        </h1>

        {/* Subheadline */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10
                      animate-fade-up [animation-delay:0.2s]">
          From idea to execution — empowering startups and SMEs with full-stack solutions
          that drive real business impact across India.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-up [animation-delay:0.3s]">
          <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
            Get Started →
          </Link>
          <Link to="/projects" className="btn-outline-white text-base px-8 py-3.5">
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 animate-fade-up [animation-delay:0.4s]">
          {[
            { value: '20+', label: 'Projects Delivered' },
            { value: '15+', label: 'Happy Clients' },
            { value: '3×', label: 'Avg. Engagement Lift' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-4xl font-extrabold gradient-text tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <p className="text-xs uppercase tracking-widest">Scroll to explore</p>
        <div className="w-px h-10 bg-gradient-to-b from-indigo-400/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
