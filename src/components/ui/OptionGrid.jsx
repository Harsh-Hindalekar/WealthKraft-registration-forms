import React from 'react';
import { cn } from '../../lib/utils';
import { CheckCircle2 } from 'lucide-react';

export default function OptionGrid({ 
  label, 
  options = [], 
  value, 
  onChange, 
  columns = 2,
  error
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>}
      <div 
        className={cn(
          "grid gap-3",
          columns === 2 ? "grid-cols-2" : columns === 3 ? "grid-cols-3" : "grid-cols-1"
        )}
      >
        {options.map((opt, i) => {
          const isActive = value === opt;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onChange(opt)}
              className={cn(
                "relative flex items-center justify-center p-3.5 rounded-xl border text-sm font-medium transition-all duration-300",
                "hover:-translate-y-1",
                isActive 
                  ? "border-primary-gold bg-gradient-to-br from-[#fdfbfb] to-[#fcfaf2] text-primary-gold shadow-input-focus" 
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-primary-gold/30 hover:bg-white"
              )}
            >
              {opt}
              {isActive && (
                <div className="absolute top-1.5 right-1.5">
                  <CheckCircle2 size={16} className="text-primary-gold" strokeWidth={2.5} />
                </div>
              )}
            </button>
          );
        })}
      </div>
      {error && <span className="text-xs font-medium text-red-500 ml-1">{error}</span>}
    </div>
  );
}
