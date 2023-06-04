'use client'
import { ProductModel } from '@/models/product/product.model';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductModel[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    get: (state, action) => {
      state = action.payload;
    },
    refresh: (state) => {      
      state = [];
    },
  },
});

export const { get, refresh } = productSlice.actions;

export default productSlice.reducer;
