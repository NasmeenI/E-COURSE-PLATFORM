import ReturnButton from "../../components/button/ReturnButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import NasmeenAPI from "../../api/NasmeenAPI";
import { auth } from "../../api/firebase";
import { toast } from "react-hot-toast";
import UserAPI from "../../api/UserAPI";
import FileAPI from "../../api/FileAPI";

export default function Profile() {
  const navigate = useNavigate();
  const {
    data: { user },
    action: { setUser },
  } = useContext(UserContext);

  const [submitting, setSubmitting] = useState(false);

  const [isEditFirstName, setIsEditFirstName] = useState(0);
  const [isEditLastName, setIsEditLastName] = useState(0);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const [profilePicture, setProfilePicture] = useState(user.imageURL);

  const imagePickerRef = useRef();

  function enableEditFirstName() {
    setIsEditFirstName(1);
  }
  function enableEditLastName() {
    setIsEditLastName(1);
  }
  const handleFirstName = (event) => {
    setNewFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setNewLastName(event.target.value);
  };
  function handleImagePicked(event) {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  }
  function pickImage() {
    imagePickerRef.current.click();
  }

  // didn't include pic and intitial old value
  async function submit() {
    setSubmitting(true);
    const token = await auth.currentUser.getIdToken();
    const imagePath = await FileAPI.upload(profilePicture);
    const result = await NasmeenAPI.changeProfile(
      token,
      newFirstName || user.firstName,
      newLastName || user.lastName,
      imagePath
    );

    if (result.error) {
      toast(result.error);
      setSubmitting(false);
      return;
    }

    const loadResult = await UserAPI.loadUserData();
    if (loadResult.error) {
      toast(result.error);
      setSubmitting(false);
      return;
    } else {
      setUser(loadResult);
      toast("Profile Change Completed");
      navigate("/");
    }

    setSubmitting(false);
  }

  return (
    <div>
      <Header />
      <div className="w-full min-h-[600px] bg-[#F6F5F4] flex flex-col px-[20%] py-[30px] mt-[60px]">
        <ReturnButton />
        <span className="font-primary text-[32px] mb-[20px]">Profile</span>
        {submitting ? (
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
          <div className="bg-white px-[5%] py-[30px]  flex flex-col rounded-lg items-center w-[90%]">
            <img
              src={profilePicture}
              className="rounded-full overflow-hidden w-[225px] h-[225px]"
              alt="profile"
            ></img>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={imagePickerRef}
              onChange={handleImagePicked}
            />
            <button
              onClick={pickImage}
              className="w-[70px] bg-[#cccccc] h-[70px] rounded-full absolute mt-[170px] ml-[120px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 1000 1000"
              >
                <path d="M457.39 10.5c-96.87 8.54-184.82 43.1-260.34 102.7-21.16 16.7-62.71 59.41-79.01 81.15-67.17 89.5-100.95 195.11-96.87 302.27 4.84 119.78 51.82 229.08 135.5 314.69 74.55 76.1 180.35 126.97 286.16 137.64 11.84 1.16 27.37 1.94 34.75 1.55l13.4-.58 21.55-79.01 21.55-79.21 37.47-37.47 37.47-37.66-4.46-7.57c-4.08-6.79-4.46-10.29-5.05-36.89l-.78-29.31 12.62-18.25c14.75-21.35 29.51-48.73 38.05-70.67 5.24-13.4 7.18-16.11 13.98-20 9.9-5.63 20.38-19.8 24.27-32.81 2.33-8.35 2.91-18.44 2.33-53.39-.58-42.9-.58-43.49-5.82-53.39-2.91-5.44-6.21-10.68-7.38-11.26-1.55-.97-2.14-19.22-1.75-56.88.2-34.94-.58-59.02-1.94-64.65-14.77-62.5-60.59-100.35-135.14-111.81-26.99-4.08-86.39-2.52-109.69 2.91-52.61 12.43-86.97 36.69-106.58 75.91-12.23 24.08-13.78 35.14-13.78 96.49v54.94l-5.82 9.13c-8.74 13.78-10.1 24.27-9.32 68.72.58 38.05.78 40.19 5.63 50.48 2.72 5.82 7.57 13.39 10.68 16.7 3.88 4.08 7.96 12.81 12.04 25.24 7.96 23.88 22.13 52.81 36.3 74.35l10.68 16.5v28.15c0 31.45-2.14 39.22-12.81 48.92-3.11 2.72-37.47 22.33-76.49 43.49-39.02 21.16-72.8 39.8-75.32 41.35-4.27 2.72-5.05 2.14-21.36-14.37-68.15-69.31-111.45-157.25-123.48-250.82-3.89-30.68-4.08-82.51-.2-112.22 12.42-94.74 53.39-179.77 119.39-247.91C244.41 108.54 327.69 64.86 423.4 48.74c30.09-5.05 109.69-4.85 137.84.19 64.84 11.65 121.92 34.36 172.59 68.72 26.79 17.86 45.62 33.59 69.31 58.05 23.68 24.27 35.92 39.22 52.81 64.65 45.23 68.53 70.08 148.32 71.83 231.8l.58 28.93 8.74 5.63c4.66 3.3 11.65 8.93 15.53 12.62l6.99 6.6 1.16-10.29c.78-5.63 1.36-20.77 1.36-33.59 0-122.5-46.79-239.37-130.85-326.73C757.32 78.63 662.97 29.71 558.33 14.18c-19.6-2.91-83.08-5.24-100.94-3.68z" />
                <path d="M865.07 543.02c-2.72.78-7.57 2.91-10.68 4.66-3.3 1.75-66.2 63.68-140.17 137.64L579.88 819.86l-17.86 66.01c-16.89 62.32-18.25 66.4-24.65 73.19-8.54 9.12-9.51 18.25-2.33 25.82 6.99 7.38 17.28 6.79 26.79-1.75 6.6-6.02 12.81-8.15 72.22-24.46 35.72-9.9 66.4-18.64 67.95-19.41 1.75-.97 62.71-61.54 135.51-134.73 83.48-84.06 133.76-136.09 136.29-140.94 6.02-11.65 6.99-24.46 2.91-38.05-3.11-10.68-5.24-13.39-34.56-43.1-17.28-17.49-34.95-33.6-39.22-35.74-8.35-4.46-29.51-6.4-37.86-3.68zm51.06 61.93c38.05 37.86 37.86 34.36 2.33 70.08l-26.21 26.4-36.3-36.3-36.5-36.5 25.24-25.43c13.98-13.98 26.99-26.21 29.12-26.98 7.96-3.5 13.78.38 42.32 28.73zm-84.06 84.83 35.92 35.92-87.94 87.94-87.75 87.75-36.3-36.5-36.5-36.3 87.36-87.36c47.95-47.95 87.75-87.36 88.33-87.36s17.08 16.11 36.88 35.91zM657.35 916.15c0 1.17-72.41 21.16-73.38 20.38-.2-.39 4.08-17.28 9.71-37.86l10.09-37.27 26.79 26.79c14.75 14.76 26.79 27.18 26.79 27.96z" />
              </svg>
            </button>

            <div className="flex flex-col w-full px-[5%] mt-[30px]">
              <div className="flex flex-row items-center">
                <span className="font-secondary text-[24px] font-extrabold mr-[20px]">
                  First Name :
                </span>
                {isEditFirstName ? (
                  <input
                    className="bg-[#cccccc] w-[70%] font-secondary px-[7px]"
                    value={newFirstName}
                    onChange={handleFirstName}
                  />
                ) : (
                  <span className="font-secondary text-[24px] truncate">
                    {user.firstName}
                  </span>
                )}
              </div>

              <div className="flex flex-row items-center justify-between">
                <button
                  className="flex flex-row items-center w-[170px] justify-evenly border-2 border-black rounded-lg my-[10px]"
                  onClick={enableEditFirstName}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                    viewBox="0 0 1024 1024"
                    className="w-[30px] h-[30px]"
                  >
                    <path
                      d="M857.058 979.307h-696.21c-64.08 0-116.035-51.981-116.035-116.097V166.55c0-64.123 52.716-121.611 116.803-121.611h467.187v58.397h-467.18c-32.044 0-58.785 31.145-58.785 63.205v696.66c0 32.054 25.974 58.043 58.01 58.043h696.21c32.018 0 63.733-26.698 63.733-58.733v-467.18h58.397v467.187c.006 64.123-58.054 116.785-122.133 116.785l.003.004zm-346.771-281.33c-8.476 8.484-19.097 12.743-30.055 14.884L226.22 838.502c-28.588 13.257-51.486-12.364-40.954-40.971L310.838 543.33c2.13-10.958 6.371-21.58 14.865-30.066L776.958 61.682c22.659-22.65 59.387-22.65 82.046 0L961.553 164.31c22.66 22.66 22.66 59.44 0 82.1L510.29 697.974l-.003.003zm-269.45 64.424c-6.637 13.396 6.177 27.131 20.46 20.493l156.863-95.003-82.382-82.444-94.94 156.952-.001.002zm146.392-187.574 61.535 61.579c11.321 11.338-17.939-17.957 20.511 20.502l328.193-328.39-103.291-101.893L366.716 554.28c10.907 10.922 9.19 9.21 20.511 20.547h.002zm512.796-389.975-61.535-61.579c-11.32-11.356-29.693-11.356-41.024 0l-60.068 60.094L838.48 287.472l61.535-61.588c11.347-11.338 11.347-29.711.006-41.031l.004-.001z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="font-secondary text-[16px]">
                    Edit First Name
                  </span>
                </button>
              </div>

              <div className="flex flex-row items-center">
                <span className="font-secondary text-[24px] font-extrabold mr-[20px]">
                  Last Name :
                </span>
                {isEditLastName ? (
                  <input
                    className="bg-[#cccccc] w-[70%] font-secondary px-[7px]"
                    value={newLastName}
                    onChange={handleLastName}
                  />
                ) : (
                  <span className="font-secondary text-[24px] truncate">
                    {user.lastName}
                  </span>
                )}
              </div>

              <div className="flex flex-row items-center">
                <button
                  className="flex flex-row items-center w-[170px] justify-evenly border-2 border-black rounded-lg my-[10px]"
                  onClick={enableEditLastName}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                    viewBox="0 0 1024 1024"
                    className="w-[30px] h-[30px]"
                  >
                    <path
                      d="M857.058 979.307h-696.21c-64.08 0-116.035-51.981-116.035-116.097V166.55c0-64.123 52.716-121.611 116.803-121.611h467.187v58.397h-467.18c-32.044 0-58.785 31.145-58.785 63.205v696.66c0 32.054 25.974 58.043 58.01 58.043h696.21c32.018 0 63.733-26.698 63.733-58.733v-467.18h58.397v467.187c.006 64.123-58.054 116.785-122.133 116.785l.003.004zm-346.771-281.33c-8.476 8.484-19.097 12.743-30.055 14.884L226.22 838.502c-28.588 13.257-51.486-12.364-40.954-40.971L310.838 543.33c2.13-10.958 6.371-21.58 14.865-30.066L776.958 61.682c22.659-22.65 59.387-22.65 82.046 0L961.553 164.31c22.66 22.66 22.66 59.44 0 82.1L510.29 697.974l-.003.003zm-269.45 64.424c-6.637 13.396 6.177 27.131 20.46 20.493l156.863-95.003-82.382-82.444-94.94 156.952-.001.002zm146.392-187.574 61.535 61.579c11.321 11.338-17.939-17.957 20.511 20.502l328.193-328.39-103.291-101.893L366.716 554.28c10.907 10.922 9.19 9.21 20.511 20.547h.002zm512.796-389.975-61.535-61.579c-11.32-11.356-29.693-11.356-41.024 0l-60.068 60.094L838.48 287.472l61.535-61.588c11.347-11.338 11.347-29.711.006-41.031l.004-.001z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="font-secondary text-[16px]">
                    Edit Last Name
                  </span>
                </button>
              </div>
            </div>

            {/* submit */}
            <button
              onClick={submit}
              className="bg-[#2B788B] rounded-full w-[80%] my-[20px] py-[5px]"
            >
              <span className="font-primary text-white">Submit</span>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
