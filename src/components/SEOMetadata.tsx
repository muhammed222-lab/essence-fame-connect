
import { Helmet } from "react-helmet";

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  imageUrl?: string;
  url?: string;
}

const SEOMetadata = ({ 
  title, 
  description, 
  keywords = "influencer, marketing, brand deals, content creators, social media, partnerships", 
  imageUrl = "https://lovable.dev/opengraph-image-p98pqg.png",
  url
}: SEOMetadataProps) => {
  const siteUrl = url || window.location.href;
  const fullTitle = `${title} | EssenceFameFace`;
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEOMetadata;
