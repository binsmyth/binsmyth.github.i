import React, { useRef, useLayoutEffect, useEffect } from 'react'
import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'
import anime from 'animejs';
import { SocialLinks } from '../../ui/SocialLinks';
import { addSpan } from '../../lib/utility';
import Portfolio from '../Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const animationRef = useRef(null);
  
  useLayoutEffect(() => {
    animationRef.current =
      anime.timeline({loop: false})
      .add({
        targets: '.intro .words',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.intro',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  },[])

  return (
    <>
      <div className="container">
        <div className="text-zone">
          <div className="about-me">
            <h1 className="intro">{addSpan('Hi Vineet here - A Web Developer')}</h1>
            <h2>
             I am based in Melbourne, Australia. I have been interested in coding since I was a child. Currently I volunteer (remote) as a front-end developer for a startup in Osaka Japan.
             I am passionate about technology and keen on solving problems using them.
            </h2>
            <SocialLinks />
          </div>
          <div className="languages">
            <h1>Tech Stack I like</h1>
            
            <div className="language-icons">
              <FontAwesomeIcon
                icon={faJs}
                size="2x"
                className='anchor-icon fa-flip'
                style={{animationDuration: '10s'}}
              />
              <FontAwesomeIcon
                icon={faReact}
                size="2x"
                className='anchor-icon fa-spin'
                style={{animationDuration: '10s'}}
              />
              <FontAwesomeIcon
                icon={faNodeJs}
                size="2x"
                className='anchor-icon fa-flip'
                style={{animationDuration: '10s'}}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                size="2x"
                className='anchor-icon fa-beat'
                style={{'--fa-animation-duration': '1s'}}
              />
              <FontAwesomeIcon
                icon={faCss3}
                size="2x"
                className='anchor-icon fa-beat'
                style={{'--fa-animation-duration': '1s'}}
              />
            </div>
            
          </div>
          <Portfolio />
        </div>
      </div>
      <Loader type="ball-beat" />

    </>
  )
}

export default Home
