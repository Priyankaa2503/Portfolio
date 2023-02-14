import React from "react";
import {motion} from "framer-motion"


function Projects ()
{
    return(
        <motion.div
        className="bg-gradient-to-r from-[#222222] to-[#161616] flex items-center justify-center min-w-full max-w-max min-h-screen max-h-max"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
           
        
        <h1 className="text-[70px] hover:scale-110 hover:animate-pulse  transition duration-300 ease-in-out text-[#D5D5D5] font-roguescript  font-medium md:text-[110px]">In Development</h1>
      </motion.div>
      
    );
}
export default Projects;