export type StatusType = "todo" | "doing" | "done";

export interface ITodo {}

export interface IBoard {
  id: string;
  title: string;
  todos: { todo: []; doing: []; done: [] };
}
