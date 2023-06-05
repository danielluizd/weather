import React from "react";

function Data({ latitude, longitude, timezone }) {
  return (
    <div>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <p>{timezone}</p>
    </div>
  );
}

export default Data;
