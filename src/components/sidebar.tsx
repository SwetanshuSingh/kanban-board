import TaskIcon from "@/assets/task-icon";
import YelpIcon from "@/assets/yelp-icon";
import { Home } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-fit h-full rounded-md bg-secondary p-3 flex flex-col gap-8 items-center">
      <YelpIcon />

      <SidebarItem label="Home">
        <Home stroke="#4b5563" size={28} strokeWidth={1.5} />
      </SidebarItem>

      <SidebarItem label="Tasks">
        <TaskIcon />
      </SidebarItem>
    </aside>
  );
}

function SidebarItem({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <span className="flex flex-col justify-center items-center gap-1 bg-white p-2 rounded-lg">
      {children}
      <p className="text-sm tracking-tight text-gray-600 font-medium">
        {label}
      </p>
    </span>
  );
}
