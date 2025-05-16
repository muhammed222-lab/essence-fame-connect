import VideoSection from "@/components/VideoSection";

const Registration = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-essence-black mb-6 text-center">
          Registration Guide
        </h1>
        <div className="h-1 w-24 bg-essence-orange mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-essence-black">
            How to Register
          </h2>

          <div className="space-y-6">
            <p className="text-lg">
              Joining the EssenceFameFace community is simple and
              straightforward. Please follow the steps below carefully to
              complete your registration.
            </p>

            <ol className="list-decimal pl-6 space-y-6">
              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">
                  Create Your Account
                </h3>
                <p>
                  Create a TikTok account or use an already existing account.
                  This account will be used for posting your content ads.
                </p>
              </li>

              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">
                  Make the Registration Fee Payment
                </h3>
                <p>
                  Make your payment to the directory account provided below.
                  Attach your payment receipt along with a facecard picture
                  showing your address location and TikTok handle, then send all
                  the details to our email.
                </p>
              </li>

              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">
                  Identification Number
                </h3>
                <p>
                  Once we receive your payment receipt and details, you will
                  automatically receive an identification number. This ID
                  represents your complete profile and will be used to identify
                  you among other registered members.
                </p>
              </li>

              <li className="pl-2">
                <h3 className="font-semibold text-xl mb-2">Fee Details</h3>
                <p>
                  <strong>Fee:</strong> 🇳🇬5,000 &nbsp;🇬🇭50 &nbsp;🇿🇦70 &nbsp;🇨🇦10
                  &nbsp;🇺🇸10
                </p>
                <p>
                  <strong>Account Number:</strong> 6820019324 (Moniepoint MFB)
                </p>
                <p>
                  <strong>Email:</strong> essencefameface@gmail.com
                </p>
              </li>
            </ol>

            <div className="bg-essence-cream p-6 rounded-md">
              <h3 className="font-semibold text-xl mb-2 text-essence-black">
                Additional Registration Tips:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use high-quality images for your profile.</li>
                <li>Be specific about your niche and target audience.</li>
                <li>Highlight your unique content style and values.</li>
                <li>Showcase your best work in your portfolio.</li>
                <li>Keep your engagement metrics updated.</li>
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
