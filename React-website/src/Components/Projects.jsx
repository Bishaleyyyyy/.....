import React from "react";




const Projects = () => {

    const projectsData = [
        {
            id: 1,
          title: "Skyline Haven",
          price: "$2,50,000",
          location: "Lalitpur",
          src: "project_img_1"
        },
        {
            id: 1,
          title: "Vista Verde",
          price: "$2,50,000",
          location: "San Francisco",
          src: "Tulsipur"
        },
        {
            id: 1,
          title: "Serenity Suites",
          price: "$2,50,000",
          location: "Chitwan",
          src: "project_img_3"
        },
        {
            id: 1,
          title: "Central Square",
          price: "$2,50,000",
          location: "Mahendranagar",
          src: "project_img_4"
        },
        {
            id: 1,
          title: "Vista Verde",
          price: "$2,50,000",
          location: "Lamahi",
          src: "project_img_5"
        },
        {
            id: 1,
          title: "Serenity Suites",
          price: "$2,50,000",
          location: "Ghorai",
          src: "project_img_6"
        },
        
      ];




  return (
    <div
      className="
    container mx-auto py-4 pt-20 px-6  md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center ">
        Projects{" "}
        <span
          className="
        underline underline-offset-4 decoration-1 font-light"
        >
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8  max-w-80 mx-auto">
        Crafting spaces, Building Legacies-Explore Our Portfolio
      </p>

      {/*-------------Slider button----------*/}

      <div className="flex justify-end items-center mb-8">
        <button>
          <img src="left_arrow.svg" alt="Previous"  className="p-3 bg-gray-200  rounded mr-2"
          aria-label="Previous Project"/>
        </button>
        <button>
          <img src="right_arrow.svg" alt="Next"  className="p-3 bg-gray-200  rounded mr-2"
          aria-label="Next Project"/>
        </button>
      </div>

{/*-------------Project slider -----------*/}

<div>
    <div>
{projectsData.map((id,title,price,location,src)=>(

    <div key={id}>

<img src={src} alt={title} />

    </div>
))}
    </div>
</div>


    </div>
  );
};

export default Projects;
