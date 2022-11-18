import React, { useState } from "react";
import CheckPassword from "../../../components/auth/CheckPassword";
import Forgot from "../../../components/auth/Forgot";

const ForgotPassword = () => {
  const [checkEmail, setCheckEmail] = useState(false);
  return (
    <>
      {checkEmail ? (
        <CheckPassword />
      ) : (
        <Forgot setCheckEmail={setCheckEmail} />
      )}
    </>
  );
};

export default ForgotPassword;
