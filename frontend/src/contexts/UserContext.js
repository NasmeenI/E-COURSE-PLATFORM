import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const store = {
    data: { user },
    action: { setUser },
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
}
