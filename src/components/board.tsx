"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import BoardColumn from "./board-col";
import { useState } from "react";
import { BoardColId } from "@/types";

interface BoardColData {
  id: BoardColId;
  name: string;
}

const boardCol: BoardColData[] = [
  { id: "to-do", name: "To-Do" },
  { id: "doing", name: "Doing" },
  { id: "done", name: "Done" },
];

const data = [
  { id: 1, category: "to-do", title: "Walk the Dog" },
  { id: 2, category: "doing", title: "Run the Tests" },
  { id: 3, category: "done", title: "Complete Bundle Checks" },
  { id: 4, category: "to-do", title: "Attend the Meeting" },
  { id: 5, category: "done", title: "Walk 5 kilometer" },
];

export default function Board() {
  const [tasks, setTasks] = useState(data);

  function handleDragEnd(evt: DragEndEvent) {
    const { active, over } = evt;

    if (!over) return;

    const taskId = active.id as number;
    const newCategory = over.id as BoardColId;

    console.log("Active", taskId);
    console.log("Over", newCategory);

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
      <DndContext onDragEnd={handleDragEnd}>
        {boardCol.map((col) => (
          <BoardColumn
            key={col.id}
            id={col.id}
            name={col.name}
            tasks={tasks.filter((task) => task.category === col.id)}
          />
        ))}
      </DndContext>
    </div>
  );
}
