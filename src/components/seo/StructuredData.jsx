import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Thinakaran Manokaran Portfolio",
    "url": "https://yourportfolio.com",
    "author": {
      "@type": "Person",
      "name": "Thinakaran Manokaran",
      "description": "Web Developer specializing in MERN stack based in Thanjavur."
    },
    "sameAs": [
      "https://www.linkedin.com/in/yourlinkedin",
      "https://github.com/yourgithub"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
