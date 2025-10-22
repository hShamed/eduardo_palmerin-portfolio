import React, { useState, useEffect, useCallback, useRef } from 'react';

// Components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';

function App() {
  const CURSOR_SIZE = 30;
  const CURSOR_OFFSET = CURSOR_SIZE / 2;

  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, isMobile]);

  const cursorStyle = {
    position: 'fixed',
    top: 0,
    left: 0,

    width: `${CURSOR_SIZE}px`,
    height: `${CURSOR_SIZE}px`,
    borderRadius: '50%',
    
    pointerEvents: 'none',
    zIndex: 9999,
    
    transition: 'all 200ms ease-out',
    
    transform: `translate3d(${position.x - CURSOR_OFFSET}px, ${position.y - CURSOR_OFFSET}px, 0) ${isHovering ? 'scale(2)' : 'scale(1)'}`,
    
    backgroundColor: isHovering 
      ? 'rgba(253, 224, 71, 0.3)' 
      : 'rgba(255, 255, 255, 0.05)',
    
    backdropFilter: isHovering 
      ? 'invert(1) contrast(1.5) blur(4px)' 
      : 'invert(1) contrast(1.2) blur(1px)',
    WebkitBackdropFilter: isHovering 
      ? 'invert(1) contrast(1.5) blur(4px)' 
      : 'invert(1) contrast(1.2) blur(1px)',
  };

  return (
    <>
      {!isMobile && <div style={cursorStyle}></div>}
      <Navbar />
      <Main 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
      <Footer 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
    </>
  )
}

export default App
