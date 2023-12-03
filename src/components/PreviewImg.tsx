"use client";
import React from "react";
import couch from "@/assetts/couch.svg";
import { useLoading, userOutput } from "@/store/useStore";
import Image from "next/image";

function PreviewImg() {
  const isLoading = useLoading((state: any) => state.isLoading);
  const isGenerating = useLoading((state: any) => state.isGenerating);
  const output = userOutput((state: any) => state.output);

  return isLoading ? (
    <div
      className={`${
        isGenerating && "animate-pulse"
      } md:w-[500px] w-[350px] h-[200px] my-auto md:h-[300px] bg-slate-500 rounded-lg flex items-center justify-center`}
    >
      <Image src={couch} alt="couch" height={100} width={100} />
    </div>
  ) : (
    <div className="my-auto">
      <img src={output} alt="output" className="rounded-lg object-cover" />
    </div>
  );
}

export default PreviewImg;
