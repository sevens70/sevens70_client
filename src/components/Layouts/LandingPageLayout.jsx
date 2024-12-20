"use client";
import React, { useState, ReactNode } from "react";
// import Sidebar from "@/components/Sidebar";
// import Header from "./Header";
import Footer from "./Footer";

export default function LandingPageLayout({ children }) {
  return (
    <>
      <div className="">
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
