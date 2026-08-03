import { TransactionDesktopTable } from "./TransactionDesktopTable";
import { TransactionMobileList } from "./TransactionMobileList";

export function TransactionTable({ className, transactions }) {
  return (
    <>
      <div className="hidden lg:block h-full">
        <TransactionDesktopTable
          className={className}
          transactions={transactions}
        />
      </div>

      <div className="lg:hidden lg:h-full lg:overflow-y-auto lg:scrollbar-thin lg:scrollbar-thumb-[#D5DDD8] lg:scrollbar-track-transparent">
        <TransactionMobileList
          transactions={transactions}
        />
      </div>
    </>
  );
}