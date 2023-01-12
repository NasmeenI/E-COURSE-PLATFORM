import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TailSpin } from "react-loader-spinner";
import UserAPI from "../../api/UserAPI";
import NasmeenAPI from "../../api/NasmeenAPI";
import defaultProfilePicture from "./assets/default_profile_picture.jpg";
import googleLogo from "./assets/google_logo.svg";
import { useNavigate } from "react-router";
import FileAPI from "../../api/FileAPI";

export default function Register() {
  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);

  console.log("default", defaultProfilePicture);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("student");

  const [errorMessage, setErrorMessage] = useState(null);

  const [registering, setRegistering] = useState(false);

  const imagePickerRef = useRef();

  const navigate = useNavigate();

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

  function handleImagePicked(event) {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  }

  function pickImage() {
    imagePickerRef.current.click();
  }

  function setStudent() {
    setRole("student");
  }

  function setInstructor() {
    setRole("instructor");
  }

  async function handleSubmit(event) {
    console.log(await FileAPI.upload(profilePicture));
    function error(message) {
      setErrorMessage(message);
      setRegistering(false);
      window.scrollTo(0, 0);
    }

    event.preventDefault();
    setErrorMessage(null);
    setRegistering(true);
    if (!firstName) {
      error("Please Enter First Name.");
      return;
    }

    if (!lastName) {
      error("Please Enter Last Name.");
      return;
    }

    const result = await UserAPI.register(email, password);
    if (result.error) {
      error(result.error);
      return;
    }

    const token = await result.user.getIdToken();
    const regisResult = await NasmeenAPI.createAccount(
      token,
      firstName,
      lastName,
      role
    );

    if (regisResult.error) {
      error(regisResult.error);
    } else {
      // TODO: Register success
    }

    setRegistering(false);
  }

  function goToLogin() {
    navigate("/login");
  }

  return (
    <div>
      <Header />
      <div className="mt-[60px] flex flex-col items-center bg-[#F6F5F4] w-full justify-evenly">
        <div className="w-[40%] bg-white my-[50px] flex flex-col p-[50px] rounded-md items-center">
          {registering ? (
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
          ) : (
            <>
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

              <span className="font-primary text-[32px] mb-[30px]">
                Register
              </span>

              {/* input box */}
              <div className="w-[70%] items-start flex flex-col">
                <span className="font-primary text-[20px] w-full text-center">
                  Setup Your Profile
                </span>
                {/* Upload Profile Picture */}
                <div className="flex flex-row w-full items-center justify-center mb-[10px] mt-[10px] px-[10px] pb-[3px]">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={imagePickerRef}
                    onChange={handleImagePicked}
                  />
                  <div
                    className={`relative rounded-full w-[80px] h-[80px] bg-black`}
                  >
                    <button
                      className="overflow-hidden rounded-full w-[80px] h-[80px]"
                      onClick={pickImage}
                    >
                      <img
                        src={profilePicture}
                        className="w-[80px]"
                        alt="profile"
                      />
                    </button>

                    <svg
                      className="absolute bottom-0 right-0 w-[20px] h-[20px]"
                      enableBackground="new 0 0 512 512"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256,512C114.625,512,0,397.391,0,256C0,114.609,114.625,0,256,0c141.391,0,256,114.609,256,256  C512,397.391,397.391,512,256,512z M256,64C149.969,64,64,149.969,64,256s85.969,192,192,192c106.047,0,192-85.969,192-192  S362.047,64,256,64z M288,384h-64v-96h-96v-64h96v-96h64v96h96v64h-96V384z" />
                    </svg>
                  </div>
                </div>

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

                <div className="w-full h-[3px] bg-[#E0E0E0] my-[20px]"></div>
                <span className="font-primary text-[20px] w-full text-center">
                  Setup Your Sign in data
                </span>

                <span className="font-secondary text-[16px] mt-[10px]">
                  Email :
                </span>
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
                className="w-[70%] h-[48px] bg-[#2B788B] rounded-lg py-[5px] mt-[20px]"
              >
                <span className="text-white text-[16px] font-extrabold text-center font-secondary">
                  Sign In
                </span>
              </button>

              {/* Register with google button */}
              {/* <button
                onClick={""}
                className="flex h-[48px] flex-row justify-around items-center w-[70%] bg-white rounded-lg py-[5px] mt-[20px] border border-black/[0.1]"
              >
                <img
                  src={googleLogo}
                  className="h-full bg-white rounded-sm"
                  alt="google"
                />
                <span className="text-center text-black font-secondary text-[16px] font-extrabold">
                  Sign in with Google
                </span>
              </button> */}

              <div className="flex flex-row mt-[20px] items-baseline">
                <span className="font-secondary">
                  Already have an account ?
                </span>
                {/* Login text */}
                <button onClick={goToLogin}>
                  <span className="text-[#2B788B] text-[16px] underline ml-[15px] font-extrabold text-center font-secondary">
                    Login
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
