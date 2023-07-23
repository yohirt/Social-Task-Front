import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import arcsData from '../../data/data';
import places from '../../data/places';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });


const GlobePage = (
  {
    globeImageUrl,
    backgroundImageUrl,
    arcsData,
    color,
    arcDashLength,
    hexBinPointsData,
  }
) => {
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

      <Globe
        ref={globeEl}
        globeImageUrl={globeImageUrl}
        backgroundImageUrl={backgroundImageUrl}
        arcsData={arcsData}
        arcColor={color}
      arcDashLength={arcDashLength}
      // arcDashGap={(d) => 1 - (d?.stroke ?? 0.1)}
      arcDashAnimateTime={(d) => 5000}
      arcStroke={'stroke'}
      arcCircularResolution={64}
      arcLabel={() => 'test'}
      labels
      labelsData={places}
      labelLat={(d) => d.lat}
      labelLng={(d) => d.lng}
      labelText={(d) => d.name}
      labelSize={(d) => 0.5 + d.size}
      labelDotRadius={(d) => 0.5 + d.size}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
      labelResolution={2}
      // // bars
      hexBinPointsData={hexBinPointsData}
      hexBinPointWeight="size"
      hexAltitude={(d) => d.sumWeight - 0.1 + 0.05}
      hexBinResolution={4}
      hexBinMerge={true}
      enablePointerInteraction={false}
      />
    </div>
  );
};

export default GlobePage;