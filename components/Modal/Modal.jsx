"use client";

import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

export function Modal({ open, children, label, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed lg:inset-0 bottom-0 z-50 flex items-center justify-center">
      {/* Fondo */}
      <div className="fixed lg:absolute inset-0 bg-black/35 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="
          relative
          w-full
          max-w-[420px]
          rounded-3xl
          bg-white
          shadow-2xl
          overflow-hidden
        "
      >
        <ModalHeader title={label} onClose={onClose} />
          {children}
        <ModalFooter onCancel={onClose} />
      </div>
    </div>
  );
}