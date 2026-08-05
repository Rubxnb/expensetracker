export function ModalFooter({
    onCancel,
    onSave,
}) {
    return (

        <div className="flex gap-3 border-t border-[#E2E8E3] p-5">

            <button
                onClick={onCancel}
                className="
                    hidden
                    lg:block
                    flex-1
                    h-11
                    rounded-xl
                    border
                    border-[#E2E8E3]
                    bg-white
                    hover:cursor-pointer
                "
            >
                Cancelar
            </button>

            <button
                type="submit"
                form="transaction-form"
                className="
                    flex-1
                    h-11
                    rounded-xl
                    hover:cursor-pointer
                    bg-[#4F7C6C]
                    text-white
                "
            >
                Guardar
            </button>

        </div>

    );
}