import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const CreateBook = () => {
    const [title, setTitle] = useState({});
    const [author, setAuthor] = useState({});
    const [publishYear, setPublishYear] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios.post(`http://localhost:4040/books`, data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar('Book Created Sucessfully', { variant: 'success' });
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Book Creation Failed', { variant: 'error' });
            console.log(error);
        });
    };

  return (
    <div>
        <BackButton />
        <h1 className='text-3xl my-4'>Create Book</h1>
        {loading ? 
        (<Spinner />) : 
        ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-{600px} p-4 mx-auto'>
            <div className='my-4 '>
                <div className='text-xl mr-4 text-gray-500'> Title </div>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    className='border-2 border-gray-500 px-4 py-2 w-full' 
                />
            </div>
            <div className='my-4 '>
                <div className='text-xl mr-4 text-gray-500'> Author </div>
                <input type="text" 
                    onChange={(e) => setAuthor(e.target.value)} 
                    className='border-2 border-gray-500 px-4 py-2 w-full' 
                />
            </div>
            <div className='my-4 '>
                <div className='text-xl mr-4 text-gray-500'> Publish Year </div>
                <input type="text" 
                    onChange={(e) => setPublishYear(e.target.value)} 
                    className='border-2 border-gray-500 px-4 py-2 w-full' 
                />
            </div>

            <button className='p-2 bg-sky-800 m-8' onClick={handleSaveBook}>
                Save
            </button>
        </div>
    </div>
  )
}

export default CreateBook