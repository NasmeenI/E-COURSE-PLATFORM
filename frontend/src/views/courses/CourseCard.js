import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import NasmeenAPI from "../../api/NasmeenAPI";
import { auth } from "../../api/firebase";
import { toast } from "react-hot-toast";
import UserAPI from "../../api/UserAPI";

export default function CourseCard({
  instructorName,
  tag,
  description,
  courseName,
  image,
  enrolled,
  id,
  setTryingToEnroll,
  loadPageData,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function goToMoreDetails() {
    navigate("/details", {
      state: {
        instructorName,
        tag,
        description,
        courseName,
        image,
        enrolled,
        id,
      },
    });
  }
  const {
    data: { user },
  } = useContext(UserContext);

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
      loadPageData();
    }
    setTryingToEnroll(false);
  }

  return (
    <div className="my-[20px] bg-white flex flex-row rounded-lg w-[80%]">
      <img
        src={image}
        alt="pic5"
        className="w-[37%] rounded-l-lg object-cover"
      ></img>

      <div className="flex flex-col w-[63%] p-[30px] justify-between">
        <div className="flex flex-col">
          {/* text */}
          {/* h1 */}
          <div className="items-center flex mb-[10px]">
            <span className="font-primary text-[32px] break-words line-clamp-2 leading-tight">
              {courseName}
            </span>
          </div>

          {/* h2 + status button */}
          <div className="flex flex-row items-baseline mb-[5px]">
            <span className="font-secondary font-bold text-[18px] my-[5px] truncate">
              {instructorName}
            </span>
            <span className="font-secondary font-bold text-[14px] bg-red-600 rounded-md ml-[20px] text-white py-[3px] px-[10px]">
              Status
            </span>
          </div>
          {/* h3 */}
          <span className="font-secondary text-[16px] my-[5px] truncate">
            {tag}
          </span>
          <div className="w-full h-[2px] bg-[#E0E0E0] my-[5px]"></div>
          {/* description */}
          <span className="font-secondary text-[16px] my-[5px] text-[#757575] break-words line-clamp-2">
            {description}
          </span>
        </div>

        {/* button */}
        <div className="flex flex-row mt-[10px]">
          {/* Enroll now */}
          {user?.type === "student" ? (
            <button
              onClick={openModal}
              disabled={enrolled}
              className={`mr-[20px] rounded-full py-[5px] px-[20px] ${enrolled ? "bg-white border-2 border-[#639B6D]" : "bg-[#639B6D]"}`}
            >
              <span className={`font-secondary font-bold text-[14px] text-center ${enrolled ? "text-[#639B6D]" : "text-white"}`}>
                {enrolled ? "Enrolled" : "Enroll now"}
              </span>
            </button>
          ) : (
            <></>
          )}

          <button
            className="mr-[20px] bg-white border-[#639B6D] border-2 rounded-full py-[5px] px-[20px] flex items-center justify-center"
            onClick={goToMoreDetails}
          >
            <span className="font-secondary font-bold text-[14px] text-[#639B6D]">
              More Details
            </span>
          </button>
        </div>
      </div>

      <ConfirmModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={enrollCourse}
        message={`Are you sure you want to enroll in ${courseName}?`}
      />
    </div>
  );
}
