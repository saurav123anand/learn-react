// src/components/AlbumForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AlbumForm = () => {
  const [albumName, setAlbumName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'albums'), { name: albumName });
      toast.success('Album created successfully!');
      setAlbumName('');
    } catch (error) {
      toast.error('Failed to create album!');
    }
  };

  return (
    <div className='albumFormContainer'>
      <h1>Create an album</h1>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Album Name"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
    </div>
   
  );
};

export default AlbumForm;
