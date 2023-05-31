import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {MachineL} from './components/MachineL';
import {Resume} from './components/Resume'
import {WebD} from './components/WebD';
import {Cloud} from './components/Cloud';



import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return(
    <>
    <Router>
    {/* <Header searchBar={true}/> */}
    
     <Routes>
     <Route exact path="/" Component={Home}/>
     <Route exact path="/home" Component={Home}/>
            
          
          <Route path="/machineL" Component={MachineL}/>
          <Route path="/webD" Component={WebD}/>
          <Route path="/cloud" Component={Cloud}/>
          <Route path="/resume" Component={Resume}/>
          
          
          
          
            </Routes>
            </Router>
 </>
  );
}

export default App;
