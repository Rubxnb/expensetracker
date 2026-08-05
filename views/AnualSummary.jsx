import { AnnualSummaryTable } from "@/components/AnnualSummary/AnnualSummaryTable";
import { totalMonthlySummary } from "@/utils/summary";

export function AnualSummary({summary}) {

  const totalSummary = totalMonthlySummary(summary);
  return (
    <div>
      <p className="hidden lg:block">Resumen anual · {new Date().getFullYear()}</p>
      <AnnualSummaryTable summary={summary} totalSummary={totalSummary}/>
    </div>
  );
}