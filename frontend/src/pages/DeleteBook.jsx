import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.delete(`http://localhost:4040/books/${id}`)
    .then((response) => {
      console.log(response.data);
      setLoading(false);
      navigate('/');
      alert('Book deleted Successfully!!!');
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteBook