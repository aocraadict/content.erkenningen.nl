import React from 'react';
import Helmet from 'react-helmet';

export default () => {
  return (
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      {
        //<link rel="manifest" href="/manifest.json" />
      }
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};
