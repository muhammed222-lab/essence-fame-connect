
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-essence-black mb-4 text-center">
            Connect with Top Brands
          </h1>
          <div className="h-1 w-24 bg-essence-orange mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-essence-gray text-center">
              EssenceFameFace connects influencers and content creators with brands looking for authentic partnerships. Our platform makes it easy to find opportunities that match your unique style and audience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Create Your Profile",
                description: "Showcase your talents, audience demographics, and content style to attract the right brands."
              },
              {
                title: "Get Discovered",
                description: "Brands browse our marketplace looking for creators like you to collaborate with on campaigns."
              },
              {
                title: "Grow Your Income",
                description: "Negotiate fair deals and build long-term relationships with brands in your niche."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-essence-orange/20 rounded-full flex items-center justify-center mb-4 text-essence-orange font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-essence-black">{item.title}</h3>
                <p className="text-essence-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <VideoSection 
        title="How It Works"
        description="Watch our video guide to learn how EssenceFameFace helps content creators connect with brands and unlock new opportunities."
      />
      
      <section className="py-16 bg-essence-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose EssenceFameFace?</h2>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                title: "Curated Opportunities",
                description: "We carefully review all brands on our platform to ensure legitimate opportunities."
              },
              {
                title: "Fair Compensation",
                description: "We advocate for fair payment that reflects your influence and the value you provide."
              },
              {
                title: "Personal Growth",
                description: "Access workshops and resources to improve your content and grow your audience."
              },
              {
                title: "Community Support",
                description: "Connect with fellow creators to share experiences and learn from each other."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-essence-orange rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
