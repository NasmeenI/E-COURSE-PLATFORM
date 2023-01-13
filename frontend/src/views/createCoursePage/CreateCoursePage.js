import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/returnButton/ReturnButton";

export default function CreateCoursePage(){
    return <div>
        <Header />
        <div className="mt-[60px] bg-[#F6F5F4] w-full flex flex-col py-[30px] px-[20%]">
            <ReturnButton />

        </div>
        <Footer />
    </div>
}