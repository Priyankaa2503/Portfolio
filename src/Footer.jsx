import React from "react";


function Footer ()
{
    return(
        <div
        className="bg-gradient-to-r from-[#222222] to-[#161616] min-w-full max-w-max">
            <div className="flex flex-row justify-between items-center border h-full border-[#353535] p-2.5">
            <div className="flex flex-row justify-start items-center gap-4 p-1">
                <a href="https://www.linkedin.com/in/priyanka2503/" target="blank" className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-base font-light font-jost">Linkedin</a>
                <a href="https://github.com/Priyankaa2503" target="blank" className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-base font-light font-jost">Github</a>
                <a href="https://instagram.com/priyankaa__25?igshid=YmMyMTA2M2Y=" target="blank" className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-base font-light font-jost">Instagram</a>
            </div>
            <div className="hover:text-[#F5F5F5]  text-[#D5D5D5] text-sm md:text-base font-light font-jost">© 2023 Made by Priyanka</div>
            </div>
           
        
        
      </div>
      
    );
}
export default Footer;