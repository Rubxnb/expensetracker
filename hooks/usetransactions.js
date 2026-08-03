"use client";

import { useEffect, useState } from "react";
import { loadTransactionsMonth } from "@/actions/transactions";

export function useTransactions(year, month) {
  const [transactions, setTransactions] = useState([]);

  async function refreshTransactions() {
    const data = await loadTransactionsMonth(year, month);
    setTransactions(data);
  }

  useEffect(() => {
    refreshTransactions();
  }, [year, month]);

  return {
    transactions,
    refreshTransactions,
  };
}