import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import pic5 from "../courses/assets/pic5.png";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import UserAPI from "../../api/UserAPI";

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const [tryingToEnroll, setTryingToEnroll] = useState(false);

  const [nowEnrolled, setNowEnrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    data: { user },
  } = useContext(UserContext);

  const { instructorName, tag, description, courseName, image, enrolled, id } =
    location.state;

  function goBack() {
    navigate(-1);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function enrollCourse() {
    setTryingToEnroll(true);
    const result = await UserAPI.enrollCourse(id);
    if (result.error) {
      toast(result.error);
    } else {
      toast("Enroll Completed");
      setNowEnrolled(true);
    }
    setTryingToEnroll(false);
  }

  return (
    <div>
      <Header />
      <div className="mt-[60px] min-h-[600px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        {/* Top info */}

        {tryingToEnroll ? (
          <TailSpin
            height="80"
            width="80"
            color="#2B788B"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <div className="w-[70%] bg-white my-[100px] flex flex-col p-[50px] rounded-md items-center">
            <div className="flex flex-row">
              <img src={image} alt="pic5.1" className="w-[30%]"></img>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="break-words mx-[30px] font-primary text-[26px]">
                    {courseName}
                  </span>
                  <span className="mx-[30px] font-secondary text-[20px] font-semibold mt-[20px]">
                    {instructorName}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="mx-[30px] font-secondary text-[20px] mt-[20px]">
                    {tag}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[3px] w-full bg-[#E0E0E0] my-[30px]"></div>

            {/* Description */}
            <div className="my-[10px] w-full items-start font-secondary text-[16px] break-words">
              {description}
            </div>

            {/* Button */}
            <div className="flex flex-row w-full items-center justify-evenly mt-[20px]">
              {user?.type === "student" ? (
                <button
                  onClick={openModal}
                  disabled={enrolled || nowEnrolled}
                  className="mr-[20px] bg-[#639B6D] border-2 border-[#639B6D] text-white rounded-full py-[5px] px-[20px]"
                >
                  <span className="font-secondary font-bold text-[14px] text-white text-center ">
                    {enrolled || nowEnrolled ? "Enrolled" : "Enroll now"}
                  </span>
                </button>
              ) : (
                <></>
              )}
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
        )}
      </div>

      <ConfirmModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={enrollCourse}
        message={`Are you sure you want to enroll in ${courseName}?`}
      />

      <Footer />
    </div>
  );
}
