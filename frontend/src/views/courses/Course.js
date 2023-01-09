import pic5 from "../courses/assets/pic5.png";

export default function Course(prop) {
  return (
    <div className="my-[20px] bg-white flex flex-row rounded-lg w-[60%] ">
      <img src={pic5} alt="pic5" className="w-[37%] rounded-l-lg"></img>
      <div className="flex flex-col w-[63%] p-[30px] ">
        {/* text */}
            {/* h1 */}
        <div className="items-center flex mb-[10px]">
            <span className="font-primary text-[32px] break-words line-clamp-2 leading-tight">{prop.courseName}</span>
        </div>
        
            {/* h2 + status button */}
        <div className="flex flex-row items-baseline mb-[5px]">
          <span className="font-secondary font-bold text-[18px] my-[5px] truncate">
            {prop.instructorName}
          </span>
          <span className="font-secondary font-bold text-[14px] bg-red-600 rounded-md ml-[20px] text-white py-[3px] px-[10px]">
            Status
          </span>
        </div>
            {/* h3 */}
        <span className="font-secondary text-[16px] my-[5px] truncate">{prop.tag}</span>
        <div className="w-full h-[2px] bg-[#E0E0E0] my-[5px]"></div>
            {/* description */}
        <span className="font-secondary text-[16px] my-[5px] text-[#757575] break-words line-clamp-2">{prop.description}</span>
        {/* button */}
        <div className="flex flex-row mt-[10px]">
          <span className="font-secondary font-bold text-[14px] mr-[20px] bg-[#639B6D] text-white rounded-full py-[5px] px-[20px] text-center ">
            button1
          </span>
        </div>
      </div>
    </div>
  );
}
