export function MonthSelectorItem({
  month,
  selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        h-12 border border-[#E2E8E3]
        text-sm
        transition-colors
        hover:bg-[#F6F8F6]
        hover:cursor-pointer
        ${
          selected
            ? "bg-[#4F7C6C] text-white"
            : "bg-white text-[#22302A]"
        }
      `}
    >
      {month}
    </button>
  );
}