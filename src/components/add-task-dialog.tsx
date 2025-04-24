"use client";

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
import CategorySelect from "./category-select";

export default function AddTask() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="min-w-[200px] w-fit flex justify-center items-center px-2 py-2.5 rounded-lg gap-2 bg-black text-white hover:bg-black/80 hover:text-gray-50 transition-colors duration-200">
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

          <div className="flex flex-col justify-start gap-1">
            <p className="">Category</p>
            <CategorySelect />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
