import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Card from './Card';

function Routers() {
    return (
      <div>
        
          <Router>
            <Routes>  
                <Route exact path = "/" element = {<HomePage/>}/>    
                <Route path = "/Card" element = {<Card/>}/>
                
        
            </Routes>
          </Router>
       
      </div>
    )
  }
  

export default Routers