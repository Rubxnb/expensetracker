export function IconButton({children, icon: Icon, onClick}) {
  const baseStyle = "p-2 rounded-lg hover:cursor-pointer flex gap-1 justify-center items-center";
  const color = "text-[#FFFFFF] bg-[#4F7C6C]";
  return(
    <button
      className={`${baseStyle} ${color}`}
      onClick={onClick}>
      <Icon size="15"  strokeWidth={2.5}/>
      <p className="text-sm">
        {children}
      </p>
    </button>
  );
}