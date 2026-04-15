import HeroSection from '../components/sections/HeroSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import RecentClientExperience from '../components/sections/RecentClientExperience';
import CaseStudies from '../components/sections/CaseStudies';
import ProcessSection from '../components/sections/ProcessSection';
import Testimonials from '../components/sections/Testimonials';
import TeamSection from '../components/sections/TeamSection';
import { Link } from 'react-router-dom';

// CTA Banner between sections
const CTABanner = () => (
  <section className="bg-gradient-hero py-20">
    <div className="container-xl text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
        Why Innoveld Labs
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
        Speed without compromise.<br />
        <span className="gradient-text">Results without excuses.</span>
      </h2>
      <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
        Typical MVP delivery in 4–8 weeks. In-house team. Milestone-based billing. Full ownership.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/contact" className="btn-primary">Start a Project →</Link>
        <Link to="/projects" className="btn-outline-white">See Our Work</Link>
      </div>
    </div>
  </section>
);

const Home = () => (
  <main>
    <HeroSection />
    <MarqueeSection />
    <AboutSection />
    <ServicesSection />
    <RecentClientExperience />
    <CaseStudies />
    <ProcessSection />
    <Testimonials />
    <TeamSection />
    <CTABanner />
  </main>
);

export default Home;
