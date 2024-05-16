import React from 'react'
import ProjectImg from "../../assets/ProjectSection/ProjectImg.jpg";

const ProjectSection = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          src={ProjectImg}
          alt="#"
          className="w-full aspect-[4/3] md:aspect-[5/3] lg:aspect-[7/2]
          object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center
          bg-black/25"
        >
          <span className="text-white font-lato text-xl md:text-3xl uppercase text-center">
            Jeżeli masz gotowy projekt lub pomysł na wykonanie biżuterii zapraszam do kontaktu na adres e-mail
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;