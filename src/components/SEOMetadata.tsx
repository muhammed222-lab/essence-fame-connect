
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
  keywords = "brand deals, content creators, influencer marketing, monetization, content monetization, models, creative agency, influencer agency", 
  imageUrl = "https://lovable.dev/opengraph-image-p98pqg.png",
  url
}: SEOMetadataProps) => {
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const fullTitle = `${title} | EssenceFameFace`;
  const defaultDescription = "EssenceFameFace is a community agency helping models and content creators secure brand deals and monetize their content. Join our expert team to create quality ad videos for brands.";
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="EssenceFameFace" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEOMetadata;
