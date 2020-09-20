import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";

function UploadImage(props) {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    Axios.post("/api/review/uploadImage", formData, config).then((response) => {
      if (response.data.success) {
        // previous image, next image
        setImages([...Images, response.data.image]);
        props.refreshFunction([...Images, response.data.image]);
      } else {
        alert("Failed to UploadImage");
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];

    //splice(삭제하고싶은 인덱스부터, 몇개 지울건지);
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={9999999}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            {/* {console.log("getRootProps", { ...getRootProps() })} */}
            {/* {console.log("getInputProps", { ...getInputProps() })} */}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`${image}`}
              alt={`reviewImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadImage;
