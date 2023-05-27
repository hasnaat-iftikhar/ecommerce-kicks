import React from "react";

// Auth layout and Components
import AuthLayout from "../../../../layouts/auth";
import { Button, Input } from "../../../../components";

// Layouts

const Signup = () => {
  return (
    <AuthLayout pageTitle="Create an account - Kicks">
      <form className="mt-[24px] flex flex-col gap-[24px]">
        <Input
          className="border-gray_dark"
          name="email-address"
          type="email"
          placeholder="Email"
        />
        <Input
          className="border-gray_dark"
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button className="bg-gray_dark text-white">Create an account</Button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
