import React from "react";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Link } from "react-router-dom";
const MobNav = ({showMenu,active}) =>
{
  
    return(
    
    <div className={active ? 'absolute flex flex-col items-end inset-4 gap-6 md:hidden':'hidden'}>
         <CloseTwoToneIcon onClick={showMenu} className='h-[100px] w-[100px] mt-4 scale-150 cursor-pointer'/>
         {/* <ul className="hidden md:flex flex-row gap-x-20 justify-end items-center mr-8"> */}
                            <Link to ="/aboutme"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">aboutme</li></Link>
                            <Link to ="/education"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">education</li></Link>
                            <Link to ="/projects"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">projects</li></Link>
                            <Link to ="/resume"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">resume</li></Link>
                            <Link to ="/contact"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">contact</li></Link>

                        {/* </ul> */}
    </div>
 
    );
};
export default MobNav;


