import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import sta from "../assets/standrews.png";
import arm from "../assets/arm.png";
import pre from "../assets/prefessionalsltd_logo.jpeg";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-5 pb-5 flex flex-col items-center space-y-7 @container">
        <h1 className="text-5xl font-mono">Osi Mayungbo</h1>
        <div className="space-x-2 flex @5xl:flex-row flex-col items-center">
          <a
            href="/site/Osi_Mayungbo_Resume.pdf"
            target="_blank"
            type="application/pdf"
          >
            <button className="font-mono cursor-pointer bg-gray-200 border-2 border-solid border-gray-500 hover:bg-gray-300 py-5 px-4 rounded">
              📄 See My Resume
            </button>
          </a>
          <p className="text-5xl">•</p>
          <a
            href="https://www.linkedin.com/in/osi-mayungbo/"
            className="font-mono"
            target="_blank"
          >
            <button className="flex items-center cursor-pointer border-2 border-solid border-gray-500 bg-gray-200 hover:bg-gray-300 py-3 px-4 rounded">
              <img className="mr-2" src={linkedin} width={40}></img> LinkedIn
            </button>
          </a>
          <p className="text-5xl">•</p>
          <a
            href="https://github.com/01m1"
            className="font-mono"
            target="_blank"
          >
            <button className="flex items-center cursor-pointer border-2 border-solid border-gray-500 py-3 px-4 bg-gray-200 hover:bg-gray-300 rounded">
              <img className="mr-2" src={github} width={40}></img> GitHub
            </button>
          </a>
          <p className="text-5xl">•</p>
          <a
            href="mailto:osimayungbo@gmail.com"
            className="font-mono"
            target="_blank"
          >
            <button className="flex items-center cursor-pointer border-2 border-solid border-gray-500 bg-gray-200 hover:bg-gray-300 py-5 px-4 rounded">
              ✉️osimayungbo@gmail.com
            </button>
          </a>
        </div>

        <div className="flex flex-row border-1 pb-5">
          <div className="flex flex-col items-center w-85 md:w-180 lg:w-210 xl:w-280">
            <h1 className="text-4xl pt-5">About Me</h1>
            <p className="pl-5 text-[10px] md:text-[15px] lg:text-xl flex items-center">
              Second Year
              <strong>
                <a
                  className="text-blue-500 m-1"
                  href="https://www.st-andrews.ac.uk/subjects/computer-science/computer-science-bsc/direct/"
                  target="_blank"
                >
                  Direct Entry
                </a>
              </strong>
              Computer Science student at the
              <strong>
                <a
                  className="text-blue-500 ml-1"
                  href="https://www.st-andrews.ac.uk/"
                  target="_blank"
                >
                  University of St Andrews
                </a>
              </strong>
              <img className="mt-5 w-13" src={sta}></img>
              <em>(Sep 2024 - Jun 2027)</em>
            </p>
            <hr className="border-0.5 mb-8 w-85 md:w-180 xl:w-280"></hr>
            <p className="pl-5 text-[10px] md:text-[15px] lg:text-xl flex items-center">
              Incoming Software Engineer Intern at
              <strong>
                <a
                  className="text-blue-500 ml-1"
                  href="https://www.arm.com/"
                  target="_blank"
                >
                  Arm
                </a>
              </strong>
              <img className="mx-3 w-13" src={arm}></img>
              <em>(Jun 2025 - Aug 2025)</em>
            </p>
            <p className="text-[10px] pl-5 md:text-[15px] lg:text-xl items-center mt-11">
              Selected to attend Spring/Insight Programmes at
              <strong>
                <a
                  className="text-blue-500 ml-1"
                  href="https://sig.com/"
                  target="_blank"
                >
                  SIG
                </a>
              </strong>
              ,
              <strong>
                <a
                  className="text-blue-500 m-1"
                  href="https://www.bankofamerica.com/"
                  target="_blank"
                >
                  Bank Of America
                </a>
              </strong>
              and
              <strong>
                <a
                  className="text-blue-500 m-1"
                  href="https://www.flowtraders.com/"
                  target="_blank"
                >
                  Flow Traders
                </a>
              </strong>
              <em>(Mar 2025 - Apr 2025)</em>
            </p>
            <p className="pl-5 text-[10px] md:text-[15px] lg:text-xl flex items-center mt-11">
              Ex-Software Engineer Intern at
              <strong>
                <a
                  className="text-blue-500 m-1"
                  href="https://www.linkedin.com/company/prefessionalsltd/"
                  target="_blank"
                >
                  PreFessionals
                </a>
              </strong>
              (Startup)
              <img className="mx-3 w-10 w-13" src={pre}></img>
              <em>(Jul 2024 - Sep 2024)</em>
            </p>
            <hr className="border-0.5 mb-4 mt-10 w-85 md:w-180 xl:w-280"></hr>
            <h1 className="text-3xl mb-4">Programming Languages</h1>
            <p className="pl-5 text-[12px] md:text-xl">
              Python • Java • C++ • C • SQL • JavaScript • TypeScript
            </p>
          </div>
        </div>
        <button
          className="text-2xl flex font-mono items-center cursor-pointer border-2 border-solid border-gray-500 bg-gray-200 hover:bg-gray-300 py-3.5 px-4 rounded"
          onClick={() => {
            navigate("/projects");
          }}
        >
          See My Projects
        </button>
      </div>
    </>
  );
}

export default Home;
