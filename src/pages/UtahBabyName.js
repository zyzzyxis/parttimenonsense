import React from 'react'
import { Button, Container } from 'react-bootstrap'

const UtahBabyName = () => {

  const newName = () => {
    return ('tada')
  }

  const handleName = (e) => {

  }


  return (
    <>
    <div>
      <h1>Bad Utah Baby Names</h1>
      
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
        {newName()}
    </Container>
  

   
    </>
  )
}

export default UtahBabyName
