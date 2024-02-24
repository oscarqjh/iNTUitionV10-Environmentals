import { TextGenerateEffect } from "@/components/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { useEffect, useState } from "react";
import { clamp } from "@/lib/utils";

export default function CollectionsPage() {
  const [initialised, setInitialised] = useState(false);
  const [spin, setSpin] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

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
        var alphaR = (alpha / 180) * Math.PI;
        var betaR = (beta / 180) * Math.PI;
        var gammaR = (gamma / 180) * Math.PI;
        var spinR = Math.atan2(
          Math.cos(betaR) * Math.sin(gammaR),
          Math.sin(betaR)
        );

        // convert back to degrees
        var spin = (spinR * 180) / Math.PI;
        console.log(spin);
        const x = clamp(Math.floor(gamma), -10, 10);
        const y = clamp(Math.floor(beta - 45), -10, 10);

        setAlpha(Math.floor(alpha));
        setBeta(Math.floor(beta));
        setX(x);
        setY(y);
      }
    }
  }, []);

  return (
    <>
      <div className="flex flex-col h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <p className="w-[70%] h-[1000px] text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500 py-8">
          a: {alpha}
        </p>
        <p className="w-[70%] h-[1000px] text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500 py-8">
          b: {beta}
        </p>
        <p className="w-[70%] h-[1000px] text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500 py-8">
          x: {x}
        </p>
        <p className="w-[70%] h-[1000px] text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-black from-neutral-200 to-neutral-500 py-8">
          y: {y}
        </p>

        <CardContainer className="inter-var" animateX={x} animateY={y}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Flying Dog
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A flying dog mon
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/mons/earth_legendary_1.png"
                height="1000"
                width="1000"
                className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Level: 10
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Level up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <TextGenerateEffect words="Collections" />
      </div>
    </>
  );
}
