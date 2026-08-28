"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const START_YEAR = 2026;

function getYearOptions() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = START_YEAR; y <= currentYear; y++) {
    years.push(y);
  }
  return years;
}

export function YearSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      window.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const years = getYearOptions();

  function selectYear(year) {
    onChange(year);
    setOpen(false);
  }

  return (
    <div
      ref={ref}
      className="relative"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full
          h-11
          rounded-lg
          border
          border-[#E2E8E3]
          bg-white
          px-3
          flex
          items-center
          justify-between
          hover:bg-[#F6F8F6]
          cursor-pointer
        "
      >
        <div className="flex items-center gap-2">
          {value ? (
            <span>{value}</span>
          ) : (
            <span className="text-[#9AA69F]">
              Selecciona un año
            </span>
          )}
        </div>

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            top-full
            left-0
            mt-2
            w-full
            max-h-50
            overflow-y-auto
            scrollbar-thin
            scrollbar-thumb-[#D5DDD8]
            scrollbar-track-transparent
            rounded-xl
            border border-[#E2E8E3]
            bg-white
            shadow-lg
            z-50
          "
        >
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => selectYear(year)}
              className={`
                w-full
                h-11
                px-3
                flex
                items-center
                gap-3
                hover:bg-[#F6F8F6]
                cursor-pointer
                transition-colors
                ${
                  value === year
                    ? "bg-[#4F7C6C] text-white"
                    : ""
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}