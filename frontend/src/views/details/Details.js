import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import pic5 from "../courses/assets/pic5.png";

export default function Details() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        {/* Top info */}
        <div className="w-[70%] bg-white my-[100px] flex flex-col p-[50px] rounded-md items-center">
          <div className="flex flex-row">
            <img src={pic5} alt="pic5.1" className="w-[30%]"></img>
            <div className="flex flex-col justify-between">
              <span className="break-words mx-[30px] font-primary text-[26px]">
                Course name which has a very very long long long very very long
                long long very very long long long very very long long long very
                very long long long very very long long long name
              </span>
              <div className="flex flex-col">
                <span className="mx-[30px] font-secondary text-[20px] font-semibold mt-[20px]">
                  Instructor name which also long long name long long namelong
                  long name long long name long long name
                </span>
                <span className="mx-[30px] font-secondary text-[20px] mt-[20px]">
                  Tag name
                </span>
              </div>
            </div>
          </div>

          <div className="h-[3px] w-full bg-[#E0E0E0] my-[30px]"></div>

          {/* Description */}
          <div className="my-[10px] w-full items-start font-secondary text-[16px] break-words">
            desssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </div>

          {/* Button */}
          <div className="flex flex-row w-full items-center justify-evenly mt-[20px]">
            <span className="w-[50%] p-[5px] bg-[#639B6D] text-center text-white rounded-full text-[16px] font-secondary font-semibold">
              Enroll now
            </span>
            <button
              className="flex flex-row items-center justify-center rounded-full bg-white border-2 border-[#639B6D] w-[20%] p-[5px]"
              onClick={goBack}
            >
              <svg
                className="mr-3 overflow-hidden w-[1em] h-[1em]"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M810.666667 469.333333H304.64l154.88-186.026666a42.666667 42.666667 0 1 0-65.706667-54.613334l-213.333333 256a50.773333 50.773333 0 0 0-3.84 6.4c0 2.133333 0 3.413333-2.986667 5.546667A42.666667 42.666667 0 0 0 170.666667 512a42.666667 42.666667 0 0 0 2.986666 15.36c0 2.133333 0 3.413333 2.986667 5.546667a50.773333 50.773333 0 0 0 3.84 6.4l213.333333 256A42.666667 42.666667 0 0 0 426.666667 810.666667a42.666667 42.666667 0 0 0 27.306666-9.813334 42.666667 42.666667 0 0 0 5.546667-60.16L304.64 554.666667H810.666667a42.666667 42.666667 0 0 0 0-85.333334z"
                  fill="#639B6D"
                />
              </svg>
              <span className="text-center text-[#639B6D] text-[16px] font-secondary font-semibold">
                {"Return"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
