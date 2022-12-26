import { useRef, useLayoutEffect, useEffect } from 'react'
import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'
import anime from 'animejs';
import { SocialLinks } from '../../ui/SocialLinks';
import { addSpan } from '../../lib/utility';
import Portfolio from '../Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

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
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="intro">{addSpan('Hi, I\'m Vineet.')}</h1>
          <div className="language-icons">
            <h1>Languages</h1>
            <FontAwesomeIcon 
              icon={faJs}
              size="6x"
              className='anchor-icon fa-bounce'
              style={{animationDuration: '10s'}}
            />
            <FontAwesomeIcon 
              icon={faReact}
              size="6x"
              className='anchor-icon fa-spin'
              style={{animationDuration: '10s'}}
            />
            <FontAwesomeIcon 
              icon={faNodeJs}
              size="6x"
              className='anchor-icon fa-flip'
              style={{animationDuration: '10s'}}
            />
          </div>
          <div className="about-me">
            <p>
              A web developer looking for opportunity.
            </p>
            <SocialLinks />
          </div>
          <Portfolio />
        </div>
      </div>
      <Loader type="ball-beat" />

    </>
  )
}

export default Home
