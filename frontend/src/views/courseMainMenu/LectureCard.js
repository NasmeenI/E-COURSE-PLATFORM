import { useNavigate, useParams } from "react-router-dom";

export default function LectureCard({ head, lectureid }) {
  const navigate = useNavigate();
  const param = useParams();
  function toLecture() {
    navigate("/mycourses/" + param.id + "/lecture/" + lectureid);
  }

  return (
    <button onClick={toLecture}>
      <div className="bg-white mt-[20px] px-[5%] flex flex-col py-[20px]">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 335.08 335.079"
            className="w-[30px] h-[30px] mr-[10px]"
          >
            <path
              d="M311.175 115.775c-1.355-10.186-1.546-27.73 7.915-33.621.169-.108.295-.264.443-.398 7.735-2.474 13.088-5.946 8.886-10.618l-114.102-34.38L29.56 62.445S8.403 65.469 10.293 98.339c1.026 17.89 6.637 26.676 11.544 31l-15.161 4.569c-4.208 4.672 1.144 8.145 8.88 10.615.147.138.271.293.443.401 9.455 5.896 9.273 23.438 7.913 33.626-33.967 9.645-21.774 12.788-21.774 12.788l7.451 1.803c-5.241 4.736-10.446 13.717-9.471 30.75 1.891 32.864 19.269 35.132 19.269 35.132l120.904 39.298 182.49-44.202s12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712 7.921-33.623.174-.105.301-.264.442-.396 7.736-2.474 13.084-5.943 8.881-10.615l-7.932-2.395c5.29-3.19 13.236-11.527 14.481-33.183.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794c.001.006 12.198-3.142-21.773-12.788zm-152.642-.421 30.688-6.307 103.708-21.312 15.451-3.178c-4.937 9.036-4.73 21.402-3.913 29.35.179 1.798.385 3.44.585 4.688L288.14 122.8l-130.897 32.563 1.29-40.009zM26.71 147.337l15.449 3.178 99.597 20.474 8.701 1.782 26.093 5.363 1.287 40.01-134.534-33.471-13.263-3.296c.195-1.25.401-2.89.588-4.693.812-7.942 1.023-20.311-3.918-29.347zm-6.002-50.58c-.187-8.743 1.371-15.066 4.52-18.28 2.004-2.052 4.369-2.479 5.991-2.479.857 0 1.474.119 1.516.119l79.607 25.953 39.717 12.949-1.303 40.289L39.334 124.07l-5.88-1.647a3.56 3.56 0 0 0-.735-.113c-.459-.033-11.475-1.047-12.011-25.553zm119.871 184.109L23.28 247.98a3.489 3.489 0 0 0-.733-.116c-.467-.031-11.488-1.044-12.021-25.544-.19-8.754 1.376-15.071 4.519-18.288 2.009-2.052 4.375-2.479 5.994-2.479.859 0 1.474.115 1.519.115 0 0 .005 0 0 0l119.316 38.908-1.295 40.29zm153.705-41.407c.185 1.804.391 3.443.591 4.693l-147.812 36.771 1.292-40.01 31.601-6.497 4.667 1.129 17.492-5.685 80.631-16.569 15.457-3.18c-4.942 9.035-4.737 21.406-3.919 29.348zm8.142-54.375a2.84 2.84 0 0 0-.791.122l-11.148 3.121-106.148 29.764-1.298-40.289 34.826-11.359 84.327-27.501c.011-.005 4.436-.988 7.684 2.315 3.144 3.214 4.704 9.537 4.52 18.28-.55 24.498-11.571 25.516-11.972 25.547z"
              fill="#595959"
            />
          </svg>
          <span className="font-secondary text-[20px] font-extrabold mt-[5px] truncate">
            {head}
          </span>
        </div>
      </div>
    </button>
  );
}
