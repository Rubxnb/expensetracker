import { MONTHS } from "@/types/months";
import { AnnualSummaryFooter } from "./AnnualSummaryFooter";
import { AnnualSummaryHeader } from "./AnnualSummaryHeader";
import { AnnualSummaryRow } from "./AnnualSummaryRow";
import { formatCurrency } from "@/utils/summary";

export function AnnualSummaryTable({ className, summary, totalSummary }) {
  return (
    <div
      className={`${className} flex flex-col bg-[#F6F8F6] border border-[#E2E8E3] rounded-lg overflow-hidden`}
    >
      <AnnualSummaryHeader />

      {MONTHS.map((item, index) => (
        <AnnualSummaryRow
          label={item}
          key={index}
          income={
            summary[index + 1]?.income != null
              ? formatCurrency(summary[index + 1].income)
              : "-"
          }
          expense={
            summary[index + 1]?.expense != null
              ? formatCurrency(summary[index + 1].expense)
              : "-"
          }
          balance={
            summary[index + 1]?.balance != null
              ? formatCurrency(summary[index + 1].balance)
              : "-"
          }
        />
      ))}

      <AnnualSummaryFooter totalSummary={totalSummary} /> 
    </div>
  );
}