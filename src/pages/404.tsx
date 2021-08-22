import React from 'react';
import Layout from '../templates/layout';

const NotFoundPage = () => (
  <Layout description="Page not found" keywords={['404']}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn’t exist. Sorry.</p>
  </Layout>
);

export default NotFoundPage;
