import { useRef, useLayoutEffect } from 'react'
import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'
import anime from 'animejs';
import { SocialLinks } from '../../ui/SocialLinks';

const Home = () => {
  const animationRef = useRef(null);

  const addSpan = (text) => {
    return [...text].map((letter, index) => <span key={index} className='words'>{letter}</span>)
  };

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
          <SocialLinks />
          <div className="about-me">
            <p>
              A web developer looking for   opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="ball-beat" />
    </>
  )
}

export default Home
