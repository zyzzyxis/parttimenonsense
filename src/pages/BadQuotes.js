//todo get new funny quotes
import React from 'react'
import {Container, Button} from 'react-bootstrap'

const BadQuotes = () => {

  const quote = [
    '\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" \n',
    '\"The way to get started is to quit talking and begin doing.\" \n',
    '\"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.\" \n',
    '\"If life were predictable it would cease to be life, and be without flavor.\" \n',
    '\"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.\" \n ',
    '\"Life is what happens when you\'re busy making other plans.\" \n',
    '\"When you reach the end of your rope, tie a knot in it and hang on.\" \n',
    '\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\" \n',
    '\"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.\" \n',
    '\"It is during our darkest moments that we must focus to see the light. \" \n ',
    
  ]

  const person = [
    '- Nelson Mandela',
    '- Walt Disney',
    '- Steve Jobs',
    '- Eleanor Roosevelt',
    '- Oprah Winfrey',
    '- John Lennon',
    '- Franklin D. Roosevelt',
    '- Benjamin Franklin',
    '- Michael Scott',
    '- Helen Keller',
    '- Aristotle'
  ]

  const badQuote = () => {
    return (
      
      quote[Math.floor(Math.random() * quote.length)]  +
      person[Math.floor(Math.random() * person.length)]
      
    )


  }

  return (
    <>
    <div>
      <h1>Mis-Attributed Quotes</h1>
    </div>
    <div>
      <Container>
        {badQuote()}
        <br/>
        <br/>
        <Button href="/badquotes">New Quote</Button>
      </Container>
    </div>
    </>
  )
}

export default BadQuotes