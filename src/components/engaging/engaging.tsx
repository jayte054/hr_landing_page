import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import _employeeImage from "../../assets/payImage.png";
import _hiringImage from "../../assets/hiringImage.png";
import _dataImage from "../../assets/dataImage.png"
import _payImage from "../../assets/employeeImage.png";
import _defaultEngage from "../../assets/defaultEngage.png"

import "./engaging.css";

export const Engaging = () => {
  const _default = () => (
    <img src={_defaultEngage} alt="default image" />
  );

  const [pay, setPay] = useState(false);
  const [payImage, setPayImage] = useState<any>(_default);
  const [hiring, setHiring] = useState(false);
  const [hiringImage, setHiringImage] = useState<any>();
  const [data, setData] = useState(false);
  const [dataImage, setDataImage] = useState<any>();
  const [employee, setEmployee] = useState(false);
  const [employeeImage, setEmployeeImage] = useState<any>();

  const togglePay = () => {
    setPay((prev) => {
      const newPayState = !prev;

      // Disable other states when pay is enabled
      if (newPayState) {
        setHiring(false);
        setData(false);
        setEmployee(false);
      }

      return newPayState;
    });
    setPayImage(() => _payImage);
  };
  const toggleHiring = () => {
    setHiring((prev) => {
      const newHiringState = !prev;

      if (newHiringState) {
        setPay(false);
        setData(false);
        setEmployee(false);
      }

      return newHiringState;
    });
    setHiringImage(() => _hiringImage);
  };
  const toggleData = () => {
    setData((prev) => {
      const newData = !prev;

      if (newData) {
        setPay(false);
        setHiring(false);
        setEmployee(false);
      }
      return newData;
    });
    setDataImage(() => _dataImage);
  };
  const toggleEmployee = () => {
    setEmployee((prev) => {
      const newEmployee = !prev;

      if (newEmployee) {
        setPay(false);
        setData(false);
        setHiring(false);
      }
      return newEmployee;
    });
    setEmployeeImage(() => _employeeImage);
  };

  return (
    <div className="engaging-container">
      <h2>Combine all your Hr Systems into one Platform</h2>
      <div className="engaging-body">
        <div className="title-div">
          <div className="engage-title" onClick={togglePay}>
            <span style={{ fontSize: "1.5rem" }}>Payroll, Time & Benefits</span>
            <span style={{ float: "right", paddingRight: ".5rem" }}>
              {/* {" "} */}
              <FaCaretDown />
            </span>
          </div>

          {pay && (
            <span>
              shamzbridge HR allows you to track hours worked, manage benefits
              <br />
              enrollment, and run payroll all from a single platform. No more
              data double entry
              <br />
              and manual approval processes—just easy, accurate payroll for you
              <br />
              and your employees.
            </span>
          )}
          <div className="engage-title" onClick={toggleHiring}>
            <span style={{ fontSize: "1.5rem" }}>Hiring & Onboarding</span>
            <span style={{ float: "right", paddingRight: ".5rem" }}>
              {" "}
              <FaCaretDown />
            </span>
          </div>
          {hiring && (
            <span>
              shamzbridge HR helps you quickly find, hire, and onboard the best
              talent. With our powerful applicant tracking system and proactive
              onboarding tasks, you can create a compelling candidate experience
              and better first days for new hires.
            </span>
          )}
          <div className="engage-title" onClick={toggleData}>
            <span style={{ fontSize: "1.5rem" }}>HR Data & Reporting</span>
            <span style={{ float: "right", paddingRight: ".5rem" }}>
              {" "}
              <FaCaretDown />
            </span>
          </div>
          {data && (
            <span>
              shamzbridge HR is your one-stop shop for data management, with
              instant, pre-built reports, automated workflows, and in-depth
              analytics to back you up and keep you moving.
            </span>
          )}
          <div className="engage-title" onClick={toggleEmployee}>
            <span style={{ fontSize: "1.5rem" }}>
              Employee Experience & Performance
            </span>
            <span style={{ float: "right", paddingRight: ".5rem" }}>
              {" "}
              <FaCaretDown />
            </span>
          </div>
          {employee && (
            <span>
              A strong company culture depends on listening to employees and
              investing in their development. BambooHR offers tools to help you
              gather feedback, strengthen employee satisfaction, and grow your
              people.
            </span>
          )}
        </div>
        <div className="engaging-images">
          {pay && (
            <p>
              <img src={payImage} alt="pay image" />
            </p>
          )}
          {hiring && (
            <p>
              <img src={hiringImage} alt="hiring image" />
            </p>
          )}
          {data && (
            <p>
              <img src={dataImage} alt="data image" />
            </p>
          )}
          {employee && (
            <p>
              <img src={employeeImage} alt="employee image" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
