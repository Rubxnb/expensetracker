"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { MONTHS } from "@/types/months";
import { formatCurrency } from "@/utils/summary";

export function MonthlySummaryChart({ summary }) {
  const data = MONTHS.map((name, index) => {
    const month = summary[index + 1] ?? {
      income: 0,
      expense: 0,
      balance: 0,
    };

    return {
      month: name.slice(0, 3),
      income: month.income,
      expense: month.expense,
      balance: month.balance,
    };
  });

  return (
    <div className="rounded-xl border border-[#E2E8E3] bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-[#22302A]">
        Ingresos vs gastos vs balance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={380}
      >
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E2E8E3"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            formatter={(value) => `${formatCurrency(value)} €`}
          />

          <Legend />

          <Bar
            dataKey="income"
            name="Ingresos"
            fill="#3F9469"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="expense"
            name="Gastos"
            fill="#C2584B"
            radius={[4, 4, 0, 0]}
          />

          <Bar
            dataKey="balance"
            name="Balance"
            fill="#35707E"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}