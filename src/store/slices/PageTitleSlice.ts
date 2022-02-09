import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PageTileState = {
  value: string;
};

const initialState: PageTileState = {
  value: 'React Demo',
};

export const pageTileSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setPageTitle: (state: PageTileState, action: PayloadAction<string>) => {
      state.value = action.payload;
      document.title = `${state.value} | ${initialState.value}`;
    },
  },
});

export const { setPageTitle } = pageTileSlice.actions;

export default pageTileSlice.reducer;
