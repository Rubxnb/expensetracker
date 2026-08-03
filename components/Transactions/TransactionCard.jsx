import { TRANSACTION_TYPES } from "@/types/transactionTypes";
import { CATEGORIES } from "@/types/categories";
import { formatDate } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/summary";

export function TransactionCard({ item }) {
  const type = TRANSACTION_TYPES[item.type];
  const { icon: Icon, label } = CATEGORIES[item.category];

  return (
    <div className="flex items-center justify-between rounded-xl border border-[#E2E8E3] bg-white p-4">
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{
            backgroundColor: type.bgColor,
            color: type.txtColor,
          }}
        >
          <Icon size={20} />
        </div>

        <div>
          <p className="font-medium text-[#22302A]">
            {label}
          </p>

          <p className="text-sm text-[#9AA69F]">
            {formatDate(item.date)}
            {item.note && ` · ${item.note}`}
          </p>
        </div>
      </div>

      <p
        className="font-semibold"
        style={{ color: type.txtColor }}
      >
        {formatCurrency(`${type.sign}${item.amount}`)}
      </p>
    </div>
  );
}