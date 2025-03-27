import { joinUsData } from "../../data/LandingPageData";
import JoinUsList from "./JoinUsList";
import JoinUs from "../../assets/JoinUsStudent.png"
import MetaLogo from "../../assets/metaLogo.png"
import AdobeImg from "../../assets/AdobeImg.png"
import AmazonImg from "../../assets/AmazonImg.png"



const JoinUsSection = () => {
  return (
    <div className="sm:mx-auto md:mx-0 lg:mx-auto relative mt-[40px] sm:w-[412px] sm:h-[400px]  md:w-[919px] md:h-[400px] lg:w-[1440px] lg:h-[663px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col md:ml-[30px] lg:ml-[0px]">
          <h2 className="md:pt-[52px] lg:pt-[0px] sm:w-[277px] md:text-[28px] lg:w-[619px] md:w-[501px] sm:text-[25px] sm:ml-[20px] lg:ml-[40px] lg:mt-[107px] lg:text-[36px] font-[Poppins] font-[400] text-gray-800">
            What makes us{" "}
            <span className="md:top-[52px] text-blue-600 md:text-[28px] sm:text-[25px] lg:text-[36px] font-[400]">
              UNIQUE
            </span>{" "}
            from others
          </h2>

          <ul className="mt-[30px]">
            {joinUsData.map((eachItem) => (
              <JoinUsList details={eachItem} />
            ))}
          </ul>
          <button className="lg:ml-[60px] lg:mt-[30px] w-[200px] sm:ml-[30px] sm:mt-[10px] sm:text-[16px] lg:text-[24px] md:text-[14px] text-blue-600 font-medium flex items-center gap-1 hover:underline">
            Join us →
          </button>
        </div>
        <div>
          <img
            src={JoinUs}
            className="md:left-[590px] md:top-[84px] md:w-[127px] md:h-[237px] lg:h-[545px] lg:w-[350px] sm:h-[200px]  sm:w-[100px] sm:top-[50px] sm:left-[290px] absolute lg:top-[75px] lg:left-[840px]"
          />
          <img
            src={MetaLogo}
            className="md:left-[714px]  md:top-[73px] md:w-[49px] md:h-[49px] absolute lg:top-[19px] lg:left-[756px] sm:w-[30px] sm:h-[30px] lg:w-[100px] sm:top-[30px] sm:left-[374px] lg:h-[100px]"
          />
          <img
            src={AdobeImg}
            className="md:left-[515px] md:top-[238px] md:w-[73px] md:h-[74px] absolute lg:top-[398px] lg:left-[677px] sm:w-[30px] sm:h-[30px] lg:w-[100px] sm:top-[210px] sm:left-[255px] lg:h-[100px]"
          />
          <img
            src={AmazonImg}
            className="md:left-[710px]  md:top-[310px] md:w-[49px] md:h-[49px] absolute lg:top-[548px] lg:left-[1140px] sm:w-[30px] sm:h-[30px] lg:w-[100px] sm:top-[228px] sm:left-[375px] lg:h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;