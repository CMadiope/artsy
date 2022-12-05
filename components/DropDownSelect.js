import React, { useState } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { clothesOptions } from "./Options";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const DropDownSelect = (props) => {
  const [isSelected, setIsSelected] = useState(null);
  const handleChange = (selected) => {
    setIsSelected(selected);
  };

  return (
    <div className="pt-10 pr-2">
      <span data-toggle="popover" data-trigger="focus" data-content="Filter by">
        <ReactSelect
          placeholder="By category"
          options={clothesOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
          }}
          onChange={handleChange}
          allowSelectAll={true}
        />
      </span>
    </div>
  );
};

export default DropDownSelect;
