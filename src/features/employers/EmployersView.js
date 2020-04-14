import React from "react";
import { useSelector } from "react-redux";
import { employerSelector } from "../employers/employersViewSlice";
import EmployerCard from "../../components/EmployerCard";

const EmployersView = () => {
  const employers = useSelector(employerSelector);
  console.log(employers);

  return employers.map((org) => (
    // console.log(name);
    <EmployerCard
      org={org}
      key={org.orgName}
      onClick={() => console.log(org.orgName)}
    ></EmployerCard>
  ));
};

export default EmployersView;
