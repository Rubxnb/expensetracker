"use client";
import { useEffect, useState } from "react";
import { loadTransactionsYear } from "@/actions/transactions";
import { AnualSummary } from "@/views/AnualSummary";
import { MonthlySummaryChart } from "@/components/charts/MonthlySummaryChart";

export default function Summary() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [summary, setSummary] = useState({});
  console.log(summary);
  useEffect(() => {
      async function fetchData() {
        const data = await loadTransactionsYear(year);
        setSummary(data);
      }
      fetchData();
    }, [year]);
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%] gap-4 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-[#D5DDD8] scrollbar-track-transparent">
      <div className="lg:hidden font-semibold">
        <p>Resumen anual · {new Date().getFullYear()}</p>
      </div>
      <div className="order-2 lg:order-1">
        <AnualSummary summary={summary} />
      </div>
      <div className="order-1 lg:order-">
        <MonthlySummaryChart summary={summary} />
      </div>
    </div>
  )
}