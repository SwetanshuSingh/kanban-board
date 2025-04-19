import { useDroppable } from "@dnd-kit/core";
import { DraggableTask } from "./draggable-task";
import { BoardColId } from "@/types";

interface task {
  id: number;
  category: string;
  title: string;
}

interface BoardColumnProps {
  id: BoardColId;
  name: string;
  tasks: task[];
}

export default function BoardColumn({ id, name, tasks }: BoardColumnProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`w-1/4 h-full py-4 flex flex-col gap-4 rounded-xl ${
        isOver ? "bg-purple-700/15" : "bg-secondary"
      }`}
    >
      <span className="w-full flex justify-between items-center px-4">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-700">{}</p>
      </span>

      <div className="w-full flex flex-col gap-2 px-2">
        {tasks.map((task) => (
          <DraggableTask id={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
}
