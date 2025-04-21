"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import BoardColumn from "./board-col";
import { useState } from "react";
import { BoardColId, Task } from "@/types";
import { Plus } from "lucide-react";
import { data } from "@/lib/constants";
import { DraggableTask } from "./draggable-task";
import { createPortal } from "react-dom";

interface BoardColData {
  id: BoardColId;
  name: string;
}

const boardCol: BoardColData[] = [
  { id: "to-do", name: "To-Do" },
  { id: "doing", name: "Doing" },
  { id: "done", name: "Done" },
];

// const data = [
//   { id: 1, category: "to-do", title: "Walk the Dog" },
//   { id: 2, category: "doing", title: "Run the Tests" },
//   { id: 3, category: "done", title: "Complete Bundle Checks" },
//   { id: 4, category: "to-do", title: "Attend the Meeting" },
//   { id: 5, category: "done", title: "Walk 5 kilometer" },
// ];

export default function Board() {
  const [tasks, setTasks] = useState(data);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  function handleDragStart(evt: DragStartEvent) {
    const { active } = evt;

    if (active.data.current?.type == "task") {
      setActiveTask(active.data.current.task);
      return;
    }
  }

  function handleDragEnd(evt: DragEndEvent) {
    const { active, over } = evt;

    if (!over) return;

    const taskId = active.id as string;
    const newCategory = over.id as BoardColId;

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              category: newCategory,
            }
          : task
      )
    );
  }

  return (
    <div className="w-full h-full flex justify-start items-startg gap-4">
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        {boardCol.map((col) => (
          <BoardColumn
            key={col.id}
            id={col.id}
            name={col.name}
            tasks={tasks.filter((task) => task.category === col.id)}
            activeTask={activeTask}
          />
        ))}
        {/* <div className="w-1/4 h-fit py-4 flex justify-center items-center rounded-xl border border-dashed border-gray-300 cursor-pointer hover:bg-gray-100 hover:duration-200 hover:transition-colors">
          <span className="flex justify-center items-center gap-2 text-gray-500">
            <Plus size={16} />
            <p>Add Another List</p>
          </span>
        </div> */}
        {createPortal(
          <DragOverlay>
            {activeTask && <DraggableTask task={activeTask} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}
