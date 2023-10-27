import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "../slices/app.slice";
import { showNotification } from "../../utils/notifications";

export const categories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
    return response.data;
  }
);

export const categoryById = createAsyncThunk(
  'categories/fetchCategoryById',
  async (categoryId: any) => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}`);
    return response.data;
  }
);

export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (category: Object, { dispatch }) => {
    try {
      const { data } = await axios.post('https://api.escuelajs.co/api/v1/categories', category);
      showNotification('Se agregó con éxito la categoria');

      return data;
    } catch (error) {
      dispatch(setError(true));
    }
  }
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async (category: any, { dispatch }) => {
    try {
      const { id, ...updateData } = category;
      await axios.put(`https://api.escuelajs.co/api/v1/categories/${id}`, updateData);

      showNotification('Se ha actualizado con éxito la categoria');

      return category;
    } catch (error) {
      dispatch(setError(true));
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id: number, { dispatch }) => {
    try {

      await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`);
      showNotification('Se ha eliminado con éxito la categoria');
      return id;
    } catch (error) {
      dispatch(setError(true));
    }
  }
);
