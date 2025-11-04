import React from "react";

function GalleryItem({ image }) {
  return (
    <div className="w-64 h-64 border rounded overflow-hidden shadow flex flex-col">
      <img
        src={image.url}
        alt={image.category}
        className="w-full h-48 object-cover"
      />
      <div className="h-1/4 p-2 text-center font-semibold">
        {image.category}
      </div>
    </div>
  );
}

export default GalleryItem;
