export function TransactionHeader() {
  return (
    <div className="grid grid-cols-[90px_120px_1.6fr_140px_2fr] h-11 items-center border-b border-[#E2E8E3] bg-[#F6F8F6] p-2 text-sm text-[#6B7A72] gap-6 font-semibold">
      <p>Fecha</p>
      <p>Tipo</p>
      <p>Categoría</p>
      <p className="flex justify-end">Cantidad</p>
      <p>Nota</p>
    </div>
  );
}