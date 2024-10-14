// src/components/ImagesList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import ImageForm from './ImageForm';
import { toast } from 'react-toastify';
import Spinner from 'react-spinner-material';

const ImagesList = ({ album, onBack }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingImage, setEditingImage] = useState(null);

  useEffect(() => {
    const imagesRef = collection(db, 'images');
    const q = query(imagesRef, where('albumId', '==', album.id));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const imagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setImages(imagesData);
      setLoading(false);
    }, (error) => {
      toast.error('Failed to fetch images!');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [album.id]);

  const handleAddImage = () => {
    setEditingImage(null);
    setShowForm(true);
  };

  const handleEditImage = (image) => {
    setEditingImage(image);
    setShowForm(true);
  };

  const handleDeleteImage = async (imageId) => {
    try {
      await deleteDoc(doc(db, 'images', imageId));
      toast.success('Image deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete image!');
    }
  };

  return (
    <div className='albumImagesContainer'>
      <button onClick={onBack} className='backBtn'>Back</button>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <button onClick={handleAddImage}>Add Image</button>
          {showForm && (
            <ImageForm
              albumId={album.id}
              image={editingImage}
              onClose={() => {
                setShowForm(false);
                setEditingImage(null);
              }}
            />
          )}
          <ul>
            {images.map(image => (
              <li key={image.id}>
                <div>
                  <img src={image.url} alt={image.title} width="100" />
                  <p>{image.title}</p>
                  <button onClick={() => handleEditImage(image)}>Edit</button>
                  <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImagesList;
