import React, { FC, useCallback, useContext } from "react";
import { useAllContext } from "../context/AllContextProvider";

const Input: FC = () => {
  const { user, setUser } = useAllContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser( (prev) => ({...prev, [e.target.name]: e.target.value}) )
  }

  return (
    <form>
      <div className="flex flex-col gap-2 items-center justify-center">
      <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" name="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500" placeholder="John" onChange={handleChange}/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" name="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500" placeholder="Doe" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
          <input type="tel" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={handleChange} />
        </div>
      </div>
    </form>
  )
}

export default Input;