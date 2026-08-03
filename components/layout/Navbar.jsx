"use client"

import { Wallet, Plus } from "lucide-react";
import { NavbarButton } from "../ui/NavbarButton";
import { IconButton } from "../ui/IconButton";
import { usePathname } from "next/navigation";

export default function Navbar({ onAdd }) {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-3 items-center px-8 h-16 bg-[#FFFFFF] border-b border-[#E2E8E3] font-semibold">
      <div className="justify-self-start flex items-center gap-2">
        <div className="bg-[#4F7C6C] p-1.5 rounded-lg">
          <Wallet size="20" color="#FFFFFF" />
        </div>
        <p>Control de gastos e ingresos</p>
      </div>

      <div className="justify-self-center">
        <div className="flex bg-[#F6F8F6] p-1 rounded-lg gap-2">
        <NavbarButton selected={pathname === '/'} url='/'> Vista mensual</NavbarButton>
        <NavbarButton selected={pathname === '/summary'} url='/summary'>Resumen anual</NavbarButton>
        </div>
      </div>

      <div className="justify-self-end">
        <IconButton icon={Plus} onClick={onAdd}>Añadir movimiento</IconButton>
      </div>
    </div>
  );
}