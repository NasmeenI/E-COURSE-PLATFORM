import File from "../lecturePage/File";

export default function StudentUpload({ submit }) {
  // for now
  submit = true;
  return (
    <div className="bg-white w-full flex flex-col rounded-b-lg mt-[20px] p-[5%]">
      <div className="flex flex-col">
        <div
          className={`w-[150px] rounded-lg items-center justify-center flex py-[3px] ${
            submit ? "bg-green-500 text-white" : "bg-red-600 text-black"
          } `}
        >
          <span className="font-secondary font-extrabold text-white">
            {submit ? "Submitted" : "Unsubmit"}
          </span>
        </div>
        <ol>
          <File
            fileName="HW-111111111111111111111111111111111111111111111111.pdf"
            filePath="hw1"
          />
        </ol>

        {/* Create File button */}
        <button className="border-dashed border-[#666666] border-2 mt-[10px] rounded-lg py-[10px] px-[20px] flex flex-row items-center justify-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 490 490"
            className="w-[25px] h-[25px]"
          >
            <path
              d="M227.8 174.1v53.7h-53.7c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2h53.7v53.7c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2v-53.7h53.7c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2s-17.2 7.7-17.2 17.2z"
              fill="#666666"
            />
            <path
              d="M71.7 71.7C25.5 118 0 179.5 0 245s25.5 127 71.8 173.3C118 464.5 179.6 490 245 490s127-25.5 173.3-71.8C464.5 372 490 310.4 490 245s-25.5-127-71.8-173.3C372 25.5 310.5 0 245 0 179.6 0 118 25.5 71.7 71.7zm384 173.3c0 56.3-21.9 109.2-61.7 149s-92.7 61.7-149 61.7S135.8 433.8 96 394s-61.7-92.7-61.7-149S56.2 135.8 96 96s92.7-61.7 149-61.7S354.2 56.2 394 96s61.7 92.7 61.7 149z"
              fill="#666666"
            />
          </svg>
          <span className="truncate font-secondary font-extrabold ml-[2%]">
            Upload your Assignment
          </span>
        </button>

        {/* Submit button */}
        <button className="w-full justify-center items-center text-center py-[10px] px-[20px] bg-[#2B788B] mt-[20px] flex flex-row rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 76 76"
            className="w-[40px] h-[40px] flex"
          >
            <path d="M49.083 33.25A7.917 7.917 0 0 1 57 41.167C57 45.539 53.404 49 49 49h-8v-6h4l-6-6-6 6h4v6H23c-2.186 0-4-1.689-4-3.875a3.96 3.96 0 0 1 3.233-3.892l-.066-.858a5.542 5.542 0 0 1 5.288-5.536 9.504 9.504 0 0 1 17.709-.552 7.88 7.88 0 0 1 3.92-1.037Z" 
            fill="#ffffff"/>
          </svg>
          <span className="font-primary text-white">Submit</span>
        </button>
      </div>
    </div>
  );
}
