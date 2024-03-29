"use client";
import { cn, isMobileTablet } from "@/lib/utils";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  animateX,
  animateY,
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [initialised, setInitialised] = useState(false);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const requestRef = useRef();

  // const animate = () => {
  //   if (!containerRef.current) return;
  //   containerRef.current.style.transform = `rotateY(${animateY}deg) rotateX(${animateX}deg)`;
  //   console.log(animateX, animateY);
  //   requestRef.current = requestAnimationFrame(animate);
  // };

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(requestRef.current);
  // }, []);

  // useEffect(() => {
  //   function handleOrientation(event) {
  //     if (!containerRef.current) return;
  //     // those angles are in degrees
  //     var alpha = event.alpha;
  //     var beta = event.beta;
  //     var gamma = event.gamma;

  //     // JS math works in radians
  //     var alphaR = (alpha / 180) * Math.PI;
  //     var betaR = (beta / 180) * Math.PI;
  //     var gammaR = (gamma / 180) * Math.PI;
  //     var spinR = Math.atan2(
  //       Math.cos(betaR) * Math.sin(gammaR),
  //       Math.sin(betaR)
  //     );

  //     // convert back to degrees
  //     var spin = (spinR * 180) / Math.PI;

  //     const x = clamp(Math.floor(gamma), -10, 10);
  //     const y = clamp(Math.floor(beta - 45), -10, 10);

  //     containerRef.current.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  //   }
  //   if (!initialised) {
  //     setInitialised(true);

  //     window.addEventListener("deviceorientation", handleOrientation, true);
  //   }
  //   return () => {
  //     window.removeEventListener("deviceorientation", handleOrientation, true);
  //   };
  // }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-4 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
