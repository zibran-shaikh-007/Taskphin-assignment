import Input from "../common/Input";

const Form1 = ({ data, onChange }) => {
  const handleChange = (field) => (e) => {
    onChange(field, e.target.value);
  };

  const { title, name, industry, location, type } = data;

  return (
    <>
      <Input
        label="Job title"
        type="text"
        name="title"
        placeholder="ex. UX UI Designer"
        value={title || ""}
        onChange={handleChange("title")}
      />
      <Input
        label="Company name"
        type="text"
        value={name || ""}
        name="name"
        placeholder="ex. Google"
        onChange={handleChange("name")}
      />
      <Input
        label="Industry"
        type="text"
        name="industry"
        value={industry || ""}
        placeholder="ex. Information Technology"
        onChange={handleChange("industry")}
      />
      <div className="gap-6 inline-flex">
        <Input
          className="w-full"
          label="Location"
          type="text"
          name="location"
          value={location || ""}
          placeholder="ex. Chennai"
          onChange={handleChange("location")}
        />
        <Input
          className="w-full"
          label="Remote type"
          type="text"
          name="type"
          value={type || ""}
          placeholder="ex. In-office"
          onChange={handleChange("type")}
        />
      </div>
    </>
  );
};

export default Form1;
