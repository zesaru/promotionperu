import React from 'react'

export default function Card({name}) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <div className="relative">
      <a href="#">
        <img className="hover:grow hover:shadow-lg w-auto" src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
      </a>
      <div className="text-5xl text-white bg-gray-900 bg-opacity-50 p-4 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-4 font-bold">
        {name}
      </div>
    </div>
  </div>
  )
}
