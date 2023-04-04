import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import ReturnButton from "../../components/button/ReturnButton";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import StudentUpload from "./StudentUpload";
import InstructorScore from "./InstructorScore";
import File from "../lecturePage/File";
import { auth } from "../../api/firebase";
import NasmeenAPI from "../../api/NasmeenAPI";
import { TailSpin } from "react-loader-spinner";
import FileAPI from "../../api/FileAPI";

export default function AssignmentPage() {
  const param = useParams();
  const {
    data: { user },
  } = useContext(UserContext);

  const [data, setData] = useState(null);

  const setFile = (file) => {
    setData({...data, file});
  }
  
  useEffect(() => {
    if (data !== null) {
      return;
    }

    async function getData() {
      const token = await auth.currentUser.getIdToken();
      let result;
      if (user.type === "student") {
        result = await NasmeenAPI.readAssignmentStudent(
          token,
          param.assignmentID
        );

        result = result.assignment;
        if (result.file) {
          result.file = await FileAPI.getURL(result.file);
        }
        if (result.Instructorfile) {
          result.includedFile = await FileAPI.getURL(result.Instructorfile);
        }
      } else {
        result = await NasmeenAPI.readAssignmentInstructor(
          token,
          param.assignmentID
        );
        result = result.assignment;
      }
      setData(result);
    }

    getData();
  }, []);
  
  return (
    <div>
      <Header />
      <div className="mt-[60px] bg-[#F6F5F4] py-[30px] px-[20%] flex flex-col min-h-[83vh]">
        <ReturnButton />
        {data === null ? (
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
          <div className="py-[30px] px-[5%] bg-white flex flex-col w-full rounded-t-lg">
            <div className="flex flex-row w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 1000 1000"
                className="w-[30px] h-[30px] mr-[10px]"
              >
                <path d="M39.23 26.43C25.87 32.56 20.02 38.68 14.17 52.6c-3.62 8.91-4.18 60.14-4.18 447.4 0 387.27.56 438.49 4.18 447.4 5.85 13.92 11.69 20.05 25.06 26.17 10.58 5.01 24.78 5.29 269.22 5.29 191.27 0 260.03-.83 265.88-3.34 4.18-1.67 39.54-34.52 78.23-72.95l70.16-69.88V590.75l-12.81 17.26c-6.96 9.47-16.98 19.77-22.27 22.83l-9.47 6.13v176.24l-60.68 60.69-60.42 60.42-250.57-.56-250.57-.84V67.07h620.86l.83 147.56.56 147.28 22.27-30.35 22.27-30.35V182.05c0-101.06-.56-120.83-4.18-129.46-5.85-13.92-11.69-20.04-25.06-26.17-10.58-5.01-26.45-5.29-327.13-5.29-300.67.01-316.54.29-327.12 5.3z" />
                <path d="M889.22 113.57c-2.23 1.95-72.94 97.17-156.74 211.87l-152.3 207.97-9.19 60.69c-5.01 33.13-8.91 60.69-8.35 61.25.28.56 27.01-9.46 59.3-22.27l58.47-23.11 154.8-211.31C920.4 282.56 990 184.84 990 182.06c0-33.13-78.51-86.31-100.78-68.49zm37.02 52.9c6.41 5.01 12.25 10.3 12.81 11.97.56 1.39-63.48 90.48-141.99 197.67-130.29 177.9-143.66 195.44-155.07 201.01-6.96 3.34-15.31 6.68-18.93 7.79-6.4 1.95-6.4 1.67-4.46-11.7 1.11-7.24 3.06-16.15 4.18-19.77 3.06-7.79 286.76-395.9 289.55-395.9 1.11.02 7.51 4.19 13.91 8.93zM121.36 288.41v22.27h467.72v-44.54H121.36v22.27zM121.36 422.05v22.27h467.72v-44.54H121.36v22.27zM121.36 555.68v22.27H500v-44.54H121.36v22.27zM121.36 689.32v22.27H500v-44.54H121.36v22.27z" />
              </svg>
              <span className="font-secondary text-[20px] font-extrabold break-words w-[calc(100%-50px)]">
                {data.title}
              </span>
            </div>

            <div className="w-full h-[3px] bg-[#2B788B] mt-[10px]"></div>

            <span className="font-secondary mt-[20px] break-words">
              {data.text}
            </span>
            {data.Instructorfile ? (
              <File fileName="Included File" filePath={data.includedFile} />
            ) : (
              <></>
            )}
          </div>
        )}

        {data === null ? (
          <></>
        ) : user.type === "student" ? (
          <StudentUpload
            score={data.score}
            maxscore={parseInt(data.scoreMax)}
            file={data.file}
            setFile={setFile}
            assignmentID={param.assignmentID}
          />
        ) : (
          <InstructorScore />
        )}
      </div>
      <Footer />
    </div>
  );
}
