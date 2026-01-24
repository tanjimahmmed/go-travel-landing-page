import React from 'react'
import Spinner from './Icons/Spinner'

const Loader = () => {
  return (
    <div className='flex items-center justify-center px-24 py-64'>
        <Spinner/>
    </div>
  )
}

export default Loader