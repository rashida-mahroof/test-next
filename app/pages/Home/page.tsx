
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import Banner from '@/app/components/organisms/banner/page'
import TitleMain from '@/app/components/atoms/titleMain/page'
import PageLayout from '@/app/components/layouts/pageLayout/page'
import BtnMain from '@/app/components/atoms/BtnMain/page'
const topContents = [
    { image: 'https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg', title: 'Dubai Cityscape' },
    { image: 'https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg', title: 'Dubai Cityscape' },
    { image: 'https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg', title: 'Dubai Cityscape' },
]
const brands = [

]
function Home() {
    return (

        <PageLayout>
            <Banner />
            <div className='my-16'>

                <TitleMain>
                    Chose Your Jurisdiction
                </TitleMain>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">

                        {
                            topContents.map(data => (
                                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-2">

                                    <div className="relative overflow-hidden transit">
                                        <img src={data.image} alt={data.title} className=" h-auto transition-transform duration-500 transform hover:scale-110" />
                                        <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold transition-all duration-500 opacity-100 ">
                                            {data.title}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='my-16'>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className='w-full sm:w-1 md:w-1/3 px-4'>
                            <img src="https://png.pngtree.com/png-clipart/20231006/ourmid/pngtree-handsome-businessman-transparent-background-png-image_10194933.png" alt="" />
                        </div>

                        <div className='w-full sm:w-1 md:w-2/3 px-4'>
                            <TitleMain >
                                <div className='text-start'> Setting up a business in dubai</div>

                            </TitleMain>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit rem, excepturi maiores quas eligendi omnis alias, doloribus numquam repudiandae recusandae, tempore vero ducimus dolore consequatur sequi minus reprehenderit adipisci.</p>
                                <ul className=''>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                </ul>
                            </div>
                        </div>

                    </div></div>
            </div>
            <div className='my-16 '>
                <div className="container mx-auto bg-gray-300 p-6 border-r-4 ">
                    <div className="flex flex-wrap mx-4">

                        <div className='w-full sm:w-1 md:w-1/2 px-4'>
                            <TitleMain >
                                <div className='text-start'> We Work Closely With Government Agencies</div>

                            </TitleMain>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit rem, excepturi maiores quas eligendi omnis alias, doloribus numquam repudiandae recusandae, tempore vero ducimus dolore consequatur sequi minus reprehenderit adipisci.</p>
                                <ul className=''>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eius, repellendus illo, mollitia eum maiores blanditiis temporibus nostrum rerum natus ratione provident cumque eligendi vero possimus! Possimus a asperiores alias?</li>
                                </ul>
                            </div>

                        </div>

                        <div className='w-full sm:w-1 md:w-1/2 px-4'>
                            <div className="flex flex-wrap mx-4">
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-1-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-2-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-3-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-4-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-5-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-6-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-7-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-7-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-8-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-9-170x100.webp" alt="" /></div>
                                <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white m-2"><img src="https://cdn-kkdpf.nitrocdn.com/zlccwFeVuEOWdpyRgkEBPXibOZRYyoTW/assets/images/optimized/rev-7416ce5/www.ragroup.ae/wp-content/uploads/2023/09/client-6-170x100.webp" alt="" /></div>
                            </div>
                        </div></div></div>
            </div>
            <div className='my-16'>

                <TitleMain>
                    Our Services
                </TitleMain>
                <div className="container mx-auto">
                    <div className="flex flex-wrap mx-4">


                        <div className="w-full flex sm:w-1/2 md:w-1/4 px-4  mb-3 ">

                            <div className="relative overflow-hidden transit bg-white drop-shadow p-4">
                                <i className="fas fa-business-time  bg-white text-3xl pb-2 text-blue-900"></i>
                                <div className="text-lg font-bold transition-all duration-500 pb-2">
                                    Incorporation
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat dolor fugit corrupti rerum adipisci excepturi tempora, quaerat minima illo, eaque doloremque? Molestias quas enim quos nihil minus qui. Atque?</p>
                            </div>
                        </div>
                        <div className="w-full flex sm:w-1/2 md:w-1/4 px-4  mb-3 ">

                            <div className="relative overflow-hidden transit bg-white drop-shadow p-4">
                                <i className="fas fa-business-time  bg-white text-3xl pb-2 text-blue-900"></i>
                                <div className="text-lg font-bold transition-all duration-500 pb-2">
                                    Incorporation
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat dolor fugit corrupti rerum adipisci excepturi tempora, quaerat minima illo, eaque doloremque? Molestias quas enim quos nihil minus qui. Atque?</p>
                            </div>
                        </div>
                        <div className="w-full flex sm:w-1/2 md:w-1/4 px-4  mb-3 ">

                            <div className="relative overflow-hidden transit bg-white drop-shadow p-4">
                                <i className="fas fa-business-time  bg-white text-3xl pb-2 text-blue-900"></i>
                                <div className="text-lg font-bold transition-all duration-500 pb-2">
                                    Incorporation
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat dolor fugit corrupti rerum adipisci excepturi tempora, quaerat minima illo, eaque doloremque? Molestias quas enim quos nihil minus qui. Atque?</p>
                            </div>
                        </div>
                        <div className="w-full flex sm:w-1/2 md:w-1/4 px-4  mb-3 ">

                            <div className="relative overflow-hidden transit bg-white drop-shadow p-4">
                                <i className="fas fa-business-time  bg-white text-3xl pb-2 text-blue-900"></i>
                                <div className="text-lg font-bold transition-all duration-500 pb-2">
                                    Incorporation
                                </div>
                                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat dolor fugit corrupti rerum adipisci excepturi tempora, quaerat minima illo, eaque doloremque? Molestias quas enim quos nihil minus qui. Atque?</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='my-16 '>
                <div className="container mx-auto  p-6  text-center ">



                    <TitleMain>
                        Calculate Your <br /> Business Setup Cost
                    </TitleMain>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-center text-xl pb-2'>Which business activity are you looking for ?</h3>
                        <select name="bactivity" className="text-center p-3 border-2 outline-none" > <option value="" selected>Select a business activity</option> <option value="Advertising">Advertising</option> <option value="Architecture">Architecture</option> <option value="Business Consultancy">Business Consultancy</option> <option value="Design Services">Design Services</option> <option value="E-Commerce">E-Commerce</option> <option value="Event Management">Event Management</option> <option value="Fashion Design Consultancy">Fashion Design Consultancy</option> <option value="Food &amp; Beverage Trading">Food &amp; Beverage Trading</option> <option value="General Trading">General Trading</option> <option value="Human Resources Consultancy">Human Resources Consultancy</option> <option value="Interior Design">Interior Design</option> <option value="IT Consultancy">IT Consultancy</option> <option value="Lifestyle Consultancy">Lifestyle Consultancy</option> <option value="Management Consultancy">Management Consultancy</option> <option value="Marketing Services">Marketing Services</option> <option value="Media Services">Media Services</option> <option value="Online Education">Online Education</option> <option value="Other">Other</option> <option value="Photography Services">Photography Services</option> <option value="Production">Production</option> <option value="Project Management Consultancy">Project Management Consultancy </option> <option value="Public Relations">Public Relations</option> <option value="Publishing">Publishing</option> <option value="Recruitment Consultancy">Recruitment Consultancy</option> <option value="Software Development Management">Software Development Management </option> <option value="Sports Management">Sports Management</option> <option value="Tax Consultancy">Tax Consultancy</option> <option value="Training Services">Training Services</option> <option value="Video Services">Video Services</option> <option value="Wholesale of Household Goods">Wholesale of Household Goods </option> </select>
                        <BtnMain>
                            Next
                        </BtnMain>

                    </div>
                </div>
            </div>
        </PageLayout>


    )
}

export default Home