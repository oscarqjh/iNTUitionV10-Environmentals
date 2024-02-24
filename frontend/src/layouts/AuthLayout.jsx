import { Outlet } from "react-router-dom";
import { AuthProvider } from "../hooks/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId="284875334867-r0njoc8v4jk2ambditge7q4377rrsnb2.apps.googleusercontent.com">
        <Outlet />
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}
