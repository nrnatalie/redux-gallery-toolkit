import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "All",
  images: [
    { id: 1, url: "https://picsum.photos/id/1018/300/200", category: "Nature" },
    {
      id: 2,
      url: "https://picsum.photos/id/1025/300/200",
      category: "Animals",
    },
    { id: 3, url: "https://picsum.photos/id/1035/300/200", category: "Cities" },
    { id: 4, url: "https://picsum.photos/id/1040/300/200", category: "Nature" },
    { id: 5, url: "https://picsum.photos/id/1084/300/200", category: "Cities" },
    { id: 6, url: "https://picsum.photos/id/106/300/200", category: "Animals" },
  ],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = gallerySlice.actions;
export default gallerySlice.reducer;
