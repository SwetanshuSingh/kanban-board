import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BoardColId, Task } from "@/types";
import { SetStateAction } from "react";

interface CategorySelectProps {
  category: BoardColId;
  setNewTask: React.Dispatch<SetStateAction<Task>>;
}

function CategorySelect({ category, setNewTask }: CategorySelectProps) {
  function handleValueChange(value: string) {
    setNewTask((prev) => ({ ...prev, category: value as BoardColId }));
  }

  return (
    <Select value={category} onValueChange={handleValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="to-do">To-Do</SelectItem>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CategorySelect;
