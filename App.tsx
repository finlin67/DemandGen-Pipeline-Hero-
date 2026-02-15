import React from 'react';
import DashboardTile from './components/DashboardTile';

export default function App() {
  return (
    <div className="bg-[#f6f8f8] dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-[#20d3ee]/30">
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
        <DashboardTile />
      </div>
    </div>
  );
}