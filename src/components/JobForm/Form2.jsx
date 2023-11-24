import Input from "components/common/Input";
import InputRadio from "components/common/InputRadio";

const Form2 = ({ data, onChange }) => {
    const handleChange = (field) => (e) => {
      onChange(field, e.target.value);
    };
  
    const { minExp, maxExp, minSalary, maxSalary, employee } = data;
  
    return (
      <>
        <div className="items-end gap-6 inline-flex">
          <Input
            className="w-full"
            min={0}
            label="Experience"
            type="number"
            name="minExp"
            value={minExp || ""}
            placeholder="Minimum"
            onChange={handleChange("minExp")}
          />
          <Input
            className="w-full"
            type="number"
            name="type"
            value={maxExp || ""}
            placeholder="Maximum"
            onChange={handleChange("maxExp")}
          />
        </div>
        <div className="items-end gap-6 inline-flex">
          <Input
            className="w-full"
            label="Salary"
            type="number"
            name="minSalary"
            value={minSalary || ""}
            placeholder="Minimum"
            onChange={handleChange("minSalary")}
          />
          <Input
            className="w-full"
            type="number"
            name="maxSalary"
            value={maxSalary || ""}
            placeholder="Maximum"
            onChange={handleChange("maxSalary")}
          />
        </div>
        <Input
          label="Total employee"
          type="text"
          name="employee"
          value={employee || ""}
          placeholder="ex. 100"
          onChange={handleChange("employee")}
        />
        <div className="flex-col gap-1 inline-flex">
          <InputRadio
            className="w-full"
            label="Apply type"
            options={[
              { label: "Quick apply", value: 1 },
              { label: "External apply", value: 2 },
            ]}
            onChange={(v) => console.log("v", v)}
          />
        </div>
      </>
    );
  };

  export default Form2;