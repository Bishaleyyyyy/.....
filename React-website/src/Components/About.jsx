import React from "react";


const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold">
        About <span className="underline  underline-offset-4 decoration-1 under font-light">Our Brand</span>
      </h1>
      <p className="text-gray-500 max-w-80  text-center mb-8">Passionate About Properties, Dedicated to your Vision</p>


<div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">

  <img src="/brand_img.png" alt="" className="w-full sm:w-1/2 max-w-lg"/>

  <div className="flex flex-col items-center md:items-start mt-10 
  text-gray-600 ">

    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">

      <div className="text-4xl font-medium text-gray-800">
        <p>10+</p>
        <p className="text-gray-500 text-2xl">Years of Excellence</p>
      </div>
      <div className="text-4xl font-medium text-gray-800">
        <p>12+</p>
        <p className="text-gray-500 text-2xl">Projects Completed</p>
      </div>
      <div className="text-4xl font-medium text-gray-800">
        <p>20+</p>
        <p className="text-gray-500 text-2xl">Mn. Sq. Ft. Delivered</p>
      </div>

      <div className="text-4xl font-medium text-gray-800">
        <p>25+</p>
        <p className="text-gray-500 text-2xl">Ongoing Projects</p>
      </div>

</div>

<p className="my-10 m-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam, nobis amet sapiente officiis voluptates voluptas, adipisci perspiciatis itaque eaque nisi fugit illum iure maiores, optio beatae minus eum iste!</p>

<button className="bg-blue-600 text-white px-8 py-2 rounded ">Learn More</button>


  </div>

</div>


    </div>



           

  );
};

export default About;
