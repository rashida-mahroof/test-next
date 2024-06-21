import React from 'react'

function Footer() {
  return (
    <div><footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-wrap -mx-4">
        
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Company Name</h2>
          <p className="text-gray-400">1234 Street Name<br/>City, State, 12345</p>
          <p className="text-gray-400 mt-2">Email: info@company.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
        
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
       
        <div className="w-full md:w-1/4 px-4">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.56v14.88A4.56 4.56 0 0119.44 24H4.56A4.56 4.56 0 010 19.44V4.56A4.56 4.56 0 014.56 0h14.88A4.56 4.56 0 0124 4.56zM8.52 19.29h2.61v-6.26H8.52v6.26zM9.83 11.63a1.52 1.52 0 111.52-1.52 1.52 1.52 0 01-1.52 1.52zM19.29 19.29h-2.61v-3.66c0-.86-.02-1.97-1.2-1.97-1.2 0-1.38.93-1.38 1.9v3.73h-2.61v-6.26h2.5v.85h.04a2.73 2.73 0 012.47-1.36c2.64 0 3.13 1.74 3.13 4v4.77h-.02z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.95 4.57a10 10 0 01-2.82.78 4.94 4.94 0 002.16-2.73 10 10 0 01-3.13 1.19 4.92 4.92 0 00-8.38 4.48A13.94 13.94 0 011.67 3.15 4.92 4.92 0 003.18 9.7a4.93 4.93 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.22.08 4.92 4.92 0 004.6 3.42 9.9 9.9 0 01-6.13 2.1c-.39 0-.78-.02-1.17-.07A13.94 13.94 0 007.29 21c9.05 0 14-7.5 14-14v-.64A10 10 0 0024 4.56l-.05-.01z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.59.59-2.46.69a4.26 4.26 0 001.86-2.35 8.31 8.31 0 01-2.69 1.03 4.14 4.14 0 00-7.02 3.78 11.76 11.76 0 01-8.55-4.34 4.16 4.16 0 001.29 5.51 4.05 4.05 0 01-1.87-.52v.05c0 2.12 1.5 3.89 3.49 4.29a4.27 4.27 0 01-1.85.07 4.15 4.15 0 003.88 2.88 8.34 8.34 0 01-5.15 1.78A8.45 8.45 0 012 18.42a11.74 11.74 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.27 8.27 0 0024 4.59c-.88.39-1.84.65-2.83.75a4.18 4.18 0 001.84-2.3z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.22 0H1.78A1.78 1.78 0 000 1.78v20.44A1.78 1.78 0 001.78 24h11.02v-8.36H9.57v-3.29h3.23V9.37c0-3.19 1.94-4.93 4.78-4.93 1.36 0 2.52.1 2.86.14v3.31h-1.96c-1.54 0-1.84.73-1.84 1.8v2.36h3.67l-.48 3.29h-3.19V24h6.26A1.78 1.78 0 0024 22.22V1.78A1.78 1.78 0 0022.22 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; 2023 Company Name. All rights reserved.
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer