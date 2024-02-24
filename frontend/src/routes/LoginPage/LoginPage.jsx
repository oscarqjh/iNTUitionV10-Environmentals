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
    <div>
      <h1>Login</h1>
      <p>Login content</p>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
}
