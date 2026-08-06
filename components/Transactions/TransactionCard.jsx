"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import { deleteTransaction } from "@/actions/transactions";
import { useTransactions } from "@/context/TransactionsContext";

import { TRANSACTION_TYPES } from "@/types/transactionTypes";
import { CATEGORIES } from "@/types/categories";

import { formatDate } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/summary";

export function TransactionCard({ item }) {
  const [opened, setOpened] = useState(false);

  const { refreshTransactions } = useTransactions();

  const type = TRANSACTION_TYPES[item.type];
  const { icon: Icon, label } = CATEGORIES[item.category];

  async function handleDelete(e) {
    e.stopPropagation();

    await deleteTransaction(item.id);
    await refreshTransactions();
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Fondo rojo */}
      <div
        className="
          absolute
          inset-0
          flex
          justify-end
          items-center
          bg-[#C2584B]
        "
      >
        <button
          onClick={handleDelete}
          className="
            flex
            h-full
            w-24
            flex-col
            items-center
            justify-center
            gap-1
            text-white
          "
        >
          <Trash2 size={18} />
          <span className="text-xs font-medium">
            Eliminar
          </span>
        </button>
      </div>

      {/* Tarjeta */}
      <div
        onClick={() => setOpened(!opened)}
        className={`
          relative
          z-10
          flex
          items-center
          justify-between
          rounded-xl
          border
          border-[#E2E8E3]
          bg-white
          p-2
          transition-transform
          duration-300
          ease-out
          ${opened ? "-translate-x-24" : "translate-x-0"}
        `}
      >
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
          {type.sign}
          {formatCurrency(item.amount)} €
        </p>
      </div>
    </div>
  );
}