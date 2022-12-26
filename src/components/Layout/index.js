import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
import {loadFull} from 'tsparticles';
import config from '../../config/particles.json';
import { useEffect } from 'react';

const Layout = () => {
  const [filter, setFilter] = useState(10);
  const particlesInit = useCallback( async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  },[]);

  useEffect(()=>{
    const timer = setInterval(() => {
      setFilter((t) => t-1);
    }, 600)

    return ()=>clearInterval(timer);
  },[])

  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options = {config}
        className="particles"
      />  
      <div className="page" style={{filter:`blur(${filter}px)`}}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
