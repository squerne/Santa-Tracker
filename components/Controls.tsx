
import React from 'react';
import { MapPin, Moon, AlertCircle, Wifi } from 'lucide-react';

interface ControlsProps {
  estimateWindow: string;
  isSomeoneInRoom: boolean;
  t: (key: string) => string;
}

const Controls: React.FC<ControlsProps> = ({ estimateWindow, isSomeoneInRoom, t }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-xl flex flex-col md:flex-row gap-8 items-center shadow-2xl relative z-20">
      <div className="flex-1 w-full">
        <div className="flex items-center gap-3 mb-4">
          <Wifi className="w-4 h-4 text-blue-400 animate-pulse" />
          <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            LOCAL SYSTEM STATUS
          </label>
        </div>
        
        <div className="flex items-center gap-4 bg-blue-600/10 border border-blue-500/20 p-5 rounded-[1.5rem] shadow-lg shadow-blue-500/5">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{t('estimatedWindow')}</p>
            <p className="text-2xl font-black text-white">{estimateWindow}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-px h-24 bg-white/5" />

      <div className="flex-1 w-full">
        <div className="flex items-center gap-3 mb-4">
          <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            {t('biometricSensor') || 'BIOMETRIC OCCUPANCY SENSOR'}
          </label>
        </div>
        <div className="flex items-center gap-6">
          <div 
            className={`flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all duration-500 ${
              isSomeoneInRoom 
              ? 'bg-red-600/10 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]' 
              : 'bg-green-600/10 border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]'
            }`}
          >
            {isSomeoneInRoom ? <AlertCircle className="w-6 h-6 animate-pulse" /> : <Moon className="w-6 h-6" />}
            <span className="text-xs font-black uppercase tracking-widest">
              {isSomeoneInRoom ? t('peopleInRoom') : t('everyoneAsleep')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
