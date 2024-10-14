// src/components/ImageForm.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ImageForm = ({ albumId, image, onClose }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (image) {
      setTitle(image.title);
      setUrl(image.url);
    } else {
      setTitle('');
      setUrl('');
    }
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageData = { title, url, albumId };

    try {
      if (image) {
        // Update existing image
        await setDoc(doc(db, 'images', image.id), imageData);
       // toast.success('Image updated successfully!');
      } else {
        // Add new image
        await setDoc(doc(db, 'images', Date.now().toString()), imageData);
        //toast.success('Image added successfully!');
      }
      onClose();
    } catch (error) {
      //toast.error('Failed to save image!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Image Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="url" 
        placeholder="Image URL" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        required 
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default ImageForm;
