import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useCallback } from 'react';
import Particles from 'react-particles';
import {loadFull} from 'tsparticles';
import config from '../../config/particles.json';

const Layout = () => {
  const particlesInit = useCallback( async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  },[]);

  return (
    <div className="App">
      <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options = {config}
      />
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
