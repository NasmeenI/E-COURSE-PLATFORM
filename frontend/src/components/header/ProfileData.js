import { useContext, useEffect, useState } from "react";
import { auth } from "../../api/firebase";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

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

  function closeModal() {
    setIsOpen(false);
  }

  function signOut() {
    closeModal();
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

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        className="z-[100]"
      >
        <div className="w-fit border border-black/[0.1] bg-white mx-auto my-[10%] flex flex-col items-center justify-center p-4 rounded-lg">
          <div className="flex flex-row w-full justify-end items-center">
            <button
              className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-black/[0.1] text-[12px] text-gray-500"
              onClick={closeModal}
            >
              X
            </button>
          </div>

          <span className="font-primary text-[18px]">Confirmation</span>

          <span className="font-secondary mt-3 text-[16px]">
            Are you sure you want to sign out?
          </span>

          <div className="flex flex-row w-full justify-around items-center mt-4">
            <button
              onClick={closeModal}
              className="rounded-full bg-black text-white font-secondary py-1 w-[96px]"
            >
              CANCEL
            </button>

            <button
              onClick={signOut}
              className="rounded-full border border-black/[0.1] bg-white text-black font-secondary py-1 w-[96px]"
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
