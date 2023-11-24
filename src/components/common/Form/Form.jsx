import React, { useState } from "react";
import Button from "../Button";

const Form = ({ className, data, steps, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(data || {}); // Maintain state in parent and send as props to reusable form

  const isLastStep = step === steps.length;
  const CurrentFormStep = steps[step - 1];

  const handleNext = () => {
    isLastStep ? onSubmit(formData) : setStep(step + 1);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className={className}>
      <div className="w-full flex-col gap-6 inline-flex">
        {/* header and steps */}
        <div className="text-dark1 justify-between items-center inline-flex">
          <h3 className="text-xl font-normal">{CurrentFormStep.title}</h3>
          <span className="text-base font-medium">{`Step ${step}`}</span>
        </div>
        <CurrentFormStep.content data={formData} onChange={handleChange} />
      </div>

      <Button className="btn-primary self-end" onClick={handleNext}>
        {isLastStep ? "Save" : "Next"}
      </Button>
    </div>
  );
};

export default Form;
