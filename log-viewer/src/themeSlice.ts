import { createSlice } from '@reduxjs/toolkit';

export type ThemeState = 'light' | 'dark';

const getInitialTheme = (): ThemeState => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialTheme() as ThemeState,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
    setTheme: (_state, action) => action.payload as ThemeState,
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
