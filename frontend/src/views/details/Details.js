import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import pic5 from "../courses/assets/pic5.png"

export default function Details() {
    const longName = "Name".repeat(20);
    return <div>
        <Header />
        <div className="mt-[60px] flex flex-col justify-between items-center bg-[#F6F5F4] w-full">
            <div className="w-[70%] bg-white my-[100px] flex flex-col p-[50px] rounded-md">
                <div className="flex flex-row">
                    <img src={pic5} alt="pic5.1" className="w-[30%]"></img>
                    <div className="flex flex-col">
                        <span className="break-words mx-[30px] font-primary text-[26px]">Course name which has a very very long long long very very long long long very very long long long very very long long long very very long long long very very long long long name</span>
                    </div>
                </div>
                
            </div>
        </div>


        <Footer />
    </div>
}