import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2012</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Doctor of Philosophy in Community Health Sciences"
            subTitle="University of Calgary, Canada (2012)"
            result="PhD"
            des="Advanced research and study in Community Health Sciences, focusing on public health strategies and interventions."
          />
          <ResumeCard
            title="Master of Public Health (Health Studies)"
            subTitle="Lakehead University, Ontario (2007)"
            result="MPH"
            des="Comprehensive training in public health principles, research methodologies, and policy development."
          />
          <ResumeCard
            title="Master of Sciences"
            subTitle="University of Ghent, Belgium (2002)"
            result="MSc"
            des="Specialized education in scientific research methodologies and advanced health studies."
          />
          <ResumeCard
            title="Advanced Diploma (I.A)"
            subTitle="University of Dschang, Cameroon (1998)"
            result="Diploma"
            des="Foundational education in health sciences and community health practices."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Education;
