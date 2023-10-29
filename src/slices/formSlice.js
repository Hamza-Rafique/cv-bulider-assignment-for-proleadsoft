import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    data: null,
  },
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
      console.log(state.data)
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export const selectFormData = (state) => state.formData.data;
export default formDataSlice.reducer;
