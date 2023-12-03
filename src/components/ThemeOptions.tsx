"use client";
import React from "react";
import coastal from "@/assetts/coastal.png";
import modern from "@/assetts/modern.png";
import professional from "@/assetts/professional.png";
import tribal from "@/assetts/tribal.png";
import tropical from "@/assetts/tropical.png";
import vintage from "@/assetts/vintage.png";
import Image from "next/image";
import { useTheme } from "@/store/useStore";

function ThemeOptions() {
  const setTheme = useTheme((state: any) => state.setTheme);

  const thems = [
    { value: "coastal", imgUrl: coastal },
    { value: "modern", imgUrl: modern },
    { value: "professional", imgUrl: professional },
    { value: "tribal", imgUrl: tribal },
    { value: "tropical", imgUrl: tropical },
    { value: "vintage", imgUrl: vintage },
  ];

  function handleClick(e: any) {
    document.querySelector(".selected")?.classList.remove("selected");
    e.currentTarget.classList.add("selected");
    setTheme(e.currentTarget.lastChild?.textContent);
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {thems.map((theme, index) => {
        return (
          <div
            onClick={handleClick}
            key={index}
            className="cursor-pointer transition-all flex flex-col items-center gap-2 group"
          >
            <Image
              src={theme.imgUrl}
              alt="theme"
              className="rounded-lg group-hover:opacity-80"
            />
            <p className="font-semibold text-white">{theme.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ThemeOptions;
