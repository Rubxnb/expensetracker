import { X } from "lucide-react";

export function ModalHeader({ title, onClose }) {
  return (
    <div className="flex items-center justify-between px-6 pt-2 lg:py-5 lg:border-b lg:border-[#E2E8E3]">

      <h2 className="font-semibold text-lg">
        {title}
      </h2>

      <button
        onClick={onClose}
        className="
          w-9
          h-9
          rounded-full
          flex
          items-center
          justify-center
          hover:cursor-pointer
          hover:bg-[#F6F8F6]
        "
      >
        <div className="bg-[#E5F3EB] text-[#3F9469] rounded-sm p-1">
          <X size={18} />
        </div>
      </button>

    </div>
  );
}