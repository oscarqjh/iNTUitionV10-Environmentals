import DatabaseAPIService from "@/api/services/DatabaseAPIService";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function VendingPage() {
  const [otp, setOtp] = useState("");
  const handleClick = async () => {
    console.log("Recycling 5 plastic bottles...");
    const data = {
      locationId: "1",
      recycleCompany: "Test Company",
      recycleType: "plastic",
      recycleAmount: 5,
      experienceEarned: 5,
    };
    const response = await DatabaseAPIService.generateRecycleOtp(data);
    console.log(response.data);
    setOtp(response.data.recycleOtp);
  };
  return (
    <>
      <div className="flex flex-col h-screen w-screen dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <TextGenerateEffect words="Collect your reward" />
        <div className="mb-2">
          Click this button to recycle 5 plastic bottles!
        </div>
        <Button
          onClick={handleClick}
          className="text-white px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-200 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:opacity-80 hover:text-slate-700 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          Recycle
        </Button>
        <Separator className="my-8 w-[70vw]" />
        <Card className="w-[70vw]">
          <CardHeader>
            <CardTitle>OTP</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{otp ? otp : "OTP will be shown here"}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
