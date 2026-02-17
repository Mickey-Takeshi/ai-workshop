"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { User } from "@/types";
import { mockUser } from "./mock-data";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("abl_mock_auth");
    if (stored === "true") {
      setUser(mockUser);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !user && pathname?.startsWith("/dashboard")) {
      router.replace("/login");
    }
  }, [isLoading, user, pathname, router]);

  const login = useCallback(async (email: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    localStorage.setItem("abl_mock_auth", "true");
    setUser({ ...mockUser, email });
    setIsLoading(false);
    router.push("/dashboard");
  }, [router]);

  const logout = useCallback(() => {
    localStorage.removeItem("abl_mock_auth");
    setUser(null);
    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
