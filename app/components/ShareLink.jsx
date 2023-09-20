"use client";
import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";


const ShareLink = () => {
    const [clicked , setClick] = useState(false);
    const handleClick = ()=>{
        setClick(true);
        navigator.clipboard.writeText(window.location.href)
        setTimeout(()=>{
            setClick(false)
        }, 1000)
    }

  return (
    <div>
      <button className="border rounded hover:bg-orange-100 border-slate-600 px-2 py-1 flex gap-3 items-baseline" onClick={handleClick}>
        <LinkIcon className="h-4 w-4 " />
        {clicked? "Copied" : "Share LInk"}
      </button>
    </div>
  );
};

export default ShareLink;
