
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  showGetStarted?: boolean;
}

const HeroSection = ({ showGetStarted = true }: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden landing-gradient">
      <div className="absolute w-full h-full bg-essence-black -z-10"></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="blob-shape bg-essence-orange w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
                <div className="absolute inset-0 bg-[url('/lovable-uploads/71785318-8ba7-46a3-b2f5-7688280f7ef4.png')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to a world of endless possibilities
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join our vibrant community of content creators, influencers, and freelancers to unlock new opportunities.
            </p>
            
            {showGetStarted && (
              <Link to="/home">
                <Button 
                  size="lg" 
                  className="bg-essence-cream hover:bg-essence-cream/90 text-essence-black text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
