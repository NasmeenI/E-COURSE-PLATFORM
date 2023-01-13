import { useContext, useEffect, useState } from "react";
import { auth } from "../../api/firebase";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import ConfirmModal from "../confirmModal/ConfirmModal";

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
    navigate("/");
  }

  return (
    <div className="flex flex-row items-center h-full">
      <div className="rounded-full w-[44px] h-[44px] overflow-hidden bg-black">
        <img src={user.imageURL} alt="profile" />
      </div>

      <span className="text-lg font-secondary ml-[20px]">{user.firstName}</span>

      <button
        onClick={openModal}
        className="text-md font-secondary ml-[20px] font-extrabold border-[#2B788B] border-2 py-[3px] px-[15px] rounded-full"
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
