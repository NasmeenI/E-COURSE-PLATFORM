import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function CourseMainMenu() {
    return <div>
        <Header />
        <div className="px-[20%] pt-[30px] mt-[60px] w-full items-center bg-[#F6F5F4]">
            <div className="flex flex-col bg-white pb-10">
                <div className=" bg-[#2B788B]">
                    <span>Course Name</span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}