import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom" ;
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedRoutes from './AnimatedRoutes';

function App() {

  return (
    <div>
       <Router>
       <Navbar/>
       <AnimatedRoutes/>
      
        <Footer/>
        
      
      </Router>
      
    </div>
  );
}

export default App;
