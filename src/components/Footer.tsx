import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-essence-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-essence-orange">Essence</span>
              <span className="text-white">Fame</span>
              <span className="text-essence-orange">Face</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Connecting talented creators with brands that value authentic
              content.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/home" },
                { name: "Contract", path: "/contract" },
                { name: "Registration", path: "/registration" },
                { name: "Customer Service", path: "/customer-service" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-essence-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                "Brand Guidelines",
                "Content Creation Tips",
                "Marketing Strategy",
                "Partnership Ideas",
                "Success Stories",
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-essence-orange transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-essence-orange flex-shrink-0 mt-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-300">
                  Lekki
                  <br />
                  Lagos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-essence-orange flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-gray-300">essencefameface@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-essence-orange flex-shrink-0"
                >
                  {/* Telegram Icon */}
                  <path d="M22 2L2 12l7 5 2 4 4-3 5 3-1-7z"></path>
                </svg>
                <a
                  href="https://t.me/essence_iconic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-essence-orange transition-colors"
                >
                  t.me/essence_iconic
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-essence-orange flex-shrink-0"
                >
                  {/* TikTok Icon (placeholder) */}
                  <path d="M9 3v10a4 4 0 1 0 4-4h4"></path>
                </svg>
                <span className="text-gray-300">essence_fameface</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EssenceFameFace. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Accessibility",
              ].map((policy) => (
                <a
                  key={policy}
                  href="#"
                  className="hover:text-essence-orange transition-colors"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
