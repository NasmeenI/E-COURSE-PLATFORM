import ReturnButton from "../../components/button/ReturnButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function Profile() {
    return <div>
        <Header />
        <div className="w-full bg-[#F6F5F4] flex flex-col px-[20%] py-[30px] mt-[60px]">
            <ReturnButton />
            
        </div>
        <Footer />
    </div>
}