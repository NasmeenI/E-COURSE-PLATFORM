import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Error from "../error/Error";
import ReturnButton from "../../components/button/ReturnButton"
import StudentInfo from "./StudentInfo";

export default function ViewStudent() {
  const studentCount = 20;
  const {
    data: { user },
  } = useContext(UserContext);
  return user.type === "instructor" ? (
    <div>
      <Header />
      <div className="mt-[60px] bg-[#F6F5F4] w-full flex flex-col py-[30px] px-[20%] min-h-[85vh]">
        <ReturnButton />
        {/* Total student */}
        <div className="flex flex-row">
          <span className="font-primary text-[32px] mr-[10px]">Total Student :</span>
          <span className="font-primary text-[32px]">{studentCount}</span>
        </div>

        {/* Student List */}
        <ol className="bg-white w-full mt-[20px] pt-[10px] rounded-lg">
          <StudentInfo />
          <StudentInfo />
          <StudentInfo islast={true}/>
        </ol>
      </div>
      <Footer />
    </div>
  ) : (
    <Error />
  );
}
