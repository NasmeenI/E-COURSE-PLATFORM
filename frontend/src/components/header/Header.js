import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function navigateToCourses() {
    navigate("/courses");
  }

  function navigateToHome() {
    navigate("/");
  }
  return (
    <header className="fixed top-0 flex flex-row justify-evenly items-center w-full h-[60px] border-b-[1px] border-[#E0E0E0] bg-white">
      <div className="flex flex-row items-center h-full ">
        <span className="text-xl font-primary" onClick={navigateToHome}>E-Learning</span>
        <div className="w-[3px] h-[30%] bg-[#E0E0E0] ml-[30px]"></div>
        <span className="text-xl font-secondary ml-[30px]" onClick={navigateToCourses}>Feature 1</span>
        <span className="text-xl font-secondary ml-[30px]">Feature 2</span>
        <span className="text-xl font-secondary ml-[30px]">Features</span>
      </div>
      <div className="flex flex-row items-center h-full">
        <span className="text-xl font-secondary">Passa</span>
        <span className="text-xl font-secondary ml-[30px] font-extrabold ">Sign Out</span>
      </div>
      
    </header>
  );
}
