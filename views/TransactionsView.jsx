import { MonthSelector } from "@/components/MonthSelector/MonthSelector";
import { TransactionTable } from "@/components/Transactions/TransactionTable";

export function TransactionsView({transactions, year, month, onMonthChange, onYearChange, mobile = false, }) {
  return (
    <div
      className={
        mobile
        ? "flex flex-col"
        : "flex flex-col h-full min-h-0"
      }
    >
        <div className="flex justify-between items-center p-3 shrink-0">
          <p>Movimientos</p>
          <MonthSelector
            year={year}
            month={month}
            onMonthChange={onMonthChange}
            onYearChange={onYearChange}
          />
        </div>
        <div className="flex-1 min-h-0">
          <TransactionTable
            className="mx-3 h-full"
            transactions={transactions}
          />
        </div>
      </div>
  );
}