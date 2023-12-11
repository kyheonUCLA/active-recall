import React, { FC, createContext, useContext, useState } from "react";

import type { ResponseType } from "../lib/types";
import type { UserType } from "../lib/types";


type AllContextProviderProps = {
  children: React.ReactNode,
}

type ContextType = {
  extensionToggle: boolean,
  setExtensionToggle: React.Dispatch<React.SetStateAction<boolean>>,
  user: UserType,
  setUser: React.Dispatch<React.SetStateAction<UserType>>,
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  response: ResponseType,
  setResponse: React.Dispatch<React.SetStateAction<ResponseType>>,
}

const Context = createContext<ContextType | null>(null);

const AllContextProvider: FC<AllContextProviderProps> = ({ children }) => {
  const [extensionToggle, setExtensionToggle] = useState(false);
  const [user, setUser] = useState<UserType>({firstname: "", lastname: "", phone: ""});
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<ResponseType>(null);

  return (
    <Context.Provider value={
      {
        extensionToggle, setExtensionToggle, 
        user, setUser, message, setMessage, 
        response, setResponse
      }}>
      {children}
    </Context.Provider>
  )
}

const useAllContext = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error("must be used within ContextProvider block")
  }
  return context;
}


export default AllContextProvider;
export { useAllContext };