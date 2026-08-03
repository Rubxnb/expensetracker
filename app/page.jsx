"use client";

import { ResumeView } from "@/views/ResumeView";
import { TransactionsView } from "@/views/TransactionsView";
import { useTransactions } from "@/context/TransactionsContext";
import { MonthSelector } from "@/components/MonthSelector/MonthSelector";

export default function Home() {
  const {
    year,
    month,
    transactions,
    setYear,
    setMonth,
  } = useTransactions();

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[58%_42%] h-full gap-4">
        <TransactionsView
          transactions={transactions}
          year={year}
          month={month}
          onMonthChange={setMonth}
          onYearChange={setYear}
        />

        <ResumeView transactions={transactions} />
      </div>

      {/* Mobile */}
      <div className="flex flex-col lg:hidden gap-4 h-full min-h-0">
        <MonthSelector
          year={year}
          month={month}
          onMonthChange={setMonth}
          onYearChange={setYear}/>
        <ResumeView transactions={transactions} categoryResume={false}/>
        <div className="h-full overflow-y-auto">
          <TransactionsView
            transactions={transactions}
            year={year}
            month={month}
            onMonthChange={setMonth}
            onYearChange={setYear}
            mobile={true}
          />

          <ResumeView transactions={transactions} summaryResume={false}/>
        </div>
      </div>
    </>
  );
}