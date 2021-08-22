import React from 'react';
import deline from 'deline';
import Layout from '../templates/layout';
import { StaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { SocialIcon } from 'react-social-icons';

import './index.scss';

const indexDescription = deline`
Sara Dornblaser’s personal homepage, with contact information and a puppy jump game.
`;

const indexKeywords = ['Sara', 'Dornblaser', 'saradornblaser'];

const renderIndexPageContent = (data: any) => (
  <>
    <h1>
      {documentToReactComponents(
        data.header.childContentfulIndexPageTextRichTextNode.json
      )}
    </h1>
    <p>
      {documentToReactComponents(
        data.blurb.childContentfulIndexPageTextRichTextNode.json
      )}
    </p>
    <div className="links">
      <SocialIcon url="mailto:saradornblaser@gmail.com" network="email" fgColor="#FFF" />
      <SocialIcon url="https://www.linkedin.com/in/saradornblaser/" target="_blank" fgColor="#FFF" />
      <SocialIcon url="https://github.com/saradornblaser" target="_blank" fgColor="#FFF" />
      <a className="social-icon resume" target="_blank" href="/resume.pdf">
        <div className="icon-container">
          <img src="/cvicon.svg" alt="Sara Dornblaser Resume" />
        </div>
      </a>
      <a className="social-icon puppy" href="/puppyjump">
        <div className="icon-container">
          <img src="/beagle.png" alt="Cartoon of beagle dog with floppy ears" />
        </div>
      </a>
    </div>
  </>
);

export default function IndexPage() {
  return (
    <Layout description={indexDescription} keywords={indexKeywords}>
      <StaticQuery
        query={graphql`
          query IndexPageContentQuery {
            header: contentfulIndexPage(identifier: { eq: "header" }) {
              childContentfulIndexPageTextRichTextNode {
                json
              }
            }

            blurb: contentfulIndexPage(identifier: { eq: "blurb" }) {
              childContentfulIndexPageTextRichTextNode {
                json
              }
            }
          }
        `}
        render={renderIndexPageContent}
      />
    </Layout>
  );
}
