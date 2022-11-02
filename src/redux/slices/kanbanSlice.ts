import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types/types";

interface IState {
  boards: IBoard[];
}

const initialState: IState = {
  boards: [
    {
      id: "12314123",
      title: "Board 1",
      todos: {
        todo: [],
        doing: [],
        done: [],
      },
    },
  ],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {},
});

export const {} = kanbanSlice.actions;

export default kanbanSlice.reducer;
