import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import DatabaseAPIService from "@/api/services/DatabaseAPIService";

export default function ProtectedLayout() {
  const { user, setUser } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
