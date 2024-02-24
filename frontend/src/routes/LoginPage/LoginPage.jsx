import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../hooks/AuthProvider";
import "./LoginPage.css";
import GoogleAPIService from "../../api/services/GoogleAPIService";

export default function LoginPage() {
  const { user, login, logout } = useAuth();

  //Google OAuth flow
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await GoogleAPIService.getGoogleData(tokenResponse);
        console.log(response.data);
        login({ user: response.data });
      } catch (e) {
        console.log(e);
      }
    },
    onError: () => {},
  });

  return (
    <>
      <div className="login-page-wrapper">
        <h1>Welcome to Environmentals</h1>
        <button onClick={googleLogin}>Login with Google</button>
      </div>
    </>
  );
}
