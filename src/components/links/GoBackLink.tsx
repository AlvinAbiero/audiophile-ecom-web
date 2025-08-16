"use client";
import React from "react";
import { useRouter } from "next/navigation";

const GoBackLink = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-600 hover:text-orange-500 inline-flex items-center cursor-pointer"
    >
      ← Go Back
    </button>
  );
};

export default GoBackLink;
