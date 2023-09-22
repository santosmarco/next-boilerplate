"use client";

import type { ReactComponent } from "@/types";
import { useCallback, useState } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

export const AppShell: ReactComponent = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = useCallback(() => setIsSidebarOpen(true), []);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="h-[calc(100%-64px)] lg:pl-72">
        <Header onSidebarOpen={handleSidebarOpen} />

        {children}
      </div>
    </>
  );
};
