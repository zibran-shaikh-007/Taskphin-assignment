const Input = ({
  key,
  name,
  label,
  id,
  value,
  placeholder,
  onChange,
  onClick,
  type,
  onFocus,
  onBlur,
  min,
  max,
  step,
  accept,
  maxLength,
  disabled,
  readOnly,
  defaultChecked,
  onChangeValue,
  /* In case no class provided */
  inputClass = "default-input",
  labelClass = "default-label",
  className = "",
}) => {
  let input = (
    <input
      key={key}
      id={id}
      name={name}
      className={inputClass}
      defaultValue={value}
      value={onChangeValue}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      min={min}
      max={max}
      disabled={disabled}
      readOnly={readOnly}
      checked={value}
      defaultChecked={defaultChecked}
    />
  );

  return (
    /* Different class for label and input so its easy to change label or input styling */

    <div className={`${className} flex-col gap-1 inline-flex`}>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}
      {input}
    </div>
  );
};

export default Input;
