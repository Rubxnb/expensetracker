"use client";

import { CalendarDays, ChartColumn, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavigation({ onAdd }) {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#E2E8E3] flex lg:hidden z-50 items-center">
      <Link
        href="/"
        className="flex-1 flex flex-col items-center justify-center gap-1"
      >
        <CalendarDays
          size={20}
          className={
            pathname === "/"
              ? "text-[#4F7C6C]"
              : "text-[#9AA69F]"
          }
        />

        <span
          className={`text-xs ${
            pathname === "/"
              ? "text-[#4F7C6C] font-medium"
              : "text-[#9AA69F]"
          }`}
        >
          Mensual
        </span>
      </Link>

      <button className="rounded-full bg-[#4F7C6C] text-[#FFFFFF] p-1 mb-2 font-"
      onClick={onAdd}>
        <Plus />
      </button>

      <Link
        href="/summary"
        className="flex-1 flex flex-col items-center justify-center gap-1"
      >
        <ChartColumn
          size={20}
          className={
            pathname === "/summary"
              ? "text-[#4F7C6C]"
              : "text-[#9AA69F]"
          }
        />

        <span
          className={`text-xs ${
            pathname === "/summary"
              ? "text-[#4F7C6C] font-medium"
              : "text-[#9AA69F]"
          }`}
        >
          Anual
        </span>
      </Link>
    </div>
  );
}