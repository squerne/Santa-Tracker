
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { City, UserLocation } from '../types';

interface MapViewProps {
  cities: City[];
  santaPos: { lat: number; lng: number; name: string };
  userLocation: UserLocation | null;
}

const MapView: React.FC<MapViewProps> = ({ cities, santaPos, userLocation }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const santaMarkerRef = useRef<L.Marker | null>(null);
  const cityMarkersRef = useRef<L.LayerGroup | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const pathRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    mapRef.current = L.map(mapContainerRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: false,
      attributionControl: false,
    });

    // Dark-themed tiles (CartoDB Dark Matter is open source and fits the aesthetic)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(mapRef.current);

    cityMarkersRef.current = L.layerGroup().addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  // Update Santa
  useEffect(() => {
    if (!mapRef.current) return;

    const santaIcon = L.divIcon({
      html: `<div class="text-4xl filter drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] animate-bounce">🛷</div>`,
      className: 'santa-icon',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    if (santaMarkerRef.current) {
      santaMarkerRef.current.setLatLng([santaPos.lat, santaPos.lng]);
    } else {
      santaMarkerRef.current = L.marker([santaPos.lat, santaPos.lng], { icon: santaIcon }).addTo(mapRef.current);
    }
    
    // Smooth follow
    mapRef.current.panTo([santaPos.lat, santaPos.lng], { animate: true, duration: 1 });
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
      
      dot.bindTooltip(`${city.name}, ${city.country}`, { direction: 'top', offset: [0, -10] });
      cityMarkersRef.current?.addLayer(dot);
    });

    // Update Path
    const visitedCoords = cities.filter(c => c.visited).map(c => [c.lat, c.lng] as [number, number]);
    if (pathRef.current) {
      pathRef.current.setLatLngs(visitedCoords);
    } else {
      pathRef.current = L.polyline(visitedCoords, {
        color: 'rgba(255, 255, 255, 0.3)',
        weight: 2,
        dashArray: '5, 10'
      }).addTo(mapRef.current);
    }
  }, [cities]);

  // Update User Location
  useEffect(() => {
    if (!mapRef.current || !userLocation) return;

    const userIcon = L.divIcon({
      html: `<div class="relative">
               <div class="absolute -top-3 -left-3 w-6 h-6 bg-blue-500/20 rounded-full animate-ping"></div>
               <div class="w-2 h-2 bg-blue-400 rounded-full border border-white"></div>
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
      <div ref={mapContainerRef} className="w-full h-full" />
      
      {/* HUD overlays stay on top of Leaflet */}
      <div className="absolute top-6 right-6 z-[1000] bg-black/60 p-4 rounded-2xl border border-white/10 backdrop-blur-xl flex flex-col gap-3 text-[10px] font-black tracking-widest uppercase pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" /> COMPLETED
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" /> TARGETS
        </div>
        <div className="flex items-center gap-3 text-blue-400">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" /> MY HOUSE
        </div>
      </div>
    </div>
  );
};

export default MapView;
