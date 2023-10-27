import { createSlice } from '@reduxjs/toolkit';
import { categories, categoryById, createCategory, deleteCategory, updateCategory } from '../asyncThunk/category.thunk';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    category: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categories.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(categoryById.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(createCategory.fulfilled, (state: any, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state: any, action) => {
        const updatedCategory = action.payload;
        const index = state.data.findIndex((category: any) => category.id === updatedCategory.id);
        if (index !== -1) {
          state.data[index] = updatedCategory;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        const categoryId = action.payload;
        state.data = state.data.filter((category: any) => category.id !== categoryId);
      });
  },
});

export default categorySlice.reducer;
