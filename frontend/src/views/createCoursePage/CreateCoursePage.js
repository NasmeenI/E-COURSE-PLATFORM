import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/returnButton/ReturnButton";
import pic5 from "../courses/assets/pic5.png";

export default function CreateCoursePage() {
  // temp const
  const hasUploadImage = true;
  const courseImage = pic5;
  const navigate = useNavigate();
  function Submitting() {
    // Submit a Course
    navigate(-1);
  }
  return (
    <div>
      <Header />
      <div className="mt-[60px] bg-[#F6F5F4] w-full flex flex-col py-[30px] px-[20%]">
        <ReturnButton />
        <span className="font-primary text-[32px] mb-[20px]">
          Create Your Own Course
        </span>
        <div className="bg-white px-[5%] py-[30px]  flex flex-col rounded-lg">
          {/* Course Name */}
          <span className="text-[20px] font-secondary font-extrabold mb-[20px]">
            Your Course Name :
          </span>
          <input className="w-[90%] bg-[#cccccc] ml-[10%] h-[30px] px-[10px]"></input>
          {/* Course Tag */}
          <span className="text-[20px] font-secondary font-extrabold my-[20px]">
            Course Tag :
          </span>
          <input className="w-[90%] bg-[#cccccc] ml-[10%] h-[30px] px-[10px]"></input>
          {/* Description */}
          <span className="text-[20px] font-secondary font-extrabold my-[20px]">
            Description :
          </span>
          <textarea
            className="w-[90%] bg-[#cccccc] ml-[10%] px-[10px] resize-none pt-[5px]"
            rows={3}
          ></textarea>
          {/* Image */}
          <span className="text-[20px] font-secondary font-extrabold mt-[20px]">
            Image :
          </span>
          {hasUploadImage ? (
            <img src={courseImage} className="w-[60%] h-auto ml-[10%]"></img>
          ) : (
            <button className="w-[60%] ml-[10%] h-[40px] px-[10px] border-dashed border-[#cccccc] border-2 flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 490 490"
                className="w-[25px] h-[25px]"
              >
                <path
                  d="M227.8 174.1v53.7h-53.7c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2h53.7v53.7c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2v-53.7h53.7c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2s-17.2 7.7-17.2 17.2z"
                  fill="#cccccc"
                />
                <path
                  d="M71.7 71.7C25.5 118 0 179.5 0 245s25.5 127 71.8 173.3C118 464.5 179.6 490 245 490s127-25.5 173.3-71.8C464.5 372 490 310.4 490 245s-25.5-127-71.8-173.3C372 25.5 310.5 0 245 0 179.6 0 118 25.5 71.7 71.7zm384 173.3c0 56.3-21.9 109.2-61.7 149s-92.7 61.7-149 61.7S135.8 433.8 96 394s-61.7-92.7-61.7-149S56.2 135.8 96 96s92.7-61.7 149-61.7S354.2 56.2 394 96s61.7 92.7 61.7 149z"
                  fill="#cccccc"
                />
              </svg>
              <span className="font-secondary text-[#cccccc]">
                Upload Your Course Image
              </span>
            </button>
          )}

          {/* Submit button */}
          <button
            className="bg-[#2B788B] w-full py-[10px] px-[20px] rounded-full mt-[30px]"
            onClick={Submitting}
          >
            <span className="font-primary text-white">Submit</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
