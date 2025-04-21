export type BoardColId = "to-do" | "doing" | "done";

export type Task = {
  id: string;
  title: string;
  category: BoardColId;
  description: string;
  chatCount: number;
};
