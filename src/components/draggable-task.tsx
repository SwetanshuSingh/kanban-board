import { Task } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import { Link, MessageCircleMore } from "lucide-react";
import { CSSProperties } from "react";

interface DraggableTaskProps {
  task: Task;
}

export function DraggableTask({ task }: DraggableTaskProps) {
  const { id, title, description, chatCount } = task;

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: {
        type: "task",
        task,
      },
    });

  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  if (isDragging) {
    return (
      <div className="w-full h-fit bg-white flex flex-col justify-between gap-3 p-3 rounded-xl animate-pulse">
        <span className="bg-amber-600 w-1/6 h-1.5 rounded-lg"></span>

        <div className="flex flex-col gap-0.5">
          <p>{title}</p>
          <p className="text-sm font-medium text-gray-500 leading-4">
            {description}
          </p>
        </div>

        <div className="flex justify-start items-center gap-4">
          <Link size={16} className="text-gray-500" />

          <span className="flex justify-start items-center gap-1">
            <MessageCircleMore size={16} className="text-gray-500" />
            <p className="text-sm text-gray-500 font-medium tracking-tight">
              {chatCount}
            </p>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-full h-fit bg-white flex flex-col justify-between gap-3 p-3 rounded-xl cursor-grab"
    >
      <span className="bg-amber-600 w-1/6 h-1.5 rounded-lg"></span>

      <div className="flex flex-col gap-0.5">
        <p>{title}</p>
        <p className="text-sm font-medium text-gray-500 leading-4">
          {description}
        </p>
      </div>

      <div className="flex justify-start items-center gap-4">
        <Link size={16} className="text-gray-500" />

        <span className="flex justify-start items-center gap-1">
          <MessageCircleMore size={16} className="text-gray-500" />
          <p className="text-sm text-gray-500 font-medium tracking-tight">
            {chatCount}
          </p>
        </span>
      </div>
    </div>
  );
}
