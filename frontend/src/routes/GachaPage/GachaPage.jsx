import LabelBottomNavigation from "@/components/navbar/Navbar";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import ticketIcon from "/ticket.svg";


export default function GachaPage() {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="flex flex-col h-max w-full min-h-[100vh] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-start">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words="Reward" />

        <div className="pack-wrapper flex flex-col">
          <div className="ticket-wrapper flex">
            <img
              src={ticketIcon}
              style={{ height: 24, width: 24 }}
              alt="ticketIcon"
            />
            <div className="pl-2">x1</div>
          </div>

          <Button className="mt-4">Open Pack</Button>
        </div>

        <Separator className="my-8 w-[70vw]" />

        <div className="otp-wrapper flex flex-col items-start justify-start">
          <Label htmlFor="otp" className="mb-2">
            Enter OTP
          </Label>
          <Input
            id="otp"
            className="w-[60vw] text-center"
            placeholder="Enter here..."
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <Button className="mt-4">Redeem</Button>
      </div>
      <LabelBottomNavigation />
    </>
  );
}
