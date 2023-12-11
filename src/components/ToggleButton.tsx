import React, { FC } from "react";
import { useAllContext } from "../context/AllContextProvider";

const ToggleButton: FC = () => {
  const { extensionToggle, setExtensionToggle } = useAllContext();
  
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" 
      checked={extensionToggle} onChange={() => setExtensionToggle( (prev) => !prev)}/>
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-300 dark:bg-gray-700 
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
      after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 
      after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  )
}

export default ToggleButton;