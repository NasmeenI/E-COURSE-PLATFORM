import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/button/ReturnButton";
import Anouncement from "./Anouncement";
import AssignmentCard from "./AssignmentCard";
import LectureCard from "./LectureCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CreateButton from "../../components/button/CreateButton";
import NasmeenAPI from "../../api/NasmeenAPI";
import { TailSpin } from "react-loader-spinner";
import { auth } from "../../api/firebase";

export default function CourseStudentMenu() {
  const [isRated, setIsRated] = useState(null);
  const [courseData, setCourseData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const param = useParams();

  useEffect(() => {
    if (courseData === null) {
      async function getCourseData() {
        const token = await auth.currentUser.getIdToken();
        let result = await NasmeenAPI.readDetailMycourses(
          token,
          param.courseID
        );
        result = result.Courses;
        setCourseData(result);
        setIsRated(result.scoreCourseByStudent !== null);
      }
  
      getCourseData();
    }
  }, []);

  const {
    data: { user },
  } = useContext(UserContext);

  function toViewStudent() {
    navigate("/mycourses/" + param.courseID + "/viewstudent");
  }
  function toRating() {
    navigate("/mycourses/" + param.courseID + "/rating");
  }

  return (
    <div>
      <Header />
      <div className="px-[20%] py-[30px] mt-[60px] w-full items-center bg-[#F6F5F4] min-h-[83vh]">
        {courseData === null ? (
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
                <button
                  onClick={toRating}
                  className={`mb-[20px] flex flex-row px-[15px] py-[7px] w-[150px] border-[#2B788B] border-2 rounded-full items-center justify-center ${
                    isRated ? "bg-[#2B788B]" : "bg-white"
                  }`}
                >
                  {isRated ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 260 245"
                      className="w-[20px] h-[20px] mr-[5px]"
                    >
                      <path
                        d="m56,237 74-228 74,228L10,96h240"
                        fill="#ffffff"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      viewBox="0 0 217.929 217.929"
                      className="w-[20px] h-[20px] mr-[5px]"
                    >
                      <path
                        d="M212.39 101.703c5.023-4.897 6.797-12.083 4.629-18.755s-7.827-11.443-14.769-12.452l-52.969-7.697a.296.296 0 0 1-.223-.162L125.371 14.64c-3.104-6.291-9.391-10.2-16.407-10.2s-13.302 3.909-16.406 10.2L68.87 62.637a.298.298 0 0 1-.223.162l-52.968 7.697C8.737 71.505 3.078 76.276.91 82.948s-.394 13.858 4.629 18.755l38.328 37.361c.07.068.102.166.085.262l-9.048 52.755c-1.186 6.914 1.604 13.771 7.279 17.894 5.676 4.125 13.059 4.657 19.268 1.393l47.376-24.907a.296.296 0 0 1 .276 0l47.376 24.907a18.304 18.304 0 0 0 8.531 2.121c3.777 0 7.53-1.184 10.736-3.514 5.675-4.123 8.464-10.98 7.279-17.895l-9.048-52.754a.297.297 0 0 1 .085-.262l38.328-37.361zm-56.155 40.665 9.048 52.754c.024.14.031.182-.118.29-.149.108-.187.088-.312.022l-47.377-24.908a18.301 18.301 0 0 0-17.027 0l-47.376 24.907c-.125.065-.163.086-.312-.022-.149-.108-.142-.15-.118-.289l9.048-52.755a18.294 18.294 0 0 0-5.262-16.194l-38.326-37.36c-.101-.099-.132-.128-.075-.303.057-.175.099-.181.239-.202l52.968-7.697a18.29 18.29 0 0 0 13.776-10.008l23.688-47.998c.063-.126.081-.165.265-.165s.203.039.265.165l23.688 47.998a18.29 18.29 0 0 0 13.776 10.008l52.968 7.697c.14.021.182.027.239.202.057.175.026.205-.075.303l-38.328 37.361a18.298 18.298 0 0 0-5.262 16.194z"
                        fill="#2B788B"
                      />
                    </svg>
                  )}
                  <span
                    className={`truncate  font-secondary font-extrabold ${
                      isRated ? "text-white" : "text-[#2B788B]"
                    }`}
                  >
                    {isRated ? "Rated" : "Rating"}
                  </span>
                </button>
              )}
            </div>

            <div className=" bg-[#2B788B] pt-[30px] pb-[10px] rounded-t-lg w-full flex flex-col px-[5%]">
              <span className="font-primary items-center w-full break-words text-white text-[18px]">
                {courseData.title}
              </span>
              <span className="font-secondary font-extrabold text-[20px] text-white mt-[10px]">
                {courseData.instructorName}
              </span>
            </div>
            <div className="flex flex-col mb-[30px] w-full">
              {/* Create Material Button */}
              {user.type === "instructor" ? (
                <CreateButton
                  text="Create Course Material"
                  path={"/mycourses/" + param.courseID + "/creatematerial"}
                />
              ) : (
                <div />
              )}

              <Anouncement text={courseData.announcments.join("\n\n")} />

              {courseData.lectures.map((lecture, i) => (
                <LectureCard
                  title={lecture.title}
                  lectureID={lecture.lectureID}
                  key={lecture.lectureID}
                />
              ))}

              {courseData.assignments.map((assignment, i) => (
                <AssignmentCard
                  title={assignment.title}
                  assignmentID={assignment.assignmentID}
                  score={assignment.score}
                  maxscore={assignment.scoreMax}
                  key={assignment.assignmentID}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
