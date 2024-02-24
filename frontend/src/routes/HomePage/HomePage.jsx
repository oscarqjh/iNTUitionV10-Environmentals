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

  const bottle = 81;
  const bottlescollected = bottle % 5;
  const value = (bottlescollected/5)*100;
  const bottlestogo = 5 - bottlescollected;
  
  return (
    <>
      <div className="flex flex-col h-min w-full min-h-[100vh] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <TextGenerateEffect words="Welcome back, User!" />
          <div className="text-center text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500">
            Bottles recycled: <span style={{color:"red"}}>{bottle}</span>
            </div>
            <div className ="flex justify-center items-center py-8">
            <div>
                <ProgressBar value={value} />
            </div>
            </div>
            <div className="text-center text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500">
              You have <span style={{color:"red"}}>{bottlestogo}</span> bottle(s) to go!
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
              Did you know?
            </div>
            <div className="text-center-justify py-2">
              Recycling is often emphasized as a crucial step in environmental
              conservation. When recycling plastic, we contribute to energy
              conservation since recycling consumes less energy compared to
              producing new plastic.
            </div>
          </Box>
          </div>
          <div className="flex items-center justify-center py-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2 border bg-blackflex gap-2 border-slate-200 dark:border-slate-700 rounded-lg bg-blacktext-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:opacity-800 hover:text-slate-700 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <div className = "text-black">
              Logout
              </div>
            </button>
          </div>
          <LabelBottomNavigation />
        </div>
    </>
  );
}