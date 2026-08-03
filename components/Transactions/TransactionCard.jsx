import { TRANSACTION_TYPES } from "@/types/transactionTypes";
import { CATEGORIES } from "@/types/categories";
import { formatDate } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/summary";

export function TransactionCard({ item }) {
  const type = TRANSACTION_TYPES[item.type];
  const { icon: Icon, label } = CATEGORIES[item.category];

  return (
    <div className="flex items-center justify-between rounded-xl border border-[#E2E8E3] bg-white p-2">
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
          style={{
            backgroundColor: type.bgColor,
            color: type.txtColor,
          }}
        >
          <Icon size={20} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-[#22302A]">
            {label}
          </p>

          <p className="text-xs text-[#9AA69F] truncate">
            {formatDate(item.date)}
            {item.note && ` · ${item.note}`}
          </p>
        </div>
      </div>

      <p
        className="text-sm font-semibold whitespace-nowrap shrink-0"
        style={{ color: type.txtColor }}
      >
        {type.sign}{formatCurrency(item.amount)} €
      </p>
    </div>
  );
}