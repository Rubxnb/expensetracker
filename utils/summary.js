export function getSummary(transactions) {

  let expense = 0;
  let income = 0;
  transactions.forEach(element => {
    if (element.type === 'expense') {
      expense += element.amount;
    } else {
      income += element.amount;
    }
  });

  expense = round2(expense);
  income = round2(income);
  const balance = round2(income - expense);
  return {
    income,
    expense,
    balance,
  };
}

export function getCategorySummary(transactions) {
  const expense = {};
  const income = {};

  transactions.forEach((transaction) => {
    const target = transaction.type === "expense" ? expense : income;

    target[transaction.category] =
      (target[transaction.category] || 0) + transaction.amount;
  });

  return {
    expense: Object.entries(expense)
      .map(([category, amount]) => ({
        category,
        amount,
      }))
      .sort((a, b) => b.amount - a.amount),

    income: Object.entries(income)
      .map(([category, amount]) => ({
        category,
        amount,
      }))
      .sort((a, b) => b.amount - a.amount),
  };
}

export function getMonthlySummary(transactions) {
  const summary = {};

  transactions.forEach((transaction) => {
    const month = transaction.date.getMonth() +1;

    if (!summary[month]) {
      summary[month] = {
        income: 0,
        expense: 0,
        balance: 0,
      };
    }

    if (transaction.type === "income") {
      summary[month].income += transaction.amount;
    } else {
      summary[month].expense += transaction.amount;
    }

    summary[month].balance =
      summary[month].income - summary[month].expense;
  });

  // Redondear a 2 decimales
  Object.values(summary).forEach((m) => {
    m.income = Number(m.income.toFixed(2));
    m.expense = Number(m.expense.toFixed(2));
    m.balance = Number(m.balance.toFixed(2));
  });

  return summary;
}

export function totalMonthlySummary(summary) {
  let totalIncome = 0;
  let totalExpense = 0;

  Object.values(summary).forEach((m) => {
    totalIncome += m.income;
    totalExpense += m.expense;
  });

  return {
    totalIncome: round2(totalIncome),
    totalExpense: round2(totalExpense),
    totalBalance: round2(totalIncome - totalExpense),
  }
}

export function round2(value) {
  return Math.round(value * 100) / 100;
}

export function formatCurrency(amount) {
  return amount.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}