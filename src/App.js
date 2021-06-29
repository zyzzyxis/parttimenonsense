import './App.css';
import { Route, Switch } from 'react-router' 
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import VisualBubbleWrap from './pages/VisualBubbleWrap';
import DreadClock from './pages/DreadClock';
import BadQuotes from './pages/BadQuotes';
import UtahBabyName from './pages/UtahBabyName';

function App() {
  return (
    <>
    
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bubbles" component={VisualBubbleWrap} />
      <Route exact path="/dreadclock" component={DreadClock} />
      <Route exact path="/connect" component={ContactMe} />
      <Route exact path="/badquotes" component={BadQuotes} />
      <Route exact path="/utahbabyname" component={UtahBabyName} />
    </Switch>
    <br/>
   
    </div>
    </>
  );
}

export default App;
