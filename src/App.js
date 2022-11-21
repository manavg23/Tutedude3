
import './App.css';
import Header from './Header';
import ReferralCode from './ReferralCode';
import CarouselBuild from './CarouselBuild';
import {Route, NavLink} from 'react-router-dom'


function App() {
 
  
  
  return (
    
    <div className="App">
      <Header/>
     <ReferralCode/>
     <CarouselBuild/>
    </div>
  );
}

export default App;
