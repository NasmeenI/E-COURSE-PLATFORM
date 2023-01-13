import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ReturnButton from "../../components/button/ReturnButton";
import pic5 from "../courses/assets/pic5.png";
import CreateButton from "../../components/button/CreateButton";

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
            <CreateButton path="" text="Upload Your Image"/>
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
