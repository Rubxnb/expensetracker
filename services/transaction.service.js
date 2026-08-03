import { prisma } from "@/lib/prisma";
import { getMonthlySummary } from "@/utils/summary";

export async function getTransactions() {
  const transactions = await prisma.transactions.findMany({
    orderBy: {
      date: "asc",
    },
  });

  return transactions.map((transaction) => ({
    ...transaction,
    amount: Number(transaction.amount.toFixed(2)),
  }));
}

export async function getTransactionsByDate(year, month) {
  const start = new Date(Date.UTC(year, month - 1, 1));
  const end = new Date(Date.UTC(year, month, 1));
  
  const transactions = await prisma.transactions.findMany({
    where: {
      date: {
        gte: start,
        lt: end,
      },
    },
    orderBy: {
      date: "asc",
    },
  });
  return transactions.map((transaction) => ({
    ...transaction,
    amount: Number(transaction.amount.toFixed(2)),
  }));
}

export async function getTransactionsByYear(year) {
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year+1, 0, 1));
  
  const transactions = await prisma.transactions.findMany({
    where: {
      date: {
        gte: start,
        lt: end,
      },
    },
    orderBy: {
      date: "asc",
    },
  });
  
  const res = transactions.map((transaction) => ({
    ...transaction,
    amount: Number(transaction.amount.toFixed(2)),
  }));
  return getMonthlySummary(res);
}

export async function createTransaction(data) {
  await prisma.transactions.create({
    data: {
      type: data.type,
      category: data.category,
      amount: data.amount,
      note: data.note || null,
      date: new Date(data.date),
    },
  });

  return { success: true };
}

export async function deleteTransactionById(id) {
  await prisma.transactions.delete({
    where: {
      id,
    },
  });

  return {
    success: true,
  };
}


  