import { BrowserRouter, Switch, Route } from "react-router-dom";



import HomeGuest from './components/HomeGuest';
import Landingfooter from './components/Landingfooter';
import Header from './components/Header';


function App() {
  return (
    
      <BrowserRouter>
             <Header/>
             <HomeGuest/>
             <Landingfooter/>
      </BrowserRouter>
  
  );
}

export default App;
