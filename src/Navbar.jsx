import React,{useState} from "react";
import MobNav from "./MobNav";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from "react-router-dom";
function Navbar() {
    const[active,setActive]=useState(false)
    const showMenu = ()=>
    {
        setActive(!active)
    }
    return (

        <div className="bg-[#222222] w-full">
           <div className="h-[100px] w-[100px] top-10 right-2.5 p-8 scale-150 md:hidden ">
                        <MenuTwoToneIcon onClick={showMenu}/>
                    </div>
                    <div className="flex flex-row justify-end p-12">
                   
                        <ul className="hidden md:flex flex-row gap-x-20 justify-end items-center mr-8">
                            <Link to ="/aboutme"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">aboutme</li></Link>
                            <Link to ="/resume"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">resume</li></Link>
                            <Link to ="/projects"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">projects</li></Link>
                            {/* <Link to ="/resume"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">resume</li></Link> */}
                            <Link to ="/contact"><li className="hover:text-[#F5F5F5] text-[#D5D5D5] text-xl font-medium font-jost ">contact</li></Link>

                        </ul>
                       
                          
                    </div>
                    <MobNav showMenu={showMenu} active={active}/>
        </div>
        );
    }
    
    export default Navbar;
    