import Link from 'next/link'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
const DashboardLayout = ({ children }:any) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-lg border-b flex flex-row  items-center">
          <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="Logo" className="h-12" />
          <div className='flex flex-col justify-center'>
          <p>User123 </p>
          <button className='primary text-sm'>Logout</button>
          </div>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link  className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/home"><span><i className="fa fa-home text-gray-800 text-xl px-2" aria-hidden="true"></i></span>  Home</Link>
          <Link  className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/payments"><span><i className="fa fa-print text-gray-800 text-xl px-2" aria-hidden="true"></i></span>Global Advocacy & Legal Counsel</Link>
          <Link  className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/home"><span><i className="fa fa-adn text-gray-800 text-xl px-2" aria-hidden="true"></i></span> VAT</Link>
          
          <Link  className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/home"><span><i className="fa fa-compress text-gray-800 text-xl px-2" aria-hidden="true"></i></span> Corporate Tax</Link>
         
          <Link className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/payments"><span><i className="fa fa-dollar text-gray-800 text-xl px-2" aria-hidden="true"></i></span> Payments</Link>
          <Link className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/home"><span><i className="fa fa-user text-gray-800 text-xl px-2" aria-hidden="true"></i></span> My Correspondence</Link>
          <Link className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/payments"><span><i className="fa fa-key text-gray-800 text-xl px-2" aria-hidden="true"></i></span> User Authorization</Link>
          <Link className="hover:bg-gray-200 p-2 rounded" href="/pages/dashboard/home"><span><i className="fa fa-server text-gray-800 text-xl px-2" aria-hidden="true"></i></span> Other Services</Link>
         
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <header className="flex items-center justify-between bg-white p-4 shadow-md">
          <div>
            <input type="text" placeholder="What are you looking for?" className="border p-2 rounded-md w-96" />
          </div>
          <div className="flex items-center space-x-4">
            <span>user123@gmail.com</span>
            <button className="p-2 bg-gray-200 rounded-full">User Type</button>
          </div>
        </header>
        <main className="mt-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
