import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import anime from 'animejs';
const Home = () => {
  const animationRef = useRef(null);

  const addSpan = (text) => {
    return [...text].map(letter => <span className='words'>{letter}</span>)
  };

  useLayoutEffect(() => {
    animationRef.current =
      anime.timeline({loop: false})
      .add({
        targets: '.hello-world .words',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.hello-world',
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
          <h1 className="hello-world">{addSpan('Hi,')}</h1>
          <br />
          <h1 className="hello-world">{addSpan('I\'m Vineet')}</h1>
          <br />
          <h1 className="hello-world">{addSpan('a web developer.')}</h1>
          <div class="box-1">
            <div class="btn btn-one">
              <Link to="/contact" className="contact-me">Contact Me</Link>
            </div>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="ball-beat" />
    </>
  )
}

export default Home
