import React, { FC } from "react";
import { useAllContext } from "../context/AllContextProvider";
import Input from "./Input";
import ToggleButton from "./ToggleButton";

const PopupCard: FC = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
    dark:border-gray-700 w-[25rem] h-auto">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Active Recall</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Built on chatGPT</p>
      
      <Input />
      <ToggleButton />
    </div>
  )
}

export default PopupCard;
