import React, { useState } from 'react';
import './LinkTree.css';
import { linksConfig, LinkConfig } from '../config';
import Icon from './Icon';

const LinkTree: React.FC = () => {
  const [links, setLinks] = useState<LinkConfig[]>(linksConfig);

  const toggleExpansion = (linkId: string) => {
    setLinks(prevLinks =>
      prevLinks.map(link =>
        link.id === linkId
          ? { ...link, isExpanded: !link.isExpanded }
          : link
      )
    );
  };

  const handleLinkClick = (link: LinkConfig) => {
    if (link.category === 'expandable') {
      toggleExpansion(link.id);
    } else {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="link-tree">
      <div className="links-container">
        {links.map((link) => (
          <div key={link.id} className="link-item-wrapper">
            <div
              className={`link-item ${link.category === 'expandable' ? 'expandable' : ''} ${link.isExpanded ? 'expanded' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
                             <div className="link-content">
                 <Icon icon={link.icon} iconType={link.iconType} className="link-icon" />
                 <span className="link-title">{link.title}</span>
                {link.category === 'expandable' && (
                  <span className="expand-icon">
                    {link.isExpanded ? '−' : '+'}
                  </span>
                )}
              </div>
            </div>
            
            {link.category === 'expandable' && link.isExpanded && link.subLinks && (
              <div className="sub-links">
                {link.subLinks.map((subLink) => (
                                     <a
                     key={subLink.id}
                     href={subLink.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="sub-link-item"
                   >
                     <Icon icon={subLink.icon} iconType={subLink.iconType} className="link-icon" />
                     <span className="link-title">{subLink.title}</span>
                   </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkTree;
