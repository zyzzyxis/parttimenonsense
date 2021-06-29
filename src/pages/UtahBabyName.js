import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'

const UtahBabyName = () => {
  const [name, setName] = useState('')
  
  const handleName = (e) => {
    let x = e.split('')
    for(let i=0; i < x.length; i++){
      if (x[i] == "y"){
        let i = "i"
      }
    }
      x.join('')
    setName(x)
  }

  return (
    <>
    <div>
      <h1>Bad Utah Baby Names</h1>
      <p>Working on the algorithm to turn every normal baby name into a Utah baby name. </p>
    </div>
    <Container>
      <form>
        <label>Name</label>
        <br/>
        <input 
        required 
        minLength="3"
        placeholder='e.g. Barbie'
        onChange={(e)=> handleName(e.target.value)}
        />
        <br/>
        <br />
         <Button type='submit'>Utahn-ize the Name!</Button>
      </form>
      
      <br/>
        {name}
    </Container>
  
    <br/><br/>
    <a className="roundbutton" href="/">Home</a>
    </>
  )
}

export default UtahBabyName
