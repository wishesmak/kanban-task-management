export type StatusType = "todo" | "doing" | "done";

export interface ITodo {}

export interface IBoard {
  id: number;
  title: string;
  todos: { todo: string[]; doing: string[]; done: string[] };
}
