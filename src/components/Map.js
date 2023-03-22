import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKEN';
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [19.9445, 50.064],
            zoom: 10,
        });

        // Dodajemy marker na mapie
        new mapboxgl.Marker().setLngLat([19.9445, 50.064]).addTo(map);

        // Czyszczenie mapy przy odmontowaniu komponentu
        return () => map.remove();
    }, []);

    return <div ref={mapContainerRef} className="map-container" />;
}

export default Map;
