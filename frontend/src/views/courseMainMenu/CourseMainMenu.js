import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Assignment from "./Assignment";
import Post from "./Lecture";

export default function CourseMainMenu() {
    return <div>
        <Header />
        <div className="px-[20%] py-[30px] mt-[60px] w-full items-center bg-[#F6F5F4]">
            <div className="flex flex-col">
                <div className=" bg-[#2B788B] pt-[30px] pb-[10px] rounded-t-lg w-full flex flex-col px-[10%]">
                    <span className="font-primary items-center w-full break-words text-white text-[18px]">Course NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse NameCourse Name</span>
                    <span className="font-secondary font-extrabold text-[20px] text-white mt-[10px]">Instructor</span>
                </div>
                <div className="flex flex-col mb-[30px] w-full">
                    <Post />
                    <Assignment />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}