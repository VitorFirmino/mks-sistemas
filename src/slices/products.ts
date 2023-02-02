import { RootState } from './../store/store';
import { createSlice, PayloadAction, } from "@reduxjs/toolkit";


interface IProduct {
  id: number;
  brand?: string;
  createdAt?: string;
  name: string;
  price: number;
  photo: string;
  updatedAt?: string;
  quantity: number;
}

export interface ICartState {
  items: IProduct[];
  total: number;
  totalItemsToCart: number;
  isOpen: boolean;
}

const initialState: ICartState = {
  items: [],
  total: 0,
  isOpen: false,
  totalItemsToCart: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.total += Number(product.price);
      state.totalItemsToCart = state.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);

      state.total -= Number(state.items[itemIndex].price) * state.items[itemIndex].quantity;
      state.totalItemsToCart -= state.items[itemIndex].quantity;

      state.items.splice(itemIndex, 1);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);

      state.total += Number(state.items[itemIndex].price);
      state.items[itemIndex].quantity += 1;
      state.totalItemsToCart += 1;

    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);

      if (itemIndex >= 0) {
        state.total -= Number(state.items[itemIndex].price);
        state.totalItemsToCart -= 1;
        state.items[itemIndex].quantity -= 1;

        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }

    },
    setCart: (state, action: PayloadAction<ICartState>) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.isOpen = action.payload.isOpen;
      state.totalItemsToCart = action.payload.totalItemsToCart;
    },
  },
});

export const { openModal, addProduct, removeFromCart, incrementQuantity, decrementQuantity, setCart } = cartSlice.actions;

export const getCart = (state: RootState) => state.cart;
export const getProducts = (state: RootState) => state.cart.items;
export const getTotalPrice = (state: RootState) => state.cart.total;
export const getOpenModal = (state: RootState) => state.cart.isOpen;
export const getTotalItemsCart = (state: RootState) => state.cart.totalItemsToCart;


export default cartSlice.reducer;