import { useNavigate } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext, useState } from "react";
import UserAPI from "../../api/UserAPI";
import NasmeenAPI from "../../api/NasmeenAPI";
import { UserContext } from "../../contexts/UserContext";
import { TailSpin } from "react-loader-spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const {
    data: { user },
    action: { setUser },
  } = useContext(UserContext);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    function error(message) {
      setErrorMessage(message);
      setLoggingIn(false);
      window.scrollTo(0, 0);
    }

    event.preventDefault();
    setErrorMessage(null);
    setLoggingIn(true);

    const result = await UserAPI.login(email, password);
    if (result.error) {
      error(result.error);
      return;
    }

    const token = await result.user.getIdToken();
    const loginResult = await NasmeenAPI.getProfile(token);
    if (loginResult.error) {
      error(loginResult.error);
    } else {
      setUser(loginResult.profile);
      navigate("/");
    }

    setLoggingIn(false);
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        {loggingIn ? (
          <div className="my-[200px]">
            <TailSpin
              height="80"
              width="80"
              color="#2B788B"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="w-[40%] bg-white my-[50px] flex flex-col p-[50px] rounded-md items-center">
            <span className="font-primary text-[32px] mb-[30px]">Login</span>
            {errorMessage ? (
              <div className="bg-red-200 py-3 rounded-xl w-full flex flex-col items-center justify-center mb-4">
                <span className="text-red-600 font-bold font-secondary">
                  Something went wrong
                </span>
                <span className="text-red-600 font-secondary mx-5">
                  {errorMessage}
                </span>
              </div>
            ) : (
              <></>
            )}
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
              <span className="font-secondary text-[16px]">Email :</span>
              {/* Username textbox */}
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
              />
              <span className="font-secondary text-[16px]">Password :</span>
              {/* Password textbox */}
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
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
        )}
      </div>

      <Footer />
    </div>
  );
}
