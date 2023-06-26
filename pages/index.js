import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const IndexPage = () => {
  const globeEl = useRef();

  useEffect(() => {
    // Inicjalizacja globu po załadowaniu komponentu
    const globe = globeEl.current;
    // globe.controls().autoRotate = true;
    // globe.controls().autoRotateSpeed = 0.5;
    // globe.pointOfView({ lat: 0, lng: 0, altitude: 4 }, 2000);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe ref={globeEl} />
    </div>
  );
};

export default IndexPage;