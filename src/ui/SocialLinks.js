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
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    )
}