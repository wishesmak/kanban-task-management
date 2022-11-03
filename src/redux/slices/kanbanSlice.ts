import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types/types";

interface IState {
  boards: IBoard[];
  activeBoardId: number;
}

const initialState: IState = {
  activeBoardId: 1,
  boards: [
    {
      id: 1,
      title: "Board 1",
      todos: [],
    },
    {
      id: 2,
      title: "Board 2",
      todos: [],
    },
  ],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setActiveBoard(state, { payload }) {
      state.activeBoardId = payload;
    },
    createBoard(state, { payload }) {
      if (!state.boards.find((board) => board.title === payload)) {
        state.boards.push({
          id: state.boards.length + 1,
          title: payload,
          todos: [],
        });
      }
    },
    createTask(state, { payload }) {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );

      activeBoard?.todos.push({
        ...payload,
        id: activeBoard?.todos.length + 1,
      });
    },
  },
});

export const { setActiveBoard, createTask, createBoard } = kanbanSlice.actions;

export default kanbanSlice.reducer;
