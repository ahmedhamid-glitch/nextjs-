import Link from "next/link";
import React from "react";

const AuthLayout = () => {
  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot_password" },
  ];

  return (
    <>
      <div>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default AuthLayout;
