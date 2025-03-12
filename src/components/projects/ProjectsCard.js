import React from 'react';

const ProjectsCard = ({ src }) => { 
  return (
    <div className="w-full h-[400px] xl:h-[450px] rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Project Image"
        />
      </div>
    </div>
  );
}

export default ProjectsCard;

