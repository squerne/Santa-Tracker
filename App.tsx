
import React, { useState, useEffect, useMemo } from 'react';
import { ALL_CITIES, TOTAL_KIDS, TOTAL_HOUSEHOLDS, TOTAL_GIFTS } from './constants';
import { City, SantaStats, UserLocation, Language } from './types';
import { translations, languages } from './translations';
import MapView from './components/MapView';
import Dashboard from './components/Dashboard';
import Controls from './components/Controls';
import SleighHUD from './components/SleighHUD';
import { Gift, Home, Users, CheckCircle2, AlertTriangle, Snowflake, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [currentTimeUTC, setCurrentTimeUTC] = useState<number>(0);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isSomeoneInRoom, setIsSomeoneInRoom] = useState<boolean>(false);
  const [snowflakes, setSnowflakes] = useState<number[]>([]);
  const [lang, setLang] = useState<Language>('en');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = (key: string) => translations[key]?.[lang] || key;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const isDec24 = now.getMonth() === 11 && (now.getDate() === 24 || now.getDate() === 25);
      
      if (isDec24) {
        const startOf24 = new Date(Date.UTC(now.getUTCFullYear(), 11, 24, 0, 0, 0));
        const diffHours = (now.getTime() - startOf24.getTime()) / (1000 * 60 * 60);
        setCurrentTimeUTC(diffHours);
      } else {
        const seconds = now.getSeconds();
        setCurrentTimeUTC(10 + (seconds / 60) * 26);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSnowflakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  const processedCities = useMemo(() => {
    return ALL_CITIES.map(city => ({
      ...city,
      visited: currentTimeUTC > city.visitTimeUTC
    }));
  }, [currentTimeUTC]);

  const stats: SantaStats = useMemo(() => {
    const totalDuration = 26;
    const start = 10;
    const progress = Math.max(0, Math.min(1, (currentTimeUTC - start) / totalDuration));
    
    return {
      householdsVisited: Math.floor(TOTAL_HOUSEHOLDS * progress),
      kidsVisited: Math.floor(TOTAL_KIDS * progress),
      giftsDelivered: Math.floor(TOTAL_GIFTS * progress),
      completionRate: progress * 100,
      totalGifts: TOTAL_GIFTS,
      totalHouseholds: TOTAL_HOUSEHOLDS,
      totalKids: TOTAL_KIDS
    };
  }, [currentTimeUTC]);

  const santaPos = useMemo(() => {
    const visiting = processedCities.filter(c => !c.visited)[0];
    const lastVisited = processedCities.filter(c => c.visited).slice(-1)[0];

    if (!visiting) return { lat: 0, lng: -157, name: "North Pole Hub" };
    if (!lastVisited) return { lat: 90, lng: 0, name: "North Pole Departure" };

    const segmentDuration = visiting.visitTimeUTC - lastVisited.visitTimeUTC;
    const segmentProgress = (currentTimeUTC - lastVisited.visitTimeUTC) / (segmentDuration || 1);
    
    return {
      lat: lastVisited.lat + (visiting.lat - lastVisited.lat) * segmentProgress,
      lng: lastVisited.lng + (visiting.lng - lastVisited.lng) * segmentProgress,
      name: visiting.name
    };
  }, [processedCities, currentTimeUTC]);

  return (
    <div className="min-h-screen bg-[#05081a] text-white relative flex flex-col overflow-hidden">
      {snowflakes.map(i => (
        <div key={i} className="snowflake" style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${10 + Math.random() * 10}px`
        }}>❄</div>
      ))}

      <header className="p-4 md:px-8 bg-red-900/40 backdrop-blur-xl border-b border-red-700/30 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/10 transform rotate-3">
            <span className="text-3xl">🎅</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-christmas font-bold tracking-tight">
            {t('appTitle')}
          </h1>
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all border border-white/5"
          >
            <Globe className="w-4 h-4 text-red-400" />
            <span className="text-sm font-bold uppercase tracking-widest">
              {languages.find(l => l.code === lang)?.flag} {lang}
            </span>
          </button>
          
          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-[100] max-h-[60vh] overflow-y-auto">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setShowLangMenu(false); }}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-white/10 flex items-center gap-3 transition-colors ${lang === l.code ? 'bg-red-500/20 text-red-400 font-bold' : ''}`}
                >
                  <span className="text-lg">{l.flag}</span>
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-6 p-4 md:p-8 overflow-hidden max-h-[calc(100vh-80px)]">
        <div className="flex-[3] flex flex-col gap-6 overflow-hidden">
          <div className="relative flex-1 bg-black/50 rounded-[2.5rem] border border-white/5 shadow-inner overflow-hidden min-h-[450px]">
            <MapView 
              cities={processedCities} 
              santaPos={santaPos} 
              userLocation={userLocation}
            />
            
            {isSomeoneInRoom && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-4">
                <div className="bg-red-600/90 text-white p-5 rounded-2xl shadow-2xl border border-red-400 flex items-center gap-4 animate-bounce backdrop-blur-md">
                  <AlertTriangle className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p className="font-black text-lg uppercase tracking-tight">ALERT: ACTIVITY DETECTED</p>
                    <p className="text-xs font-bold opacity-80">Santa is holding position until all kids are in bed.</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="absolute bottom-6 left-6 z-20">
               <SleighHUD santaPos={santaPos} t={t} />
            </div>
          </div>

          <Controls 
            setUserLocation={setUserLocation} 
            isSomeoneInRoom={isSomeoneInRoom} 
            setIsSomeoneInRoom={setIsSomeoneInRoom} 
            userLocation={userLocation}
            t={t}
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={<Home className="text-blue-400" />} label={t('households')} value={stats.householdsVisited.toLocaleString()} total={stats.totalHouseholds.toLocaleString()} color="blue" />
            <StatCard icon={<Users className="text-green-400" />} label={t('kidsVisited')} value={stats.kidsVisited.toLocaleString()} total={stats.totalKids.toLocaleString()} color="green" />
            <StatCard icon={<Gift className="text-red-400" />} label={t('giftsSent')} value={stats.giftsDelivered.toLocaleString()} total={stats.totalGifts.toLocaleString()} color="red" />
            <StatCard icon={<CheckCircle2 className="text-yellow-400" />} label={t('completion')} value={`${stats.completionRate.toFixed(1)}%`} total="100%" color="yellow" />
          </div>
          <Dashboard stats={stats} />
        </div>
      </main>
    </div>
  );
};

const StatCard: React.FC<any> = ({ icon, label, value, total, color }) => {
  const colors: any = {
    red: 'border-red-500/20 bg-red-500/5',
    green: 'border-green-500/20 bg-green-500/5',
    blue: 'border-blue-500/20 bg-blue-500/5',
    yellow: 'border-yellow-500/20 bg-yellow-500/5',
  };
  return (
    <div className={`p-5 rounded-3xl border ${colors[color]} backdrop-blur-xl shadow-lg`}>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{label}</span>
      </div>
      <div className="text-2xl font-black tracking-tight mb-1">{value}</div>
      <div className="text-[10px] text-white/20 font-bold uppercase">Target: {total}</div>
    </div>
  );
}

export default App;
