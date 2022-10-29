import { createSlice } from "@reduxjs/toolkit";

interface IState {
  boards: [];
}

const initialState: IState = {
  boards: [],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {},
});

export const {} = kanbanSlice.actions;

export default kanbanSlice.reducer;
