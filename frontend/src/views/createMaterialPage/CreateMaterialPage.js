import { useState } from "react";
import ReturnButton from "../../components/button/ReturnButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CreateAnnouncement from "./CreateAnnouncement";
import CreateLecture from "./CreateLecture";
import CreateAssignment from "./CreateAssignment";
import { useNavigate } from "react-router-dom";

export default function CreateMaterialPage() {
  const navigate = useNavigate();
  const [select, setSelect] = useState("announcement");
  const [announcementText, setAnnouncementText] = useState("");
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureText, setLectureText] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentText, setAssignmentText] = useState("");
  const [submit, setSubmit] = useState("");

  function changeToAnnouncement() {
    setSelect("announcement");
  }
  function changeToLecture() {
    setSelect("lecture");
  }
  function changeToAssignment() {
    setSelect("assignment");
  }

  const handleAnnouncementText = (event) => {
    setAnnouncementText(event.target.value);
  };
  const handleLectureTitle = (event) => {
    setLectureTitle(event.target.value);
  };
  const handleLectureText = (event) => {
    setLectureText(event.target.value);
  };
  const handleAssignmenTitle = (event) => {
    setAssignmentTitle(event.target.value);
  };
  const handleAssignmenText = (event) => {
    setAssignmentText(event.target.value);
  };

  function Submitting() {
    if (select === "announcement") {
      setSubmit(announcementText);
    } else if (select === "lecture") {
      setSubmit({ lectureTitle, lectureText });
    } else if (select === "assignment") {
      setSubmit({ assignmentTitle, assignmentText });
    }
    console.log(submit);
    console.log(select);
    //navigate(-1);
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-[#F6F5F4] w-full mt-[60px] py-[30px] px-[20%] min-h-[83vh]">
        <ReturnButton />
        <span className="font-primary text-[32px]">
          Create Your Course Material
        </span>
        <div className="flex flex-row mt-[20px] justify-between">
          {/* Announcement button */}
          <button
            className={`px-[5%] w-[30%] py-[10px] flex items-center justify-center rounded-t-lg 
            ${
              select === "announcement"
                ? "bg-[#2B788B] text-white"
                : "bg-[#cccccc]"
            } `}
            onClick={changeToAnnouncement}
          >
            <span className="truncate text-center font-secondary text-[20px] font-extrabold">
              Announcement
            </span>
          </button>

          {/* Lecture button */}
          <button
            className={`px-[5%] w-[30%] py-[10px] flex items-center justify-center rounded-t-lg 
            ${
              select === "lecture" ? "bg-[#2B788B] text-white" : "bg-[#cccccc]"
            } `}
            onClick={changeToLecture}
          >
            <span className="truncate text-center font-secondary text-[20px] font-extrabold">
              Lecture
            </span>
          </button>

          {/* Assignment button */}
          <button
            className={`px-[5%] w-[30%] py-[10px] flex items-center justify-center rounded-t-lg 
            ${
              select === "assignment"
                ? "bg-[#2B788B] text-white"
                : "bg-[#cccccc]"
            } `}
            onClick={changeToAssignment}
          >
            <span className="truncate text-center font-secondary text-[20px] font-extrabold">
              Assignment
            </span>
          </button>
        </div>

        {/* In white box */}
        <div className="flex flex-col bg-white py-[20px] px-[5%]  rounded-lg">
          {select === "announcement" ? (
            <CreateAnnouncement
              onChange={handleAnnouncementText}
              announcementText={announcementText}
            />
          ) : select === "lecture" ? (
            <CreateLecture
              onTitleChange={handleLectureTitle}
              onTextChange={handleLectureText}
              lectureText={lectureText}
              lectureTitle={lectureTitle}
            />
          ) : (
            <CreateAssignment
              onTitleChange={handleAssignmenTitle}
              onTextChange={handleAssignmenText}
              assignmentText={assignmentText}
              assignmentTitle={assignmentTitle}
            />
          )}
        </div>

        {/* Submit */}
        <button
          className="flex justify-center items-center w-full bg-[#2B788B] rounded-full mt-[30px] py-[10px]"
          onClick={Submitting}
        >
          <span className="font-primary text-white">Submit</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}
