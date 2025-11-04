import React from "react";
import { useSelector } from "react-redux";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const { images, filter } = useSelector((state) => state.gallery);

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filteredImages.map((img) => (
        <GalleryItem key={img.id} image={img} />
      ))}
    </div>
  );
}

export default Gallery;
