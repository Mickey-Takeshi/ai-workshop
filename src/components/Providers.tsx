"use client";

import { AuthProvider } from "@/lib/mock-auth";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
