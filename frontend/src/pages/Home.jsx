import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import BooksCard from '../components/home/BooksCard'
import BooksTable from '../components/home/BooksTable'
import Header from '../components/header'
import Footer from '../components/footer'
import CardTableSelection from '../components/CardTableSelection'


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    const changeShowType = (selectionShowType) => {
        setShowType(selectionShowType);
    }

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:4040/books')
        .then((response) => {
            setBooks(response.data.data);
            console.log(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

  return (
    <div className='p-4'>
        <Header />

        <CardTableSelection changeShowType={changeShowType} />

        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Books List</h1>
            <Link to='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl ' />
            </Link>
        </div>
        
        {loading ? 
            (<Spinner />) : 
            showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)
        }

        <Footer />
    </div>
  )
}

export default Home