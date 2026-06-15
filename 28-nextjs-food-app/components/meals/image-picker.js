"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const pickRef = useRef();

  function handlePickClick() {
    pickRef.current.click();
  }

  function handleImagechnage(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet!!</p>}
            {pickedImage && <Image src={pickedImage} fill alt="picked image" />}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={pickRef}
            onChange={handleImagechnage}
            required
          />
          <button
            className={classes.button}
            type="button"
            onClick={handlePickClick}
          >
            Pick an image
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePicker;
