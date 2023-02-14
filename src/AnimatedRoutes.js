import React from 'react';
import {BrowserRouter as Router , Routes , Route, useLocation} from "react-router-dom" ;
import Home from  './Home'
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import {AnimatePresence} from "framer-motion"

export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
     
    <Routes location={location} key={location.pathname}>
  
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/aboutme" element = {<Home/>}></Route>
            <Route path = "/resume" element = {<Resume/>}></Route>
            <Route path = "/projects" element = {<Projects/>}></Route>
            <Route path = "/contact" element = {<Contact/>}></Route>
    </Routes>
    </AnimatePresence>

  )
}
