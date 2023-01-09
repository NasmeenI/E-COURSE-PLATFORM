import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Course from "./Course";

export default function Courses() {
  return (
    <div>
      <Header />
      {/* body */}
      <div className="bg-[#F6F5F4] mt-[60px] w-full flex flex-col justify-evenly items-center">
        {/* Courses box */}
        <div className="bg-white m-[30px] w-[60%] py-[15px] rounded-lg">
          <span className="text-right font-primary text-[26px] ml-[15px]">Courses</span>
        </div>

        {/* Tag */}
        <div className="flex flex-row justify-evenly items-center">
          <span className="m-[10px] text-[20px] font-primary">Calculus</span>
          <span className="m-[10px] text-[20px] font-primary">Physics</span>
          <span className="m-[10px] text-[20px] font-primary">Chemistry</span>
          <span className="m-[10px] text-[20px] font-primary">Biology</span>
        </div>

        {/* Course */}
        <div className="flex flex-col justify-evenly items-center">
          <Course />
        </div>
      </div>
      <Footer />
    </div>
  );
}
