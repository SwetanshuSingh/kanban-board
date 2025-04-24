import AddTask from "@/components/add-task-dialog";
import Board from "@/components/board";
import Sidebar from "@/components/sidebar";
import { SquareKanban } from "lucide-react";

export default function Page() {
  return (
    <main className="w-full h-screen bg-primary p-2 flex gap-10">
      {/* <Sidebar /> */}
      <section className="w-full h-full p-6 flex flex-col gap-8">
        <SectionHeading />
        <SectionNavbar />
        <Board />
      </section>
    </main>
  );
}

function SectionHeading() {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <h3 className="text-3xl font-semibold tracking-tight">Task Automate</h3>
      <AddTask />
    </div>
  );
}

function SectionNavbar() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <SquareKanban size={16} stroke="#7e22ce" />
        <p className="text-base font-medium">Kanban</p>
      </div>

      <span className="w-full h-[2px] bg-gray-200">
        <div className="w-[7%] h-full bg-purple-700"></div>
      </span>
    </div>
  );
}
