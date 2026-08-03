
import { TransactionHeader } from "./TransactionHeader";
import { TransactionRow } from "./TransactionRow";

export function TransactionDesktopTable({
  className,
  transactions,
}) {
  return (
    <div
      className={`${className} h-full flex flex-col bg-[#F6F8F6] border border-[#E2E8E3] rounded-lg overflow-hidden`}
    >
      <TransactionHeader />

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#D5DDD8] scrollbar-track-transparent">
        {transactions.map((item) => (
          <TransactionRow
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}