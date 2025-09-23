import React from 'react';
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Advocate Aniruddh Jani - Expert Legal Services in Gujarat',
  description = 'Professional legal services by Advocate Aniruddh Jani in Ahmedabad, Gandhinagar, Kalol, and across Gujarat. Expert in Civil Law, Criminal Defense, Contract Drafting, and Legal Advisory.',
  keywords = 'advocate, lawyer, legal services, Ahmedabad, Gandhinagar, Kalol, Gujarat, civil law, criminal defense, legal advisory',
  canonical
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Advocate Aniruddh Jani" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Gujarat, India" />
    </Helmet>
  );
};

export default SEOHead;