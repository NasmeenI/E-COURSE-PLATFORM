import { useContext, useEffect, useState } from "react";
import { auth } from "../../api/firebase";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import ConfirmModal from "../confirmModal/ConfirmModal";
import { toast } from "react-hot-toast";

export default function ProfileData() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const {
    data: { user },
    action: { setUser },
  } = useContext(UserContext);

  function openModal() {
    setIsOpen(true);
  }

  function signOut() {
    auth.signOut();
    setUser(null);
    toast("Sign Out Completed");
    navigate("/");
  }

  function navigateToProfile() {
    navigate("/profile");
  }

  return (
    <div className="flex flex-row items-center h-full">
      <button className="flex flex-row items-center" onClick={navigateToProfile}>
        <div className="rounded-full w-[44px] h-[44px] mr-[10px] overflow-hidden bg-black">
          <img src={user.imageURL} alt="profile" />
        </div>
        <span className="text-lg font-secondary mx-[10px]">
          {user.firstName}
        </span>
        {user.type === "instructor" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 1000 1000"
            className="w-[30px] h-[30px]"
          >
            <path
              d="M499.8 10c73.8 0 133.7 59.9 133.7 133.7s-59.9 133.7-133.7 133.7c-73.8 0-133.7-59.9-133.7-133.7S426 10 499.8 10zM921.7 506.8H749.3l-51.8-189.3-145.9-20-49.4 59.1-51-59.1-148.6 19-55.2 190.3h-169v109.5h68.3V990h706.7V616.2h68.3V506.8zm-252.7 0h-28l-3.2-111 31.2 111zM352.7 400.9v105.9h-31.2l31.2-105.9z"
              fill="#b9b9b9"
            />
          </svg>
        ) : user.type === "student" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 752 752"
            className="w-[30px] h-[30px]"
          >
            <path
              d="M285.3 205.3c-49.2 16.7-88.8 30.6-88.3 31.1.4.4 14.5 8.1 31.2 17l30.3 16.1.3 25.8.2 25.8 4.8-.3 4.7-.3.5-23.7.5-23.6 16.1 9.6c18.7 11.2 17.4 8.9 17.4 28.9V324h83.9c46.2 0 84.2-.3 84.4-.8.2-.4-.1-9.4-.7-20l-1.1-19.3 3-1.9c2.9-1.7 69.2-38.5 84.8-47 4.2-2.3 7.7-4.5 7.7-4.8 0-.6-185.8-54.4-189.3-54.9-.7 0-41.3 13.5-90.4 30zM266.5 330.5c-.5.2-2.1.6-3.5.9l-2.5.5.3 11.1c.5 14.5-1.2 36.5-4.3 58.7-1.4 9.8-2.8 18.6-3.1 19.5-.8 2.6 5.1 5.8 10.4 5.8 8.9 0 11.5-4 11.6-18 .1-9.8-6.2-77-7.3-78.1-.3-.4-1-.5-1.6-.4zM300.2 335.2c-5.4 14.7-7 35.6-3.8 50.5 4.8 22.6 19.3 44.4 38.1 57.3 6.8 4.7 20.2 10.7 29.2 13.2 10.4 2.8 33.4 3.1 43.6.5 27.4-6.9 49.7-24.9 61.7-49.8 6.2-13 8.1-20.6 8.7-35 .6-14.1-.4-22.3-4.3-34.2l-2.6-7.7H302.1l-1.9 5.2zM261.5 473.9c-6.2 2.8-13.8 11.8-17.5 20.7-5.6 13.5-6.2 18-6.7 51.7l-.5 30.7 149.3-.2 149.4-.3.3-20.5c.6-42.7-3.5-62-16.1-75.7-8.2-9 3.7-8.3-133.2-8.3-114.9 0-121.2.1-125 1.9z"
              fill="#b9b9b9"
            />
          </svg>
        ) : (
          <div />
        )}
      </button>

      <button
        onClick={openModal}
        className="text-md font-secondary ml-[10px] font-extrabold border-[#2B788B] border-2 py-[3px] px-[15px] rounded-full"
      >
        Sign Out
      </button>

      <ConfirmModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={signOut}
        message="Are you sure you want to sign out?"
      />
    </div>
  );
}
