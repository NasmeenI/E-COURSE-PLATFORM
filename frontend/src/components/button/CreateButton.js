import { useNavigate } from "react-router-dom"

export default function CreateButton({path ,text}) {
    const navigate = useNavigate();
    function toCreateCoursePage() {
        navigate(path)
    }
    return <button className="w-[90%] h-[70px] border-dashed border-[#cccccc] border-2 mt-[40px] mb-[20px] flex justify-center mx-[5%] items-center" onClick={toCreateCoursePage}>
        <div className="flex flex-row justify-center items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 490 490"
            className="w-[30px] h-[30px]"
          >
            <path
              d="M227.8 174.1v53.7h-53.7c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2h53.7v53.7c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2v-53.7h53.7c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2s-17.2 7.7-17.2 17.2z"
              fill="#cccccc"
            />
            <path
              d="M71.7 71.7C25.5 118 0 179.5 0 245s25.5 127 71.8 173.3C118 464.5 179.6 490 245 490s127-25.5 173.3-71.8C464.5 372 490 310.4 490 245s-25.5-127-71.8-173.3C372 25.5 310.5 0 245 0 179.6 0 118 25.5 71.7 71.7zm384 173.3c0 56.3-21.9 109.2-61.7 149s-92.7 61.7-149 61.7S135.8 433.8 96 394s-61.7-92.7-61.7-149S56.2 135.8 96 96s92.7-61.7 149-61.7S354.2 56.2 394 96s61.7 92.7 61.7 149z"
              fill="#cccccc"
            />
          </svg>
          <span className="font-secondary text-[#cccccc] text-[20px] ml-[20px]">{text}</span>
        </div>
    </button>
}