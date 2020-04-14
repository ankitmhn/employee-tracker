import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { employerSelector } from "../employers/employersViewSlice";
import EmployerCard from "../../components/EmployerCard";

const EmployersView = () => {
  const employers = useSelector(employerSelector);
  let history = useHistory();

  console.log(employers);
  const onHandleClick = (name) => {
    console.log();
    history.push(`/org/${name}`);
  };
  return employers.map((org) => (
    // console.log(name);
    <EmployerCard
      org={org}
      key={org.orgName}
      onClick={() => {
        onHandleClick(org.orgName);
      }}
    ></EmployerCard>
  ));
};

export default EmployersView;
