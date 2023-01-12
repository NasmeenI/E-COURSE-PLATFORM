import { useContext } from "react";
import { auth } from "../../api/firebase";
import { UserContext } from "../../contexts/UserContext";

export default function ProfileData() {
  const {
    action: { setUser },
  } = useContext(UserContext);

  function signOut() {
    auth.signOut();
    setUser(null);
  }

  return (
    <div className="flex flex-row items-center h-full">
      <div className="rounded-full w-[50px] h-[50px] overflow-hidden bg-black"></div>
      <span className="text-xl font-secondary">Passa</span>
      <button
        onClick={signOut}
        className="text-md font-secondary ml-[30px] font-extrabold border-[#2B788B] border-2 py-[3px] px-[15px] rounded-full"
      >
        Sign Out
      </button>
    </div>
  );
}
