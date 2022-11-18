import { useRouter } from "next/router";
import React from "react";
import { ArrowLeft } from "../icons";

const BackArrow = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <button onClick={handleGoBack}>
      <ArrowLeft />
    </button>
  );
};

export default BackArrow;
