import { CategorySummary } from "@/components/Summary/CategorySummary";
import { SummaryCard } from "@/components/Summary/SummaryCard";
import { getCategorySummary, getSummary } from "@/utils/summary";
import { TrendingUp, TrendingDown,Scale } from "lucide-react";

export function ResumeView({ transactions, summaryResume=true, categoryResume=true }) {
  const summary = getSummary(transactions);
  const categorySummary = getCategorySummary(transactions);

  return (
    <div className="flex flex-col gap-2.5 h-auto lg:h-full lg:min-h-0">
      { summaryResume && (
        <div className="shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-2.5">
          <SummaryCard 
            label="Total ingresos"
            Icon={TrendingUp}
            amount={summary.income}
            bgColor= "#E5F3EB"
            txtColor= "#3F9469"
          />
          <SummaryCard 
            label="Total gastos"
            Icon={TrendingDown}
            amount={summary.expense}
            bgColor= "#FBEAE7"
            txtColor= "#C2584B"
          />
          <SummaryCard 
            label="Balance"
            Icon={Scale}
            amount={summary.balance}
            bgColor= "#E3EFF1"
            txtColor= "#35707E"
          />
        </div>
      )}
      { categoryResume && (
        <div className={"mt-3 lg:mt-0 lg:h-full lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:scrollbar-thin lg:scrollbar-thumb-[#D5DDD8] lg:scrollbar-track-transparent lg:pr-2 w-full"}>
          <div className="flex flex-col gap-2.5">
            <CategorySummary
              label="Gasto por categoría"
              items={categorySummary.expense}
              total={summary.expense}
              type="expense"
            />
            <CategorySummary
              label="Ingreso por categoría"
              items={categorySummary.income}
              total={summary.income}
              type="income"
            />
          </div>
        </div>
      )}
    </div>
  );
}

    