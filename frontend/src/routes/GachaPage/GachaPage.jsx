import LabelBottomNavigation from "@/components/navbar/Navbar";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CarouselPlugin } from "@/components/ui/carouselImagesPlugin";
import { DialogOtp } from "@/components/otp-pop-up";
import { useState } from "react";
import ticketIcon from "/ticket.svg";
import DatabaseAPIService from "@/api/services/DatabaseAPIService";


export default function GachaPage() {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const gachaImages = [
    "/mons/earth_common_2.png",
    "/mons/fire_common_2.png",
    "/mons/ice_common_1.png",
    "/mons/fairy_threatened_2.png",
    "/mons/flying_threatened_1.png",
    "/mons/water_threatened_1.png",
  ]
  const handleVerifyOtp = async () => {
    try {
      const response = await DatabaseAPIService.verifyRecycleOtp(otp);
      if (response.status === 200) {
        // otp verification successful
        console.log("Otp verified successfully");
        setErrorMessage('');
      } else {
        // otp verification failed (Bad request === 400)
        setErrorMessage('Invalid OTP! Please try again.');
      }
    } catch (error) {
      console.error("Error in handleVerifyOtp", error);
    }
  }

  return (
    <>
      <div className="flex flex-col h-max w-screen min-h-[100vh] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <TextGenerateEffect words="Claim your Rewards!"/>
        <CarouselPlugin images={gachaImages}/>
        <div className="pack-wrapper flex flex-col pt-3">
          <div className="ticket-wrapper flex">
          <div className="pr-2 font-medium">Remaining: </div>
            <img
              src={ticketIcon}
              style={{ height: 24, width: 24 }}
              alt="ticketIcon"
            />
            <div className="pl-2">x 1</div>
          </div>

          <Button className="mt-4">Open Pack</Button>
        </div>

        <Separator className="my-8 w-[70vw]" />

        <div className="otp-wrapper flex flex-col items-center justify-center">
          <DialogOtp />
          {/* <Label htmlFor="otp" className="mb-2">
            Enter OTP
          </Label>
          <Input
            id="otp"
            className="w-[60vw] text-center"
            placeholder="Enter here..."
            onChange={(e) => setOtp(e.target.value)}
          />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>} */}
        </div>
        {/* <Button className="mt-4" onClick={handleVerifyOtp}>Redeem</Button> */}
      </div>
      <LabelBottomNavigation />
    </>
  );
}
