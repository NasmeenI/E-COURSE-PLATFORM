import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  function navigateToCourses() {
    navigate("/courses");
  }

  function navigateToHome() {
    navigate("/");
  }
  return (
    <header className="fixed top-0 flex flex-row justify-evenly items-center w-full h-[60px] border-b-[1px] border-[#E0E0E0] bg-white">
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
            className={`text-xl font-secondary ml-[30px] ${
              location.pathname.startsWith("/courses") ? "font-bold" : ""
            }`}
          >
            Courses
          </span>
        </button>

        <span className="text-xl font-secondary ml-[30px]">Feature 2</span>
        <span className="text-xl font-secondary ml-[30px]">Features</span>
      </div>
      <div className="flex flex-row items-center h-full">
        <span className="text-xl font-secondary">Passa</span>
        <span className="text-xl font-secondary ml-[30px] font-extrabold ">
          Sign Out
        </span>
      </div>
    </header>
  );
}
