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

      <div className="lg:hidden h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#D5DDD8] scrollbar-track-transparent">
        <TransactionMobileList
          transactions={transactions}
        />
      </div>
    </>
  );
}