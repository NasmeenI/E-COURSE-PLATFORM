import pic5 from "../courses/assets/pic5.png";
import ClampLines from 'react-clamp-lines';

export default function Course(prop) {
  return (
    <div className="my-[20px] bg-white flex flex-row rounded-lg w-[60%] ">
      <img src={pic5} alt="pic5" className="w-[35%] rounded-l-lg"></img>
      <div className="flex flex-col w-[65%] p-[30px] ">
        {/* text */}
        <span className="font-primary text-[32px] mb-[3px] truncate">h1</span>
        <div className="flex flex-row items-baseline mb-[5px]">
          <span className="font-secondary font-bold text-[18px] my-[5px] truncate">
            h2
          </span>
          <span className="font-secondary font-bold text-[14px] bg-red-600 rounded-md ml-[20px] text-white py-[3px] px-[5px]">
            Status
          </span>
        </div>

        <span className="font-secondary text-[16px] my-[5px] truncate">h3</span>
        <div className="w-full h-[2px] bg-[#E0E0E0] my-[5px]"></div>
        <span className="font-secondary text-[16px] my-[5px] text-[#757575] break-words line-clamp-2">descriptionssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span>
        {/* button */}
        <div className="flex flex-row mt-[10px]">
          <span className="font-secondary font-bold text-[14px] mr-[20px] bg-[#639B6D] text-white rounded-full py-[5px] px-[20px] text-center ">
            button1
          </span>
          <span className="font-secondary font-bold text-[14px] bg-[#CB5B43] text-white rounded-full py-[5px] px-[20px] text-center ">
            button2
          </span>
        </div>
      </div>
    </div>
  );
}
