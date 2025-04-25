import { data } from "@/lib/constants";
import { BoardColId, Task } from "@/types";
import { create } from "zustand";

type TaskStore = {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskId: string) => void;
  updateTaskCategory: (taskId: string, newCategory: BoardColId) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: data,

  // Add new Task
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),

  // Remove a Task
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  // Update category of an existing Task
  updateTaskCategory: (taskId, newCategory) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, category: newCategory } : task
      ),
    })),
}));

export default useTaskStore;
