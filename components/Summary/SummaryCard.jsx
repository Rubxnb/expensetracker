import { formatCurrency } from "@/utils/summary";

export function SummaryCard({
  label,
  Icon,
  amount,
  bgColor,
  txtColor,
}) {
  return (
    <div
      className="
        bg-white
        border border-[#E2E8E3]
        rounded-lg
        flex
        flex-col lg:flex-row
        items-start lg:items-center
        gap-3 lg:gap-4
        p-4 lg:p-5
        h-auto lg:h-21
      "
    >
      <div
        className="p-2 rounded-lg"
        style={{ background: bgColor }}
      >
        <Icon style={{ color: txtColor }} />
      </div>

      <div>
        <p className="text-xs text-[#6B7A72]">
          {label}
        </p>

        <p
          className="text-lg font-semibold"
          style={{ color: txtColor }}
        >
          {formatCurrency(amount)} €
        </p>
      </div>
    </div>
  );
}