import DatabaseAPIService from "@/api/services/DatabaseAPIService";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ring } from "ldrs";
import { useAuth } from "@/hooks/AuthProvider";

export function DialogOtp() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [recycleAmount, setRecycleAmount] = useState(0);
  const [newTickets, setNewTickets] = useState(0);
  const { user, setUser } = useAuth();

  ring.register();

  const handleVerifyOtp = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    try {
      const response = await DatabaseAPIService.verifyRecycleOtp(otp);
      if (response.status === 200) {
        // otp verification successful
        console.log("Otp verified successfully");
        console.log(response.data);

        setRecycleAmount(response.data.recycleAmount);
        const totalRecycleAmount =
          user.totalBottlesRecycled + response.data.recycleAmount;
        const newTickets = Math.floor(
          ((user.totalBottlesRecycled % 5) + response.data.recycleAmount) / 5
        );
        setNewTickets(newTickets);

        const anotherResponse = await DatabaseAPIService.updateUser({
          ...user,
          totalBottlesRecycled: totalRecycleAmount,
          tickets: user.tickets + newTickets,
        });
        setUser(anotherResponse.data);
        console.log(anotherResponse.data);
        // setErrorMessage("");
      } else {
        // otp verification failed (Bad request === 400)
        console.log("Invalid OTP");
        // setErrorMessage("Invalid OTP! Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog className="flex flex-col justify-center items-center">
      <DialogTitle className="justify-center">
        Want to earn more tickets?{" "}
      </DialogTitle>
      <DialogTitle className="justify-center">Start Recycling!</DialogTitle>
      <DialogTrigger asChild>
        <Button className="mt-4 justify-center">Recycle Now!</Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] rounded-sm justify-center">
        <DialogHeader>
          <DialogTitle>Recycle Now!</DialogTitle>
          <DialogDescription>
            Enter the OTP generated by the machine.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              OTP
            </Label>
            <Input
              id="name"
              autocomplete={false}
              placeholder="Eg. 123456"
              onChange={(e) => setOtp(e.target.value)}
              className="placeholder:italic placeholder:text-slate-400 col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" /> */}
          </div>
        </div>
        <DialogFooter>
          {loading ? (
            <l-ring
              size="40"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="black"
            ></l-ring>
          ) : recycleAmount === 0 ? null : (
            <div>
              <p>You recycled {recycleAmount} bottles.</p>
              <p>You earned {newTickets} tickets!</p>
            </div>
          )}

          <Button className="mb-4" onClick={handleVerifyOtp}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
