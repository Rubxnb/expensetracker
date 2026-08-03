import { TransactionCard } from "./TransactionCard";

export function TransactionMobileList({
  transactions,
}) {
  return (
    <div className="flex flex-col gap-3">
      {transactions.map((item) => (
        <TransactionCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}