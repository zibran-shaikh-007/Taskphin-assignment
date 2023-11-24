import React, { useState } from "react";
import Form from "components/common/Form";
import Form1 from "./Form1";
import Form2 from "./Form2";

const steps = [
  {
    title: "Create a job",
    content: Form1,
  },
  {
    title: "Create a job",
    content: Form2,
  },
];

const JobForm = ({ className }) => {
  const [jobs, setJobs] = useState({
    title: "",
    name: "",
    industry: "",
    location: "",
    type: "",
    minExp: "",
    maxExp: "",
    minSalary: "",
    maxSalary: "",
    employee: "",
    application: "",
  });

  const handleSubmit = (formData) => {
    //send formData to the server
    console.log("Submitting data to the server:", formData);
  };

  return (
    <div className={className}>
      <Form
      /* Passing height width as props */
        className="w-max-[577px] h-[564px] p-8 bg-white rounded-[10px] border border-lightgrey flex-col justify-between inline-flex"
        data={jobs}
        steps={steps}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default JobForm;
