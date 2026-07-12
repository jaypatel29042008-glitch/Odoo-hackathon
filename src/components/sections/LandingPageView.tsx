import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import StorySection from './StorySection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import ExistingSolutionsSection from './ExistingSolutionsSection';
import WorkflowSection from './WorkflowSection';
import ShowcaseSection from './ShowcaseSection';
import ImpactSection from './ImpactSection';
import BenefitsSection from './BenefitsSection';
import RoadmapSection from './RoadmapSection';
import TeamSection from './TeamSection';
import FutureScopeSection from './FutureScopeSection';
import TechStackSection from './TechStackSection';
import ContactSection from './ContactSection';
import CTASection from './CTASection';

interface LandingPageViewProps {
  onLaunchDemo: () => void;
}

export default function LandingPageView({ onLaunchDemo }: LandingPageViewProps) {
  return (
    <div className="bg-slate-950 text-white min-h-screen antialiased overflow-x-hidden">
      <Navbar onLaunchDemo={onLaunchDemo} />
      
      {/* Marketing Sections */}
      <HeroSection onLaunchDemo={onLaunchDemo} />
      <ProblemSection />
      <StorySection />
      <SolutionSection />
      <FeaturesSection />
      <ExistingSolutionsSection />
      <WorkflowSection />
      <ShowcaseSection />
      <ImpactSection />
      <BenefitsSection />
      <RoadmapSection />
      <TeamSection />
      <FutureScopeSection />
      <TechStackSection />
      <ContactSection />
      <CTASection onLaunchDemo={onLaunchDemo} />
      
      <Footer />
    </div>
  );
}
