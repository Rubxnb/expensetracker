"use server";

import { getTransactionsByDate, getTransactionsByYear, createTransaction, deleteTransactionById  } from "@/services/transaction.service";

export async function loadTransactionsMonth(year, month) {
  return await getTransactionsByDate(year, month);
}

export async function loadTransactionsYear(year) {
  return await getTransactionsByYear(year);
}

export async function saveTransaction(data) {
  return await createTransaction(data);
}

export async function deleteTransaction(id) {
  return await deleteTransactionById(id);
}