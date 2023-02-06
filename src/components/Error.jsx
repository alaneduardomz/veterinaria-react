import {useState, useEffect} from 'react'

function Error ({mensaje}){
    return(
        <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
            <p className='font-bold'>{mensaje}</p>
        </div>
    )
}

export {Error}