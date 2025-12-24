
import React, { useState, useEffect, useMemo } from 'react';
import { ALL_CITIES, TOTAL_KIDS, TOTAL_HOUSEHOLDS, TOTAL_GIFTS } from './constants.tsx';
import { translations, languages } from './translations.ts';
import MapView from './components/MapView.tsx';
import Dashboard from './components/Dashboard.tsx';
import Controls from './components/Controls.tsx';
import SleighHUD from './components/SleighHUD.tsx';
import { Gift, Home, Users, CheckCircle2, AlertTriangle, Snowflake, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [currentTimeUTC, setCurrentTimeUTC] = useState<number>(0);
  const [userLocation, setUserLocation] = useState<any>(null);
  const [isSomeoneInRoom, setIsSomeoneInRoom] = useState<boolean>(false);
  const [snowflakes, setSnowflakes] = useState<number[]>([]);
  const [lang, setLang] = useState<any>('en');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = (key: string) => translations[key]?.[lang] || key;

  // Automated Biometric Sensor Logic
  useEffect(() => {
    let timeoutId: any;
    const toggleSensor = () => {
      setIsSomeoneInRoom(prev => {
        const nextState = !prev;
        const duration = nextState 
          ? (10 + Math.random() * 10) * 1000 
          : (60 + Math.random() * 90) * 1000;
        timeoutId = window.setTimeout(toggleSensor, duration);
        return nextState;
      });
    };
    timeoutId = window.setTimeout(toggleSensor, 20000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Initialize location
  useEffect(() => {
    if (!userLocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            address: "Current Location",
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            localTime: new Date()
          });
        },
        () => {
          setUserLocation({
            address: "Home Hub",
            lat: 48.8566,
            lng: 2.3522,
            localTime: new Date()
          });
        }
      );
    }
  }, [userLocation]);

  // Clock logic
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
    return (ALL_CITIES || []).map(city => ({
      ...city,
      visited: currentTimeUTC > city.visitTimeUTC
    }));
  }, [currentTimeUTC]);

  const stats = useMemo(() => {
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
    const visiting = processedCities.find(c => !c.visited);
    const lastVisited = processedCities.filter(c => c.visited).slice(-1)[0];
    if (!visiting) return { lat: 0, lng: -157, name: "North Pole Hub", country: "Arctic" };
    if (!lastVisited) return { lat: 90, lng: 0, name: "North Pole Departure", country: "Arctic" };
    const segmentDuration = visiting.visitTimeUTC - lastVisited.visitTimeUTC;
    const segmentProgress = (currentTimeUTC - lastVisited.visitTimeUTC) / (segmentDuration || 1);
    return {
      lat: lastVisited.lat + (visiting.lat - lastVisited.lat) * segmentProgress,
      lng: lastVisited.lng + (visiting.lng - lastVisited.lng) * segmentProgress,
      name: visiting.name,
      country: visiting.country
    };
  }, [processedCities, currentTimeUTC]);

  const estimateWindow = useMemo(() => {
    const startHour = 2 + Math.random() * 3.25;
    const endHour = startHour + 0.75;
    const format = (h: number) => {
      const hours = Math.floor(h);
      const minutes = Math.round((h - hours) * 60);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };
    return `${format(startHour)} — ${format(endHour)}`;
  }, []);

  return (
    <div className="w-screen h-screen bg-[#05081a] text-white relative flex flex-col overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[5]">
        {snowflakes.map(i => (
          <div key={i} className="snowflake" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${10 + Math.random() * 10}px`
          }}>❄</div>
        ))}
      </div>

      <header className="h-16 flex-shrink-0 px-4 md:px-8 bg-red-900/40 backdrop-blur-xl border-b border-red-700/30 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl transform rotate-3">
            <span className="text-2xl">🎅</span>
          </div>
          <h1 className="text-xl md:text-2xl font-christmas font-bold tracking-tight">
            {t('appTitle')}
          </h1>
        </div>
        <div className="relative">
          <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-xl transition-all border border-white/5">
            <Globe className="w-4 h-4 text-red-400" />
            <span className="text-xs font-bold uppercase tracking-widest">{languages.find(l => l.code === lang)?.flag} {lang}</span>
          </button>
          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-[100] max-h-[60vh] overflow-y-auto">
              {languages.map(l => (
                <button key={l.code} onClick={() => { setLang(l.code); setShowLangMenu(false); }} className={`w-full text-left px-4 py-2.5 text-xs hover:bg-white/10 flex items-center gap-3 transition-colors ${lang === l.code ? 'bg-red-500/20 text-red-400 font-bold' : ''}`}>
                  <span className="text-lg">{l.flag}</span>{l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden relative z-10">
        <div className="flex-[3] flex flex-col gap-4 overflow-hidden">
          <div className="relative flex-1 bg-black/50 rounded-[2rem] border border-white/5 shadow-inner overflow-hidden min-h-[300px]">
            <MapView cities={processedCities} santaPos={santaPos} userLocation={userLocation} t={t} />
            {isSomeoneInRoom && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1100] w-full max-w-xs px-4 pointer-events-none">
                <div className="bg-red-600/90 text-white p-4 rounded-2xl shadow-2xl border border-red-400 flex items-center gap-3 animate-bounce backdrop-blur-md">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="font-black text-sm uppercase tracking-tight">{t('alertActivity')}</p>
                    <p className="text-[10px] font-bold opacity-80">{t('santaHolding')}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute bottom-4 left-4 z-[1100]"><SleighHUD santaPos={santaPos} t={t} /></div>
          </div>
          <Controls estimateWindow={estimateWindow} isSomeoneInRoom={isSomeoneInRoom} t={t} />
        </div>
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1 custom-scrollbar">
          <div className="grid grid-cols-2 gap-3">
            <StatCard icon={<Home className="text-blue-400" />} label={t('households')} value={stats.householdsVisited.toLocaleString()} total={stats.totalHouseholds.toLocaleString()} color="blue" t={t} />
            <StatCard icon={<Users className="text-green-400" />} label={t('kidsVisited')} value={stats.kidsVisited.toLocaleString()} total={stats.totalKids.toLocaleString()} color="green" t={t} />
            <StatCard icon={<Gift className="text-red-400" />} label={t('giftsSent')} value={stats.giftsDelivered.toLocaleString()} total={stats.totalGifts.toLocaleString()} color="red" t={t} />
            <StatCard icon={<CheckCircle2 className="text-yellow-400" />} label={t('completion')} value={`${stats.completionRate.toFixed(1)}%`} total="100%" color="yellow" t={t} />
          </div>
          <Dashboard stats={stats} t={t} />
        </div>
      </main>
    </div>
  );
};

const StatCard: React.FC<any> = ({ icon, label, value, total, color, t }) => {
  const colors: any = { red: 'border-red-500/20 bg-red-500/5', green: 'border-green-500/20 bg-green-500/5', blue: 'border-blue-500/20 bg-blue-500/5', yellow: 'border-yellow-500/20 bg-yellow-500/5' };
  return (
    <div className={`p-4 rounded-2xl border ${colors[color]} backdrop-blur-xl shadow-lg relative group overflow-hidden`}>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">{icon}<span className="text-[9px] font-black uppercase tracking-[0.1em] text-white/40">{label}</span></div>
        <div className="text-xl font-black tracking-tight mb-0.5 text-white">{value}</div>
        <div className="text-[8px] text-white/30 font-bold uppercase">{t('target')}: {total}</div>
      </div>
      <Snowflake className="absolute top-2 right-2 w-3 h-3 text-white/5 rotate-12 group-hover:rotate-45 transition-transform" />
    </div>
  );
}

export default App;
