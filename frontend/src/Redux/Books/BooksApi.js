import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getUrl from "../../Utils/baseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getUrl()}/api/books`,
  credentials: "include",
  prepareHeaders: (Hedeers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Hedeers.set("Authorization", `Bearer ${token}`);
    }
    return Hedeers;
  },
});
const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"],
    }),
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/create-book",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "appliction/json",
        },
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});
export const {
  useFetchAllBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useFetchBookByIdQuery,
  useUpdateBookMutation,
} = booksApi;
export default booksApi;
