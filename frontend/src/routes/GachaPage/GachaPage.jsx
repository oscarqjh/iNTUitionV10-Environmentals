import LabelBottomNavigation from "@/components/navbar/Navbar";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function GachaPage() {
  return (
    <>
      <div className="flex flex-col h-max w-full min-h-[100vh] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words="Redeem" />
      </div>
      <LabelBottomNavigation />
    </>
  );
}
