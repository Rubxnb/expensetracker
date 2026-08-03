"use client";

import { CalendarDays } from "lucide-react";

export function DateInput({ value, onChange }) {
  return (
    <div className="relative">
      <CalendarDays
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-[#6B7A72]
          pointer-events-none
        "
      />

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          h-11
          rounded-lg
          border
          border-[#E2E8E3]
          bg-white
          pl-10
          pr-3
          text-sm
          outline-none
          transition-colors
          focus:border-[#4F7C6C]
        "
      />
    </div>
  );
}