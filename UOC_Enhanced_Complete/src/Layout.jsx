// src/Layout.jsx
import React from "react";
import Header from "./Header";
import TabNavigation from "./TabNavigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <TabNavigation />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
