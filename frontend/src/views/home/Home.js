import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import pic1 from "../home/assets/pic1.png";
import pic2 from "../home/assets/pic2.png";
import pic3 from "../home/assets/pic3.png";
import pic4 from "../home/assets/pic4.png";

export default function Home() {
  return (
    <div>
      <Header />
  
      {/* Card */}
      <div className=" w-full flex flex-row bg-[#F6F5F4] justify-between mt-[60px] pl-[100px] pt-[100px] pb-[100px]">
        <div className="flex flex-col">
          <span className="text-xl font-secondary text-[#2B788B] font-[700]">
            E-COURSE PLATFORM
          </span>
          <span className="text-[56px] font-primary text-black mt-[20px]">
            Learning and teaching online, made easy.
          </span>
          <span className="text-[18px] font-secondary text-[#757575] mt-[30px] font-bold">
            Practice your Englist and learn new things <br /> with the platform.
          </span>
        </div>

        <img src={pic1} alt="pic1" className="w-[55%] items-center"></img>
      </div>

      <div className=" w-full flex flex-row bg-white justify-between pl-[100px] pt-[100px] pb-[100px]">
        <img src={pic2} alt="pic2" className="w-[55%] items-center"></img>
        <div className="flex flex-col">
          <span className="text-[56px] font-primary text-black">
            Learn a language in a playful way
          </span>
          <span className="text-[18px] font-secondary text-[#757575] mt-[30px] font-bold">
            Make learning words more fun with mini-games
          </span>
        </div>
      </div>

      <div className=" w-full flex flex-row bg-[#F6F5F4] justify-between pl-[100px] pt-[100px]">
        <div className="flex flex-col">
          <span className="text-[56px] font-primary text-black">
            Increase your vocabulary
          </span>
          <span className="text-[18px] font-secondary text-[#757575] mt-[30px] font-bold">
            Traditional and new effective approaches to word study
          </span>
        </div>
        <img src={pic3} alt="pic3" className="w-[55%] items-center"></img>
      </div>

      <div className=" w-full flex flex-row bg-white justify-between pl-[100px] pt-[100px] pb-[100px]">
        <img src={pic4} alt="pic4" className="w-[55%] items-center"></img>
        <div className="flex flex-col">
          <span className="text-[56px] font-primary text-black">
            Watch your progress every day
          </span>
          <span className="text-[18px] font-secondary text-[#757575] mt-[30px] font-bold">
            Save statistics on your achievements, words learned, and mistakes
          </span>
        </div>
      </div>

      <Footer />
      
    </div>
  );
}
