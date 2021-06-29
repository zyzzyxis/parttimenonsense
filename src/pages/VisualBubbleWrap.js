import React, {useState} from 'react'


const VisualBubbleWrap = () => {
//   const [bgcolor, setBgcolor] = useState('')
//   a.addEventListener("click", changeBodyBg)
  const changeBodyBg = (color)=>{
    document.body.style.background = color;
  }

  const randomColor = () => {
    changeBodyBg(bgrd[Math.floor(Math.random() * bgrd.length)] )
  }

 let bgrd = [
   'green',
   'red',
   'yellow'
 ]
  
  return (
    <>
    <button type='button'  onClick={randomColor()}   >try this</button>
    <button type='button'  onClick={randomColor()}   >try this</button>
    <button type='button'  onClick={randomColor()}   >try this</button>
    <button type='button'  onClick={randomColor()}   >try this</button>
    <button type='button'  onClick={randomColor()}   >try this</button>
    
    </>
  )
}


export default VisualBubbleWrap

