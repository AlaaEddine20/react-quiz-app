import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const history = useHistory();

  // INPUT HANDLER
  const { register, handleSubmit, errors } = useForm();

  const sendName = async (body) => {
    console.log("Sending data...");
    try {
      const response = await fetch("http://localhost:5050/exams/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        history.push("/quiz/" + data._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (values) => {
    console.log(values);

    sendName(values);
  };
  return (
    <div id="start-pg">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Candidate Name</h2>
        <input
          type="text"
          ref={register({ required: true })}
          name="candidateName"
        />
        {errors.candidateName && (
          <span style={{ color: "red" }}>Candidate Name is Required!</span>
        )}
        {/* <Link to="/quiz"> */}
        <input type="submit" />
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Start;
