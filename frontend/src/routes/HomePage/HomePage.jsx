import { useAuth } from "../../hooks/AuthProvider";
import "./HomePage.css";
import LabelBottomNavigation from "../../components/navbar/Navbar";
import Box from "@mui/material/Box";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import ProgressBar from "@/components/progressBar/progressbar";

export default function HomePage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const bottle = user.totalBottlesRecycled;
  const bottlescollected = bottle % 5;
  const value = (bottlescollected / 5) * 100;
  const bottlestogo = 5 - bottlescollected;

  return (
    <>
      <div className="flex flex-col h-min w-full min-h-[100vh] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words={"Welcome " + user.userName + " !"} />
        <div className="text-center text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500">
          Bottles recycled: <span style={{ color: "red" }}>{bottle}</span>
        </div>
        <div className="flex justify-center items-center py-8">
          <div>
            <ProgressBar value={value} />
          </div>
        </div>
        <div className="text-center text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500">
          You have <span style={{ color: "red" }}>{bottlestogo}</span> bottle(s)
          to go!
        </div>
        <div className="py-5">
          <Box
            sx={{
              border: "3px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <div className="text-center text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500 py-2">
              Save the Environmentals!
            </div>
            <div className="text-center-justify py-2">
              Recycle used plastic bottles or aluminium cans 
              at the nearest
              RecycleNSave vending machines now! 
            </div>
            <div className="text-center-justify py-2">
              Begin your journey to 
              protect the Environmentals: Magical & Mystical 
              creatures that thrive in a 
              clean and sustainable environment.
            </div>
            <div className="text-center-justify py-2">
              1. Every 5 items recycled will earn you a reward!
              2. Claim reward OTP via Environmentals WebApp
              3. Stand a chance to collect all avatars!
            </div>
          </Box>
        </div>
        <div className="flex items-center justify-center py-3">
          <button
            onClick={handleLogout}
            className="px-4 py-2 border bg-blackflex gap-2 border-slate-200 dark:border-slate-700 rounded-lg bg-blacktext-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:opacity-800 hover:text-slate-700 dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <div className="text-black">Logout</div>
          </button>
        </div>
        <LabelBottomNavigation />
      </div>
    </>
  );
}
