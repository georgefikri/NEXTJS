'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();

  const [pickedImage, setPickedImage] = useState();

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // in case there is no image picked setPickerImage to null to reset the previous image
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
          {!pickedImage && <p>No image picked.</p>}
        </div>
        <input
          type="file"
          id={name}
          className={styles.input}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button type="button" className={styles.button} onClick={handleImageClick}>
          Pick Image
        </button>
      </div>
    </div>
  );
}
