export default function PageButton(prop) {
    if (prop.current) {
        return <span className="w-12 h-12 bg-[#2B788B] border-[#2B788B] text-white font-secondary font-bold text-[16px] rounded-full flex items-center justify-evenly mx-[10px]">{prop.page}</span>
    } else {
        return <span className="w-12 h-12 bg-white border-[#2B788B] text-[#2B788B] font-secondary font-bold text-[16px] rounded-full flex items-center justify-evenly mx-[10px]">{prop.page}</span>
    };
};