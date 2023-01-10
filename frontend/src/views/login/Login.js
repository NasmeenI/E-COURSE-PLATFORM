import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        <div className="w-[40%] bg-white my-[50px] flex flex-col p-[50px] rounded-md items-center">
          <span className="font-primary text-[32px] mb-[30px]">Login</span>
          <span className="w-[70%] bg-blue-600 text-center text-white rounded-lg py-[5px] font-secondary text-[16px] font-extrabold">
            Login with Google
          </span>
          <div className="w-[70%] h-[3px] bg-[#E0E0E0] my-[20px]"></div>
          <div className="w-[70%] items-start flex flex-col">
            <span className="font-secondary">Username :</span>
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px]"
            />
            <span className="font-secondary">Password :</span>
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[30px] mt-[10px]"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-[70%] bg-[#2B788B] rounded-lg py-[5px]"
          >
            <span className="text-white text-[16px] font-extrabold text-center font-secondary">
              Login
            </span>
          </button>
          <div className="flex flex-row mt-[20px]">
            <span className="font-secondary">Don't have an account ?</span>
            <button
              onClick={handleSubmit}
            >
              <span className="text-[#2B788B] text-[16px] underline ml-[15px] font-extrabold text-center font-secondary">
                Sign In
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
