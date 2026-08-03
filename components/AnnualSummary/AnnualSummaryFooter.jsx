import { formatCurrency } from "@/utils/summary";

export function AnnualSummaryFooter({totalSummary}) {
  return (
    <div className="grid grid-cols-4 h-11 items-center border-b border-[#E2E8E3] bg-[#E5F3EB] p-2 text-sm text-[#22302A] gap-6 font-semibold">
      <p>Total anual</p>
      <p className="flex justify-end">{formatCurrency(totalSummary.totalIncome)} €</p>
      <p className="flex justify-end">{formatCurrency(totalSummary.totalExpense)} €</p>
      <p className="flex justify-end">{formatCurrency(totalSummary.totalBalance)} €</p>
    </div>
  );
}