
import React, { useState } from 'react';
import { Search, MapPin, Moon, AlertCircle } from 'lucide-react';
import { UserLocation } from '../types';

interface ControlsProps {
  setUserLocation: (loc: UserLocation | null) => void;
  userLocation: UserLocation | null;
  isSomeoneInRoom: boolean;
  setIsSomeoneInRoom: (val: boolean) => void;
  t: (key: string) => string;
}

const Controls: React.FC<ControlsProps> = ({ setUserLocation, userLocation, isSomeoneInRoom, setIsSomeoneInRoom, t }) => {
  const [address, setAddress] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    let hash = 0;
    for (let i = 0; i < address.length; i++) {
      hash = address.charCodeAt(i) + ((hash << 5) - hash);
    }
    const lat = (hash % 60);
    const lng = (hash % 180);
    setUserLocation({ address, lat, lng, localTime: new Date() });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-xl flex flex-col md:flex-row gap-8 items-center shadow-2xl">
      <div className="flex-1 w-full">
        <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">
          {t('setDestination')}
        </label>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="..."
            className="w-full bg-black/50 border border-white/5 rounded-2xl py-4 px-14 text-sm focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all font-bold placeholder:text-white/10"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-xl text-xs font-black transition-all shadow-lg shadow-red-600/20">
            {t('locate')}
          </button>
        </form>

        {userLocation && (
          <div className="mt-4 flex items-center gap-4 bg-blue-600/10 border border-blue-500/20 p-4 rounded-[1.5rem] animate-in slide-in-from-bottom-2 fade-in">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{t('estimatedWindow')}</p>
              <p className="text-xl font-black">02:00 — 06:00</p>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:block w-px h-24 bg-white/5" />

      <div className="flex-1 w-full">
        <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">
          BIOMETRIC OCCUPANCY SENSOR
        </label>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsSomeoneInRoom(!isSomeoneInRoom)}
            className={`flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all group ${
              isSomeoneInRoom 
              ? 'bg-red-600/10 border-red-500/50 text-red-400' 
              : 'bg-green-600/10 border-green-500/50 text-green-400'
            }`}
          >
            {isSomeoneInRoom ? <AlertCircle className="w-6 h-6 animate-pulse" /> : <Moon className="w-6 h-6 group-hover:rotate-12 transition-transform" />}
            <span className="text-xs font-black uppercase tracking-widest">
              {isSomeoneInRoom ? t('peopleInRoom') : t('everyoneAsleep')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
