import React from "react";
import styles from "./SignInPage.module.css";
import { UserLayout } from "../../layouts/userLayout";
import { SignInForm } from "./SignInForm";
export const SignInPage = () => {
  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  );
};
