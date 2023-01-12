import { useNavigate } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        <div className="w-[40%] bg-white my-[50px] flex flex-col p-[50px] rounded-md items-center">
          <span className="font-primary text-[32px] mb-[30px]">Login</span>

          {/* Login with google button */}
          {/* <button
            onClick={""}
            className="w-[70%] bg-blue-600 rounded-lg py-[5px]"
          >
            <span className="text-center text-white font-secondary text-[16px] font-extrabold">
              Login with Google
            </span>
          </button>

          <div className="w-[70%] h-[3px] bg-[#E0E0E0] my-[20px]"></div> */}

          <div className="w-[70%] items-start flex flex-col">
            <span className="font-secondary text-[16px]">Username :</span>
            {/* Username textbox */}
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />
            <span className="font-secondary text-[16px]">Password :</span>
            {/* Password textbox */}
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[30px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />
          </div>

          {/* Login button */}
          <button
            onClick={handleSubmit}
            className="w-[70%] bg-[#2B788B] rounded-lg py-[5px]"
          >
            <span className="text-white text-[16px] font-extrabold text-center font-secondary">
              Login
            </span>
          </button>
          <div className="flex flex-row mt-[20px] items-baseline">
            <span className="font-secondary">Don't have an account ?</span>
            {/* Sign in text */}
            <button onClick={goToRegister}>
              <span className="text-[#2B788B] text-[16px] underline ml-[15px] font-extrabold text-center font-secondary">
                Register
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
