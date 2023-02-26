import React from "react";
import { useSelector } from "react-redux";

function MyAlbum() {
  const albumImages = useSelector((state) => state.album.images);

  return (
    <div className="products-grid">
      {albumImages &&
        albumImages.map((image) => (
          <div className="product">
            <img key={image.id} src={image.src.medium} alt={image.alt} />
            <p>{image.alt}</p>
            <p>Taken by:</p>
            <p>{image.photographer}</p>
          </div>
        ))}
    </div>
  );
}

export default MyAlbum;
