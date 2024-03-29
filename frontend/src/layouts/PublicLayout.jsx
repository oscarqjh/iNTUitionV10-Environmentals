import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function PublicLayout() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
