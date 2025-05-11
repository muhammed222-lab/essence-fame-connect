import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";

const Contract = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // For agreement_page_1 to agreement_page_3

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const downloadContract = () => {
    // In a real implementation, this would trigger a file download
    const link = document.createElement("a");
    link.href = `/agreement/agreement_page_${currentPage}.jpg`;
    link.download = `EssenceFameFace_Agreement_Page_${currentPage}.jpg`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-essence-black mb-6 text-center">
          Contract Agreement
        </h1>
        <div className="h-1 w-24 bg-essence-orange mx-auto mb-12"></div>

        {/* Document Viewer Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Document Navigation */}
            <div className="flex justify-between items-center bg-gray-50 px-6 py-4 border-b">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </Button>

              <span className="font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Document Display */}
            <div className="p-6 flex flex-col items-center">
              <img
                src={`/agreement/agreement_page_${currentPage}.jpg`}
                alt={`Agreement Page ${currentPage}`}
                className="w-full max-w-[800px] border border-gray-200 shadow-sm"
              />

              <Button
                onClick={downloadContract}
                className="mt-6 bg-essence-orange hover:bg-essence-orange/90 text-white"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Page {currentPage}
              </Button>
            </div>
          </div>
        </div>

        {/* Contract Information Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-essence-black">
              About Our Agreement
            </h2>
            <p className="text-lg mb-6">
              This contract outlines the partnership between content creators
              and brands through EssenceFameFace. Please review all pages
              carefully.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-essence-black">
                  Creator Benefits
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Guaranteed payment protection</li>
                  <li>Clear deliverables expectations</li>
                  <li>Flexible collaboration terms</li>
                  <li>Legal dispute resolution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-essence-black">
                  Key Clauses
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Intellectual property rights</li>
                  <li>Payment schedules</li>
                  <li>Content usage permissions</li>
                  <li>Cancellation policies</li>
                </ul>
              </div>
            </div>

            <div className="bg-essence-cream/20 p-4 rounded-md border border-essence-cream mb-6">
              <p className="text-essence-black">
                <strong>Note:</strong> By signing, you agree to all terms. We
                recommend saving a copy for your records.
              </p>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="max-w-4xl mx-auto bg-essence-black rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-essence-cream">
            Questions About the Agreement?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-essence-orange" />
                Email Support
              </h3>
              <p className="mb-4">
                Our legal team is available to clarify any contract terms.
              </p>

              <Button
                variant="outline"
                className="border-essence-cream text-black hover:bg-gray-400"
              >
                <a href="mailto:legal@essencefameface.com">
                  Contact Legal Team
                </a>
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-essence-orange" />
                Live Assistance
              </h3>
              <p className="mb-4">
                Schedule a call with our contract specialists.
              </p>
              <Button className="bg-essence-orange hover:bg-essence-orange/90">
                <a href="/customer-service">Book Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
