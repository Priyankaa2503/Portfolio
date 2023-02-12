import React,{useState} from "react";
function Resume() {
    return (
        <div className="bg-[#222222] w-full h-screen">
            {/* Education */}
            <div className="bg-[#252525] w-full h-[200px]">
                <div className="text-[#F5F5F5] font-poppins text-5xl font-semibold p-20">Education & Experience</div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col justify-center">
                <div className="mt-4 text-[#F5F5F5] font-poppins font-semibold text-[20px]">Education</div>
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <div className="flex flex-col justify-center items-start border-l-2 border-b-2 border-[#333333]">
                <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mt-4 ml-4 border-2 border-[#007CED] w-[100px] rounded-full text-[#F5F5F5] font-poppins text-center">2018</div>
                <div className="text-[#F5F5F5] mt-4 font-poppins text-sm font-thin">Swami Vivekanand Intenational School & Jr College</div>
                </div>
                <div className="text-[#D5D5D5] w-[500px] h-[100px] font-poppins text-base ml-20 mt-4 font-semibold">SSC</div>
                </div>

             
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <div className="flex flex-col justify-center items-start border-l-2 border-b-2 border-[#333333]">
                <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mt-4 ml-4 border-2 border-[#007CED] w-[100px] rounded-full text-[#F5F5F5] font-poppins text-center">2020</div>
                <div className="text-[#F5F5F5] mt-4 font-poppins text-sm font-thin">Pace Junior Science College</div>
                </div>
                <div className="text-[#D5D5D5] w-[500px] h-[100px] font-poppins text-base ml-20 mt-4 font-semibold">HSC (Science)</div>
                </div>

      
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <div className="flex flex-col items-start border-l-2 border-b-2 border-[#333333]">
                <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mt-4 ml-4 border-2 border-[#007CED] w-[100px] rounded-full text-[#F5F5F5] font-poppins text-center">2021-25</div>
                <div className="text-[#F5F5F5] mt-4 font-poppins text-sm font-thin">D . J Sanghvi College of  Engineering</div>
                </div>
                <div className="text-[#D5D5D5] w-[500px] h-[100px] font-poppins text-base  mt-4 ml-20 font-semibold">Btech <br/> Information Technology</div>
                </div>


                </div>


  {/* Experience */}
                <div className="flex flex-col justify-center">
                <div className="mt-4 text-[#F5F5F5] font-poppins font-semibold text-[20px]">Experience</div>
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <div className="flex flex-col items-start border-l-2 border-b-2 border-[#333333]">
                <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mt-4 ml-4 border-2 border-[#007CED] w-[100px] rounded-full text-[#F5F5F5] font-poppins text-center">Lorem</div>
                <div className="text-[#F5F5F5] mt-4 font-poppins text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                </div>
                <div className="text-[#D5D5D5] w-[500px] h-[100px] font-poppins text-base  mt-4 ml-20 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem reprehenderit mollitia </div>
                </div>


               
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <div className="flex flex-col items-start border-l-2 border-b-2 border-[#333333]">
                <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mt-4 ml-4 border-2 border-[#007CED] w-[100px] rounded-full text-[#F5F5F5] font-poppins text-center">Lorem</div>
                <div className="text-[#F5F5F5] mt-4 font-poppins text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className="text-[#D5D5D5] w-[500px] h-[100px] font-poppins text-base  mt-4 ml-20 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem reprehenderit mollitia </div>
                </div>


      
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <div className="flex flex-col items-start border-l-2 border-b-2 border-[#333333]">
                <div className="flex flex-row gap-4 justify-center items-center">
                <div className="mt-4 ml-4 border-2 border-[#007CED] w-[100px] rounded-full text-[#F5F5F5] font-poppins text-center">Lorem</div>
                <div className="text-[#F5F5F5] mt-4 font-poppins text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Cupiditate, nam ipsa sapiente</div>
                </div>
                <div className="text-[#D5D5D5] w-[500px] h-[100px] font-poppins text-base  mt-4 ml-20 font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem reprehenderit mollitia </div>
                </div>


                </div>
            </div>
        </div>
        );
    }
    
    export default Resume;
    