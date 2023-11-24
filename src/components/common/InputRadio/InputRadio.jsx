import { useEffect, useState } from "react";

const Option = ({ option, selected, onChange }) => {
  const id = `radio--${option.value}`;
  return (
    <>
      <label className="text-placeholder text-sm font-normal gap-1 cursor-pointer inline-flex" htmlFor={id}>
        <input
          id={id}
          type="radio"
          className="hidden"
          checked={selected === option.value}
          onChange={() => onChange(option.value)}
        />
        <span className="w-5 h-5 rounded-full border-2 border-zinc-300 justify-center items-center inline-flex">
          {selected === option.value && <span className="w-3 h-3 bg-primary rounded-full"></span>}
        </span>

        {option.label}
      </label>
    </>
  );
};

const InputRadio = ({ className = "", label, options, onChange, value, align = "horizontal" }) => {
  const [selected, setSelected] = useState();

  const updateSelected = (selectedValue) => {
    setSelected(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  useEffect(() => {
    if (value) {
      updateSelected(value);
    }
  }, [value]);

  return (
    <div className={`${className} flex-col gap-1 inline-flex`}>
      <label className="default-label">{label}</label>
      {/* Position radio vertically or horziontally */}
      <div className={`${align === "horizontal" ? "flex-row items-center gap-4" : "fle-col"} py-2 inline-flex`}>
        {options.map((option) => (
          <Option key={option.value} option={option} selected={selected} onChange={updateSelected} />
        ))}
      </div>
    </div>
  );
};

export default InputRadio;
