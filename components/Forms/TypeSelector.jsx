"use client";

export function TypeSelector({ value, onChange }) {
  return (
    <div className="flex h-11 rounded-lg bg-[#F6F8F6] p-1">
      <button
        type="button"
        onClick={() => onChange("expense")}
        className={`
          flex-1
          rounded-md
          text-sm
          font-medium
          transition-colors
          cursor-pointer
          ${
            value === "expense"
              ? "bg-[#FBEAE7] text-[#C2584B]"
              : "text-[#22302A] hover:bg-white"
          }
        `}
      >
        Gasto
      </button>

      <button
        type="button"
        onClick={() => onChange("income")}
        className={`
          flex-1
          rounded-md
          text-sm
          font-medium
          transition-colors
          cursor-pointer
          ${
            value === "income"
              ? "bg-[#E5F3EB] text-[#3F9469]"
              : "text-[#22302A] hover:bg-white"
          }
        `}
      >
        Ingreso
      </button>
    </div>
  );
}