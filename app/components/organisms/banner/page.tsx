
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://resources.smartbizloans.com/hubfs/SmartBiz%20Blog/duns-number.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <h1 className="text-white text-4xl font-bold animate-fadeIn mb-6 text-center">Welcome Elite Business Solutions</h1>
        <p className='text-sm text-white text-center w-2/3 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nobis. Tempora sunt sapiente tempore dicta praesentium maxime, quia consequatur, ea dolor quas amet quo ad debitis aspernatur nulla est at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae at, asperiores soluta rerum sit! Illo adipisci aut magnam est possimus distinctio facilis recusandae voluptates, optio suscipit odit dolorem rerum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, mollitia necessitatibus enim eligendi ea, ab reprehenderit perspiciatis fugiat ut aliquam eum aperiam doloribus obcaecati iste sequi impedit quia sunt.</p>
        <button className=" text-Blue-900 bg-white px-4 py-2 hover:bg-blue-900 hover:text-white translate-x-0 transition-all">Book Now</button>
      </div>
    </div>
  );
}

export default Banner;