"use client";
import React from "react";
import { useRouter } from "next/router";

const GoBackLink = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-600 hover:text-orange-500 mb-6 inline-flex items-center"
    >
      ← Go Back
    </button>
  );
};

export default GoBackLink;
