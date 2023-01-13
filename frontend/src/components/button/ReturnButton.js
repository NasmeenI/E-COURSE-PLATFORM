import { useNavigate } from "react-router-dom";

export default function ReturnButton() {
  const navigate = useNavigate();
  function backReturn() {
    navigate(-1);
  }
  return (
    <button
      onClick={backReturn}
      className="flex flex-row mb-[20px] border-[2px] border-[#2B788B] w-[120px] items-center rounded-full py-[5px] px-[10px] "
    >
      <svg
        className="mx-2 overflow-hidden w-[1em] h-[1em]"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M810.666667 469.333333H304.64l154.88-186.026666a42.666667 42.666667 0 1 0-65.706667-54.613334l-213.333333 256a50.773333 50.773333 0 0 0-3.84 6.4c0 2.133333 0 3.413333-2.986667 5.546667A42.666667 42.666667 0 0 0 170.666667 512a42.666667 42.666667 0 0 0 2.986666 15.36c0 2.133333 0 3.413333 2.986667 5.546667a50.773333 50.773333 0 0 0 3.84 6.4l213.333333 256A42.666667 42.666667 0 0 0 426.666667 810.666667a42.666667 42.666667 0 0 0 27.306666-9.813334 42.666667 42.666667 0 0 0 5.546667-60.16L304.64 554.666667H810.666667a42.666667 42.666667 0 0 0 0-85.333334z"
          fill="#2B788B"
        />
      </svg>
      <span className="font-secondary text-[#2B788B] font-semibold">
        Return
      </span>
    </button>
  );
}
