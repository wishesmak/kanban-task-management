import { createSlice } from "@reduxjs/toolkit";
import { IBoard, StatusType } from "../../types";

interface IKanbanSlice {
  activeBoardId: number | null;
  boards: IBoard[];
}

const initialState: IKanbanSlice = {
  activeBoardId: null,
  boards: [
    {
      id: 0,
      title: "Platform Launch",
      todos: [
        {
          id: 0,
          title: "Drink coffee",
          status: "todo",
          description: "Mmmmmm nyam",
        },
        {
          id: 1,
          title: "Swimming",
          status: "doing",
          description: "Mmmmmm nyam",
        },
        {
          id: 2,
          title: "Swimming",
          status: "todo",
          description: "Blabalbla balblalb blb al",
        },
      ],
    },
    {
      id: 1,
      title: "Board 2",
      todos: [
        { id: 0, title: "Working", status: "todo", description: "Mmmmmm nyam" },
      ],
    },
  ],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    // Set Active Board
    setActiveBoardId(state, { payload }: { payload: number }) {
      state.activeBoardId = payload;
    },

    // Create Board
    createBoard(state, { payload }: { payload: string }) {
      const newBoardId =
        state.boards.length > 0
          ? state.boards[state.boards.length - 1].id + 1
          : 0;
      state.boards.push({
        id: newBoardId,
        title: payload,
        todos: [],
      });

      state.activeBoardId = newBoardId;
    },

    // Remove Board
    removeBoard(state, { payload }: { payload: number }) {
      state.boards.filter((board) => board.id !== payload);
    },

    // Create Task
    createTask(
      state,
      {
        payload,
      }: {
        payload: { title: string; description: string; status: StatusType };
      }
    ) {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );
      activeBoard?.todos.push({
        id: activeBoard.todos[activeBoard.todos.length - 1].id + 1,
        title: payload.title,
        description: payload.description,
        status: payload.status,
      });
    },

    // Remove Task
    removeTask(state, { payload }: { payload: number }) {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );
      activeBoard?.todos.filter((todo) => todo.id !== payload);
    },

    // Change Task Status
    changeTaskStatus(
      state,
      { payload }: { payload: { id: number; status: StatusType } }
    ) {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );
      if (activeBoard) {
        const todo = activeBoard.todos.find((todo) => todo.id === payload.id);
        if (todo) {
          todo.status = payload.status;
        }
      }
    },
  },
});

export default kanbanSlice.reducer;

export const {
  setActiveBoardId,
  createBoard,
  removeBoard,
  createTask,
  removeTask,
  changeTaskStatus,
} = kanbanSlice.actions;
