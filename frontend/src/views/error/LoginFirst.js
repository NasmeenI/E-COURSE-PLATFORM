import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/returnButton/ReturnButton"

export default function LoginFirst() {
    return <div>
        <Header />
        <div className="bg-[#F6F5F4] w-full mt-[60px] px-[20%] justify-center py-[100px]">
            <div className="flex flex-col bg-white items-center py-[40px]">
                <span className="font-secondary text-[30px] mb-[20px] text-center">You need to Login or Register First</span>
                <ReturnButton />
            </div>
            
        </div>
        <Footer />
    </div>
}