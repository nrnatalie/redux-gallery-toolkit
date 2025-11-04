import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/gallerySlice";

const categories = ["All", "Nature", "Animals", "Cities"];

function Filter() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.gallery.filter);

  return (
    <div className="flex justify-center mb-4 gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(setFilter(cat))}
          className={`px-4 py-2 rounded ${
            selected === cat ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;
