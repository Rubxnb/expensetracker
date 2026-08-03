export function AnnualSummaryHeader() {
  return (
    <div className="grid grid-cols-4 h-11 items-center border-b border-[#E2E8E3] bg-[#F6F8F6] p-2 text-sm text-[#6B7A72] gap-6 font-semibold">
      <p>Mes</p>
      <p className="flex justify-end">Ingresos</p>
      <p className="flex justify-end">Gastos</p>
      <p className="flex justify-end">Balance</p>
    </div>
  );
}