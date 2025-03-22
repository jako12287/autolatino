const CustomLabel = ({label = "label", isRequired = false, name = ""}) => {
  return (
    <label htmlFor={name} className="flex gap-3">
      <div>{label}</div>
      {isRequired && <div className="is-required">*</div>}
    </label>
  );
};

export default CustomLabel;
