"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BottomNavigation } from "./BottomNavigation";
import { Modal } from "@/components/Modal/Modal";
import { TransactionForm } from "../Forms/TransactionForm";
import { UnlockScreen } from "../auth/UnlockScreen";

export default function LayoutClient({ children }) {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const value = sessionStorage.getItem("finora-unlocked");
    setUnlocked(value === "true");
  }, []);

  if (!unlocked) {
    return (
      <UnlockScreen
        onUnlock={() => setUnlocked(true)}
      />
    );
  }
  
  return (
    <div className="flex-1 flex flex-col">
      <div className="hidden lg:block">
        <Navbar onAdd={() => setOpen(true)} />
      </div>

      <main className="flex-1 overflow-hidden px-4 py-4 lg:p-6 pb-20 lg:pb-6">
        {children}
      </main>

      <BottomNavigation />

      <Modal
        open={open}
        label="Añadir movimiento"
        onClose={() => setOpen(false)}>
          <TransactionForm onClose={() => setOpen(false)} />
        </Modal>
    </div>
  );
}