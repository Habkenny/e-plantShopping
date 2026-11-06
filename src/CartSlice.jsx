import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.name === newItem.name);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({ ...newItem, quantity: 1 });
    },
    removeItem: (state, action) => {
      const itemName = typeof action.payload === 'string' ? action.payload : action.payload?.name;

      if (!itemName) {
        return;
      }

      state.items = state.items.filter((item) => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity, delta } = action.payload || {};
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (!itemToUpdate) {
        return;
      }

      if (typeof quantity === 'number') {
        itemToUpdate.quantity = quantity;
      } else if (typeof delta === 'number') {
        itemToUpdate.quantity += delta;
      }

      if (itemToUpdate.quantity <= 0) {
        state.items = state.items.filter((item) => item.name !== name);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
