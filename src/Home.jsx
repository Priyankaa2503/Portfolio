import React,{useState} from "react";

const Home = () => {

    return (
      
        <div className="bg-gradient-to-r from-[#222222] to-[#161616] min-w-full max-w-max min-h-screen max-h-max ">
              
                    <div className="flex flex-col sm:flex flex-row md:flex md:flex-row justify-center items-center gap-10 p-20 ">
                        <div className="flex justify-center items-center justify-center h-96 h-96 sm:h-96 w-96 md:h-128 md:w-128 rounded-full ">
                            <img src="/images/Priyanka.jpeg" alt="Profile" className="w-64 h-64 border-[#444444] border-[22px] shadow-black shadow-xl hover:scale-110 transition duration-300 ease-in-out rounded-full object-cover md:w-96 md:h-96 " />
                            </div>
                                               
                    <div className="p-4 sm:flex flex-col gap-4 justify-center md:flex flex-col justify-center md:gap-8 ">
                        <div className="text-[#AAAAAA] text-base font-poppins ">Frontend-developer</div>
                        <div className="text-white font-poppins text-2xl md:text-5xl font-bold ">Priyanka Ramachandran</div>
                        <div className="text-[#D5D5D5] text-sm md:text-base ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/> Aenean commodo ligula eget dolor. Aenean massa.<br/> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </div>
                        <div className="flex flex-col justify-start md:flex md:flex-row md:justify-start gap-7 items-center p-4">
                        <button className="bg-[#333333] hover:bg-[#007CED] border-2 border-[#007CED] rounded-3xl text-white font-poppins py-2 px-4 w-[150px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            Resume
                        </button> 
                        <button className="bg-[#333333] hover:bg-white hover:text-[#333333] border-2 border-white rounded-3xl text-white font-poppins py-2 px-4 w-[150px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out">
                            Contact
                        </button> 
                        </div>
                        
                        
                    </div>

                   



                    </div>


                    
                   
                     
  
            
            </div>
 


    );
};

export default Home;