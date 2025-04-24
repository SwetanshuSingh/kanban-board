import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CategorySelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Category" />
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
