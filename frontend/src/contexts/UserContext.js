import { createContext, useState } from "react";
import FileAPI from "../api/FileAPI";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function onSetUser(data) {
    if (!data) {
      setUser(null);
      return;
    }

    data.imageURL = await FileAPI.getURL(data.image);
    setUser(data);
  }

  const store = {
    data: { user },
    action: { setUser: onSetUser },
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
}
