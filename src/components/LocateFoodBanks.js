import React, { useEffect, useRef, useState } from 'react';

// Google Maps React Component
const LocateFoodBanks = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeMap = () => {
      if (window.google && window.google.maps) {
        const initialPosition = { lat: 40.1215, lng: -100.4504 }; // Fallback location
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: initialPosition,
          zoom: 4,
          mapId: 'DEMO_MAP_ID', // Replace with your actual map ID if necessary
          styles: [
            {
              featureType: 'all',
              stylers: [{ saturation: -80 }]
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{ hue: '#00ffee' }, { saturation: 50 }]
            },
            {
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        const userMarker = new window.google.maps.Marker({
          position: initialPosition,
          map: mapInstance,
          title: 'My Location',
        });

        setMap(mapInstance);
        setMarker(userMarker);
        getCurrentLocation(mapInstance, userMarker);
        setLoading(false);
      } else {
        console.error('Google Maps API failed to load.');
      }
    };

    const getCurrentLocation = (mapInstance, userMarker) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            mapInstance.setCenter(userLocation);
            userMarker.setPosition(userLocation);
          },
          () => {
            alert('Unable to retrieve your location.');
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById('googleMapsScript');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD6zKj0YBcij0O1rHhQE2vhHcBdfINkDR4&callback=initMap&libraries=places&v=beta"; // Your API key here
        script.id = 'googleMapsScript';
        script.async = true;
        document.body.appendChild(script);
        window.initMap = initializeMap;
      } else {
        initializeMap();
      }
    };

    loadGoogleMapsScript();
  }, []);

  const searchLocation = (place) => {
    if (map && window.google) {
      const service = new window.google.maps.places.PlacesService(map);
      service.findPlaceFromQuery(
        {
          query: place,
          fields: ['name', 'geometry'],
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
            const location = results[0].geometry.location;
            map.setCenter(location);
            if (marker) {
              marker.setPosition(location);
            }
          } else {
            alert('Location not found.');
          }
        }
      );
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <style>
        {`
          .search-input {
            margin: 10px;
            padding: 12px 15px;
            width: 300px;
            border: none;
            border-radius: 30px;
            background-color: #fff;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 1000;
          }

          .search-input:focus {
            width: 350px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }

          #map {
            height: calc(100% - 50px);
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .search-input::placeholder {
            color: #888;
            font-style: italic;
          }

          #map:hover {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
      <input
        type="text"
        placeholder="Search for a location"
        className="search-input"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            searchLocation(e.target.value);
            e.target.value = '';
          }
        }}
      />
      {loading && <div>Loading Map...</div>}
      <div ref={mapRef} id="map"></div>
    </div>
  );
};

export default LocateFoodBanks;
