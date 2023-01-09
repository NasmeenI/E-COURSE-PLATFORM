import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Course from "./Course";
import PageButton from "./PageButton";
import Dropdown from "react-dropdown";

export default function Courses() {
  const tagOption = ["one", "two", "three"];
  const tagDefaultOption = "Select Tag";
  return (
    <div>
      <Header />
      {/* body */}
      <div className="bg-[#F6F5F4] mt-[60px] w-full flex flex-col justify-evenly items-center">
        {/* Courses box */}
        <div className="bg-white m-[30px] w-[70%] py-[15px] rounded-lg flex flex-col items-start">
          <span className="text-right font-primary text-[26px] mx-[30px]">
            Courses
          </span>
          <div className="mx-[30px] flex flex-row items-start">
            
          </div>
        </div>

        {/* Tag */}
        <div className="flex flex-row justify-evenly items-center">
          <span className="m-[10px] text-[20px] font-primary">Tag1</span>
          <span className="m-[10px] text-[20px] font-primary">Tag2</span>
          <span className="m-[10px] text-[20px] font-primary">Tag3</span>
          <span className="m-[10px] text-[20px] font-primary">Tag4</span>
        </div>

        {/* Course */}
        <div className="flex flex-col justify-evenly items-center">
          <Course
            courseName="Course which has a very very very long nam"
            instructorName="Google"
            tag="Science"
            description="bra bra bra *10"
          />
        </div>

        {/* Page Selector */}
        <div className="mt-[30px] mb-[60px] flex flex-row justify-evenly items-center">
          <PageButton page="<" />
          <PageButton page="1" />
          <PageButton page="2" current={true} />
          <PageButton page="3" />

          {/* page split with ... */}
          <span className="text-[#2B788B] font-secondary font-bold text-[20px] rounded-full flex items-center justify-evenly mx-[10px]">
            ...
          </span>

          <PageButton page="7" />
          <PageButton page="8" />
          <PageButton page=">" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
