import { Component } from "react";
import React from "react";
import PracticeButtonCard from "../Cards/PracticeButtonCard";
import PracticeInterviewCard from "../Cards/PracticeInterviewCard";
import JoinUsSection from "./JoinUsSection";
import { ButtonId, ButtonsData, CardsData } from "../../data/LandingPageData";

class PracticeSection extends Component {
  state = { ActiveTabId: ButtonId[0].BtnId };

  getFilteredProjects = () => {
    const { ActiveTabId } = this.state;
    const filteredProjects = CardsData.filter(
      (eachProjectDetails) => eachProjectDetails.UniqueNo === ActiveTabId
    );
    return filteredProjects;
  };
  updateActiveBtnId = (BtnId) => {
    this.setState({ ActiveTabId: BtnId });
  };

  render() {
    const filteredProjects = this.getFilteredProjects();
    const { ActiveTabId } = this.state;

    return (
      <div className="relative">
        <div className="flex flex-col items-center relative">
          <h1 className="md:w-[628px] md:h-[42px] sm:text-[18px] sm:w-[512px] font-[400] lg:w-[987px] lg:h-[42px] lg:text-[36px] sm:text-center  text-[#1C4A81] font-[Roboto]">
            Practice Coding & Ace Hiring Assessments
          </h1>
          <p className="md:w-[545px] md:h-[42px] md:text-[14px] text-center sm:w-[302px] lg:w-[512px] font-[Poppins] lg:pt-[10px] text-[#000000] font-[400] sm:text-[14px] h-[42px]">
            Level up your coding skills by practicing the hiring assessments of
            your dream companies & ace your placement game!
          </p>

          <div className="flex lg:flex-row  sm:flex-col md:border-[1px] md:rounded-[20px] lg:border-[0px] lg:rounded-[0px] justify-center md:w-[651px] md:h-[323px] lg:w-auto">
            <ul className="sm:w-[348px] sm:mt-[35px] sm:h-[330px] sm:ml-[20px] md:w-[572px] md:h-[25px]  lg:w-[348px] md:m-[20px] lg:h-[388px] lg:p-6 lg:mt-[20px] sm:border lg:border md:border-[0px] rounded-lg  lg:shadow-md bg-white flex flex-col md:flex-row lg:flex-col items-center  space-y-2">
              {ButtonsData.map((eachItem) => (
                <PracticeButtonCard
                  ButtonDetails={eachItem}
                  updateActiveBtnId={this.updateActiveBtnId}
                  isActive={ActiveTabId === eachItem.BtnId}
                />
              ))}
              <div className="md:ml-[10px] md:p-[5px]sm:mt-[10px] lg:mt-[10px] space-y-2 sm:w-[300px] sm:h-[41px] md:w-auto md:h-[25px] lg:w-[300px] lg:h-[41px]  border-[#89A0CE] border-[1px] rounded-[20px] shadow-md bg-white flex flex-row justify-center items-center  md:m-auto  md:pb-[5px] md:pt-[5px] lg:ml-[0px] lg:pb-[0px] lg:pt-[0px]">
                <a
                  href="#"
                  className="pt-[6px] sm:text-blue-600 sm:font-semibold lg:text-blue-600 lg:font-semibold md:text-[10px] sm:text-[18px] lg:text-[18px]"
                >
                  View all
                </a>
                <button class="ml-[10px] lg:w-[25px] lg:h-[25px] md:w-[15px] md:h-[15px] sm:w-[25px] sm:h-[25px] flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </ul>
            {filteredProjects.map((eachItem) => (
              <PracticeInterviewCard Details={eachItem} />
            ))}
          </div>
        </div>
        <JoinUsSection />
      </div>
    );
  }
}
export default PracticeSection;