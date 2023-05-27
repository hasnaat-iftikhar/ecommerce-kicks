import React from "react";

// Auth layout and Components
import AuthLayout from "../../../../layouts/auth";
import { Button, Input, OpenSans } from "../../../../components";

const ForgotPassword = () => {
  return (
    <AuthLayout pageTitle="Login to your Kicks account">
      <form className="mt-[24px] flex flex-col gap-[24px]">
        <Input
          className="border-gray_dark"
          name="email-address"
          type="email"
          placeholder="Email"
        />
        <div>
          <p
            className={`text-[14px] leading-[22px] font-semibold ${OpenSans.className}`}
          >
            We will share a mail with you with which you can reset your password
            :D
          </p>
          <Button className="mt-2 bg-gray_dark text-white">Send email</Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
