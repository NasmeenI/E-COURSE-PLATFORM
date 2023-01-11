import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import UserAPI from "../../api/UserAPI";
import { toast } from "react-hot-toast";
import NasmeenAPI from "../../api/NasmeenAPI";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("student");

  const [errorMessage, setErrorMessage] = useState(null);

  const {
    data: { user },
    action: { setUser },
  } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function setStudent() {
    setRole("student");
  }

  function setInstructor() {
    setRole("instructor");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const result = await UserAPI.register(email, password);
    if (result.error) {
      setErrorMessage(result.error);
    } else {
      console.log(result);
      const regisResult = await NasmeenAPI.createAccount(
        result.user.uid,
        firstName,
        lastName,
        role
      );
      console.log(regisResult);
    }
  }

  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        <div className="w-[40%] bg-white my-[50px] flex flex-col p-[50px] rounded-md items-center">
          {errorMessage ? (
            <div className="bg-red-200 py-3 rounded-xl w-full flex items-center justify-center mb-4">
              <span className="text-red-600">{"Error " + errorMessage}</span>
            </div>
          ) : (
            <></>
          )}

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

          {/* input box */}
          <div className="w-[70%] items-start flex flex-col">
            {/* First Name textbox */}
            <span className="font-secondary text-[16px]">First Name :</span>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={handleFirstNameChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />

            {/* Username textbox */}
            <span className="font-secondary text-[16px]">Last Name :</span>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />

            <span className="font-secondary text-[16px]">Email :</span>
            {/* Email textbox */}
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
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />
            <span className="font-secondary text-[16px]">
              Confirm Password :
            </span>
            {/* Confirm Password textbox */}
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full border-[1px] border-[#2B788B] rounded-lg mb-[10px] mt-[10px] px-[10px] pb-[3px] text-[16px] font-secondary"
            />
          </div>

          {/* Role Selection */}
          <div className="flex flex-row w-[70%] justify-around rounded-xl overflow-hidden mt-3 border border-black/[0.1]">
            <button
              className={`font-secondary flex flex-1 items-center justify-center text-[14px] py-3 ${
                role === "student"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
              onClick={setStudent}
            >
              I'm a Student
            </button>

            <button
              className={`font-secondary flex flex-1 items-center justify-center text-[15px] py-3 ${
                role === "instructor"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
              onClick={setInstructor}
            >
              I'm an Instructor
            </button>
          </div>

          {/* Register button */}
          <button
            onClick={handleSubmit}
            className="w-[70%] bg-[#2B788B] rounded-lg py-[5px] mt-[20px]"
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
