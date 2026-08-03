"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { loadTransactionsMonth } from "@/actions/transactions";

const TransactionsContext = createContext(null);

export function TransactionsProvider({ children }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const [transactions, setTransactions] = useState([]);

  async function refreshTransactions() {
    const data = await loadTransactionsMonth(year, month);
    setTransactions(data);
  }

  useEffect(() => {
    refreshTransactions();
  }, [year, month]);

  return (
    <TransactionsContext.Provider
      value={{
        year,
        month,
        transactions,
        setYear,
        setMonth,
        refreshTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}