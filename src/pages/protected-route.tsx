import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/stores";

export function ProtectedRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate replace to={"/signin"} />;
  }

  return <Outlet />;
}
