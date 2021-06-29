
import '../components/basicstyles.css'



const Home = () => {
  return (
    <>
    <br/>
        
        <h1 ><br/>Welcome to Part Time Nonsense!<br/>
          This site was created to be a parking lot for my fun small projects.<br/> You'll find links to the different features below. <br/><br/>Happy exploring!</h1> 
        
   <br/>
   <div>
      
      <a className="roundbutton"  href="/bubbles">Bubbles</a>
      <a className="roundbutton"  href="/dreadclock">Dread Clock</a>
      <a className="roundbutton"  href="/badquotes">Quotes</a>
      {/* <a className="roundbutton"  href="/utahbabyname">Utah Baby Names</a> */}
      {/* <a className="roundbutton"  href="/chores">Chore Wheel of Doom</a> */}
      <a className="roundbutton"  href="https://www.erinzimmerman.com">Let's Connect!</a>
    </div>
    <br/>
    <p>Please note, not all mini projects are complete, this site is a continuous work in progress</p>
    </>
  )

  
}

export default Home
