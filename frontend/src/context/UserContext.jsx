import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [tokenUser, setTokenUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/users/me", {
          withCredentials: true,
        });
        setTokenUser(res.data);
      } catch (error) {
        setTokenUser(null);
      }
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        tokenUser,
        setTokenUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
