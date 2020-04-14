import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { employerSelector } from "../features/employers/employersViewSlice";

const EmployerDetail = (props) => {
  const employers = useSelector(employerSelector);
  const history = useHistory();
  const { name } = useParams();
  console.log(name);
  const selectedEmployer = employers.filter((org) => name === org.orgName);
  return (
    <div>
      <p>
        {selectedEmployer ? JSON.stringify(selectedEmployer) : "Loading..."}
      </p>
    </div>
  );
};

export default EmployerDetail;
