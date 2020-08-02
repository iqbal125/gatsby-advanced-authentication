import React from 'react';
import Footer from '../Footer';

import SEO from '../SEO';

const Layout = ({ title, description, children }) => {
  const seoData = {
    title,
    description
  };

  return (
    <>
      <SEO seoData={seoData} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
