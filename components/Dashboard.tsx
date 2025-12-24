
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { SantaStats } from '../types';

interface DashboardProps {
  stats: SantaStats;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const deliveryData = [
    { name: 'Delivered', value: stats.giftsDelivered },
    { name: 'Remaining', value: stats.totalGifts - stats.giftsDelivered },
  ];

  const pieColors = ['#c41e3a', '#1e293b'];

  return (
    <div className="space-y-4">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
        <h3 className="text-sm font-bold uppercase tracking-widest text-red-400 mb-6 flex items-center gap-2">
          <div className="w-1.5 h-4 bg-red-500 rounded-full" />
          Gift Delivery Metrics
        </h3>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deliveryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {deliveryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex justify-between text-xs font-bold uppercase tracking-widest">
           <div className="flex flex-col gap-1">
             <span className="text-white/40">Success Rate</span>
             <span className="text-xl text-green-400">{stats.completionRate.toFixed(2)}%</span>
           </div>
           <div className="flex flex-col items-end gap-1">
             <span className="text-white/40">Remaining</span>
             <span className="text-xl text-red-400">{(stats.totalGifts - stats.giftsDelivered).toLocaleString()}</span>
           </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
        <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2">
          <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
          Household Coverage
        </h3>
        <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden mb-2">
          <div 
            className="h-full bg-blue-500 transition-all duration-1000" 
            style={{ width: `${stats.completionRate}%` }}
          />
        </div>
        <p className="text-[10px] text-white/40 uppercase font-bold text-center">
          Sector Scan: {stats.completionRate.toFixed(2)}% Operational
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
