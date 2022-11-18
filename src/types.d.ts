export type StatusType = "todo" | "doing" | "done";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: StatusType;
}

export interface IBoard {
  id: number;
  title: string;
  todos: ITodo[];
}
