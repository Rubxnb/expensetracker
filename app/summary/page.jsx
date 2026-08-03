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
    <div className="grid grid-cols-[40%_60%] gap-4">
      <AnualSummary summary={summary} />
      <MonthlySummaryChart summary={summary} />
    </div>
  )
}