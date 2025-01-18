"use client";

import classes from "./imagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [img, setImg] = useState(null);
  const imageInputRef = useRef();

  const handleClick = () => {
    imageInputRef.current?.click();
  };

  const handleEventChange = (event) => {
    let file = event.target.files[0];

    if (!file) {
      setImg(null);
      return;
    }

    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImg(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {img ? (
            <Image src={img} alt="selected image" fill />
          ) : (
            <p>No Image Picked yet:)</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/*"
          ref={imageInputRef}
          onChange={handleEventChange}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
