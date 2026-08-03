import { CategorySummaryItem } from "./CategorySummaryItem";

export function CategorySummary({label, items, total, type}) {
  return (
    <div className="flex flex-col bg-[#FFFFFF] border-1 border-[#E2E8E3] rounded-lg overflow-hidden p-5">
      <p className="text-sm text-[#22302A] font-semibold">{label}</p>
      {items.map(i => (
        <CategorySummaryItem
          key={i.category}
          category={i.category}
          amount={i.amount}
          total={total}
          type={type}
        />
      ))}
    </div>
  );
}