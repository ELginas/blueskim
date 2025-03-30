"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
};

export const FileUpload = ({ onChange, value, endpoint }: Props) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          className="bg-red-500 rounded-full p-1 absolute top-0 right-0 text-white drop-shadow-sm"
          onClick={() => onChange("")}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      onClientUploadComplete={(res) => onChange(res?.[0].ufsUrl)}
      onUploadError={(error) => console.log(error)}
      // value={value}
      endpoint={endpoint}
    />
  );
};
