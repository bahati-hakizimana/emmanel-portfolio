import React from 'react';
import Title from '../layouts/Title';
import { 
  Pediatricworkshopcert,
  CertHealthSafeypromotion,
  CITICertificate,
  ConferenceScientificplanningCommittee,
  Instructionalskillscertificate,
  PresenterInternationalprimarycareconference,
  PresenterWorldcongressonPublichealthandnutrition,
  RDSurveyTrainingCertificate,
  ResearchethicsCertificate,
 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY CERTIFICATE AND KEEP YOUR FEEDBACK" des="My CERTIFICATES" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard src={Pediatricworkshopcert} />
        <ProjectsCard src={CertHealthSafeypromotion} />
        <ProjectsCard src={CITICertificate} />
        <ProjectsCard src={ ConferenceScientificplanningCommittee} />
        <ProjectsCard src={Instructionalskillscertificate} />
        <ProjectsCard src={PresenterInternationalprimarycareconference} />
        <ProjectsCard src={PresenterWorldcongressonPublichealthandnutrition} />
        <ProjectsCard src={RDSurveyTrainingCertificate} />
        <ProjectsCard src={ResearchethicsCertificate} />
        
      </div>
    </section>
  );
}

export default Projects;
