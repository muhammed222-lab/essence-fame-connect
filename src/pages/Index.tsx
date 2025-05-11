
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import SEOMetadata from "@/components/SEOMetadata";

const Index = () => {
  return (
    <>
      <SEOMetadata 
        title="Welcome to EssenceFameFace" 
        description="EssenceFameFace is a community agency that helps models and content creators secure brand deals and monetize your contents. Join our expert team today!"
        keywords="content creators, models, brand deals, monetization, influencer marketing, essence fame face"
      />
      <HeroSection />
      <VideoSection 
        title="Connect With Top Brands" 
        description="Join our platform to connect with leading brands looking for talented influencers and content creators like you."
      />
    </>
  );
};

export default Index;
