
import Navbar from "@/components/Navbar";

const Contract = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-essence-black mb-6 text-center">Contract Information</h1>
        <div className="h-1 w-24 bg-essence-orange mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At EssenceFameFace, we believe in clear, fair contracts that protect both creators and brands. Our contract process is designed to be transparent and straightforward.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-essence-black">Contract Process</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li>Brand submits a collaboration proposal with clear deliverables and compensation</li>
              <li>Creator reviews the proposal and can accept, decline, or negotiate terms</li>
              <li>Once terms are agreed upon, both parties sign the digital contract</li>
              <li>Work begins according to the agreed timeline</li>
              <li>Payment is securely held in escrow until deliverables are approved</li>
              <li>Both parties rate and review the collaboration after completion</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mb-4 text-essence-black">Key Contract Elements</h2>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>Detailed description of deliverables (content type, quantity, deadlines)</li>
              <li>Usage rights and licensing terms</li>
              <li>Compensation and payment schedule</li>
              <li>Revision policy</li>
              <li>Cancellation terms</li>
              <li>Confidentiality clauses when applicable</li>
            </ul>
            
            <p className="bg-essence-cream p-4 rounded-md text-essence-black mb-6">
              <strong>Note:</strong> All contracts on EssenceFameFace are legally binding. We recommend consulting with a legal professional if you have any questions before signing.
            </p>
            
            <p>
              For any contract-related questions or to request a sample contract, please contact our support team through the Customer Service page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
