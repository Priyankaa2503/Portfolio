import React,{useState} from "react";
import Navbar from "./Navbar";
const Home = () => {
    const[active,setActive]=useState(false)
    const showMenu = ()=>
    {
        setActive(!active)
    }
   
    return (
      
        <div className="bg-[#222222] w-full h-screen">
              
                    <div className="flex flex-col sm:flex flex-row md:flex md:flex-row gap-10 justify-center">
                    <div className=" shadow-xl rounded-full"><img src="/images/My project.png" ></img></div>
                    <div className="p-4 sm:flex flex-col gap-4 md:flex flex-col justify-center md:gap-8 ">
                        <div className="text-[#AAAAAA] text-base font-poppins ">Frontend-developer</div>
                        <div className="text-white font-poppins text-2xl md:text-5xl font-bold ">Priyanka Ramachandran</div>
                        <div className="text-[#D5D5D5] text-sm md:text-base ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/> Aenean commodo ligula eget dolor. Aenean massa.<br/> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </div>
                        
                    </div>

                    </div>
                    
                   
                     
  
            
            </div>
 


    );
};

export default Home;