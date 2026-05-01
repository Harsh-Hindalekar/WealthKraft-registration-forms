import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export default function SelectBox({ 
  label, 
  icon: Icon, 
  value, 
  onChange, 
  error, 
  options = [],
  placeholder = "Select an option"
}) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-gold transition-colors z-10 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <select
          value={value}
          onChange={onChange}
          className={cn(
            "w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 appearance-none cursor-pointer",
            Icon ? "pl-11" : "",
            "focus:-translate-y-[2px] focus:bg-white focus:border-primary-gold focus:shadow-input-focus",
            error ? "border-red-400 focus:border-red-500 focus:shadow-[0_12px_28px_rgba(239,68,68,0.12)]" : "",
            value && !error ? "border-green-400" : "",
            !value ? "text-slate-400" : ""
          )}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt} className="text-slate-800">{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-primary-gold transition-colors">
          <ChevronDown size={18} />
        </div>
      </div>
      {error && <span className="text-xs font-medium text-red-500 ml-1 mt-0.5">{error}</span>}
    </div>
  );
}
