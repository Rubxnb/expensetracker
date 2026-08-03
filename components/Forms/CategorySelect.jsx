"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { CATEGORIES } from "@/types/categories";

export function CategorySelect({
  type,
  value,
  onChange,
}) {
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

  const categories = Object.entries(CATEGORIES).filter(
    ([_, category]) =>
      type === "expense"
        ? category.expense
        : category.income
  );

  const selectedCategory = CATEGORIES[value];

  function selectCategory(key) {
    onChange(key);
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
          {selectedCategory ? (
            <>
              <selectedCategory.icon size={18} />
              <span>
                {selectedCategory.label}
              </span>
            </>
          ) : (
            <span className="text-[#9AA69F]">
              Selecciona una categoría
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
          {categories.map(([key, category]) => {
            const Icon = category.icon;

            return (
              <button
                key={key}
                type="button"
                onClick={() =>
                  selectCategory(key)
                }
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
                    value === key
                      ? "bg-[#4F7C6C] text-white"
                      : ""
                  }
                `}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}