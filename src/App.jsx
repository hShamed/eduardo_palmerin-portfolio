import React, { useState, useEffect, useCallback } from 'react';

// Components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';

function App() {
  const CURSOR_SIZE = 30;
  const CURSOR_OFFSET = CURSOR_SIZE / 2;

  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('[data-interactive="true"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Styles for the custom cursor, including the powerful backdrop-filter
  const cursorStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    // Size and Shape (w-8 h-8, rounded-full)
    width: `${CURSOR_SIZE}px`,
    height: `${CURSOR_SIZE}px`,
    borderRadius: '50%',
    
    // Z-Index and Interaction
    pointerEvents: 'none',
    zIndex: 9999,
    
    // Transition for smooth movement and scaling (duration-200 ease-out)
    transition: 'all 200ms ease-out',
    
    // Position the filter circle precisely at the mouse tip.
    transform: `translate3d(${position.x - CURSOR_OFFSET}px, ${position.y - CURSOR_OFFSET}px, 0) ${isHovering ? 'scale(2)' : 'scale(1)'}`,
    
    // Background (bg-white/5 or bg-yellow-300/30 on hover)
    backgroundColor: isHovering 
      ? 'rgba(253, 224, 71, 0.3)' 
      : 'rgba(255, 255, 255, 0.05)',
    
    // --- The Magic: Backdrop Filter for X-Ray/Inversion ---
    backdropFilter: isHovering 
      ? 'invert(1) contrast(1.5) blur(4px)' 
      : 'invert(1) contrast(1.2) blur(1px)',
    WebkitBackdropFilter: isHovering 
      ? 'invert(1) contrast(1.5) blur(4px)' 
      : 'invert(1) contrast(1.2) blur(1px)',
  };

  return (
    <>
      <div style={cursorStyle}></div>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
