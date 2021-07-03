import React from "react";
import styles from "./register.module.css";
import { UserLayout } from "../../layouts/userLayout";
import { RegisterForm } from "./RegisterForm";
export const RegisterPage: React.FC = () => {
  return (
    <UserLayout>
      <RegisterForm />
    </UserLayout>
  );
};
