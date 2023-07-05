
import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import arcsData from '../data/data';
import placesData from '../data/places';
import Layout from './layout';
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const GlobePage = () => {
  const globeEl = useRef();
  const [places, setPlaces] = useState(placesData);

  const handleAddPlace = () => {
    // Dodaj nowe miejsce do tablicy places
    setPlaces([
      ...places,
      {
        lat: 52.520008,
        lng: 13.404954,
        name: 'Berlin',
        size: 1,
      },
    ]);
  };

  useEffect(() => {
    // Inicjalizacja globu po załadowaniu komponentu
    const globe = globeEl.current;
    // globe.controls().autoRotate = true;
    // globe.controls().autoRotateSpeed = 0.5;
    // globe.pointOfView({ lat: 0, lng: 0, altitude: 4 }, 2000);
  }, []);

  return (
    <Layout children={undefined}>

      <div style={{ width: '100vw', height: '100vh' }}>
        <button onClick={handleAddPlace}>Dodaj miejsce</button>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          arcsData={arcsData}
          arcColor={'color'}
          arcDashLength={() => 0.5}
          arcDashGap={(d) => 1 - (d.stroke - 0.1)}
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
          // bars
          hexBinPointsData={places}
          hexBinPointWeight="size"
          hexAltitude={(d) => d.sumWeight - 0.1 + 0.05}
          hexBinResolution={4}
          hexBinMerge={true}
          enablePointerInteraction={false}
        />
      </div>
    </Layout>
  );
};

export default GlobePage;