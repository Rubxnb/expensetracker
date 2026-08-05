"use client";

import { useState } from "react";
import { TypeSelector } from "./TypeSelector";
import { DateInput } from "./DateInput";
import { CurrencyInput } from "./CurrencyInput";
import { CategorySelect } from "./CategorySelect";
import { saveTransaction } from "@/actions/transactions";
import { useRouter } from "next/navigation";
import { useTransactions } from "@/context/TransactionsContext";


export function TransactionForm({ onClose }) {
  const router = useRouter();
  const { refreshTransactions } = useTransactions();
  const [form, setForm] = useState({
    type: "expense",
    date: new Date().toISOString().split("T")[0],
    amount: "",
    category: "",
    note: "",
  });

  function updateType(type) {
    setForm((prev) => ({
        ...prev,
        type,
        category: "",
    }));
    }

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

   async function handleSubmit(e) {
    e.preventDefault();

    if (!form.category) return;
    if (!form.amount || Number(form.amount) <= 0) return;

    await saveTransaction({
      ...form,
      amount: Number(form.amount),
    });

    // Limpiar formulario
    setForm(form);
    await refreshTransactions();

    // Cerrar modal
    onClose?.();

  }

  return (
    <form
      id="transaction-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-4 lg:p-9"
    >
      {/* Tipo */}
      <div>
        <label className="block text-sm mb-2 font-medium">
          Tipo
        </label>

        <TypeSelector
            value={form.type}
            onChange={updateType}
        />
      </div>

      {/* Fecha + Cantidad */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2 font-medium">
            Fecha
          </label>

          <DateInput
            value={form.date}
            onChange={(value) =>
              updateField("date", value)
            }
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-medium">
            Cantidad
          </label>

          <CurrencyInput
            value={form.amount}
            onChange={(value) =>
              updateField("amount", value)
            }
          />
        </div>
      </div>

      {/* Categoría */}
      <div>
        <label className="block text-sm mb-2 font-medium">
          Categoría
        </label>

        <CategorySelect
          type={form.type}
          value={form.category}
          onChange={(value) =>
            updateField("category", value)
          }
        />
      </div>

      {/* Nota */}
      <div>
        <label className="block text-sm mb-2 font-medium">
          Nota (opcional)
        </label>

        <input
          type="text"
          value={form.note}
          onChange={(e) =>
            updateField("note", e.target.value)
          }
          placeholder="Ej. Málaga, internet..."
          className="
            w-full
            h-11
            rounded-lg
            border
            border-[#E2E8E3]
            px-3
            outline-none
            focus:border-[#4F7C6C]
          "
        />
      </div>
    </form>
  );
}