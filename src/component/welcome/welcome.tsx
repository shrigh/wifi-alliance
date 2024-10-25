import { motion } from "framer-motion";
import { Button } from "../ui/button";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Welcome: React.FC = () => {
  return (
    <div className="relative bg-[#130A32] flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      {/* Left-Top Circle */}
      <motion.div
        className="absolute -top-[7.5rem] -left-[7.5rem] border-2 border-white rounded-full w-[115vh] h-[115vh] z-20"
        variants={{
          hidden: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
          visible: { scale: 1, opacity: 1, x: "0%", y: "0%" },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.9,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 0.1,
        }}
      />

      {/* Right-Top Circle */}
      <motion.div
        className="absolute top-32 right-60 rounded-full overflow-hidden"
        variants={{
          hidden: {
            scale: 0.01,
            width: 3,
            height: 3,
            opacity: 0,
            x: 0,
            y: 0,
          },
          visible: {
            width: "155vh",
            height: "155vh",
            scale: 1,
            opacity: 1,
            x: "30%",
            y: "-58%",
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.9,
          ease: [0.83, 0, 0.17, 1],
          delay: 0.2,
        }}
        style={{
          transformOrigin: "top right",
          backgroundImage: 'url("/assets/iStock-1305282522.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center right",
          borderRadius: "50%",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.3)",
          filter: "brightness(1.1) contrast(1.2)",
        }}
      />

      {/* Text Content */}
      <div className="grid grid-cols-2 mt-10 z-20 text-white w-[90%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
          style={{ width: "90%" }}
        >
          <div className="space-y-6 mt-16">
            <h1 className="text-[2.5rem] leading-[2.8rem] font-bold poppins-medium">
              Wi-Fi Alliance - <br />
              connecting everyone <br />
              and everything, <br />
              everywhere.
            </h1>
            <p>
              Discover how WI-FI and unlicensed spectrum drive <br /> global
              connectivity, foster innovation and generate <br /> immense
              economic impact.
            </p>
          </div>
          <Button className="mt-4 bg-[#FFCD2E] text-black rounded-full hover:bg-yellow-500">
            Our Story
          </Button>
        </motion.div>
        <motion.div
          className="text-white mt-10 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          style={{ width: "90%" }}
        >
          <div className="absolute bottom-4 right-14 z-20 text-white">
            <div className="flex gap-8">
              <div className="space-y-3 border-r pr-4">
                <p className="text-lg">
                  Lack of Wi-Fi spectrum jeopardizes <br /> Europe's gigabit
                  connectivity goals.
                </p>
                <div className="text-xs flex items-center gap-3">
                  Read the latest edition{" "}
                  <IoIosArrowForward className="text-[#2c1262] w-4 p-0.5 h-4 rounded-full bg-[#A7B5FE]" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xl">
                  Experience the 25th <br /> anniversary of WI-FI.
                </p>
                <div className="text-xs flex items-center gap-3">
                  Learn why 6 GHz is crucial{" "}
                  <IoIosArrowForward className="text-[#2c1262] w-4 p-0.5 h-4 rounded-full bg-[#A7B5FE]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
