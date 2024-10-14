// src/components/AlbumsList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import AlbumForm from './AlbumForm';
import ImagesList from './ImageList';
import { toast } from 'react-toastify';
import Spinner from 'react-spinner-material';

const AlbumsList = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [toggle,setToggle]=useState(false);

    useEffect(() => {
        const albumsRef = collection(db, 'albums');

        const unsubscribe = onSnapshot(albumsRef, (snapshot) => {
            const albumsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAlbums(albumsData);
            setLoading(false);
        }, (error) => {
            toast.error('Failed to fetch albums!');
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleSelectAlbum = (album) => {
        setSelectedAlbum(album);
    };

    const handleBackToAlbums = () => {
        setSelectedAlbum(null);
    };
    const toggleAlbumForm=()=>{
        setToggle((prev)=>!prev)
    }

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    {selectedAlbum ? (
                        <div>
                            <h2 className='h2Heading'>Images in {selectedAlbum.name}</h2>
                            <ImagesList album={selectedAlbum} onBack={handleBackToAlbums} />
                        </div>
                    ) : (
                        <div>
                           {toggle===true && <AlbumForm/>}
                            <div className='albumList'>
                                <div className='top'>
                                    <h3>Your albums</h3>
                                    <button className={toggle===false ? "add":"cancel"} onClick={toggleAlbumForm}>{toggle===false ? "Add album" : "Cancel"}</button>
                                </div>
                                <div className='bottom'>
                                    {albums.map(album => (
                                        <div key={album.id}>
                                            <div className='container' onClick={() => handleSelectAlbum(album)}>
                                            <img src='https://mellow-seahorse-fc9268.netlify.app/assets/photos.png'></img>
                                            <h2 style={{ cursor: 'pointer' }}>
                                                {album.name}
                                            </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AlbumsList;
