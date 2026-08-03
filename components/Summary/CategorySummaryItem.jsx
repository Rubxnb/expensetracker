import { CATEGORIES } from "@/types/categories";
import { TRANSACTION_TYPES } from "@/types/transactionTypes";
import { round2 } from "@/utils/summary";
import { formatCurrency } from "@/utils/summary";

export function CategorySummaryItem({category, amount, total, type}) {
  const label = CATEGORIES[category].label;
  const Icon = CATEGORIES[category].icon;
  const color = TRANSACTION_TYPES[type].txtColor;
  const percentage = round2((amount)*100/total);
  return (
    <div className="flex flex-col justify-center text-sm py-1">
      <div className="flex justify-between pb-1">
        <div className="flex gap-1 items-center text-[#6B7A72]">
          <Icon size="15"/>
          <p>{label}</p>
        </div>
        <p>{formatCurrency(round2(amount))} €</p>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[#E2E8E3]">
        <div
          className="h-1.5 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}