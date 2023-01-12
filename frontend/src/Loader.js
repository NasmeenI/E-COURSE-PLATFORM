import { useContext } from "react";
import UserAPI from "./api/UserAPI";
import { auth } from "./api/firebase";
import { UserContext } from "./contexts/UserContext";

/**
 * component without rendering, but will handle loading and using contexts
 */
export default function Loader() {
  const {
    action: { setUser },
  } = useContext(UserContext);

  if (auth.currentUser) {
    setUser(UserAPI.loadUserData());
  }

  return <></>;
}
