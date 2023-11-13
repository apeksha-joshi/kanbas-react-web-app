import React, { useState } from "react";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
      });
      const URL = "http://localhost:4000/a5/assignment";
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end">
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />

          <a href={`${URL}/score/${assignment.score}`}
              className="btn btn-primary me-2 float-end">
              Update Score
          </a>
          <input
              onChange={(e) => setAssignment({
                  ...assignment,
                  score: parseInt(e.target.value)
              })}
              value={assignment.score}
              className="form-control mb-2 w-75"
              type="number" />

          
          <select className="form-select"
            onChange={(e) => setAssignment({...assignment, completed: e.target.value})}>
          <option selected>---Set Status---</option>
            <option value={true}>Done</option>
            <option value={false}>Pending</option>
          </select>
            
          <a href={`${URL}/completed/${assignment.completed}`}
              className="btn btn-primary m-2">
              Update Status
          </a>
          

      <h4>Retrieving Objects</h4>
      <a href={`${URL}`}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${URL}/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;