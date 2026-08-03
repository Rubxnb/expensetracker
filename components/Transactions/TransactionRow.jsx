import { Trash2 } from "lucide-react";
import { TRANSACTION_TYPES } from "@/types/transactionTypes";
import { CATEGORIES } from "@/types/categories";
import { formatDate } from "@/utils/formatDate";
import { Badge } from "../ui/Badge";
import { formatCurrency } from "@/utils/summary";
import { deleteTransaction } from "@/actions/transactions";
import { useTransactions  } from "@/context/TransactionsContext";

export function TransactionRow({ item }) {
  const { refreshTransactions } = useTransactions();
  const type = TRANSACTION_TYPES[item.type];
  const { icon: Icon, label } = CATEGORIES[item.category];
  const amount = `${type.sign}${formatCurrency(item.amount)}€`;

  return (
    <div
      className="
        group
        grid
        grid-cols-[90px_120px_1.6fr_140px_2fr_40px]
        h-11
        items-center
        border-b
        border-[#E2E8E3]
        bg-white
        p-2
        text-sm
        gap-6
        hover:bg-[#F6F8F6]
        transition-colors
      "
    >
      <p className="text-[#9AA69F]">
        {formatDate(item.date)}
      </p>

      <Badge
        label={type.label}
        bgColor={type.bgColor}
        txtColor={type.txtColor}
      />

      <div className="flex items-center gap-2">
        <Icon size={15} />
        <p>{label}</p>
      </div>

      <p
        className="flex justify-end"
        style={{ color: type.txtColor }}
      >
        {amount}
      </p>

      <p className="text-[#9AA69F] truncate">
        {item.note}
      </p>

      <button
        onClick={() => {deleteTransaction(item.id); refreshTransactions()}}
        className="
          opacity-0
          group-hover:opacity-100
          transition-opacity
          cursor-pointer
          flex
          justify-center
          text-[#C2584B]
          hover:text-red-700
        "
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}