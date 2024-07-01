import React, { useState } from "react";

function RenderImg() {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>();
  var Api2Pdf = require("api2pdf");
  var a2pClient = new Api2Pdf("1ba33b70-1711-42d5-81f4-49ec3693a673");

  a2pClient
    .libreOfficeThumbnail(
      "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/asi_aval_TPC_02.pdf?alt=media&token=371f5760-b26b-4e54-8ad0-caa5b62e9511"
    )
    .then(({ result }: any) => {
      setThumbnailUrl(result);
      console.log(result);
    })
    .catch(({ error }: any) => {
      console.log(error);
    });

  return (
    <div>
      <img src={thumbnailUrl} alt="Thumbnail" />
    </div>
  );
}

export default RenderImg;
