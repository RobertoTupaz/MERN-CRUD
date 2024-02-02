import React from 'react'
import { useState } from 'react';

const CardTableSelection = ({ changeShowType }) => {

    return (
        <div className='flex justify-center items-center gap-x-4'>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => changeShowType('table')}
            >
                Table
            </button>
            <button 
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            onClick={() => changeShowType('card')}
            >
                Card
            </button>
        </div>
    )
}

export default CardTableSelection