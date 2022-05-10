import React from 'react'
import axios from 'axios'

export default function Demo() {
  const handlePublish = async () => {
    const text = "Hello! I have sent this tweet via Twitter API!"
    const res = await axios.post('/api/post', {
        text: text
    })
    const data = res.data
    console.log(data)
  }
  return (
    <>
      <div className="max-w-screen-lg mx-auto m-2 p-4">
        <button className="px-4 py-2 rounded bg-sky-400 text-xl font-bold text-white" onClick={handlePublish}>
          Tweet it
        </button>
      </div>
    </>
  )
}
