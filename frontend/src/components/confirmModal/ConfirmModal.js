import { useState } from "react";
import Modal from "react-modal";

export default function ConfirmModal({
  isOpen,
  setIsOpen,
  message,
  onConfirm = () => {},
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function handleOK() {
    closeModal();
    onConfirm();
  }

  return (
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

        <span className="font-secondary mt-3 text-[16px]">{message}</span>

        <div className="flex flex-row w-full justify-around items-center mt-4">
          <button
            onClick={closeModal}
            className="rounded-full bg-black text-white font-secondary py-1 w-[96px]"
          >
            CANCEL
          </button>

          <button
            onClick={handleOK}
            className="rounded-full border border-black/[0.1] bg-white text-black font-secondary py-1 w-[96px]"
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
}
