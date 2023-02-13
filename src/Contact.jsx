import React,  { useRef } from "react";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import emailjs from '@emailjs/browser';



function Contact()
{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k4gdnmt', 'template_ngsc01u', form.current, 'MylOxt-MNGX2BWGZj')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div
        className="bg-gradient-to-r from-[#222222] to-[#161616] min-w-full max-w-max min-h-screen max-h-max ">
             <div className="bg-[#252525] w-full h-[200px] border-[#353535] border-2 ">
                <div className="text-2xl text-[#F5F5F5] font-poppins md:text-5xl font-semibold p-20 ">Contact</div>
            </div>
           {/* maps */}
           <div className="flex justify-center p-10 ">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.344301800127!2d72.81147193350428!3d19.209696244923233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c71e00b21f%3A0xfa74b1f57d575513!2sKandivali%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676226037627!5m2!1sen!2sin" width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>


           <div className="flex flex-col flex-wrap sm:gap-10 md:flex md:flex-row justify-evenly items-center p-10">
            <div className="flex flex-col justify-center items-start gap-6 p-4">
                <div className="flex flew-row justify-center items-center gap-4 ">
                    <PhoneIphoneIcon fontSize="large"  style={{ color: "#007CED" }}/>
                    <p className="text-base md:text-xl text-[#F5F5F5] font-semibold font-poppins">+91 9967331856</p>
                </div>
                <div className="flex flew-row justify-center items-center gap-4 ">
                    <PlaceIcon fontSize="large"  style={{ color: "#007CED" }}/>
                    <p className="text-base md:text-xl text-[#F5F5F5] font-semibold font-poppins">Mumbai , India</p>
                </div>
                <div className="flex flew-row justify-center items-center gap-4 ">
                    <MailOutlineIcon fontSize="large"  style={{ color: "#007CED" }}/>
                    <p className="text-base md:text-xl text-[#F5F5F5] font-semibold font-poppins">priyankaa.250303@gmail.com</p>
                </div>
               
            </div>
            <div className="flex flex-col gap-8">
            <div className="mt-8 text-[#F5F5F5] font-poppins font-semibold text-[20px]">Get in Touch</div>
                <div className="flex flex-row">
                    <div className="bg-[#353535] w-[102px] h-1"></div>
                    <div className="absolute bg-[#007CED] w-10 h-1"></div>
                </div>
                <form ref={form} onSubmit={sendEmail}>

                    
                <input className="mt-4 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-white py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Full name" type="text" name="user_name"/>

                <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-white py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email Address" type="email" name="user_email"/>

                <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-white py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Subject" type="text" name="user_subject"/>

                <input className="bg-[#333333] hover:bg-[#007CED] border-2 border-[#007CED] rounded-3xl text-white font-poppins py-2 px-4 mt-6 w-[200px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out" type="submit" value="Send Message"/>
                        
                </form>
                
            </div>
            <form ref={form} onSubmit={sendEmail}>
            <input className="mt-4 mb-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[250px] border border-[#d5d5d5] rounded-md text-white pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Message" type="text" name="message"/>
            </form>

            
           </div>
        
     
      </div>
      
    );
}
export default Contact;

{/* <form ref={form} onSubmit={sendEmail}>
      <label className="mt-4 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-white py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">Full Name</label>
      <input type="text" name="user_name" />
      <label className="mt-4 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-white py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">Email</label>
      <input type="email" name="user_email" />
      <label className="mt-4 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-white py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">Subject</label>
      <input type="text" name="user_subject" />
      <label className="mt-4 mb-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#222222] w-[300px] h-[250px] border border-[#d5d5d5] rounded-md text-white pl-4 shadow-lg shadow-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">Subject</label>
      <textarea name="message" />
     
    </form> */}