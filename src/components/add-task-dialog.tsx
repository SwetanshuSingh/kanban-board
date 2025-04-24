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
import { Plus } from "lucide-react";

export default function AddTask() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex justify-center items-center px-2 py-2.5 rounded-lg gap-2 text-gray-500 hover:bg-white hover:text-black transition-colors duration-200">
          <Plus size={16} />
          <p>Add Task</p>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Enter the task details below.</DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col justify-start gap-1">
            <p className="">Title</p>
            <Input />
          </div>

          <div className="flex flex-col justify-start gap-1">
            <p className="">Description</p>
            <Input />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
