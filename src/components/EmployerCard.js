import React from "react";

const EmployerCard = (props) => {
  const calculateStaffStrength = () => {
    const noOfMonths = props.org.employeeList.length - 1;
    //get length of array of the last month
    const currentStaffStrength = props.org.employeeList[noOfMonths].list.length;
    console.log(currentStaffStrength);
    return currentStaffStrength;
  };
  return (
    <div className="shadow-lg m-4 p-2 max-w-sm" onClick={props.onClick}>
      {props.org.orgName}
      <div>{calculateStaffStrength()}</div>
    </div>
  );
};

export default EmployerCard;
