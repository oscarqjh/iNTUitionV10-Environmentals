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
import { quantum } from "ldrs";
import { cardData } from "@/data/data";

export function DialogGacha(props) {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  quantum.register();

  console.log(props.imgIndex);

  return (
    <Dialog className="flex flex-col justify-center items-center">
      <DialogTrigger asChild>
        <Button
          disabled={props.disabled}
          onClick={props.onClick}
          className="mt-4 justify-center"
        >
          Open Pack!
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] rounded-sm justify-center">
        <DialogHeader>
          <DialogTitle>You got</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {props.loading ? (
            <div className="flex justify-center items-center w-[70vw] h-[70vw] rounded-lg border-4 border-stone-700 dark:border-slate-700">
              <l-quantum size="45" speed="1.75" color="black"></l-quantum>
            </div>
          ) : (
            <img
              className="w-[70vw] h-[70vw] rounded-lg border-4 border-stone-700 dark:border-slate-700"
              src={
                cardData[props.imgIndex]
                  ? cardData[props.imgIndex].thumbnail
                  : ""
              }
              alt="gacha"
            />
          )}
        </div>
        <DialogFooter>
          <DialogTitle>
            {props.loading
              ? "???"
              : cardData[props.imgIndex - 1]
              ? cardData[props.imgIndex - 1].name
              : ""}
          </DialogTitle>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
