import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MyCourseCard from "./MyCoursesCard";

export default function MyCourses() {
    return <div>
        <Header />
        <div className="mt-[60px] flex flex-col bg-[#F6F5F4] w-full">
            <ol>
                <MyCourseCard />
            </ol>
        </div>
        <Footer />
    </div>
}