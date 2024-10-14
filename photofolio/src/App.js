
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import AlbumsList from './components/AlbumsList';

function App() {
  return (
    <>
     <Navbar />
    <AlbumsList />
    <ToastContainer />
    </>
  );
}

export default App;
