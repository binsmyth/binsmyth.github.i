import React from "react";
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/SocialLinks.scss';

export const SocialLinks = () => {
    return (
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vineet-man-singh-4b274b71"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faLinkedin}
              className="anchor-icon"
            />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/binsmyth"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faGithub}
              className="anchor-icon"
            />
            <span>Github</span>
          </a>
        </li>
      </ul>
    )
}
