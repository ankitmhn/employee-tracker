import React from "react";
import { useSelector } from "react-redux";
// import { employerSelector } from "./employersViewSlice";

const EmployersView = () => {
  const employers = useSelector((state) => {
    const list = [];
    for (const org in state.employers.orgs) list.push(org);
    return list;
  });

  return employers.map((name) => {
    // console.log(name);
    return <h3 key={name}>{name}</h3>;
  });
};

export default EmployersView;
