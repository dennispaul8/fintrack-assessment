"use client";

import { useState } from "react";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
      <div className="flex">
        {isSidebarOpen && <Sidebar />}
        <main className="flex-1 ">{children}</main>
      </div>
    </>
  );
}
