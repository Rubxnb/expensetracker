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
      month: name.charAt(0), // E F M A M J J A S O N D
      income: month.income,
      expense: month.expense,
      balance: month.balance,
    };
  });

  return (
    <div className="rounded-xl border border-[#E2E8E3] bg-white p-2">
      <h2 className="hidden lg:bloc mb-4 text-lg font-semibold text-[#22302A]">
        Ingresos vs gastos vs balance
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 5,
          }}
          barGap={2}
          barCategoryGap="15%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E2E8E3"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fill: "#64748B",
            }}
          />

          <YAxis
            width={52}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#64748B" }}
            tickFormatter={(value) => {
              if (value >= 1000) return `${value / 1000}k`;
              return value;
            }}
          />

          <Tooltip
            formatter={(value) => `${formatCurrency(value)} €`}
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E2E8E3",
            }}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="square"
            iconSize={10}
            wrapperStyle={{
              fontSize: 13,
              paddingTop: 10,
            }}
          />

          <Bar
            dataKey="income"
            name="Ingresos"
            fill="#3F9469"
            radius={[3, 3, 0, 0]}
            maxBarSize={18}
          />

          <Bar
            dataKey="expense"
            name="Gastos"
            fill="#C2584B"
            radius={[3, 3, 0, 0]}
            maxBarSize={18}
          />

          <Bar
            dataKey="balance"
            name="Balance"
            fill="#35707E"
            radius={[3, 3, 0, 0]}
            maxBarSize={14}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}