import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.scss';

type Props = {
  children: React.ReactNode;
  description: string;
  keywords: string[];
};

const Layout = ({ children, description, keywords }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join(', ') },
          ]}
        >
          <html lang="en" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Press+Start+2P&display=swap" rel="stylesheet"/>
        </Helmet>
        <div className="content">{children}</div>
      </>
    )}
  />
);

export default Layout;
