import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black cursor-pointer px-10 py-4 font-Metrophobic flex justify-between text-xl  text-white'>
      <div className="logo text-2xl opacity-90">Dev.</div>
      <div className="items flex gap-x-10 uppercase">
        <div className="item">Home</div>
        <div className="item">Listings</div>
        <div className="item">About us</div>
      </div>
      <button className='contact flex justify-center items-center rounded-lg border border-white px-4 py-1 hover:bg-white hover:text-black transition-all'>Contact</button>
    </nav>
  )
}

export default Navbar
