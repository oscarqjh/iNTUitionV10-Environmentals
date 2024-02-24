import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import DatabaseAPIService from "@/api/services/DatabaseAPIService";

export default function ProtectedLayout() {
  const { user, setUser } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleFetchUser = async () => {
    const response = await DatabaseAPIService.getAllUsers();
    setUser(response.data[0]);
    console.log(response.data[0]);
  };

  return (
    <>
      <button onClick={handleFetchUser}>FetchUser</button>
      <Outlet />
    </>
  );
}
