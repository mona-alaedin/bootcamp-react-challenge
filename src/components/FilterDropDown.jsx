/* eslint-disable react/prop-types */

function FilterDropDown({ options, onChange, children }) {
  return (
    <select onChange={onChange} className="rounded-md outline-none">
      {children}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
  );
}

export default FilterDropDown;
