import { CategorySummary } from "@/components/Summary/CategorySummary";
import { SummaryCard } from "@/components/Summary/SummaryCard";
import { getCategorySummary, getSummary } from "@/utils/summary";
import { TrendingUp, TrendingDown,Scale } from "lucide-react";

export function ResumeView({ transactions, mobile = false }) {
  const summary = getSummary(transactions);
  const categorySummary = getCategorySummary(transactions);
  return (
    <div className="flex flex-col gap-2.5 h-auto lg:h-full">
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
      <div
        className={
          mobile
            ? "hidden"
            : "flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-[#D5DDD8] scrollbar-track-transparent pr-2"
        }
      >
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
    </div>
  );
}

    