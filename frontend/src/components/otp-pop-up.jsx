import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogOtp() {
  return (
    <Dialog className="flex flex-col justify-center items-center">
      <DialogTitle className="justify-center">Want to earn more tickets? </DialogTitle>
      <DialogTitle className="justify-center">Start Recycling!</DialogTitle>
      <DialogTrigger asChild>
        <Button className="mt-4 justify-center" >Recycle Now!</Button>
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
            <Input id="name" placeholder="Eg. 123456" className="placeholder:italic placeholder:text-slate-400 col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" /> */}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}