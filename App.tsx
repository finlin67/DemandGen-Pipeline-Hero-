import React from 'react';
import DemandGenTile from './components/DemandGenTile';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#f6f8f8] dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-[#20d3ee]/30">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
        
        {/* Hero Section Container */}
        <div className="relative w-full max-w-[960px] overflow-hidden rounded-xl border border-slate-800 bg-[#020617] p-8 shadow-2xl">
          {/* Grid Background Overlay */}
          <div className="grid-bg absolute inset-0 z-0 opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Side: Content */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#20d3ee]/10 px-3 py-1 text-sm font-semibold text-[#20d3ee]">
                <Sparkles size={14} />
                <span>AI-Powered Demand Gen</span>
              </div>
              
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                Scale Your Pipeline <span className="text-[#20d3ee]">Automagically</span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                The enterprise platform that turns multi-channel noise into high-intent revenue. Real-time funnel optimization at scale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-[#20d3ee] px-6 text-base font-bold text-[#020617] shadow-lg shadow-[#20d3ee]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#20d3ee]/30 active:scale-95">
                  Start Free Trial
                </button>
                <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-slate-800 px-6 text-base font-bold text-white shadow-lg border border-slate-700 transition-all hover:bg-slate-700 active:scale-95">
                  View Demo
                </button>
              </div>

              {/* Quick Stats */}
              <div className="mt-4 flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">+42%</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Conversion Lift</span>
                </div>
                <div className="flex flex-col border-l border-slate-800 pl-8">
                  <span className="text-3xl font-black text-white">-18%</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">CPL Reduction</span>
                </div>
              </div>
            </div>

            {/* Right Side: Animated Component */}
            <div className="lg:w-1/2 flex justify-center items-center w-full">
              <DemandGenTile />
            </div>

          </div>
        </div>

        {/* Secondary Stats Section */}
        <div className="mt-12 grid w-full max-w-[960px] grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 rounded-xl bg-[#020617]/50 p-6 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-400 text-sm font-medium">Pipeline Velocity</p>
            <p className="text-white text-2xl font-bold">2.4x Faster</p>
            <p className="text-emerald-400 text-sm font-medium">Last 90 days</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#020617]/50 p-6 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-400 text-sm font-medium">Lead Accuracy</p>
            <p className="text-white text-2xl font-bold">98.2%</p>
            <p className="text-emerald-400 text-sm font-medium">AI Match Score</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[#020617]/50 p-6 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-400 text-sm font-medium">Total Revenue Gen</p>
            <p className="text-white text-2xl font-bold">$12.5M</p>
            <p className="text-[#20d3ee] text-sm font-medium">+12% vs goal</p>
          </div>
        </div>

        <footer className="mt-20 border-t border-slate-800/50 py-10 text-center w-full max-w-[960px]">
          <p className="text-sm text-slate-500">© 2024 Enterprise Demand Gen Platform. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}