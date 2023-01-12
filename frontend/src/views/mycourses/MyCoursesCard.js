import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function MyCoursesCard({
  courseName,
  instructorName,
  profile,
  annoucement,
  courseID,
}) {
  const navigate = useNavigate();
  const {
    data: { user },
  } = useContext(UserContext);
  function navigateToCourseStudentMenu() {
    navigate("/mycourses/student/" + courseID);
  }
  function navigateToCourseInstructorMenu() {
    navigate("/mycourses/instructor/" + courseID);
  }
  return (
    <button
      onClick={
        user.type === "student"
          ? navigateToCourseStudentMenu
          : navigateToCourseInstructorMenu
      }
    >
      <li className="w-[400px] border-[1px] border-black my-[40px] rounded-md">
        <div className="bg-white flex flex-col">
          <div className="pl-[20px] pb-[10px] w-full bg-[#2B788B] flex flex-row">
            <div className="mt-[40px] flex flex-col w-[70%]">
              <span className="font-primary truncate text-white text-[20px]">
                {courseName}
              </span>
              <span className="font-secondary truncate text-white">
                {instructorName}
              </span>
            </div>
            <div className="mt-[10px] ml-[10px] h-[80px] w-[80px] rounded-full overflow-hidden">
              <img src={profile} alt="profile"></img>
            </div>
          </div>
          <div className="m-[20px] break-words line-clamp-4 h-[100px]">
            <span>{annoucement}</span>
          </div>
        </div>
      </li>
    </button>
  );
}
