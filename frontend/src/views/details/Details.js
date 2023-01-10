import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import pic5 from "../courses/assets/pic5.png"

export default function Details() {
    const longName = "Name".repeat(20);
    return <div>
        <Header />
        <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
            {/* Top info */}
            <div className="w-[70%] bg-white my-[100px] flex flex-col p-[50px] rounded-md items-center">
                <div className="flex flex-row">
                    <img src={pic5} alt="pic5.1" className="w-[30%]"></img>
                    <div className="flex flex-col justify-between">
                        <span className="break-words mx-[30px] font-primary text-[26px]">Course name which has a very very long long long very very long long long very very long long long very very long long long very very long long long very very long long long name</span>
                        <div className="flex flex-col">
                            <span className="mx-[30px] font-secondary text-[20px] font-semibold mt-[20px]">Instructor name which also long long name long long namelong long name long long name long long name</span>
                            <span className="mx-[30px] font-secondary text-[20px] mt-[20px]">Tag name</span>
                        </div>
                    </div>
                </div>
                
                <div className="h-[3px] w-full bg-[#E0E0E0] my-[30px]"></div>

                {/* Description */}
                <div className="my-[10px] w-full items-start font-secondary text-[16px] break-words">desssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</div>

                {/* Button */}
                <div className="flex flex-row w-full items-center justify-evenly mt-[20px]">
                    <span className="w-[50%] p-[5px] bg-[#639B6D] text-center text-white rounded-full text-[16px] font-secondary font-semibold">Enroll now</span>
                    <span className="w-[20%] p-[5px] bg-white border-2 border-[#639B6D] text-center text-[#639B6D] rounded-full text-[16px] font-secondary font-semibold">{"<- Return"}</span>
                </div>
                
            </div>
            

        </div>


        <Footer />
    </div>
}