import React, { useRef } from 'react'
import './Title.css'
import cards_data from '../../assets/assets/cards/Cards_data'
import { useEffect } from 'react'

const Title = ({title , category}) => {

  const cardsRef = useRef()

  const handleWheel = (event) => {
    // event.prevantDefault();
    cardsRef.current.scrollLeft += event.deltaY;

  }

  useEffect(()=>{
   cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='title-container'>
      <h2> {title ? title :"Popular on Netflix"} </h2>
      <div className="cards-list" ref={cardsRef} >
        {cards_data.map((card,index)=>{
          return <div className='cards' key={index}>
            <img src={category ? category : card.image} alt="" />
            {/* <p>{card.name}</p> */}
          </div>


        })}
      </div>
        
    </div>
  )
}

export default Title