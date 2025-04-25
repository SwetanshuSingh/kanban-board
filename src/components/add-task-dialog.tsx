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
import { useState } from "react";
import { Task } from "@/types";
import useTaskStore from "@/store/task";

export default function AddTask() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);

  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    category: "to-do",
    description: "",
    chatCount: 0,
  });

  const [open, setOpen] = useState(false);

  function handleNewTask() {
    console.log(tasks);
    const { title, description, category } = newTask;

    if (!title || title.trim() === "") return;

    if (!description || description.trim() === "") return;

    const data: Task = {
      id: (tasks.length + 1).toString(),
      title: newTask.title,
      description: newTask.description,
      category: newTask.category,
      chatCount: newTask.chatCount,
    };

    addTask(data);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <Input
              value={newTask.title}
              onChange={(evt) =>
                setNewTask((prev) => ({ ...prev, title: evt.target.value }))
              }
            />
          </div>

          <div className="flex flex-col justify-start gap-1">
            <p className="">Description</p>
            <Input
              value={newTask.description}
              onChange={(evt) =>
                setNewTask((prev) => ({
                  ...prev,
                  description: evt.target.value,
                }))
              }
            />
          </div>

          <div className="flex flex-col justify-start gap-1">
            <p className="">Category</p>
            <CategorySelect
              category={newTask.category}
              setNewTask={setNewTask}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleNewTask}>Create Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
