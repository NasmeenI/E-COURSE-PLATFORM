import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import pic1 from "../home/assets/pic1.png";
import pic2 from "../home/assets/pic2.png";
import pic3 from "../home/assets/pic3.png";
import pic4 from "../home/assets/pic4.png";
import { useMediaQuery } from "usehooks-ts";
import HomeBox from "./HomeBox";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => console.log(isMobile), [isMobile]);

  return (
    <div>
      <Header />

      {/* Card */}
      <div
        className={`w-full flex ${
          isMobile ? "flex-col" : "flex-row pl-[100px]"
        } bg-[#F6F5F4] justify-between mt-[60px] pt-[100px] pb-[100px]`}
      >
        <div
          className={`flex flex-col ${
            isMobile ? "items-center" : "items-start"
          }`}
        >
          <span className="text-xl font-secondary text-[#2B788B] font-[700]">
            E-COURSE PLATFORM
          </span>

          <span
            className={`${
              isMobile ? "text-[40px] text-center" : "text-[56px] text-start"
            } font-primary text-black mt-[20px]`}
          >
            Learning and teaching online, made easy.
          </span>

          <span
            className={`${
              isMobile ? "text-center" : "text-start"
            } text-[18px] font-secondary text-[#757575] mt-[30px] font-bold`}
          >
            Practice your Skills and learn new things <br /> with the platform.
          </span>
        </div>

        <img
          src={pic1}
          alt="pic1"
          className={`${
            isMobile ? "w-full mt-6 ml-[10vw]" : "w-[55%]"
          } items-center`}
        ></img>
      </div>

      <HomeBox
        title="Learn a language in a playful way"
        description="Make learning words more fun with mini-games"
        image={pic2}
        className="bg-white"
      />

      <HomeBox
        title="Increase your vocabulary"
        description="Traditional and new effective approaches to word study"
        image={pic3}
        renderTextFirst
        className="bg-[#F6F5F4]"
        imageClassName="ml-[10vw]"
      />

      <HomeBox
        title="Watch your progress every day"
        description="Save statistics on your achievements, words learned, and mistakesy"
        image={pic4}
        className="bg-white"
        imageClassName="ml-[5vw]"
      />

      <Footer />
    </div>
  );
}
