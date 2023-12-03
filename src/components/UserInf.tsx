"use client";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const UserInf = () => {
  const { user } = useUser();
  return !user ? (
    <Link
      href={"/room"}
      className="bg-blue-500 hover:opacity-90 rounded-xl text-white font-semibold px-5 py-2"
    >
      Log in
    </Link>
  ) : (
    <UserButton />
  );
};

export default UserInf;
