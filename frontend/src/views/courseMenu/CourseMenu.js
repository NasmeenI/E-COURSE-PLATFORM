import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/returnButton/ReturnButton";
import Anouncement from "./Anouncement";
import AssignmentCard from "./AssignmentCard";
import LectureCard from "./LectureCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseStudentMenu() {
  const {
    data: { user },
  } = useContext(UserContext);
  const navigate = useNavigate();
  const param = useParams();
  function toViewStudent(){
    navigate("/mycourses/" + param.courseID + "/viewstudent")
  }
  return (
    <div>
      <Header />
      <div className="px-[20%] py-[30px] mt-[60px] w-full items-center bg-[#F6F5F4]">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <ReturnButton />
            {user.type === "instructor" ? (
              <button onClick={toViewStudent} className="mb-[20px]">
                <span className="px-[15px] py-[7px] w-[150px] truncate border-[#2B788B] border-2 rounded-full font-secondary font-extrabold text-[#2B788B]">
                  View Students
                </span>
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className=" bg-[#2B788B] pt-[30px] pb-[10px] rounded-t-lg w-full flex flex-col px-[5%]">
            <span className="font-primary items-center w-full break-words text-white text-[18px]">
              Course NameCourse NameCourse NameCourse NameCourse NameCourse
              NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse
              NameCourse Name
            </span>
            <span className="font-secondary font-extrabold text-[20px] text-white mt-[10px]">
              Instructor
            </span>
          </div>
          <div className="flex flex-col mb-[30px] w-full">
            <Anouncement text="Text that want to announce but long longlonglongl onglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong" />
            <LectureCard
              title="Lecture 1 : We need some milk"
              lectureID="1234"
            />
            <AssignmentCard
              title="Assignment 1 : We don't need some milk, we need some sleepppppppppppppppppp"
              assignmentID="12"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
