import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types/types";

interface IState {
  boards: IBoard[];
  activeBoard: number;
}

const initialState: IState = {
  activeBoard: 1,
  boards: [
    {
      id: 1,
      title: "Board 1",
      todos: {
        todo: [],
        doing: [],
        done: [],
      },
    },
    {
      id: 2,
      title: "Board 2",
      todos: {
        todo: [],
        doing: [],
        done: [],
      },
    },
    {
      id: 3,
      title: "Board 3",
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
  reducers: {
    setActiveBoard(state, { payload }) {
      state.activeBoard = payload;
    },
  },
});

export const { setActiveBoard } = kanbanSlice.actions;

export default kanbanSlice.reducer;
