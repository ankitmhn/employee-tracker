import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { employerSelector } from "../features/employers/employersViewSlice";

const EmployerDetail = (props) => {
  const employers = useSelector(employerSelector);
  const { name } = useParams();
  console.log(name);
  const selectedEmployer = employers.filter((org) => name === org.orgName);
  console.log(selectedEmployer);
  return (
    <div>
      {selectedEmployer.length === 1 ? (
        <table className="table-auto">
          <thead>
            <tr className="px-4 py-2">
              <th className="px-4 py-2">Month</th>
              <th className="px-4 py-2">Employees</th>
              <th className="px-4 py-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {selectedEmployer[0].employeeList.map((row) => {
              return (
                <tr key={row.month}>
                  <td className="px-4 py-2 border">{row.month}</td>
                  <td className="px-4 py-2 border">
                    {row.list.reduce((acc, curr) => {
                      return acc + " " + curr;
                    }, "")}
                  </td>
                  <td className="px-4 py-2 border">{row.list.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default EmployerDetail;
