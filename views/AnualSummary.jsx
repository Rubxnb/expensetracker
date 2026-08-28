import { AnnualSummaryTable } from "@/components/AnnualSummary/AnnualSummaryTable";
import { YearSelect } from "@/components/Forms/YearSelect";
import { totalMonthlySummary } from "@/utils/summary";

export function AnualSummary({summary, year, setYear}) {

  const totalSummary = totalMonthlySummary(summary);
  return (
    <div className="flex flex-col gap-1">
      <div className="hidden lg:flex font-semibold justify-between items-center">
          <p>Resumen anual</p>
          <YearSelect value={year} onChange={setYear} />
        </div>
      <AnnualSummaryTable summary={summary} totalSummary={totalSummary}/>
    </div>
  );
}