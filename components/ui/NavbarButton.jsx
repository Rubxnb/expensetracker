import Link from "next/link";

export function NavbarButton({children, url, selected}) {
  const baseStyle = "p-2 rounded-lg hover:cursor-pointer";
  const Color = selected ? 'bg-[#FFFFFF] text-[#22302A]' : 'bg-[#F6F8F6] text-[#6B7A72]';
  return (
    <Link className={`${baseStyle} ${Color}`}
    href={url}>
      <p className="text-sm">
        {children}
      </p>
    </Link>
  );
}