import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../hooks/AuthProvider";
import "./LoginPage.css";
import GoogleAPIService from "../../api/services/GoogleAPIService";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { BackgroundBeams } from "@/components/background-beams";
import { Spotlight } from "@/components/spotlight";
import { TextGenerateEffect2 } from "@/components/text-generate-effect2";

export default function LoginPage() {
  const { user, login, googleAuthLogin } = useAuth();

  //Google OAuth flow
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await GoogleAPIService.getGoogleData(tokenResponse);
        // console.log(response.data);
        const userData = {
          email: response.data.email,
          name: response.data.name,
        };
        googleAuthLogin(userData);
      } catch (e) {
        console.log(e);
      }
    },
    onError: (e) => {
      console.log(e);
    },
  });

  return (
    <>
      <div className="flex flex-col h-screen w-screen dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <TextGenerateEffect2 words="Welcome to Environmentals" />
        <button
          onClick={googleLogin}
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:opacity-80 hover:text-slate-700 dark:hover:text-slate-300 hover:shadow transition duration-150"
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
    </>
  );
}
