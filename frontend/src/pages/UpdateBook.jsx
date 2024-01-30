import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateBook = () => {
    const [title, setTitle] = useState({});
    const [author, setAuthor] = useState({});
    const [publishYear, setPublishYear] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:4040/books/${id}`)
        .then((response) => {
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios.put(`http://localhost:4040/books/${id}`, data)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            alert('An Error Happened. Please Check Console');
            console.log(error);
        });
    };

  return (
    <div>
        <BackButton />
        <h1 className='text-3xl my-4'>Edit Book</h1>
        {loading ? 
        (<Spinner />) : 
        ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-{600px} p-4 mx-auto'>
            <div className='my-4 '>
                <div className='text-xl mr-4 text-gray-500'> Title </div>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    className='border-2 border-gray-500 px-4 py-2 w-full' 
                />
            </div>
            <div className='my-4 '>
                <div className='text-xl mr-4 text-gray-500'> Author </div>
                <input type="text"
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    className='border-2 border-gray-500 px-4 py-2 w-full' 
                />
            </div>
            <div className='my-4 '>
                <div className='text-xl mr-4 text-gray-500'> Publish Year </div>
                <input type="text" 
                    value={publishYear}
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

export default UpdateBook