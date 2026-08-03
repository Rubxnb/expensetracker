"use client";

import { Euro } from "lucide-react";

export function CurrencyInput({ value, onChange }) {
  function handleChange(e) {
    let newValue = e.target.value;

    // Permitir solo números y un único separador decimal
    newValue = newValue
      .replace(",", ".")
      .replace(/[^0-9.]/g, "");

    const parts = newValue.split(".");

    if (parts.length > 2) {
      newValue = `${parts[0]}.${parts.slice(1).join("")}`;
    }

    onChange(newValue);
  }

  return (
    <div className="relative">
      <input
        type="text"
        inputMode="decimal"
        placeholder="0,00"
        value={value}
        onChange={handleChange}
        className="
          w-full
          h-11
          rounded-lg
          border
          border-[#E2E8E3]
          bg-white
          px-3
          pr-10
          text-sm
          outline-none
          transition-colors
          focus:border-[#4F7C6C]
        "
      />

      <Euro
        size={18}
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-[#6B7A72]
          pointer-events-none
        "
      />
    </div>
  );
}