import './index.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoxLink } from '../../ui/BoxLink';

import {
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      
      <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <BoxLink>
            Home
            </BoxLink>
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <BoxLink>
              Portfolio
            </BoxLink>
          </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
