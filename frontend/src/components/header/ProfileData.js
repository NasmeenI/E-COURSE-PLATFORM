import { useContext, useEffect, useState } from "react";
import { auth } from "../../api/firebase";
import { UserContext } from "../../contexts/UserContext";
import FileAPI from "../../api/FileAPI";
import { useNavigate } from "react-router-dom";

export default function ProfileData() {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const {
    data: { user },
    action: { setUser },
  } = useContext(UserContext);

  useEffect(() => {
    async function fetchImage() {
      setImageUrl(await FileAPI.getURL(user.image));
    }

    fetchImage();
  }, [user]);

  function signOut() {
    auth.signOut();
    setUser(null);
    navigate("/");
  }

  return (
    <div className="flex flex-row items-center h-full">
      <div className="rounded-full w-[44px] h-[44px] overflow-hidden bg-black">
        <img src={imageUrl} alt="profile" />
      </div>

      <span className="text-lg font-secondary ml-[20px]">
        {user.firstName}
      </span>

      <button
        onClick={signOut}
        className="text-md font-secondary ml-[20px] font-extrabold border-[#2B788B] border-2 py-[3px] px-[15px] rounded-full"
      >
        Sign Out
      </button>
    </div>
  );
}
