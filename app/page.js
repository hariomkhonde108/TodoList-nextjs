"use client"
import React, { useState } from 'react'

export const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

   const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(maintask)

  }
  const deleteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i,1);
    setmaintask(copytask)

  }
  let renderTask = <h2> No Task Available</h2>
  if (maintask.length>0) {
    renderTask = maintask.map((t,i)=>{
      return(
        <li  key={i} className='flex items-center justify-between mb-8'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className='bg-red-400 text-white px-4 py-3 rounded font-bold'>Delete</button>
 
        </li>
      )
    })
    
  }
  return (
    <>
      <h1 className='bg-black text-white text-2xl font-bold text-center bg-5xl'> Hariom's Todo List</h1>
      <form onSubmit={submitHandler}>

        <input type='text' placeholder='enter Title here' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }} />
        <input type='text' placeholder='enter your description' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }} />
        <button className='bg-black text-white px-3 py-2  text-2xl font-bold m-5 rounded'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
export default page