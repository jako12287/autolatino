const CustomSelect = ({ options = [], name = "default" }) => {
  return (
    <select name={name}>
      {options.map(({ id, label, value }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
