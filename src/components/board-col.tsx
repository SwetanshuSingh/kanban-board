"use client";

import { useDroppable } from "@dnd-kit/core";
import { DraggableTask } from "./draggable-task";
import { BoardColId, Task } from "@/types";
import AddTask from "./add-task-dialog";

interface BoardColumnProps {
  id: BoardColId;
  name: string;
  tasks: Task[];
  activeTask: Task | null;
}

export default function BoardColumn({
  id,
  name,
  tasks,
  activeTask,
}: BoardColumnProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`w-1/4 min-h-[600px] h-full max-h-[600px] py-4 flex flex-col gap-4 rounded-xl ${
        isOver ? "bg-purple-600/10" : "bg-secondary"
      }`}
    >
      <span className="w-full flex justify-between items-center px-4">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-700">{}</p>
      </span>

      <div className="w-full flex flex-grow flex-col gap-2 px-2 overflow-y-auto">
        {tasks.map((task) => (
          <DraggableTask key={task.id} task={task} />
        ))}
      </div>

      {/* <span className="w-full px-2">
        <AddTask />
      </span> */}
    </div>
  );
}
