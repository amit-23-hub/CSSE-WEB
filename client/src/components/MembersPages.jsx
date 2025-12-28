import React, { useState } from "react";
import MemberCard from "./MemberCard";
import { members } from "../utils/mockData";
import { motion } from "framer-motion";


// Create an array of images
// const memberImages = [HimanshuDubey, KrishnaNand, UtkarshTiwari,AhmadFarazAnsari,ShreySrivastava,SachinChauhan,DivyanshuKanaujiya,RupaliMishra,
//                       SiddhiMishra,SanchitaBajpai,AbhishresthaTiwari,AdityaTripathi,AmitKumarSahani,AnshulSengar,HimaniRajput,KumariNisha,ManojKumar,
//                       PriyaYadav,VisheshSingh,AlabhyaGoel,KomalGupta,PerneetaAwasthi,ShristiSingh,VaibhavGarg,,AditiYadav,AkashGupta,RiyaSrivastava,
//                       RyanMaroof,SandhyaKumari,SaumyaSrivastava,ShashankBhardwaj,ShivankarTripathi,VaishnaviTripathi];

const MembersPage = () => {
   const [filter, setFilter] = useState("All");
   const [btechYear, setBtechYear] = useState("All");

   const handleFilterChange = (category) => {
      setFilter(category);
      setBtechYear("All"); // Reset BTech year filter if switching categories
   };

   const handleBtechYearChange = (year) => {
      setBtechYear(year);
   };

   const filteredMembers = members.filter((member) => {
      if (filter === "All") return true;
      if (filter === "MCA" && member.branch.includes("MCA")) return true;
      if (filter === "BTech") {
         if (btechYear === "All") return member.branch.includes("BTech");
         return member.branch.includes(`BTech IT ${btechYear}`);
      }
      if (filter === "Student Lead" && member.designation.includes("Student")) return true;
      return false;
   });

   // Framer Motion variants for the cards
   const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
         opacity: 1,
         y: 0,
         transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
      }),
   };

   return (
      <div className="flex flex-col min-h-screen items-center bg-slate-950">
         {/* Header section */}
         <div className=" mb-[4vh] flex flex-col items-center justify-center md:max-w-[50vw]">
            <h1 className="mt-[4vh] uppercase font-bold text-xl text-white">
               Our Team
            </h1>
            <p className="mt-[0.1vh] text-4xl text-zinc-200 font-semibold">
               Meet the CSSE Team
            </p>
            <p className="text-base text-zinc-300 mt-[2vh] text-center">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
               tenetur, quia possimus voluptas in provident saepe, maxime iusto
               praesentium suscipit deleniti assumenda fuga sed.
            </p>
         </div>

         {/* Filter Ribbon */}
         <div className="flex gap-4 mb-4">
            <button
               className={`${
                  filter === "All" ? "bg-red-600 text-white" : "bg-gray-600 text-zinc-300"
               } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
               onClick={() => handleFilterChange("All")}
            >
               All
            </button>
            <button
               className={`${
                  filter === "MCA" ? "bg-red-600 text-white" : "bg-gray-600 text-zinc-300"
               } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
               onClick={() => handleFilterChange("MCA")}
            >
               MCA
            </button>
            <button
               className={`${
                  filter === "BTech" ? "bg-red-600 text-white" : "bg-gray-600 text-zinc-300"
               } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
               onClick={() => handleFilterChange("BTech")}
            >
               BTech
            </button>
            <button
               className={`${
                  filter === "Student Lead" ? "bg-red-600 text-white" : "bg-gray-600 text-zinc-300"
               } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
               onClick={() => handleFilterChange("Student Lead")}
            >
               Student Lead
            </button>
         </div>

         {/* Subfilters for BTech */}
         {filter === "BTech" && (
            <div className="flex gap-4 mb-4">
               <button
                  className={`${
                     btechYear === "All" ? "bg-blue-600 text-white" : "bg-gray-600 text-zinc-300"
                  } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
                  onClick={() => handleBtechYearChange("All")}
               >
                  All Years
               </button>
               <button
                  className={`${
                     btechYear === "2nd Year" ? "bg-blue-600 text-white" : "bg-gray-600 text-zinc-300"
                  } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
                  onClick={() => handleBtechYearChange("2nd Year")}
               >
                  2nd Year
               </button>
               <button
                  className={`${
                     btechYear === "3rd Year" ? "bg-blue-600 text-white" : "bg-gray-600 text-zinc-300"
                  } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
                  onClick={() => handleBtechYearChange("3rd Year")}
               >
                  3rd Year
               </button>
               <button
                  className={`${
                     btechYear === "4th Year" ? "bg-blue-600 text-white" : "bg-gray-600 text-zinc-300"
                  } py-2 px-4 rounded-full font-semibold transition-colors duration-200`}
                  onClick={() => handleBtechYearChange("4th Year")}
               >
                  4th Year
               </button>
            </div>
         )}

         {/* Cards Section */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:mx-10 mx-0 mb-2">
            {filteredMembers.map((member, i) => (
               <motion.div
                  key={member.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true, amount: 0.2 }}
               >
                  <MemberCard
                     name={member.name}
                     branch={member.branch}
                     designation={member.designation}
                     image={member.image}
                     linkedin={member.linkedin}
                  />
               </motion.div>
            ))}
         </div>
      </div>
   );
};

export default MembersPage;