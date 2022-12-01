import React from "react";

function Picture({ picture }) {
  const { id, url } = picture;
  return (
    <div className="onePic">
      <img src={url} alt={id} />
    </div>
  );
}

export default Picture;
