export function Badge({label, bgColor, txtColor}) {
  return (
    <div className="flex justify-center items-center w-fit px-2 rounded-lg"
      style={{
        backgroundColor: bgColor,
        color: txtColor,
      }}
    >
      <p>{label}</p>
    </div>
  );
}