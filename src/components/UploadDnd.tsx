"use client";
import React, { useState } from "react";
import { UploadDropzone } from "@bytescale/upload-widget-react";
import { useImage } from "@/store/useStore";
import Image from "next/image";

function UploadDnd() {
  const [preview, setPreview] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const setImageUrl = useImage((state: any) => state.setImageUrl);

  const options = {
    apiKey: process.env.NEXT_PUBLIC_BYTESCALE_API_KEY || "",
    editor: {
      images: {
        crop: false,
      },
    },
    maxFileCount: 1,
  };

  function onUpdate({ uploadedFiles }: any) {
    if (uploadedFiles.length !== 0) {
      const imageUrl = uploadedFiles[0].fileUrl;
      setPreview(imageUrl);
      setImageUrl(imageUrl);
    }
  }

  return preview ? (
    <div className="relative max-w-[500px] max-h-[300px] flex items-center justify-center">
      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-slate-300 animate-pulse"></div>
      )}
      <Image
        className="object-cover rounded-md"
        src={preview}
        onLoad={() => setLoading(false)}
        width={400}
        height={200}
        alt="preview"
      />
      <button
        className="absolute top-4 right-4 z-10 backdrop-blur-md rounded-full"
        onClick={() => {
          setPreview("");
          setLoading(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  ) : (
    <UploadDropzone
      options={options}
      onUpdate={onUpdate}
      width="400px"
      height="200px"
    />
  );
}

export default UploadDnd;
