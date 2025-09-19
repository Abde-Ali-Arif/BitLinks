"use client"
import React from 'react'
import { useState } from 'react'

const Page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

//    const handleChange = (e) => {
//         const { name, value } = e.target
//         if (name === "url") {
//             seturl(value)
//         } else if (name === "shorturl") {
//             setshorturl(value)
//         }
//     }
    

  return (
    <div className='mx-auto max-w-lg flex flex-col gap-5 my-16 p-8 bg-purple-100 rounded-lg '>
            <h1 className='text-2xl font-bold'>Generate your short url</h1>
        <div className='flex flex-col gap-2 '>

            <input 
            className='px-4 py-2 focus:outline-purple-600 rounded-md'
            value={url}
            type="text" 
            placeholder='Enter your url here' 
            onChange={(e) => {
              seturl(e.target.value)
            }} />


            <input 
            className='px-4 py-2 focus:outline-purple-600 rounded-md'
            value={shorturl}
            type="text" 
            placeholder='Enter your preferred short url' 
            onChange={(e) => {
              setshorturl(e.target.value)
            }} />

            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
        </div>
      
    </div>
  )
}

export default Page
