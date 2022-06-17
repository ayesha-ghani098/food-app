import React from "react";
import Dropzone from "react-dropzone";

import "./dropZone.css";

export const toBase64 = (file, callback) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {};
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const DropZoneComponent = (props) => {
  const {
    onFileSelected,
    sm = false,
    progress,
    setBase64,
    base64,
  } = props;

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    if (onFileSelected && typeof onFileSelected === "function") {
      onFileSelected(files);
    }

    toBase64(files[0], (base64) => {
      setBase64(base64);
    });
  };

  const handleImageRemoveClick = (e) => {
    e.stopPropagation();
    setBase64("");
    if (onFileSelected && typeof onFileSelected === "function") {
      onFileSelected([]);
    }
  };

  const renderInput = (getInputProps) => {
    return <input {...getInputProps()} />;
  };

  const renderImage = (getRootProps) => {
    return (
      <div
        className={`overlay-container ${sm ? "sm" : ""}`}
        {...getRootProps()}
      >
        <img
          src={base64}
          alt="Avatar"
          className={`${progress ? "blur" : "full"} overlay-image `}
        />

        <div className="zero middle">
          <i
            className="display-4 bx bx-x-circle overlay-image-text"
            onClick={handleImageRemoveClick}
          ></i>
        </div>
      </div>
    );
  };

  const renderDropZone = (getRootProps, getInputProps, isDragActive) => {
    return (
      <div className={`dropzone mb-6 ${sm ? "sm" : ""}`}>
        <div {...getRootProps()} className="dz-message dropzone-outline">
          {renderInput(getInputProps)}
          <div>
            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
          </div>
          {isDragActive ? "DropHere" : "Choose an image"}
        </div>
      </div>
    );
  };

  return (
    <Dropzone
      onDrop={(acceptedFile) => handleAcceptedFiles(acceptedFile)}
      accept="image/*"
    >
      {({ getRootProps, getInputProps, isDragActive }) => {
        return base64
          ? renderImage(getRootProps, getInputProps)
          : renderDropZone(getRootProps, getInputProps, isDragActive);
      }}
    </Dropzone>
  );
};

export default DropZoneComponent;
