import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../../components/button/ReturnButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Star from "./Star";

export default function Rating() {
  const [rateScore, setRateScore] = useState(3);
  const navigate = useNavigate();
  function rate1() {
    setRateScore(1);
  }
  function rate2() {
    setRateScore(2);
  }
  function rate3() {
    setRateScore(3);
  }
  function rate4() {
    setRateScore(4);
  }
  function rate5() {
    setRateScore(5);
  }
  function submitting() {
    // do sth with rateScore
    navigate(-1);
  }
  return (
    <div>
      <Header />
      <div className="w-full bg-[#F6F5F4] mt-[60px] flex flex-col min-h-[83vh] py-[30px] px-[20%] ">
        <ReturnButton />
        <div className="flex flex-col items-center justify-center bg-white py-[20px] px-[5%] rounded-lg">
          <span className="font-primary text-[32px]">Rate This Course</span>
          <div className="flex flex-row">
            {/* 1 */}
            <button onClick={rate1}>
              {rateScore >= 1 ? (
                <Star color={"#ffde24"} />
              ) : (
                <Star color={"#cccccc"} />
              )}
            </button>
            {/* 2 */}
            <button onClick={rate2}>
              {rateScore >= 2 ? (
                <Star color={"#ffde24"} />
              ) : (
                <Star color={"#cccccc"} />
              )}
            </button>
            {/* 3 */}
            <button onClick={rate3}>
              {rateScore >= 3 ? (
                <Star color={"#ffde24"} />
              ) : (
                <Star color={"#cccccc"} />
              )}
            </button>
            {/* 4 */}
            <button onClick={rate4}>
              {rateScore >= 4 ? (
                <Star color={"#ffde24"} />
              ) : (
                <Star color={"#cccccc"} />
              )}
            </button>
            {/* 5 */}
            <button onClick={rate5}>
              {rateScore >= 5 ? (
                <Star color={"#ffde24"} />
              ) : (
                <Star color={"#cccccc"} />
              )}
            </button>
          </div>
          <button
            className="w-full bg-[#2B788B] my-[10px] py-[10px] rounded-full"
            onClick={submitting}
          >
            <span className="text-white font-primary">Submit</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
