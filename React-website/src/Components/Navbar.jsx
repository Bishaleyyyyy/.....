import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)



useEffect(()=>{
if(showMobileMenu){
  document.body.style.overflow ='hiddden'
}
else{
  document.body.style.overflow ='auto'
}

return ()=>{
   document.body.style.overflow ='auto'
}

},[showMobileMenu])



  return (
    <div className="absolute  font-container top-0 left-0 w-full z-10">
      <div
        className="container mx-auto flex justify-between items-center py-4 px-6
      md:px-20 lg:px-32 bg-transparent"
      >
        <h1 className="text-[50px] font-semibold text-white md:text-3xl lg:text-4xl">
          Bishal <span className="text-red-600">Kc.</span>
        </h1>

        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonial" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        {/* <button
          className="hiddden md:block bg-white
 px-8 py-2 rounded-full"
        >
          Sign Up
        </button> */}

        <img onClick={()=> setShowMobileMenu(true)}
          src="/menu_icon.svg"
          className="md:hidden w-7 cursor-pointer "
          alt=""
        />
      </div>

      {/*---------------mobile menu----------*/}

      <div className= {`md:hidden ${showMobileMenu? 'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end pt-10 pr-7 cursor-pointer">
          <img onClick={()=> setShowMobileMenu(false)} src="/cross_icon.svg" className="w-6 " alt="" />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a  onClick={()=> setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full
    inline-block"
          >
            Home
          </a>
          <a  onClick={()=> setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full
    inline-block"
          >
            About
          </a>
          <a  onClick={()=> setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full
    inline-block"
          >
            Projects
          </a>
          <a  onClick={()=> setShowMobileMenu(false)}
            href="#Testimonial"
            className="px-4 py-2 rounded-full
    inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
