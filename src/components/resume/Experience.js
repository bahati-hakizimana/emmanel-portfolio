import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - Present</p>
          <h2 className="text-4xl font-bold">Academic Appointments & Leadership Roles</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Assistant Professor & Head, Research and Training"
            subTitle="Institute of Global Health Equity Research (IGHER), UGHE (2021 - Present)"
            result="Rwanda"
            des="Leading research and training initiatives at the Institute of Global Health Equity Research."
          />
          <ResumeCard
            title="Interim Director"
            subTitle="Institute of Global Health Equity Research (2021 - 2022)"
            result="Rwanda"
            des="Served as the Interim Director, overseeing research and academic strategies."
          />
          <ResumeCard
            title="Monitoring and Evaluation Director"
            subTitle="Digital Health Applied Leadership Program (DHALP), UGHE (2022 - 2023)"
            result="Rwanda"
            des="Directed monitoring and evaluation for the DHALP program to ensure impactful outcomes."
          />
          <ResumeCard
            title="Head, University of Calgary in Qatar Conjoint Health Research Ethics Board (UCQ CHREB)"
            subTitle="University of Calgary in Qatar (2016 - 2020)"
            result="Qatar"
            des="Led ethical research governance and compliance for health research projects."
          />
          <ResumeCard
            title="Assistant Professor"
            subTitle="University of Calgary in Qatar (2015 - 2020)"
            result="Qatar"
            des="Engaged in teaching, research, and mentorship in health sciences."
          />
          <ResumeCard
            title="Head, Research Department (Associate Dean Research Equivalent)"
            subTitle="University of Calgary in Qatar (2015 - 2020)"
            result="Qatar"
            des="Oversaw research activities, faculty development, and academic leadership."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;