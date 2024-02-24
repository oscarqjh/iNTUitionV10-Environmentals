import { TextGenerateEffect } from "@/components/text-generate-effect";
import { useEffect, useState } from "react";

export default function CollectionsPage() {
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    if (!initialised) {
      setInitialised(true);
      window.addEventListener("deviceorientation", handleOrientation, true);
      function handleOrientation(event) {
        // those angles are in degrees
        var alpha = event.alpha;
        var beta = event.beta;
        var gamma = event.gamma;

        // JS math works in radians
        var betaR = (beta / 180) * Math.PI;
        var gammaR = (gamma / 180) * Math.PI;
        var spinR = Math.atan2(
          Math.cos(betaR) * Math.sin(gammaR),
          Math.sin(betaR)
        );

        // convert back to degrees
        var spin = (spinR * 180) / Math.PI;
        console.log(spin);
      }
    }
  }, []);

  return (
    <>
      <div className="flex flex-col h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <TextGenerateEffect words="Collections" />
      </div>
    </>
  );
}
