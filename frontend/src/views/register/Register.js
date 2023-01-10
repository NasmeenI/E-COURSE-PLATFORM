import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import UserAPI from "../../api/UserAPI";
import { toast } from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    data: { user },
    action: { setUser },
  } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await UserAPI.register(email, password);
    if (result.error) {
      toast("Error " + result.error);
    } else {
      console.log(result.user.uid);
    }
  }

  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        <div className="w-[40%] bg-white my-[50px] flex flex-col p-[50px] rounded-md items-center">
          <span className="font-primary text-[32px] mb-[30px]">Sign In</span>

          {/* Register with google button */}
          <button
            onClick={""}
            className="w-[70%] bg-blue-600 rounded-lg py-[5px]"
          >
            <span className="text-center text-white font-secondary text-[16px] font-extrabold">
              Sign in with Google
            </span>
          </button>

          <div className="w-[70%] h-[3px] bg-[#E0E0E0] my-[20px]"></div>

          <div className="w-[70%] items-start flex flex-col">
            <span className="font-secondary text-[16px]">Email :</span>
            {/* Username textbox */}
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />
            <span className="font-secondary text-[16px]">Password :</span>
            {/* Password textbox */}
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[30px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />
          </div>

          {/* Register button */}
          <button
            onClick={handleSubmit}
            className="w-[70%] bg-[#2B788B] rounded-lg py-[5px]"
          >
            <span className="text-white text-[16px] font-extrabold text-center font-secondary">
              Sign In
            </span>
          </button>
          <div className="flex flex-row mt-[20px] items-baseline">
            <span className="font-secondary">Already have an account ?</span>
            {/* Login text */}
            <button onClick={handleSubmit}>
              <span className="text-[#2B788B] text-[16px] underline ml-[15px] font-extrabold text-center font-secondary">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
