
import React from 'react';
import { Navigation, Wind, Map } from 'lucide-react';

interface SleighHUDProps {
  santaPos: { lat: number; lng: number; name: string };
  t: (key: string) => string;
}

const SleighHUD: React.FC<SleighHUDProps> = ({ santaPos, t }) => {
  return (
    <div className="flex flex-col gap-3 pointer-events-none">
      <div className="bg-slate-950/90 backdrop-blur-2xl border border-white/10 p-5 rounded-[2rem] shadow-2xl flex flex-col gap-4 min-w-[260px]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-600 rounded-2xl shadow-lg shadow-red-600/20">
            <Navigation className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{t('nextTarget')}</p>
            <p className="text-lg font-black text-white truncate max-w-[160px]">{santaPos.name}</p>
          </div>
        </div>

        <div className="h-px bg-white/5 w-full" />

        <div className="flex items-center justify-between text-[10px] font-black text-white/50 tracking-widest">
           <div className="flex items-center gap-2">
             <Map className="w-4 h-4 text-red-500/50" />
             LAT {santaPos.lat.toFixed(2)}
           </div>
           <div className="flex items-center gap-2">
             <Wind className="w-4 h-4 text-blue-500/50" />
             MACH 5.0
           </div>
        </div>
      </div>

      <div className="bg-red-600/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-red-400/30 self-start shadow-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-white animate-ping" />
           {t('locate')} LINK ACTIVE
        </p>
      </div>
    </div>
  );
};

export default SleighHUD;
