import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom" ;
import Home from  './Home'
import Resume from './Resume';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
       <Router>
       <Navbar/>
       <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/aboutme" element = {<Home/>}></Route>
            <Route path = "/resume" element = {<Resume/>}></Route>
           <Route path = "/projects" element = {<Projects/>}></Route>
          
            <Route path = "/contact" element = {<Contact/>}></Route>
        </Routes>
        <Footer/>
        
      
      </Router>
      
    </div>
  );
}

export default App;
