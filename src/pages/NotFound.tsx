
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOMetadata from "@/components/SEOMetadata";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add structured data for better SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "404 Not Found"
      }]
    });
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [location.pathname]);

  return (
    <>
      <SEOMetadata 
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to EssenceFameFace home to discover how we help content creators monetize their content and secure brand deals."
        keywords="404, page not found, essence fame face, brand deals, content creators"
      />
      <div className="min-h-screen flex items-center justify-center bg-white px-6 py-24">
        <div className="max-w-md w-full text-center">
          <div className="relative mx-auto mb-6">
            <div className="text-8xl font-bold text-essence-orange">404</div>
            <div className="absolute w-full h-3 bg-essence-orange/20 bottom-3"></div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-essence-black">Page Not Found</h1>
          <p className="text-lg text-essence-gray mb-8">
            We're sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="bg-essence-orange hover:bg-essence-orange/90 text-white px-6 py-2">
                Back to Home
              </Button>
            </Link>
            <div className="pt-6 border-t mt-6 border-gray-200">
              <p className="text-sm text-essence-gray">
                Need help finding something? Contact our <Link to="/customer-service" className="text-essence-orange hover:underline">Customer Support</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
