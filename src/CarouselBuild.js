
import React from 'react'
import './Carousel.css'
import Carousel from 'react-elastic-carousel'


const breakpoints=
[
  {width:1,itemsToShow:1},
  {width:550,itemsToShow:2},
  {width:768,itemsToShow:3},
  {width:1200,itemsToShow:4},
]

export default function CarouselBuild() {
  
  return (
   <div className='Carousel'>
<div className='friends-count'>Friends who enrolled(3)</div>    

<div className='Carousel-box'>
  <Carousel breakPoints={breakpoints}>
  <div className='CarouselCard'></div>
  <div className='CarouselCard'></div>
  <div className='CarouselCard'></div>
  <div className='CarouselCard'></div>
  <div className='CarouselCard'></div>
  <div className='CarouselCard'></div>  
  </Carousel>
  </div>
  <div className='tandc'>Terms & Conditions</div>
      </div>
       
      

  )
}
