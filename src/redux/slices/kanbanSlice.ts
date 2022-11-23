import { createSlice } from "@reduxjs/toolkit";
import { IBoard, StatusType } from "../../types";

interface IKanbanSlice {
  activeBoardId: number | null;
  editableTaskId: number | null;
  boards: IBoard[];
}

const initialState: IKanbanSlice = {
  activeBoardId: null,
  editableTaskId: null,
  boards: [],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    // Set Active Board
    setActiveBoardId(state, { payload }: { payload: number | null }) {
      state.activeBoardId = payload;
    },

    // Set Editable Task
    setEditableTaskId(state, { payload }: { payload: number | null }) {
      state.editableTaskId = payload;
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
    removeTask(state) {
      let activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );

      if (activeBoard)
        activeBoard.todos = activeBoard.todos.filter(
          (todo) => todo.id !== state.editableTaskId
        );
    },

    // Change Task Status
    changeTaskStatus(state, { payload }: { payload: StatusType }) {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );
      if (activeBoard) {
        const todo = activeBoard.todos.find(
          (todo) => todo.id === state.editableTaskId
        );
        if (todo) {
          todo.status = payload;
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
  setEditableTaskId,
} = kanbanSlice.actions;
