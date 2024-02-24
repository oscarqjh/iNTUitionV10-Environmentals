import { TextGenerateEffect } from "@/components/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { useEffect, useState } from "react";
import { clamp } from "@/lib/utils";
import { LayoutGrid } from "@/components/layout-grid";
import { cardData } from "@/data/data.jsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useLocation } from "react-router-dom";
import LabelBottomNavigation from "@/components/navbar/Navbar";
import { useAuth } from "@/hooks/AuthProvider";

export default function CollectionsPage() {
  const [initialised, setInitialised] = useState(false);
  const [spin, setSpin] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const location = useLocation();
  const [range, setRange] = useState([]);
  const { user } = useAuth();
  const [total, setTotal] = useState();

  useEffect(() => {
    if (user) {
      setTotal(
        user.collections.reduce((acc, curr) => {
          return curr.count > 0 ? acc + curr.count : acc;
        }, 0)
      );
    }
  }, [user]);

  const getRange = (id) => {
    if (id === "#2") {
      return [21, 30];
    } else if (id === "#1") {
      return [11, 20];
    }
    return [1, 10];
  };

  useEffect(() => {
    setRange(getRange(location.hash));
  }, [location]);

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
        // console.log(spin);
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
      <div className="flex flex-col h-max w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words="Equipped" />
        <CardContainer className="inter-var" animateX={x} animateY={y}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto mx-[15vw] rounded-xl p-6 border  ">
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
                src="/mons/earth_common_1.png"
                className=" rounded-xl group-hover/card:shadow-xl"
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
        <div className="mb-4">Collected {total}/25</div>
        <div className="collections-wrapper h-max ">
          <div className="h-max pb-[15vh] w-screen">
            <LayoutGrid
              cards={cardData}
              range={range}
              userCollections={user.collections}
            />
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`#${
                      location.hash
                        ? location.hash.split("#")[1] - 1 < 0
                          ? 2
                          : (location.hash.split("#")[1] - 1) % 3
                        : 2
                    }`}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#0"
                    isActive={location.hash ? location.hash === "#0" : true}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#1" isActive={location.hash === "#1"}>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#2" isActive={location.hash === "#2"}>
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href={`#${
                      location.hash ? (location.hash.split("#")[1] + 1) % 3 : 1
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      <LabelBottomNavigation />
    </>
  );
}
