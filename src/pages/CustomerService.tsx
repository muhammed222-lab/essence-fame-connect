import { Button } from "@/components/ui/button";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-essence-black mb-6 text-center">
          Customer Service
        </h1>
        <div className="h-1 w-24 bg-essence-orange mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-essence-black">
                Contact Us
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-essence-orange"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-essence-orange"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-essence-orange"
                  >
                    <option value="">Select a topic</option>
                    <option value="account">Account Issues</option>
                    <option value="payment">Payment Problems</option>
                    <option value="brand">Brand Inquiries</option>
                    <option value="creator">Creator Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-essence-orange"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>

                <Button className="w-full bg-essence-orange hover:bg-essence-orange/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4 text-essence-black">
                  Support Hours
                </h2>
                <p className="mb-4">
                  Our customer support team is available 24/7.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-4 text-essence-black">
                  Quick Help
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-essence-orange/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-essence-orange"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-essence-gray">
                        essencefameface@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-essence-orange/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-essence-orange"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1-3.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Telegram</h3>
                      <p className="text-essence-gray">
                        <a
                          href="https://t.me/essence_iconic"
                          className="text-essence-orange hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          t.me/essence_iconic
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-essence-orange/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-essence-orange"
                      >
                        <path d="M12 2a10 10 0 0 1 10 10c0 3.87-2.92 7.07-7 7.93V16h-2v3.93A10.001 10.001 0 0 1 2 12 10 10 0 0 1 12 2z"></path>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">TikTok</h3>
                      <p className="text-essence-gray">essence_fameface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
