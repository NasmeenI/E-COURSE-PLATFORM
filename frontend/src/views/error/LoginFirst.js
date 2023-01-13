import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/button/ReturnButton"

export default function LoginFirst() {
    return <div>
        <Header />
        <div className="bg-[#F6F5F4] w-full h-[93vh] px-[20%] justify-center py-[100px] flex flex-col">
            <div className="flex flex-col bg-white items-center py-[40px]">
                <span className="font-secondary text-[30px] mb-[20px] text-center">You need to Login or Register First</span>
                <ReturnButton />
            </div>
            
        </div>
        <Footer />
    </div>
}