import { Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import Button from "../form/Button";

const AddPhotoForm = ({ handleUploadImages }) => {
  const [image, setImages] = useState([]);
  const [error, setError] = useState(false);
  const max = 10;
  const onChange = (imageList) => {
    setImages(imageList);
    imageList.length > 0 && setError(false);
  };

  const handleImagesUpload = () => {
    if (image.length > 0) handleUploadImages(image?.map((img) => img?.file));
    else setError("Select image to upload.");
  };

  return (
    <div>
      <div className="w-full text-center py-5">
        <p className="text-2xl md:text-3xl">Upload Barber Image</p>
      </div>
      <div
        className={`relative border-2 border-dashed ${
          error ? "border-red-500" : "border-gray-200"
        } p-10 min-w-150`}
      >
        <ImageUploading
          multiple
          value={image}
          onChange={onChange}
          maxNumber={max}
          dataURLKey="data_url"
          allowNonImageType={false}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="flex items-center justify-center">
              <button
                className={`${
                  isDragging || (error && "text-red-500")
                } absolute top-0 left-0 h-full w-full p-3`}
                onClick={onImageUpload}
                {...dragProps}
              >
                {image.length === 0 && "Click to upload"}
              </button>
              <div className="flex gap-5">
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="image-item border h-max border-solid border-orange-500 p-2 relative"
                  >
                    <Image
                      src={image.data_url}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <div className="image-item__btn-wrapper">
                      <button
                        className="absolute top-1 right-1 text-white bg-orange-500 rounded-full text-xs p-1 h-6 w-6"
                        onClick={() => onImageRemove(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
      {error && <p className="text-red-500 pt-2">{error}</p>}
      <Button onClick={handleImagesUpload} className="mt-5 py-2">
        Upload
      </Button>
    </div>
  );
};

export default AddPhotoForm;
