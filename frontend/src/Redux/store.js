import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Redux/Features/cartSlice";
import booksApi from "./Books/BooksApi";
import ordersApi from "./Orders/ordersApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});
