import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function ProtectedLayout() {
  const { user, setUser } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
  );
}
