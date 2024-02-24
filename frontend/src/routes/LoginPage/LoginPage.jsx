import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../hooks/AuthProvider";
import "./LoginPage.css";
import GoogleAPIService from "../../api/services/GoogleAPIService";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { BackgroundBeams } from "@/components/background-beams";
import { Spotlight } from "@/components/spotlight";

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
      <div className="login-page-wrapper bg-neutral-950">
        <div className="blur-wrapper h-full w-full">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            Welcome to Environmentals
          </h1>

          <button
            onClick={googleLogin}
            className="px-4 py-2 border flex gap-2 border-slate-200 bg-white dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:opacity-80 hover:text-slate-700 dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
      {/* <Spotlight /> */}
      {/* <BackgroundBeams /> */}
    </>
  );
}
