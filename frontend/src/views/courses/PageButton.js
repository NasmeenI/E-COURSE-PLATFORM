export default function PageButton({ current, page }) {
  return (
    <span
      className={`w-12 h-12  border-[#2B788B] border-2 font-secondary font-bold text-[16px] rounded-full flex items-center justify-center mx-[10px] ${
        current ? "bg-[#2B788B] text-white" : "bg-white text-[#2B788B]"
      }`}
    >
      {page}
    </span>
  );
}
