"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { MONTHS } from "../../types/months";
import { MonthSelectorItem } from "./MonthSelectorItem";

const MIN_YEAR = 2026;
const MAX_YEAR = new Date().getFullYear();

export function MonthSelector({ year, month, onMonthChange, onYearChange }) {

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {

    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () =>
      window.removeEventListener("mousedown", handleClickOutside);

  }, []);

  function selectMonth(index) {
    onMonthChange(index + 1);
    setOpen(false);
  }

  function previousYear() {
    if (year > MIN_YEAR) {
      onYearChange(year - 1);
    }
  }

  function nextYear() {
    if (year < MAX_YEAR) {
      onYearChange(year + 1);
    }
  }

  return (
    <div
      ref={ref}
      className="relative inline-block"
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          rounded-xl
          border border-[#E2E8E3]
          bg-white
          px-4
          h-11
          hover:bg-[#F6F8F6]
          hover:cursor-pointer
        "
      >
        <CalendarDays
          size={18}
          className="text-[#6B7A72]"
        />

        <span className="font-medium">
          {MONTHS[month - 1]} {year}
        </span>

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
            left-1/2
            -translate-x-1/2
            mt-2
            w-[360px]
            rounded-xl
            border
            border-[#E2E8E3]
            bg-white
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          {/* Años */}
          <div className="flex items-center justify-between h-12 px-3 bg-[#4F7C6C] text-white">
            <button
              onClick={previousYear}
              disabled={year === MIN_YEAR}
              className={`
                p-1 rounded transition-colors
                ${
                  year === MIN_YEAR
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-white/10"
                }
              `}
            >
              <ChevronLeft size={18} />
            </button>

            <span className="font-semibold text-base">
              {year}
            </span>

            <button
              onClick={nextYear}
              disabled={year === MAX_YEAR}
              className={`
                p-1 rounded transition-colors
                ${
                  year === MAX_YEAR
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-white/10"
                }
              `}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Meses */}
          <div className="grid grid-cols-3">
            {MONTHS.map((name, index) => (
              <MonthSelectorItem
                key={name}
                month={name}
                selected={index === month - 1}
                onClick={() => selectMonth(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}