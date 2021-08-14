import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
  onPressInvader: () => void;
  invaderPressed: boolean;
};

export default function Bizcard({ onPressInvader, invaderPressed }: Props) {
  return (
    <StaticQuery
      query={graphql`
        query BizCardQuery {
          contentfulTextForIndexPageBusinessCardContentRichTextNode {
            id
            json
            nodeType
          }
        }
      `}
      render={(data) => (
        <div
          className={`bizcard animated ${invaderPressed ? 'hinge' : 'flipInX'}`}
        >
          <div className="name">Sara Dornblaser</div>
          <div className="blurb">
            {documentToReactComponents(
              data.contentfulTextForIndexPageBusinessCardContentRichTextNode
                .json
            )}
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="mailto:saradornblaser@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/saradornblaser" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="http://github.com/saradornblaser" target="_blank">Github</a>
              </li>
              <li className="invader" onClick={onPressInvader}>
                <a href="#"> </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    />
  );
}
