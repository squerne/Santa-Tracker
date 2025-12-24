
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { City, UserLocation } from '../types';

interface MapViewProps {
  cities: City[];
  santaPos: { lat: number; lng: number; name: string; country: string };
  userLocation: UserLocation | null;
  t: (key: string) => string;
}

const MapView: React.FC<MapViewProps> = ({ cities, santaPos, userLocation, t }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const santaMarkerRef = useRef<L.Marker | null>(null);
  const cityMarkersRef = useRef<L.LayerGroup | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const pathRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    mapRef.current = L.map(mapContainerRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 12,
      zoomControl: false,
      attributionControl: false,
    });

    // Dark-themed tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(mapRef.current);

    cityMarkersRef.current = L.layerGroup().addTo(mapRef.current);

    setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 200);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Santa
  useEffect(() => {
    if (!mapRef.current) return;

    const santaIcon = L.divIcon({
      html: `<div class="text-5xl filter drop-shadow-[0_0_15px_rgba(255,0,0,1)] animate-bounce select-none">🛷</div>`,
      className: 'santa-icon',
      iconSize: [50, 50],
      iconAnchor: [25, 25]
    });

    if (santaMarkerRef.current) {
      santaMarkerRef.current.setLatLng([santaPos.lat, santaPos.lng]);
    } else {
      santaMarkerRef.current = L.marker([santaPos.lat, santaPos.lng], { icon: santaIcon }).addTo(mapRef.current);
    }
    
    mapRef.current.panTo([santaPos.lat, santaPos.lng], { animate: true, duration: 2 });
  }, [santaPos]);

  // Update City Pins
  useEffect(() => {
    if (!mapRef.current || !cityMarkersRef.current) return;
    cityMarkersRef.current.clearLayers();

    cities.forEach((city) => {
      const color = city.visited ? '#4ade80' : '#ef4444';
      const size = city.visited ? 4 : 6;
      
      const dot = L.circleMarker([city.lat, city.lng], {
        radius: size,
        fillColor: color,
        color: 'white',
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.8,
      });
      
      dot.bindTooltip(`${city.name}, ${city.country}`, { direction: 'top', offset: [0, -10], className: 'map-tooltip' });
      cityMarkersRef.current?.addLayer(dot);
    });

    // Update Path
    const visitedCoords = cities.filter(c => c.visited).map(c => [c.lat, c.lng] as [number, number]);
    if (pathRef.current) {
      pathRef.current.setLatLngs(visitedCoords);
    } else {
      pathRef.current = L.polyline(visitedCoords, {
        color: 'rgba(255, 255, 255, 0.4)',
        weight: 3,
        dashArray: '8, 12'
      }).addTo(mapRef.current);
    }
  }, [cities]);

  // Update User Location
  useEffect(() => {
    if (!mapRef.current || !userLocation) return;

    const userIcon = L.divIcon({
      html: `<div class="relative">
               <div class="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full animate-ping"></div>
               <div class="w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-[0_0_10px_#60a5fa]"></div>
             </div>`,
      className: 'user-icon'
    });

    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng([userLocation.lat, userLocation.lng]);
    } else {
      userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon }).addTo(mapRef.current);
    }
  }, [userLocation]);

  return (
    <div className="w-full h-full relative group">
      <div ref={mapContainerRef} className="absolute inset-0 z-0" style={{ height: '100%' }} />
      
      <div className="absolute top-6 right-6 z-[1000] bg-black/70 p-4 rounded-2xl border border-white/10 backdrop-blur-xl flex flex-col gap-3 text-[10px] font-black tracking-widest uppercase pointer-events-none text-white">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" /> {t('completed')}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" /> {t('targets')}
        </div>
        <div className="flex items-center gap-3 text-blue-400">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" /> {t('myHouse')}
        </div>
      </div>
    </div>
  );
};

export default MapView;
