import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMainTask] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const AddItem = {
      id: Date.now(),       // FIXED
      title: title,
      desc: desc
    };

    setMainTask(prev => [...prev, AddItem]);

    setTitle("");
    setDesc("");

    console.log(maintask);
  }

  const deleteHandler = (id) => {
    setMainTask(prev => prev.filter(item => item.id !== id));
  }


  let renderTask = <h2>No Task Available</h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between  w-2/3'>
            <h5 className='text-2xl fond-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>

          <button
            onClick={() => deleteHandler(t.id)}
            className='bg-red-400 text-white px-4 py-2 rounded fond-bold'
          >
            Delete
          </button>

        </li>
      )
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-7 text-4xl text-center'>TODO LIST</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='border-4 border-zinc-800 mx-16 px-16 py-2'
          placeholder="Enter the Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className='border-4 border-zinc-800 m-10 px-16 py-2'
          placeholder="Enter the Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          type="submit"
          className='bg-black text-white m-12 px-2 py-2 rounded p-1'
        >
          Add Task
        </button>
      </form>

      <hr />

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}

export default App;
