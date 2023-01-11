import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function navigateToCourses() {
    navigate("/courses");
  }

  function navigateToHome() {
    navigate("/");
  }

  function navigateToMyCourses() {
    navigate("/mycourses");
  }

  return (
    <header className="fixed top-0 flex flex-row justify-evenly items-center w-full h-[60px] border-b-[1px] border-[#E0E0E0] bg-white z-50">
      <div className="flex flex-row items-center h-full">
        <button onClick={navigateToHome}>
          <span className="text-xl font-primary font-extrabold">
            E-Learning
          </span>
        </button>

        {/* divider */}
        <div className="w-[3px] h-[30%] bg-[#E0E0E0] ml-[30px]"></div>

        <button onClick={navigateToCourses}>
          <span
            className={`text-[18px] font-secondary ml-[30px] ${
              location.pathname.startsWith("/courses") ? "font-bold" : ""
            }`}
          >
            All Courses
          </span>
        </button>

        <button onClick={navigateToMyCourses}>
          <span
            className={`text-[18px] font-secondary ml-[30px] ${
              location.pathname.startsWith("/mycourses") ? "font-bold" : ""
            }`}
          >
            My Courses
          </span>
        </button>

        <span className="text-[18px] font-secondary ml-[30px]">Features</span>
      </div>
      <div className="flex flex-row items-center h-full">
        <span className="text-xl font-secondary">Passa</span>
        <span className="text-xl font-secondary ml-[30px] font-extrabold border-[#2B788B] border-2 py-[3px] px-[15px] rounded-full">
          Sign Out
        </span>
      </div>
    </header>
  );
}
