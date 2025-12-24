
import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip 
} from 'recharts';
import { SantaStats } from '../types';

interface DashboardProps {
  stats: SantaStats;
  t: (key: string) => string;
}

const Dashboard: React.FC<DashboardProps> = ({ stats, t }) => {
  const deliveryData = [
    { name: t('completed'), value: stats.giftsDelivered },
    { name: t('remaining'), value: stats.totalGifts - stats.giftsDelivered },
  ];

  const pieColors = ['#ef4444', 'rgba(255,255,255,0.05)'];

  return (
    <div className="space-y-4">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden group shadow-xl">
        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-6 flex items-center gap-2 relative z-10">
          <div className="w-1.5 h-4 bg-red-500 rounded-full" />
          {t('metrics')}
        </h3>
        
        <div className="h-48 w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deliveryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {deliveryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  borderRadius: '12px', 
                  color: '#fff', 
                  fontSize: '12px',
                  fontWeight: 'bold' 
                }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{t('completed')}</p>
              <p className="text-xl font-black text-white">{stats.completionRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-[0.2em] relative z-10 border-t border-white/5 pt-4">
           <div className="flex flex-col gap-1">
             <span className="text-white/40">{t('successRate')}</span>
             <span className="text-lg text-green-400">{stats.completionRate.toFixed(2)}%</span>
           </div>
           <div className="flex flex-col items-end gap-1">
             <span className="text-white/40">{t('remaining')}</span>
             <span className="text-lg text-red-400">{(stats.totalGifts - stats.giftsDelivered).toLocaleString()}</span>
           </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden shadow-xl">
        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2">
          <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
          {t('coverage')}
        </h3>
        <div className="w-full bg-slate-900/50 rounded-full h-4 overflow-hidden mb-2 p-1 border border-white/5">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_#3b82f6]" 
            style={{ width: `${stats.completionRate}%` }}
          />
        </div>
        <p className="text-[10px] text-white/50 uppercase font-black tracking-widest text-center mt-3">
          SECTOR SCAN: {stats.completionRate.toFixed(2)}% OPERATIONAL
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
