import React from 'react';
import { cn } from '../../lib/utils';

export default function InputBox({ 
  label, 
  icon: Icon, 
  type = "text", 
  value, 
  onChange, 
  error, 
  placeholder,
  description
}) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-gold transition-colors z-10">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 outline-none transition-all duration-300",
            Icon ? "pl-11" : "",
            "focus:-translate-y-[2px] focus:bg-white focus:border-primary-gold focus:shadow-input-focus",
            error ? "border-red-400 focus:border-red-500 focus:shadow-[0_12px_28px_rgba(239,68,68,0.12)]" : "",
            value && !error ? "border-green-400" : ""
          )}
        />
      </div>
      {error ? (
        <span className="text-xs font-medium text-red-500 ml-1 mt-0.5">{error}</span>
      ) : description ? (
        <span className="text-xs font-medium text-muted-text ml-1 mt-0.5">{description}</span>
      ) : null}
    </div>
  );
}
