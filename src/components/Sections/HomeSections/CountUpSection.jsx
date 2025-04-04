import React from "react";
import CountUp from "react-countup";
import "../../../../src/index.css";
const CountupSection = () => {
  const status = [
    { value: 21, label: "Active Users", suffix: "M+" },
    { value: 22.3, label: "Assessment", suffix: "M+" },
    { value: 130, label: "Opportunities", suffix: "K+" },
    { value: 800, label: "Brands trust us", suffix: "+" },
    { value: 42, label: "Organisations", suffix: "K+" },
    { value: 78, label: "Countries", suffix: "+" },
  ];
  return (
    <>
      <div className="bg-[#FAFAFA]"> 
        <div className="w-full bg-[#FAFAFA] relative bottom-25">
        <div className="relative top-8 bg-[#FAFAFA]">
          <p className="flex justify-center text-3xl">Milestones We’ve Achieved</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 justify-items-center gap-6 relative top-10">
          {status.map((stat, index) => (
            <div
              key={index}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative top-5 bg-white h-[100px] w-[150px] shadow-lg flex flex-col justify-center items-center rounded-lg overflow-hidden animated-border">
                <p className="text-2xl font-bold text-[#1C4A81] items-center">

                  <CountUp
                    start={stat.value * 0.1}
                    end={stat.value}
                    duration={1.5}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    useEasing={true}
                    redraw={true}
                  />
                  {stat.suffix}
                </p>
                <p className="text-sm items-center">{stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div></div>

    </>
  );
};
export default CountupSection;
