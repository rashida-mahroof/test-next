import React from 'react'
import NavBar from '../../organisms/navbar/page'
import Menubar from '../../organisms/menubar/page'
import Footer from '../../organisms/footer/page'

function PageLayout({ children }: any) {
    return (
        <div className='relative'><NavBar />
            <Menubar />
            {children}
            <Footer />
            <div className='flex flex-col'>
                <div className='fixed z-50 right-5 bottom-16 w-12 h-12 flex flex-col'>
                    <img className='mb-2' src="https://static-00.iconduck.com/assets.00/chat-icon-2048x2048-i7er18st.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="" />
                </div>
                <div className=' fixed z-50 left-5 bottom-5 w-10 h-10 p-2 bg-white rounded-full drop-shadow'>
                    <img src="https://cdn-icons-png.flaticon.com/512/7257/7257795.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default PageLayout