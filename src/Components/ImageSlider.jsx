import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export default function ImageSlider() {
    const slides =[
        {
            url : 'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=800' ,
            title: 'dinner'
        },
        {
            url :'https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' ,
            title:'Romantic Avenue'
        },
        {
            url :'https://images.pexels.com/photos/984917/pexels-photo-984917.jpeg?auto=compress&cs=tinysrgb&w=800' ,
            title:'With Significant Other'
        },
        {
            url :'https://images.pexels.com/photos/15850737/pexels-photo-15850737.jpeg?auto=compress&cs=tinysrgb&w=800' ,
            title:'Discover'
        },
    ]
    const [currIndex, setCurrIndex] = useState(0)
    const prevSlide = () =>{
        const isFirstSlide = currIndex ===0;
        const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex)

    }
    const nextSlide = () =>{const isLastSlide = currIndex ===slides.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex)}

    const goToSlide = (slideIndex) => {
        setCurrIndex(slideIndex)
    }
  return (
    
    <div className='max-w-[900px] h-[500px] w-full m-auto py-14 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
         style={{ backgroundImage: `url(${slides[currIndex].url})`}}></div>
         {/*Left Arrow */}
         <div>
            <BsChevronCompactLeft onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/30 text-white cursor-pointer'
            size={30}/>
         </div>
         {/*Right Arrow*/}
         <div>
            <BsChevronCompactRight onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/30 text-white cursor-pointer'
            size={30}/>
         </div>
         <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) =>(
                <div className='text-2xl cursor-pointer py-2' key={slideIndex} onClick={() =>goToSlide(slideIndex)}> 
                    <RxDotFilled />
                </div>
                
            ))}

         </div>
    </div>
  )
}
