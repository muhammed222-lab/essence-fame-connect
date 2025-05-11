
import VideoSection from "@/components/VideoSection";

const Registration = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-essence-black mb-6 text-center">Registration Guide</h1>
        <div className="h-1 w-24 bg-essence-orange mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-essence-black">How to Register</h2>
          
          <div className="space-y-6">
            <p className="text-lg">
              Joining the EssenceFameFace community is simple and straightforward. Follow these steps to create your account and start connecting with brands:
            </p>
            
            <ol className="list-decimal pl-6 space-y-6">
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">Create Your Account</h3>
                <p>Click the "Get Started" button on our homepage and fill in your basic information including name, email, and password. Verify your email address through the confirmation link we send.</p>
              </li>
              
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">Build Your Profile</h3>
                <p>Upload a professional profile picture and cover image that represent your personal brand. Fill in your bio, highlighting your niche, expertise, and what makes you unique.</p>
              </li>
              
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">Connect Your Platforms</h3>
                <p>Link your social media accounts to showcase your follower count, engagement rates, and content style. This helps brands understand your audience and reach.</p>
              </li>
              
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">Set Your Rates</h3>
                <p>Establish your pricing for different types of content collaborations. You can always adjust these rates for specific opportunities.</p>
              </li>
              
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">Complete Verification</h3>
                <p>Go through our creator verification process to earn a verified badge, which increases your credibility with brands on the platform.</p>
              </li>
            </ol>
            
            <div className="bg-essence-cream p-6 rounded-md">
              <h3 className="font-semibold text-xl mb-2 text-essence-black">Important Registration Tips:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use high-quality images for your profile</li>
                <li>Be specific about your niche and target audience</li>
                <li>Highlight your unique content style and values</li>
                <li>Showcase your best work in your portfolio section</li>
                <li>Keep your engagement metrics up to date</li>
              </ul>
            </div>
          </div>
        </div>
        
        <VideoSection 
          title="Registration Tutorial"
          description="Watch our step-by-step video guide on how to register and set up your profile on EssenceFameFace."
        />
      </div>
    </div>
  );
};

export default Registration;
