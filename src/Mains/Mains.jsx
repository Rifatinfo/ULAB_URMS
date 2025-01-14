import { useState } from "react";
import Teacher from "../Components/Teacher/Teacher";
import Home from "../Components/Home/Home";
import EvaluationCourse from "../Components/EvaluationCourse/EvaluationCourse";
import Evaluation from "../Components/Evaluation/Evaluation";
import Preregistration from "../Components/Preregistration/Preregistration";
import Schedule from "../Components/Schedule/Schedule";
import Billing from "../Components/Billing/Billing";
import { Result } from "postcss";
import Profile from "../Components/Profile/Profile";
import Logout from "../Components/Logout/Logout";

const Mains = ({subjects,handleSelectedSubject,selectedSubject}) => {
  const [isActive, setIsActive] = useState({
    status: "Home",
    cart: true,
  });
  const handleIsActive = (status) => {
    if (status === "Home") {
      setIsActive({
        status: "Home",
        cart: true,
      });
    } else {
      setIsActive({
        status: status,
        cart: false,
      });
    }
  };
  const components = {
    Home: <Home></Home>,
    Teacher: <Teacher />,
    EvaluationCourse: <EvaluationCourse />,
    Evaluation: <Evaluation />,
    Preregistration: <Preregistration subjects={subjects} handleSelectedSubject={handleSelectedSubject} />,
    Schedule: <Schedule selectedSubject={selectedSubject} />,
    Billing: <Billing />,
    Result: <Result />,
    Profile: <Profile />,
    Logout: <Logout />,
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="shadow-xl nunito">
        {/* logo */}
        <div>
          <img
            className="lg:w-[800px] lg:h-[100px]"
            src="https://urms-online.ulab.edu.bd/images/header.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-wrap h-12 items-center justify-center text-center gap-1 text-[12px] lg:text-[16px] lg:w-[810px] lg:h-[44px] bg-[#0099cc] nunito text-white lg:font-bold lg:gap-2">
            {[
              "Home",
              "Teacher",
              "EvaluationCourse",
              "Evaluation",
              "Preregistration",
              "Schedule",
              "Billing",
              "Result",
              "Profile",
              "Logout",
            ].map((status) => (
              <button
                key={status}
                className={`${
                  isActive.status === status
                    ? "text-[#FFE993] scale-110 lg:font-bold lg:mb-1 lg:text-xl text-[16px]"
                    : "text-white"
                }`}
                onClick={() => handleIsActive(status)}
              >
                {status}
              </button>
            ))}
          </div>
          {/* Dynamic Component Rendering */}
          <div>{components[isActive.status] || <Logout />}</div>
        </div>
        {/* next div 1 */}
        
      </div>
    </div>
  );
};

export default Mains;
