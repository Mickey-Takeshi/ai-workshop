"use client";

import { useState } from "react";
import { useAuth } from "@/lib/mock-auth";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // redirect handled by AuthProvider
  }

  return (
    <div className="min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopBar onMenuClick={() => setSidebarOpen(true)} />
      <main className="lg:ml-[260px] pt-14 lg:pt-0 min-h-screen">
        <div className="p-6 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
