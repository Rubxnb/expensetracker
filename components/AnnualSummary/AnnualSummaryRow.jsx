export function AnnualSummaryRow({ label, income, expense, balance }) {
  return (
    <div className="grid grid-cols-4 h-11 items-center border-b border-[#E2E8E3] bg-white p-2 text-sm gap-6">
      <p>
        {label}
      </p>
      <p className="flex justify-end text-[#3F9469]">
        {income} {income === '-' ? '' : '€'}
      </p>
      <p className="flex justify-end text-[#C2584B]">
        {expense} {expense === '-' ? '' : '€'}
      </p>
      <p className="flex justify-end text-[#35707E]">
        {balance} {balance === '-' ? '' : '€'}
      </p>
    </div>
  );
}