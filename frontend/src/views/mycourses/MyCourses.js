import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MyCourseCard from "./MyCoursesCard";
import profile from "../mycourses/assets/profile_sample.jpg";
export default function MyCourses() {
  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col bg-[#F6F5F4] w-full">
        <div className="flex flex-col items-start mb-[40px] mt-[40px] mx-[40px] bg-white">
          <span className="font-primary mt-[50px] ml-[50px] text-[32px]">
            My Courses
          </span>
          <ol className=" flex flex-wrap justify-evenly">
            <MyCourseCard 
            courseName="Course Nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
            instructorName="Instructorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
            profile={profile}
            annoucement="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
            <MyCourseCard />
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
